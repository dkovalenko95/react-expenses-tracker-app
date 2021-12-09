import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css"

function ExpenseItem(props) {

  // here in ExpanseItem comp we use "props" to receive data from App(expenses array), then we pass the data(specifically "date") to ExpanseDate via ExpenseItem through props; 
  // in other words - from App to ExpenseDate through ExpenseItem using "props"! ---> from parent to child!

  console.log(props.date); /* --> shows exact expenses array from App.js */

  const clickHandler = () => {
    console.log("Clicked!!!!!!")
  }

  return (
    <Card className="expense-item">

      <ExpenseDate date={props.date}/>

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>

      {/* add event listening - execute with special props start with "on", "on" props are like event handlers; in curly braces we point on func that need to execute */}
      <button onClick={clickHandler}>Change title!</button>

  </Card>
  );
};

export default ExpenseItem;


// "Props" concept that helps to pass/share data from one component to another by adding a attribute; 
// "props" make components reusable. We can set properties(props) of our own custom components.