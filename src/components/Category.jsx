import React from "react";
import { Link } from "react-router-dom";
import { SlArrowUp } from "react-icons/sl";

const Category = () => {
  return (
    <div className="lg:relative lg:left-14 lg:top-52 lg:flex lg:flex-col md:visible md:flex md:flex-col md:left-14 md:relative md:top-52 hidden">
      <h3 className="font-popins text-2xl pb-5 flex gap-2">
        Category{" "}
        <button>
          <SlArrowUp className="text-xl relative top-2 " />
        </button>
      </h3>
      <ul className="flex flex-col gap-5 text-base font-popins">
        <li>
          <Link to="/no-page" className="hover:text-customOrange">Water Bottles</Link>
        </li>
        <li>
          <Link to="/no-page" className="hover:text-customOrange">Tote Bags</Link>
        </li>
        <li>
          <Link to="/no-page" className="hover:text-customOrange">Crocs</Link>
        </li>
        <li>
          <Link to="/no-page" className="hover:text-customOrange">Biker's Shorts</Link>
        </li>
        <li>
          <Link to="/no-page" className="hover:text-customOrange">Crop Tops</Link>
        </li>
        <li>
          <Link to="/no-page" className="hover:text-customOrange">Bucket Hats</Link>
        </li>
        <li>
          <Link to="/no-page" className="hover:text-customOrange">Jewelry Box</Link>
        </li>
      </ul>
    </div>
  );
};

export default Category;
