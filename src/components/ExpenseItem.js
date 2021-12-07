import "./ExpenseItem.css"

function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  // instead of hardcoded data React is using "props" concept.
  return (<div className="expense-item">
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
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