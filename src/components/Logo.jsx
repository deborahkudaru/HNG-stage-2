import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <div>
        <Link to="/" className="font-lemonda text-white text-logo relative top-5 left-14">Shop Fancy!</Link>
      </div>
    </div>
  );
};

export default Logo;
