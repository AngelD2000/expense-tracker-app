import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpenseCategory.css'

const ExpenseCategory = ({ items, category }) => {
    const filteredItems = items.filter(items => items.budgetCategory === category)
    if (!filteredItems.length) return null;

    return (
        <div className="expense-category">
            <h2 className="expense-title">{category}</h2>
            <div className="expense-header">
                <span className="expense-item-title">Item</span>
                <span className="expense-item-title">Amount</span>
                <span className="expense-item-title">Date</span>
            </div>
            {filteredItems.map((item, index) => {
                if (category === item.budgetCategory) {
                    return <ExpenseItem
                        item={item.purchaseItem}
                        amount={item.purhcaseAmount}
                        date={item.purhcaseDate}
                    />
                }
            })}
        </div>
    )
}

export default ExpenseCategory;