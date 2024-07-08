import React from "react";
import { IoCartOutline } from "react-icons/io5";

const Arrival = (props) => {
  return (
    <div className="bg-white w-60 pb-5 rounded-lg">
      <div className="bg-imageColor rounded-t-lg">
        <button>
          {" "}
          <IoCartOutline className="relative left-52 text-2xl" />
        </button>

        <img src={props.itemImage} alt="" className="w-48 h-48 m-auto" />
      </div>
      <p className="font-popins text-base font-normal mt-2 relative left-2">
        {props.itemName}
      </p>
      <p className="font-popins text-base font-normal relative left-2">
        {props.price}
      </p>
      <div className="text-star text-sm relative left-2">{props.rating}</div>
    </div>
  );
};

export default Arrival;
