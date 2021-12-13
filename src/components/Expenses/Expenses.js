import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";


function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2021");

  const checkFilterHandler = (settedYear) => {
    setSelectedYear(settedYear);

    // console.log(selectedYear);
    // console.log(settedYear); // settedYear is a parameter we recieved from filter values
  }

  const filterExpenses = props.elements.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear;
  });


  return (
    <Card className="expenses">
      <ExpensesFilter 
        onCheckFilter={checkFilterHandler} 
        selectedValue={selectedYear} 
      />
      <ExpensesChart expenses={filterExpenses}/>
      <ExpensesList expensesItems={filterExpenses}/>
    </Card>
  );
}

export default Expenses;

// single curly braces "{}" - means the executing the dynamic expression(where JS expressions can be executed) in JSX code
