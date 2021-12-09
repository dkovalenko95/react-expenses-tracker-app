
// import React from 'react'; ---> React import was necessary in the past versions(we had to put this import in every component) --> we can still use it to emphasize that React is still being used under the hood here.
import React from "react";

import Expenses from "./components/Expenses/Expenses";

const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  return (
    <div>
      <Expenses elements={expenses}/>
    </div>
    // elements points on expenses array 
    // in Expenses through props we point on "elements"(attribute/prop) to receive data from expenses
  );
}

export default App;



// ALTERNATIVE CODE we would use if we wouldn't use JSX(function App() {return} - as an example)

//  function App() {

  // return React.createElement("div"(1st arg), {here should be attributes of created div}(2nd arg), next arg is a content between opening and closing div tags(can be list of args));

//    return React.createElement(
//      "div",
//      {}, 
//      React.createElement("h2", {}, "Let's get started"),
//      React.createElement(Expenses, {elements: expenses})
//    );
//  };