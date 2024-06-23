import React from "react";
import { useState } from 'react';
import './ExpenseItem.css'
import Button from "./Button";


const ExpenseItem = ({ item,index, handleOnclickDelete, handleUpdateItems }) => {
    const { purchaseItem, purchaseAmount, purchaseDate, budgetCategory } = item;
    const [updatedItem, setUpdatedItem] = useState(item)
    const [isUpdate, setOpenInput] = useState(false);
   
    const handleOnclickUpdate = (item) => {
        setOpenInput(true)
    }


    const handleUpdateItem = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        setUpdatedItem((prevItem) => ({
            ...prevItem,
            [name]:value
        }))

    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        setOpenInput(false)
        handleUpdateItems(updatedItem, index);
        
    }

    return (
        <>
            {!isUpdate &&
                <div className="expense-item-container">
                    <span className="expense-item">{purchaseItem}</span>
                    <span className="expense-item">${purchaseAmount}</span>
                    <span className="expense-item">{purchaseDate}</span>


                    <span className="expense-item">
                        <Button name="Update" colorClass="btn-update" onClick={handleOnclickUpdate} />
                    </span>
                    <span className="expense-item">
                        <Button name="Delete" colorClass="btn-delete" onClick={handleOnclickDelete} />
                    </span>

                </div>

            }
            {isUpdate &&
                <form onSubmit={handleOnSubmit}>
                    <label>Purchased Item:  <input name="purchaseItem" value={updatedItem.purchaseItem} onChange={handleUpdateItem} /></label>
                    <label>Purchased Amount:  <input name="purchaseAmount" value={updatedItem.purchaseAmount} onChange={handleUpdateItem} /></label>
                    <label>Purchased Date:  <input name="purchaseDate" value={updatedItem.purchaseDate} onChange={handleUpdateItem} /></label>
                    <label>Purchased Category:  <input name="budgetCategory" value={updatedItem.budgetCategory} onChange={handleUpdateItem} /></label>
                    <button type='submit' value='Submit'>Submit</button>
                </form>
            }


        </>




    )
}

export default ExpenseItem;
