import {useState} from 'react';
import ExpensesDate from "./ExpensesDate";
import "./ExpensesItem.css";
import Card from '../UI/Card';

function ExpensesItem(props) {
  const [title, setTitle] = useState(props.title); // React Hooks : can be recognized by the name use

  // Event Handler
  const clickHandler = ()=>{
    setTitle("Updated!!");
  }

  return (
    <div>
    <Card className="flex-box">
      <ExpensesDate date={props.date} />
      <div className="expense-title">{title}</div>
      <Card className="expense-amount">${props.amount}</Card>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
    </div>
  );
}

export default ExpensesItem;
