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
    <div>
      <div className=" border border-borderColor rounded-2xl lg:w-4/5 md:w-4/5 w-4/5 ">
        <div className="flex lg:h-calcH lg:w-calcW  font-popins">
          <img
            src={props.image}
            alt=""
            className="lg:w-imageW lg:h-imageH  w-20 mt-4 lg:left-10 relative left-5"
          />
          <p className="lg:text-2xl text-sm lg:mt-10 mt-10 relative ml-12 lg:ml-16">
            {props.name}
          </p>

          <div className="flex gap-0.5 ml-10 lg:ml-28">
            <button
              onClick={decrement}
              className="lg:text-2xl md:text-2xl text-lg"
            >
              -
            </button>
            <p className="lg:text-2xl md:text-xl text-lg px-2 border border-borderColor lg:h-9 xl:h-9 h-9 lg:px-4 xl:px-4  mt-7 ">
              {count}
            </p>
            <button
              onClick={increment}
              className="lg:text-2xl md:text-xl text-lg"
            >
              +
            </button>
          </div>

          <div className="lg:flex relative lg:left-36 hidden">
            <p className="text-2xl lg:mt-10 mt-5 relative">{props.price}</p>
            <p className="text-2xl lg:mt-10 mt-5 relative ml-28">
              {props.total}
            </p>
          </div>
        </div>
      </div>

      <button className="relative lg:left-2/3 lg:bottom-16  bottom-16 left-72 lg:ml-52 ml-20 lg:text-2xl text-base">
        <LiaTimesSolid />
      </button>
    </div>
  );
};

export default Calc;
