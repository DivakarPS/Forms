import './InputItem.css';
import 'react-toastify/dist/ReactToastify.css';

import { showSuccess, showError } from '../../../Utils/ShowToasts.jsx';

function InputItem(){
    return (
        <div className="item-input-wrapper">
            <input
                className="item-input" 
                type="text" 
                placeholder="Add An Item..."
            />
            <button 
                className="add-item-button"
                onClick={() => showSuccess("Successfully added Item!")}
            >
                Add +
            </button>
        </div>
    )
}

export default InputItem; 