import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css"

function ExpenseItem(props) {
  // console.log(props.date); /* --> shows exact expenses array from App.js */

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!!!");
    // by calling setTitle func, we're telling React that we wanna assign a new value to this state. And that then also tells React that the component in which this staid was registered with useState should be re-evaluated. And therefore React will go ahead and execute this component function again, and therefore also evaluate this JSX code again.
    console.log(title);
  }

  return (
    <Card className="expense-item">

      <ExpenseDate date={props.date}/>

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>

      <button onClick={clickHandler}>Change title!</button>
  </Card>
  );
};

export default ExpenseItem;