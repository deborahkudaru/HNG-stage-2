import React, { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";

const Calc = (props) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      
        <div className="flex lg:h-calcH lg:w-calcW border border-borderColor rounded-2xl font-popins">
          <img
            src={props.image}
            alt=""
            className="lg:w-imageW lg:h-imageH  w-20 mt-4 lg:left-10 relative left-5"
          />
          <p className="lg:text-2xl text-lg lg:mt-10 mt-5 relative left-12 lg:left-16">
            {props.name}
          </p>
          <button
            onClick={decrement}
            className="text-2xl relative lg:left-32 left-16"
          >
            -
          </button>
          <p className="text-2xl border border-borderColor h-9 px-4 lg:mt-10 mt-7 relative lg:left-36 left-20">
            {count}
          </p>
          <button
            onClick={increment}
            className="text-2xl relative lg:left-40 left-24"
          >
            +
          </button>
          <div className="lg:flex relative left-80 ml-4 hidden">
            <p className="text-2xl lg:mt-10 mt-5 relative">{props.price}</p>
            <p className="text-2xl lg:mt-10 mt-5 relative ml-28">{props.total}</p>
          </div>
         
        </div>
        <button className="relative left-2/3 bottom-16 ml-52 text-2xl"><LiaTimesSolid /></button>
        
    

      
    </>
  );
};

export default Calc;
