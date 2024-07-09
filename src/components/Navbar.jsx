import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import user from "../images/users.png"

const Navbar = () => {
  return (
    <div>
      <nav className="bg-customOrange h-navHeight">
        <Logo />
        <ul className="lg:flex justify-between w-navItemWidth  m-auto text-xl relative bottom-2 text-white font-popins flex-wrap hidden">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Market Place</Link>
          </li>
          <li>
            <Link to="/no-page">About</Link>
          </li>
          <li>
            <Link to="/no-page">Reviews</Link>
          </li>
          <li>
            <Link to="/no-page">Delivery</Link>
          </li>
        </ul>

        <div className="flex justify-between text-white md:relative md:bottom-12 md:left-3/4 relative left-1/2 ml-28 md:w-32 w-24 ">
          <Link to="/no-page" className="lg:text-4xl text-3xl">
            {" "}
            <IoNotificationsOutline />
          </Link>
          <Link to="/shopping-cart" className="lg:text-4xl text-3xl">
            <IoCartOutline />
          </Link>
          <Link to="/no-page" className="">
            <img src={user} alt="" className="lg-visible"/>
            {/* <FaRegCircleUser className="lg-hidden visible"/> */}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
