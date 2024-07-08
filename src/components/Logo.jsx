import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <div>
        <Link to="/" className="font-lemonda text-white lg:text-logo sm:text-xl md:text-2xl relative top-5 left-14">Shop Fancy!</Link>
      </div>
    </div>
  );
};

export default Logo;
