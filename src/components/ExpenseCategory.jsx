import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpenseCategory.css'

const ExpenseCategory = ({ items, category, setItems }) => {

    const filteredItems = items.filter(items => items.budgetCategory === category)
    if (!filteredItems.length) return null;

    const handleOnclickDelete = (item) => {
        const newItemList = items.filter((itm) => itm !== item)
        setItems(newItemList)
    }

    const handleUpdateItems = (updatedItem, index) => {
        const originalIndex = items.findIndex((item) => item.purchaseItem === updatedItem.purchaseItem)
        console.log(updatedItem)
        console.log(originalIndex)
        console.log(index)
        setItems((prevItem) => prevItem.map((itm, itmIndex)=> originalIndex === itmIndex ? updatedItem : itm))
    }



    return (
        <div className="expense-category">
            <h2 className="expense-title">{category}</h2>
            <div className="expense-header">
                <span className="expense-item-title">Purchase Item</span>
                <span className="expense-item-title">Purchase Amount</span>
                <span className="expense-item-title">Purchase Date</span>
            </div>
            {
                filteredItems.map((item, index) => {
                    return <ExpenseItem
                        item={item}
                        index={index}
                        handleOnclickDelete={() => handleOnclickDelete(item)}
                        handleUpdateItems={handleUpdateItems}

                    />
                })
            }

        </div>
    )
}

export default ExpenseCategory;