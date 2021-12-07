import "./ExpenseItem.css"

function ExpenseItem(props) {

  // Hardcoded data that shouldn't used:
  // const expenseDate = new Date(2021, 2,28);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67;

  // instead of hardcoded data React is using "props" concept.
  return (<div className="expense-item">
    <div>{props.date.toISOString()}</div>
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  </div>
  );
};

export default ExpenseItem;

// Components can't just use data stored in other components, BUT instead, we can utilize "props" concept.

// "Props" concept that helps to pass/share data from one component to another by adding a attribute; 
// "props" make components reusable. We can set properties(props) of our own custom components.