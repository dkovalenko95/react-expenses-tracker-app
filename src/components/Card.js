import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; 
  // using const clasess to recieve classes from ExpenseItem && Expenses through props

  console.log(props.className);

  return (
    <div className={classes}>{props.children}</div>
  );
}

export default Card;

// We can't use your custom components as wrappers around other kind of content(HTML tags && other components) like we do with simple HTML tags.
// Still we can build such wrapper components.
// In Card.js we accept props. But now, we'll not work with some attributes but instead we will use one special prop which is built into React, which every component receives, even if you're never setting it explicitly. 
// And that's a prop which value we need to output between the opening and closing tag of div, inside of the card component function(Card.js). 
// It's the props "children prop". Children is a reserved name. We don't set a children prop on this card. 
// I'm setting a class named prop and actually at the moment this won't do anything. But I'm not setting a children prop. 
// "Children" is a reserved name and the value of this special children prop will always be the content between the opening and closing tags of your custom component(like content between <Card></Card> in ExpenseItem or Expenses).
// So in this case this content between the opening and closing <Card></Card> tag(component), that is what will be available on props children inside of that card.