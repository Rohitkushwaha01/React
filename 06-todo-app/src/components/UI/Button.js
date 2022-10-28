import React from 'react';
import classes from './Button.module.css';

export default function Button(props) {
  return (
    <button className={classes.button} onClick={props.onclick}>{props.children}</button>
  )
}
