import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css"

function ExpenseItem(props) {

  // here in ExpanseItem comp we use "props" to receive data from App(expenses array), then we pass the data(specifically "date") to ExpanseDate via ExpenseItem through props; 
  // in other words - from App to ExpenseDate through ExpenseItem using "props"! ---> from parent to child!

  console.log(props.date); /* --> shows exact expenses array from App.js */

  return (<div className="expense-item">

    <ExpenseDate date={props.date}/>

    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  </div>
  );
};

export default ExpenseItem;


// "Props" concept that helps to pass/share data from one component to another by adding a attribute; 
// "props" make components reusable. We can set properties(props) of our own custom components.