import { useState } from 'react';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseFilter from './components/Expenses/ExpenseFilter';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet',
    amount: 29.3,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'Car Insurance',
    amount: 50.3,
    date: new Date(2021, 8, 28),
  },
  {
    id: 'e3',
    title: 'New TV',
    amount: 729.3,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e4',
    title: 'Food',
    amount: 58.3,
    date: new Date(2022, 10, 18),
  }
]

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  console.log(expenses)
  
  const addExpenseHandler = (expenseData) =>{
    setExpenses((prevExpenses)=>{
      return [expenseData, ...prevExpenses];
    })
    console.log(expenses);
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
