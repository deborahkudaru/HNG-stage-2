import React from "react";

const Calc = (props) => {
  return (
    <div className="flex lg:h-calcH lg:w-calcW border border-borderColor rounded-2xl font-popins">
      <img src={props.image} alt="" className="lg:w-imageW lg:h-imageH  w-20 mt-4 lg:ml-10 relative left-10" />
      <p className="lg:text-2xl text-lg lg:mt-10 mt-5 relative left-20">{props.name}</p>
      <button className="text-2xl relative left-36">-</button>
      <p className="text-2xl border border-borderColor h-9 px-4 lg:mt-10 mt-7 relative left-36">
        {props.quantity}
      </p>
      <button className="text-2xl relative left-36">+</button>
      <p className="text-2xl lg:mt-10 mt-5 relative left-80">{props.price}</p>
      <p className="text-2xl lg:mt-10 mt-5 relative left-96">{props.total}</p>
      <button className="text-2xl relative  left-1/2">X</button>
    </div>
  );
};

export default Calc;
