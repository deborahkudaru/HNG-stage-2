import React from "react";
import { IoCartOutline } from "react-icons/io5";

const Items = (props) => {
  return (
    <div className="bg-white lg:w-60  md:w-52 lg:pb-5 pb-2 rounded-lg">
      <div className="bg-imageColor rounded-t-lg">
        <button className="lg:ml-52  ml-36 text-2xl">
          <IoCartOutline />
        </button>

        <img src={props.itemImage} alt="" className="lg:w-48 lg:h-48 w-32 h-32 m-auto" />
      </div>
      <p className="font-popins lg:text-base text-sm font-normal mt-2 relative left-2">
        {props.itemName}
      </p>
      <p className="font-popins lg:text-base text-sm font-normal relative left-2">
        {props.price}
      </p>
      <div className="text-star text-sm relative left-2">{props.rating}</div>
    </div>
  );
};

export default Items;
