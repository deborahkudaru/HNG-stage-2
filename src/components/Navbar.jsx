import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-customOrange w-navWidth h-navHeight">
        <Logo />
        <ul className="flex justify-between w-navItemWidth h-navItemHeight m-auto text-xl relative bottom-5 text-white font-popins">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link>Market Place</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Reviews</Link>
          </li>
          <li>
            <Link>Delivery</Link>
          </li>
        </ul>

        <div className="flex justify-between text-white relative bottom-12 left-3/4 ml-28 text-logo w-24 ">
          <Link>
            {" "}
            <IoNotificationsOutline />
          </Link>
          <Link to="/shopping-cart">
            <IoCartOutline />
          </Link>
          <Link>
            <FaRegCircleUser />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
