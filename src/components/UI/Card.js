import React from "react";

import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; 
  // using const clasess to recieve classes from ExpenseItem && Expenses through props

  // console.log(props.className);

  return (
    <div className={classes}>{props.children}</div>
  );
}

export default Card;