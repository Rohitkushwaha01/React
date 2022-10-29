import React from 'react'
import classes from "./Header.module.css";
import MealsImg from "../../assests/meals.jpg";
import HeaderCartButton from './HeaderCartButton';

export default function Header() {
  return (
    <>
      <div className={classes.header}>
        <h1>React meals</h1>
        <HeaderCartButton/>
      </div>
      <div className={classes["main-image"]}>
        <img src={MealsImg} alt="" />
      </div>
    </>
  )
}
