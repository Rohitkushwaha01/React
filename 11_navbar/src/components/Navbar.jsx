import React from "react";
// Styled component
import LoginRegister from "./LoginRegister";
import Logo from "./Logo";
import Search from "./Search";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <nav>
          <div className="item">
            <Logo />
            <Search text={"in-logo-search"}/>
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
