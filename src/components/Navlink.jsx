import React, { useState } from "react";
import { Link } from "react-router-dom";

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

  // return (
  //   <div className="">
  //     <div>
  //     <NavLink />
  //     </div>

  //   </div>
  // )
};

export default Navlink;
