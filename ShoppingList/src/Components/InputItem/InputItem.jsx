import './InputItem.css';
import 'react-toastify/dist/ReactToastify.css';


import { useState } from 'react';
import { v4 as uuid } from 'uuid'

import { showSuccess, showError } from '../../../Utils/ShowToasts.jsx';


function InputItem({addShoppingItem}){

    const [itemName, setItemName] = useState('')

    return (
        <div className="item-input-wrapper">
            <input
                className="item-input" 
                type="text" 
                placeholder="Add An Item..."
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
            />
            <button 
                className="add-item-button"
                onClick={() => {
                        showSuccess("Successfully added Item!")
                        addShoppingItem({id: uuid(), name: itemName, quantity: 1})
                        setItemName('')
                    }
                }
            >
                Add +
            </button>
        </div>
    )
}

export default InputItem; 