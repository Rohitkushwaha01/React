import React from "react";
import LoginRegister from "./LoginRegister";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <nav>
          <div className="item">
            <Logo />
            <ul>
              <li>Home</li>
              <li>Become A Teacher</li>
            </ul>
          </div>
          <LoginRegister />
        </nav>
      </div>
    </>
  );
}
