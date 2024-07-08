import React from "react";

const Summary = (props) => {
  return (
    <div className="flex gap-14 w-navItemWidth h-calcH border border-borderColor rounded-lg font-popins">
      <img src={props.image} alt="" className="w-imageW h-imageH mt-4 ml-10"/>
      <p className="mt-10 text-2xl">{props.name} <span>{[props.quantity]}</span> </p>
      <p className="text-2xl mt-10">{props.total}</p>
    </div>
  );
};

export default Summary;
