import React from "react";
import { Link } from "react-router-dom";
import { SlArrowUp } from "react-icons/sl";

const Category = () => {
  return (
    <div className="relative left-14 top-28">
      <h3 className="font-popins text-2xl pb-5 flex gap-2">
        Category{" "}
        <button>
          <SlArrowUp className="text-xl relative top-2 " />
        </button>
      </h3>
      <ul className="flex flex-col gap-5 text-base font-popins">
        <li>
          <Link to="/no-page">Water Bottles</Link>
        </li>
        <li>
          <Link to="/no-page">Tote Bags</Link>
        </li>
        <li>
          <Link to="/no-page">Crocs</Link>
        </li>
        <li>
          <Link to="/no-page">Biker's Shorts</Link>
        </li>
        <li>
          <Link to="/no-page">Crop Tops</Link>
        </li>
        <li>
          <Link to="/no-page">Bucket Hats</Link>
        </li>
        <li>
          <Link to="/no-page">Jewelry Box</Link>
        </li>
      </ul>
    </div>
  );
};

export default Category;
