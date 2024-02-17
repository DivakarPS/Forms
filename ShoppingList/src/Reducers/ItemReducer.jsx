function ItemReducer(shoppingItems, actions){
    if(actions.type == "add_item"){
        return [...shoppingItems, actions.item]
    }else if(actions.type == "increment_item"){
        const newShoppingItems = shoppingItems.map( item => {
            if(item.id === actions.itemId){
                item.quantity += 1
            }
            return item;
          }
        )
        return [...newShoppingItems];
    }else if(actions.type == "decrement_item"){
        let newShoppingItems = shoppingItems.map( item => {
            if(item.id === actions.itemId){
                item.quantity -= 1
            }
            return item;
        })
        newShoppingItems = newShoppingItems.filter( item => item.quantity > 0)
        return newShoppingItems;
    }

}

export default ItemReducer;