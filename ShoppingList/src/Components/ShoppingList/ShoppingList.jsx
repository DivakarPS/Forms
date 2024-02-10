import './ShoppingList.css'

import Header from "../Header/Header";
import InputItem from "../InputItem/InputItem";
import ItemList from '../ItemList/ItemList';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';

const shoppingItems = [
    { id:'1', name:'Apples', quantity: 2 },
    { id:'2', name:'Rice', quantity: 1 }
]


function ShoppingList() {

    const [shoppingItems, setShoppingItems] = useState([])

    function addShoppingItem(item){
        setShoppingItems([...shoppingItems, item])
        console.log(shoppingItems)
    }

    function handleAddQuantity(itemId){
        const newShoppingItems = shoppingItems.map( item => {
            if(item.id === itemId){
                item.quantity += 1
            }
            return item;
          }
        )
        setShoppingItems([...newShoppingItems])
    }

    function handleRemoveQuantity(itemId){
        let newShoppingItems = shoppingItems.map( item => {
            if(item.id === itemId){
                item.quantity -= 1
            }
            return item;
        })
        newShoppingItems = newShoppingItems.filter( item => item.quantity > 0)
        setShoppingItems([...newShoppingItems])
    }

    return (
        <>
            <ToastContainer/>
            <Header />
            <div className="current-shopping-list">
                <InputItem addShoppingItem={addShoppingItem}/>
                <ItemList 
                    shoppingItems={shoppingItems}
                    addQuantity={handleAddQuantity}
                    removeQuantity={handleRemoveQuantity}
                />
            </div>
        </>
    )
}

export default ShoppingList;