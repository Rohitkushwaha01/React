import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./Input.module.css";

export default function Input(props) {
  const [text, setText] = useState("Enter your Todo");

  const textHandler = (e) => {
    setText(e.target.value);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    props.onAddNote(text);
  };

  return (
    <Card>
        <form className={classes.input}>
          <input
            type="text"
            className={classes.note}
            placeholder={text}
            onChange={textHandler}
          />
          <button className={classes.btn} onClick={clickHandler}>
            Add
          </button>
        </form>
    </Card>
  );
}
