import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  // 3 SEPARATE STATES
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault(); /* --> method to cancel web-page reloading after form submit */
    const expenseFormData ={
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    props.onSaveExpenseData(expenseFormData); /* --> func executing in this(ExpenseForm) comp via props(works like pointer in NewExpense and through props passing func here) from NewExpense comp; from child to parent */

    console.log(expenseFormData);

    // form reset
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" 
            onChange={titleChangeHandler} 
            value={enteredTitle} /* --> form reset by using two-way binding*/
          /> 
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" 
            min="0.01" 
            step="0.01" 
            onChange={amountChangeHandler} 
            value={enteredAmount} /* --> form reset by using two-way binding*/
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" 
            min="2019-01-01" 
            max="2022-12-31" 
            onChange={dateChangeHandler} 
            value={enteredDate} /* --> form reset by using two-way binding*/
          />
        </div>
      </div>
      <div className="new-expense__actions">

        <button type="submit">Add Expense</button>
        <button type="button" onClick={props.onCancelForm}>Cancel</button>

      </div>
    </form>
  );
};

export default ExpenseForm;