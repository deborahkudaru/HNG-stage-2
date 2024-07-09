import React from "react";
// import { Link } from "react-router-dom";
import Logo from "./Logo";
import Icons from "./Icons";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      <nav className="bg-customOrange">
        <Logo />
       
        <Navbar />
        <Icons />
      </nav>
    </div>
  );
};

export default Header;
