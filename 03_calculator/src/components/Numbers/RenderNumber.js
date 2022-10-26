import React, {useState} from "react";
import Number from "./Numbers";
import classes from "./RenderNumber.module.css"

const RenderNumber = (props) => {
  const numbersArray = ["AC", "C", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "-", "+", "*", "/", "="];

  return (
    <div className={classes.childItem}>
      {numbersArray.map((number) => {
        return <Number value={number} key={number}/>;
      })}
    </div>
  );
};

export default RenderNumber;
