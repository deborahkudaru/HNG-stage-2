import React from "react";

const Summary = (props) => {
  return (
    <div className="flex gap-14 lg:w-navItemWidth h-26 border border-borderColor rounded-lg font-popins">
      <img src={props.image} alt="" className="lg:w-28 lg:h-28 md:w-24 md:h-24 h-20 w-20 ml-10"/>
      <p className="mt-10 lg:text-2xl">{props.name} <span>{[props.quantity]}</span> </p>
      <p className="lg:text-2xl mt-10">{props.total}</p>
    </div>
  );
};

export default Summary;
