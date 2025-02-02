import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Arrival = (props) => {
  return (
    <div className="bg-white xl:w- lg:w-60 lg:pb-5 w-40 pb-2 rounded-lg">
      <div className="bg-imageColor rounded-t-lg">
        <Link to="/shopping-cart" className="relative xl:left-52 lg:left-52 md:left-64 md:relative left-32 text-2xl hover:text-customOrange">
          {" "}
          <IoCartOutline />
        </Link>

        <img
          src={props.itemImage}
          alt=""
          className="lg:w-48 lg:h-48 w-32 h-32 m-auto"
        />
      </div>
      <p className="font-popins lg:text-base text-sm font-normal mt-2 relative left-2">
        {props.itemName}
      </p>
      <p className="font-popins lg:text-base text-sm font-normal relative left-2">
        {props.price}
      </p>
      <div className="flex relative left-2 lg:text-base text-small">
        <p>{props.rating}</p>
        <p>{props.rating2}</p>
        <p>{props.rating3}</p>
        <p>{props.rating4}</p>
        <p>{props.rating5}</p>
      </div>
    </div>
  );
};

export default Arrival;
