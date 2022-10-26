import "./ExpensesDate.css";
import Card from '../UI/Card';


function ExpensesDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const date = props.date.getFullYear();

  return (
      <Card className="date-container">
        <div>{month}</div>
        <div>{day}</div>
        <div>{date}</div>
      </Card>
  );
}

export default ExpensesDate;
