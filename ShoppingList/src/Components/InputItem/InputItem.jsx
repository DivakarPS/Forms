import './InputItem.css';
import 'react-toastify/dist/ReactToastify.css';

import { shoppingDispatchContext } from '../../../Providers/ShoppingContext';


import { useContext, useState } from 'react';
import { v4 as uuid } from 'uuid'

import { showSuccess, showError } from '../../../Utils/ShowToasts.jsx';
import { useForm } from 'react-hook-form'



function InputItem({addShoppingItem}){

    //import error from useForm()
    const { register, handleSubmit, formState:{error} } = useForm()

    const  dispatch  = useContext(shoppingDispatchContext)

    function handleFormSubmission(data){

        console.log(data);
        dispatch({
            type: "add_item",
            item: {id: uuid(), name: data.item, quantity: 1}
        })
        showSuccess("Successfully added Item!")
    }
    // console.log({ ... register('item', { required: true, minLength: 3 })});
    return (
        <div className="item-input-wrapper">
            <form onSubmit={handleSubmit(handleFormSubmission)}>
                <input
                    className="item-input" 
                    type="text" 
                    placeholder="Add An Item..."
                    // value={itemName}
                    name="item"
                    // onChange={(e) => setItemName(e.target.value)}
                    { ... register('item', { required: true, minLength: 3 })}
                />
                <button className="add-item-button">
                    Add +
                </button>
            </form>
            {
                (error && error.item?.type === "required") && <p className="error-message">Item is required</p>
            }
            {
                (error && error.item?.type === "minLength") && <p className="error-message">Item should be at least 3 characters</p>
            }
        </div>
    )
}

export default InputItem; 