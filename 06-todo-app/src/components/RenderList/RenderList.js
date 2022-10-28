import React, {useState} from 'react';
import classes from "./RenderList.module.css";
import Card from '../UI/Card';

export default function RenderList(props) {
  return (
    <>
      <Card className={classes.list}>
        {props.list.map((i, key) => <h3 key={key}>{props.list}</h3> )}
      </Card>
    </>
  )
}
