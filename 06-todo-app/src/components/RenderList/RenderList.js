import React from "react";
import classes from "./RenderList.module.css";
import Card from "../UI/Card";

export default function RenderList(props) {
  return (
    <>
      <Card className={classes.list}>
        {props.list.map((i, key) => (
          <div className={classes.flex}>
            <h3 key={key}>{i}</h3>
          </div>
        ))}
      </Card>
    </>
  );
}
