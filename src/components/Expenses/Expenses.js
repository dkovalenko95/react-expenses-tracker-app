import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";


function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2021");

  const checkFilterHandler = (settedYear) => {
    setSelectedYear(settedYear)

    console.log(selectedYear);
    console.log(settedYear); // settedYear is a parameter we recieved from filter values
  }

  return (
    <Card className="expenses">

      <ExpensesFilter onCheckFilter={checkFilterHandler} selectedValue={selectedYear} />
       {/* ExpensesFilter is a controlled component --> whenever we use two-way binding - we are controlling component --> the value which we used in component, like the value we selected in dropdown in ExpenseFilter.js(select tag) is passed on to a parent(from ExpensesFilter to Expenses) component through props and is recieved from the parent component
      
      --- ExpensesFilter just represents the dropdown and then attaches a couple of listeners or props
      --- the real logic recites in the parent component(Expenses) and that turns ExpensesFilter into something which is called a controlled component.
      
      That means both the VALUE, as well as CHANGES to the value are not handled in the component itself(ExpensesFilter) but in a parent(Expenses) component. Expenses component controls the ExpensesFilter component.*/}

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