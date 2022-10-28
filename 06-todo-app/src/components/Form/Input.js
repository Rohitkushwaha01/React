import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./Input.module.css";
import Button from "../UI/Button";

export default function Input(props) {
  const [text, setText] = useState("Enter your Todo");

  const textHandler = (e) => {
    setText(e.target.value);
  };

  const clickHandler = () => {
    props.onAddNote(text);
  };

  return (
    <Card>
      <div className={classes.input}>
        <input
          type="text"
          className={classes.note}
          placeholder={text}
          onChange={textHandler}
        />
        <Button className={classes.btn} onclick={clickHandler}>
          Add
        </Button>
      </div>
    </Card>
  );
}
