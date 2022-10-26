import React, { useState } from "react";
import ExpensesItem from "./ExpensesItem";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const expensesYear = (selectedYear) => {
    setYear(selectedYear);
  };

  return (
    <div className="expenses-container">
      <ExpenseFilter onExpenseYear={expensesYear} selected={expensesYear} />
      {props.expenses.map((expense) => (
        <ExpensesItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default Expenses;
