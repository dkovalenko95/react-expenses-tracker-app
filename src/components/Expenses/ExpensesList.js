import React from "react";

import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css"

function ExpensesList(props) {

  // rendering CONDITIONAL content
  if (props.expensesItems.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses found.</h2>
  }
  // console.log(props.expensesItems)

  return (
    <ul className="expenses-list">
      {props.expensesItems.map((expenseElem) => (
        <ExpenseItem
          key={expenseElem.id} /* key - is a prop, some sort of identifier */
          title={expenseElem.title}
          amount={expenseElem.amount}
          date={expenseElem.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;