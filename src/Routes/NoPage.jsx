import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="font-popins w-1/3 m-auto pt-40 text-center">
      <h1 className="lg:text-4xl text-2xl">Not Available</h1>
      <Link to="/" className="bg-customOrange text-white lg:py-3 lg:px-6  py-1 px-3 rounded-lg relative top-8">Home Page</Link>
    </div>
  );
};

export default NoPage;
