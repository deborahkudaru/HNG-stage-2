import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="font-popins w-1/3 m-auto pt-40 text-center">
      <h1 className="text-4xl  ">Not Available</h1>
      <Link to="/" className="bg-customOrange text-white py-3 px-6 rounded-lg relative top-8">Home Page</Link>
    </div>
  );
};

export default NoPage;
