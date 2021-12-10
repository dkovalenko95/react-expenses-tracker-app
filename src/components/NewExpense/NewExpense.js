import React from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, /* --> "enteredExpenseData" is a value that contains in expenseFormData from ExpenseForm */ 
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData); /* --> same concept as in ExpenseForm comp(line 33); there also a concept named "LIFTING-STATE-UP" - we're lifting up "expenseData" to the App.js comp, so after we could pass it to Expense comp; LIFTING-STATE-UP - moving data from child comp to some parent comp to to either use it there or to then pass it down to some other child comp. */

    // console.log(expenseData);
    // console.log(enteredExpenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;