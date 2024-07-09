import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
// import { X } from "lucide-react";
import { FaTimes } from "react-icons/fa";

const Navlink = () => {
  return (
    <div>
      <ul className="lg:flex justify-between w-navItemWidth  m-auto text-xl relative bottom-2 text-white font-popins flex-wrap hidden">
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
        <div className="w-full justify-between hidden  md:flex lg:flex">
          <Navlink />
        </div>
        <div className="md:hidden text-rose-500">
          <button onClick={toggleNavbar} className="object-right">
            {isOpen ? <FaTimes /> : <RiMenu3Fill className="text-4xl" />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <ul className="flex flex-col items-center gap-7 basis-full md:pr-20 font-medium">
          <li>
            <Link
              to="/about"
              className="text-slate-400  hover:text-rose-500 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              className="text-slate-400 hover:text-rose-500 transition duration-300"
            >
              
            </Link>
          </li>
          <li>
            <Link
              to="/project"
              className="text-slate-400 hover:text-rose-500 transition duration-300"
            >
              Market Place
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-slate-400 hover:text-rose-500 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
