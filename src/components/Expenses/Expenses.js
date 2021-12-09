import React from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem 
        title={props.elements[0].title}
        amount={props.elements[0].amount}
        date={props.elements[0].date}
      />
      <ExpenseItem 
        title={props.elements[1].title}
        amount={props.elements[1].amount}
        date={props.elements[1].date}
      />
      <ExpenseItem 
        title={props.elements[2].title}
        amount={props.elements[2].amount}
        date={props.elements[2].date}
      />
      <ExpenseItem 
        title={props.elements[3].title}
        amount={props.elements[3].amount}
        date={props.elements[3].date}
      />
    </Card>
  );
}

export default Expenses;