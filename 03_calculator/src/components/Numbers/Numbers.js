import React, {useState} from "react";
import classes from "./Number.module.css";

const Number = (props) => {
  const [currentNumber, setNumber] = useState(5);

  const clickHandler = (event) => {
    setNumber(props.value);
    onEnteredNumber(props.value)
  }

  return <button className={classes.numberbtn} onClick={clickHandler}>{props.value}</button>;
};

export default Number;
