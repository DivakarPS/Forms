import './InputItem.css';
import 'react-toastify/dist/ReactToastify.css';


import { useState } from 'react';
import { v4 as uuid } from 'uuid'

import { showSuccess, showError } from '../../../Utils/ShowToasts.jsx';
import { useForm } from 'react-hook-form'



function InputItem({addShoppingItem}){

    const [itemName, setItemName] = useState('')
    const { register, handleSubmit } = useForm()

    function handleFormSubmission(data){
        // e.preventDefault();
        // showSuccess("Successfully added Item!")
        // addShoppingItem({id: uuid(), name: itemName, quantity: 1})
        // setItemName('')

        console.log(data);
        
    }
    console.log({ ... register('item', { required: true, minLength: 3 })});
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
        </div>
    )
}

export default InputItem; 