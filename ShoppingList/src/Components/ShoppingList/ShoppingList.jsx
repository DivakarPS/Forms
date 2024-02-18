import './ShoppingList.css'

import { shoppingItemsContext, shoppingDispatchContext } from '../../../Providers/ShoppingContext';

import Header from "../Header/Header";
import InputItem from "../InputItem/InputItem";
import ItemList from '../ItemList/ItemList';
import { ToastContainer } from 'react-toastify';
import { useState, useReducer } from 'react';
import ItemReducer from '../../Reducers/ItemReducer';



const shoppingItems = [
    { id:'1', name:'Apples', quantity: 2 },
    { id:'2', name:'Rice', quantity: 1 }
]


function ShoppingList() {

    // const [shoppingItems, setShoppingItems] = useState([])
    const [shoppingItems, dispatch] = useReducer(ItemReducer, []);

    function addShoppingItem(item){
        dispatch({
            type: "add_item",
            item
        })
    }

    function handleAddQuantity(itemId){
        dispatch({
            type:"increment_item",
            itemId
        })
    }

    function handleRemoveQuantity(itemId){
        dispatch({
            type:"decrement_item",
            itemId
        })
    }

    return (
        <>
            <shoppingItemsContext.Provider value={shoppingItems}>
                <shoppingDispatchContext.Provider value={dispatch}>
                    <ToastContainer/>
                    <Header />
                    <div className="current-shopping-list">
                        <InputItem addShoppingItem={addShoppingItem}/>
                        <ItemList 
                            addQuantity={handleAddQuantity}
                            removeQuantity={handleRemoveQuantity}
                        />
                    </div>
                </shoppingDispatchContext.Provider>
            </shoppingItemsContext.Provider>
        </>
    )
}

export default ShoppingList;