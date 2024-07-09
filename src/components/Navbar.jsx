import React from "react";
// import { Link } from "react-router-dom";
import Logo from "./Logo";
import Icons from "./Icons";
import Navlink from "./Navlink";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-customOrange h-navHeight">
        <Logo />
       
        <Navlink />
        <Icons />
      </nav>
    </div>
  );
};

export default Navbar;
