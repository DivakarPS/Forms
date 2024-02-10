import './ItemList.css';
import React from 'react';

import Item from "../Item/Item";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { showError } from '../../../Utils/ShowToasts';

function ItemList({ shoppingItems, addQuantity, removeQuantity }) {

  return (
    <div className="shopping-items-wrapper">
        {
            shoppingItems && shoppingItems.map( item => {
                console.log("quantity is:", item.quantity)
                return (
                    <div key={item.id} className='items-list'>
                        <div 
                            className='change-quantity add-item'
                            onClick={() => addQuantity(item.id)}
                        >
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                        <Item 
                            itemName = {item.name}
                            quantity={item.quantity}
                        />
                        <div 
                            className='change-quantity remove-item'
                            onClick={() => {
                                if(item.quantity == 1)
                                    showError(`${item.name} removed from the list`,{
                                        position: "top-right"
                                    })
                                removeQuantity(item.id)
                            }}
                        >
                            <FontAwesomeIcon icon={faMinus} />
                        </div>
                        
                    </div>
                )
            } )
        }


    </div>
  );
}

export default React.memo(ItemList);