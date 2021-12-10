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

      {/* DYNAMIC rendering one ExpenseItem per element in the array */}
      {/* single curly braces "{}" - means the executing the dynamic expression(where JS expressions can be executed) in JSX code */}
      {props.elements.map((expenseElem, index) => (
        <ExpenseItem
          key={expenseElem.id} /* key - is a prop, some sort of identifier */
          title={expenseElem.title}
          amount={expenseElem.amount}
          date={expenseElem.date}
        />))}
      
    </Card>
  );
}

export default Expenses;