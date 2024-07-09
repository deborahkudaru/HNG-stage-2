import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { FaTimes } from "react-icons/fa";

const Navlink = () => {
  return (
    <div>
      <ul className="flex justify-between w-navItemWidth lg:ml-96 md:ml-52 text-xl relative bottom-2 text-white font-popins flex-wrap">
        <li>
          <Link className="hover:text-orange-200" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-orange-200" to="/">
            Market Place
          </Link>
        </li>
        <li>
          <Link className="hover:text-orange-200" to="/no-page">
            About
          </Link>
        </li>
        <li>
          <Link className="hover:text-orange-200" to="/no-page">
            Reviews
          </Link>
        </li>
        <li>
          <Link className="hover:text-orange-200" to="/no-page">
            Delivery
          </Link>
        </li>
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggleNavbar = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <nav>
        <div className="justify-between hidden  lg:flex">
          <Navlink />
        </div>
        <div className="md:hidden text-white">
          <button onClick={toggleNavbar} className="object-right relative top-3 ml-3">
            {isOpen ? <FaTimes classname="text-3xl"/> : <IoIosMenu className="text-3xl" />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <ul className="flex flex-col items-center gap-7 basis-full md:pr-20 font-medium">
          <li>
            <Link
              to="/about"
              className="text-white hover:text-orange-200 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              className="text-white hover:text-orange-200 transition duration-300"
            >
              Market Place
            </Link>
          </li>
          <li>
            <Link
              to="/project"
              className="text-white hover:text-orange-200 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white hover:text-orange-200 transition duration-300"
            >
              Reviews
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white hover:text-orange-200 transition duration-300"
            >
              Delivery
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
