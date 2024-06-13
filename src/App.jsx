import './App.css';
import ExpenseCategory from './components/ExpenseCategory';
import Button from "./components/Button";
import { useState } from 'react';

const categories = ["misc", "fun"]

const dummyItems = [
  {
    "purchaseItem": "floss",
    "purhcaseAmount": "5.00",
    "purhcaseDate": "06/08/2024",
    "budgetCategory": "misc"
  },
  {
    "purchaseItem": "toothpaste",
    "purhcaseAmount": "10.00",
    "purhcaseDate": "06/08/2024",
    "budgetCategory": "misc"
  },
  {
    "purchaseItem": "genshin",
    "purhcaseAmount": "20.00",
    "purhcaseDate": "06/08/2024",
    "budgetCategory": "fun"
  }
]

function App() {

  const [isOpenInput, setOpenInput] = useState(false);
  const [newItem, setNewItem] = useState({
    "purchaseItem": "",
    "purhcaseAmount": "",
    "purhcaseDate": "",
    "budgetCategory": ""
  })

  const addOnclick = () => {
    console.log("Add is clicked!")
    setOpenInput(true);

  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log("Onsubmit clicked!")
    setOpenInput(false)
    setNewItem(...dummyItems, newItem)

  }
  return (

    <div className="App">
      <h1>Expense Tracker</h1>
      {!isOpenInput && <Button name="Add Item" colorClass={"btn-add"} onClick={addOnclick} />}

      {isOpenInput &&
      <form onSubmit={handleOnSubmit}>
        <label>Purchased Item:  <input name="item" value={newItem.purchaseItem} /></label>
        <label>Purchased Amount:  <input name="amount" value={newItem.purhcaseAmount} /></label>
        <label>Purchased Date:  <input name="date" value={newItem.purhcaseDate} /></label>
        <label>Purchased Category:  <input name="category" value={newItem.budgetCategory} /></label>
        <button type='submit' value='Submit'>Submit</button> 
      </form>   
      }
      {categories.map((category, index) =>
        <ExpenseCategory
          items={dummyItems}
          category={category}
        />)}
      <div className="additm-container">

      </div>
    </div>
  );
}

export default App;
