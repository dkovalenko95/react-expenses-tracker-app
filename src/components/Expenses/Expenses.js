import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";


function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2021");

  const checkFilterHandler = (settedYear) => {
    setSelectedYear(settedYear);

    console.log(selectedYear);
    console.log(settedYear); // settedYear is a parameter we recieved from filter values
  }

  const filterExpenses = props.elements.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear;
  });



  // rendering CONDITIONAL content
  // 3nd version - dynamic expression
  let expenseContent = <p>No Expenses found.</p>;

  if (filterExpenses.length > 0) {
    expenseContent = filterExpenses.map((expenseElem) => (
      <ExpenseItem
        key={expenseElem.id} /* key - is a prop, some sort of identifier */
        title={expenseElem.title}
        amount={expenseElem.amount}
        date={expenseElem.date}
      />
    ))
  }

  return (
    <Card className="expenses">

      <ExpensesFilter 
        onCheckFilter={checkFilterHandler} 
        selectedValue={selectedYear} 
      />
      {expenseContent}
    
    </Card>
  );
}

export default Expenses;

// single curly braces "{}" - means the executing the dynamic expression(where JS expressions can be executed) in JSX code
