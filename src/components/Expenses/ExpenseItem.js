import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css"

function ExpenseItem(props) {
  console.log(props.date); /* --> shows exact expenses array from App.js */

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!!!");
    // by calling setTile func, we're telling React that we wanna assign a new value to this state. And that then also tells React that the component in which this staid was registered with useState should be re-evaluated. And therefore React will go ahead and execute this component function again, and therefore also evaluate this JSX code again.
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

// PROPS
// "Props" concept that helps to pass/share data from one component to another by adding a attribute; 
// "props" make components reusable. We can set properties(props) of our own custom components.
// here in ExpanseItem comp we use "props" to receive data from App(expenses array), then we pass the data(specifically "date") to ExpanseDate via ExpenseItem through props; 
// in other words - from App to ExpenseDate through ExpenseItem using "props"! ---> from parent to child!


// USESTATE
// useState is called React hook(type of function) - allows us to define values as state where changes to these values should reflect in the component function being called again, which is a key difference to the regular variable we're using here.
// State is a plain JavaScript object used by React to represent an information about the component’s current situation.
// It’s managed in the component(inside it), just like any variable declared in a function. Can't be called outside of the funcs or inside any nested funcs. 
// The difference is while a “normal” variable “disappears” when their function exits, the state variables are preserved by React.
// All these React hooks are recognized by the fact that they start with the word "use" and all these funcs must only be called inside of React component funcs(shouldn't be called in any nested funcs) ... there is one exeption that will be sooner
// useState always returns an array with exactly two elements: 1st elem - current state value, 2nd elem - is a func for updating that


// Add event listening - execute with special props start with "on", "on" props are like event handlers; in curly braces we point on func that need to execute ---> <button onClick={clickHandler}>Change title!</button>

