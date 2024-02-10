import './ItemList.css';

import Item from "../Item/Item";

function ItemList({ shoppingItems }) {
  return (
    <div className="shopping-items-wrapper">
        {
            shoppingItems && shoppingItems.map( item => {
                console.log("quantity is:", item.quantity)
                return (
                    <Item 
                        itemName = {item.name}
                        key={item.id}
                        quantity={item.quantity}
                    />
                )
            } )
        }


    </div>
  );
}

export default ItemList;