import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <div>
        <Link to="/" className="font-lemonda text-white lg:text-logo sm:text-xl md:text-2xl relative top-6 lg:left-14 left-7">Shop FANCY!</Link>
      </div>
    </div>
  );
};

export default Logo;
