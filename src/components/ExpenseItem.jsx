import React from "react";
import './ExpenseItem.css'
import Button from "./Button";


const ExpenseItem = ({ item, amount, date }) => {
    return (
        <div className="expense-item-container">
            <span className="expense-item">{item}</span>
            <span className="expense-item">${amount}</span>
            <span className="expense-item">{date}</span>
            <span className="expense-item">
                <Button name="Update" colorClass="btn-update"/> 
            </span>
            <span className="expense-item">
                <Button name="Delete" colorClass="btn-delete" />
            </span>
        </div>
    )
}

export default ExpenseItem;