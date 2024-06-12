import './App.css';
import ExpenseCategory from './components/ExpenseCategory';
import Button from "./components/Button";

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
  const addOnclick = () => {
    console.log("Add is clicked!")

  }
  return (

    <div className="App">
      <h1>Expense Tracker</h1>
      {categories.map((category, index) =>
        <ExpenseCategory
          items={dummyItems}
          category={category}
        />)}
      <div className="additm-container">
        <Button name="Add Item" colorClass={"btn-add"} onClick={addOnclick} />
      </div>
    </div>
  );
}

export default App;
