import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import user from "../images/users.png"
import { Link } from "react-router-dom";

const Icons = () => {
  return (
    <div>
      <div className="flex justify-between text-white md:relative md:bottom-12 md:left-3/4 relative left-1/2 ml-28 md:w-32 w-24 ">
        <Link
          to="/no-page"
          className="lg:text-4xl text-3xl hover:text-orange-200"
        >
          {" "}
          <IoNotificationsOutline />
        </Link>
        <Link
          to="/shopping-cart"
          className="lg:text-4xl text-3xl hover:text-orange-200"
        >
          <IoCartOutline />
        </Link>
        <Link to="/no-page" className="">
          <img src={user} alt="" />
          {/* <FaRegCircleUser className="lg-hidden visible"/> */}
        </Link>
      </div>
    </div>
  );
};

export default Icons;
