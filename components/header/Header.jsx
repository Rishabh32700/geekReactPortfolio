import React from "react";
import "./header.css";
import Logo from "./logo/Logo";
import Navbar from "./navbar/Navbar";

const Header = () => {
  return (
    <>
      <div className="header">
        <Logo />
        <Navbar />
      </div>
    </>
  );
};

export default Header;
