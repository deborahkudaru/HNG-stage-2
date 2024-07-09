import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";

const Items = (props) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="bg-white xl:w- lg:w-56 w-40  pb-2 rounded-lg">
      <div className="bg-imageColor rounded-t-lg">
        <button onClick={togglePopup} className="xl:ml-48 lg:ml-44  ml-32 text-2xl">
          <IoCartOutline className="hover:text-customOrange"/>
        </button>
        {showPopup && (<div className="fixed top-4 font-popins bg-white text-customOrange border rounded-lg border-customOrange py-3 px-5"><p className="mb-5">Added to cart!</p> <button className=" bg-customOrange rounded-sm text-white py-1 px-2" onClick={togglePopup}>Ok</button></div>)}

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

export default Items;
