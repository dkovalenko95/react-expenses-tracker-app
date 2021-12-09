import React from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, /* --> "enteredExpenseData" is a value that contains in expenseFormData from ExpenseForm */ 
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData); /* --> same concept as in ExpenseForm comp(line 33) */

    console.log(expenseData);
    console.log(enteredExpenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;