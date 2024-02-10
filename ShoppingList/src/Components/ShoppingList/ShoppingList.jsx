import './ShoppingList.css'

import Header from "../Header/Header";
import InputItem from "../InputItem/InputItem";
import ItemList from '../ItemList/ItemList';
import { ToastContainer } from 'react-toastify';

const shoppingItems = [
    { id:'1', name:'Apples', quantity: 2 },
    { id:'2', name:'Rice', quantity: 1 }
]


function ShoppingList() {
    return (
        <>
            <ToastContainer/>
            <Header />
            <div className="current-shopping-list">
                <InputItem />
                <ItemList shoppingItems={shoppingItems}/>
            </div>
        </>
    )
}

export default ShoppingList;