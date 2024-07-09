import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="font-popins w-1/2 m-auto pt-32 text-center">
      <h1 className="lg:text-4xl text-2xl">Not Available</h1>
      <Link to="/" className="bg-customOrange text-white text-sm px-3 py-2 rounded">Home Page</Link>
    </div>
  );
};

export default NoPage;
