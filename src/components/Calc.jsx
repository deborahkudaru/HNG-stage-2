import React from "react";

const Calc = (props) => {
  return (
    <div className="flex h-calcH w-calcW border border-borderColor rounded-2xl font-popins">
      <img src={props.image} alt="" className="w-imageW h-imageH mt-4 ml-10" />
      <p className="text-2xl mt-10 ml-20">{props.name}</p>
      <button className="text-2xl ml-16">-</button>
      <p className="text-2xl border border-borderColor h-8 px-2 mt-10 ml-1">
        {props.quantity}
      </p>
      <button className="text-2xl ml-1">+</button>
      <p className="text-2xl mt-10 ml-40">{props.price}</p>
      <p className="text-2xl mt-10 ml-28">{props.total}</p>
      <button className="text-2xl relative  left-32">X</button>
    </div>
  );
};

export default Calc;
