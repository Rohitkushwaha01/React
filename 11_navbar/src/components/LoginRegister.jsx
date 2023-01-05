import React from "react";
import Button from "./shared/Button";
import Search from "./Search";

export default function LoginRegister() {
  return (
    <div className="login">
      <ul>
        <li>English, USD</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <Search/>
      <Button text={"Register"} type={"fade"} />
      <Button text={"Login"} />
    </div>
  );
}
