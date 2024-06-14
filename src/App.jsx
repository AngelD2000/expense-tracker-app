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
  });
  const [items, setItems] = useState(dummyItems);

  const addOnclick = () => {
    console.log("Add is clicked!")
    setOpenInput(true);

  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log("Onsubmit clicked!")
    setOpenInput(false)
    console.log("newItem: " + newItem)
    setItems((prevItems) => [...prevItems, newItem])
    console.log(items)
    setNewItem({
      "purchaseItem": "",
      "purhcaseAmount": "",
      "purhcaseDate": "",
      "budgetCategory": ""
    })

  }

  const handleNewItemInput = (event) => {
    event.preventDefault();
    console.log("handleNewItemInput")
    const { name, value } = event.target
    setNewItem((prevItem) => ({
      ...prevItem,
      [name]: value
    }));
  }
  return (

    <div className="App">
      <h1>Expense Tracker</h1>
      {!isOpenInput && <Button name="Add Item" colorClass={"btn-add"} onClick={addOnclick} />}

      {isOpenInput &&
        <form onSubmit={handleOnSubmit}>
          <label>Purchased Item:  <input name="purchaseItem" value={newItem.purchaseItem} onChange={handleNewItemInput} /></label>
          <label>Purchased Amount:  <input name="purhcaseAmount" value={newItem.purhcaseAmount} onChange={handleNewItemInput} /></label>
          <label>Purchased Date:  <input name="purhcaseDate" value={newItem.purhcaseDate} onChange={handleNewItemInput} /></label>
          <label>Purchased Category:  <input name="budgetCategory" value={newItem.budgetCategory} onChange={handleNewItemInput} /></label>
          <button type='submit' value='Submit'>Submit</button>
        </form>
      }
      {categories.map((category, index) =>
        <ExpenseCategory
          items={items}
          category={category}
        />)}
      <div className="additm-container">

      </div>
    </div>
  );
}

export default App;
