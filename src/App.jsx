import './App.css';
import ExpenseCategory from './components/ExpenseCategory';
import Button from "./components/Button";
import { useState } from 'react';

/**
 * TODO: 
 *  - Fix update handlers to update the information of an item (DONE)
 *    - DONE: If you add a new item and update the new item it will not replace but add another entry and gets rid of the other category
 *           But only when it goes over the number of things in that category
 *            OK: Delete floss -> add something -> update something
 *            NOT OK -> Add something -> update something
 *  - "Automatically" add a category when a new category is being added along with the item (DONE)
 *  - Be able to update category names
 *  - Be able to delete category names when there are no more items under that category 
 * 
 */

const dummyCategories = ["misc", "fun"]

const dummyItems = [
  {
    "purchaseItem": "floss",
    "purchaseAmount": "5.00",
    "purchaseDate": "06/08/2024",
    "budgetCategory": "misc"
  },
  {
    "purchaseItem": "toothpaste",
    "purchaseAmount": "10.00",
    "purchaseDate": "06/08/2024",
    "budgetCategory": "misc"
  },
  {
    "purchaseItem": "genshin",
    "purchaseAmount": "20.00",
    "purchaseDate": "06/08/2024",
    "budgetCategory": "fun"
  }
]

function App() {

  const [isOpenInput, setOpenInput] = useState(false);
  const [newItem, setNewItem] = useState({
    "purchaseItem": "",
    "purchaseAmount": "",
    "purchaseDate": "",
    "budgetCategory": ""
  });
  const [items, setItems] = useState(dummyItems);
  const [categories, setCategories] = useState(dummyCategories)

  const addOnclick = () => {
    setOpenInput(true);

  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setOpenInput(false)
    setItems((prevItems) => [...prevItems, newItem])
    if(categories.indexOf(newItem.budgetCategory) === -1) setCategories((prevItems) => [...prevItems, newItem.budgetCategory] )  
    setNewItem({
      "purchaseItem": "",
      "purchaseAmount": "",
      "purchaseDate": "",
      "budgetCategory": ""
    })

  }

  const handleNewItemInput = (event) => {
    event.preventDefault();
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
          <label>Purchased Amount:  <input name="purchaseAmount" value={newItem.purchaseAmount} onChange={handleNewItemInput} /></label>
          <label>Purchased Date:  <input name="purchaseDate" value={newItem.purchaseDate} onChange={handleNewItemInput} /></label>
          <label>Purchased Category:  <input name="budgetCategory" value={newItem.budgetCategory} onChange={handleNewItemInput} /></label>
          <button type='submit' value='Submit'>Submit</button>
        </form>
      }
      {categories.map((category, index) =>
        <ExpenseCategory
          items={items}
          category={category}
          setItems={setItems}
        />)}
      <div className="additm-container">

      </div>
    </div>
  );
}

export default App;
