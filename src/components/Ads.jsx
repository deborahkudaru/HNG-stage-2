import React from "react";
import { Link } from "react-router-dom";
import scrunchie from "../images/scrunchie.png";
import double from "../images/doubleLayer.png";
import tote from "../images/tote.png";
import cloud from "../images/cloud.png";

const Ads = () => {
  return (
    <div className="flex gap-10 relative top-16">
      <div className=" font-popins lg:rounded-2xl rounded-lg bg-white relative left-14 border lg:w-adH lg:h-adW h-32 w-72 lg:mb-0 pb-0  border-customOrange">
        <div className="pl-5 lg:pt-10 pt-5">
          <h2 className="lg:text-3xl text-xl lg:mt-3">CLEARANCE SALES!</h2>
          <h3 className="lg:text-2xl text-sm mt-3 lg:mb-10 mb-3">UP TO 40% OFF</h3>
          <Link
            to="/no-page"
            className="bg-customOrange text-white lg:py-2 lg:px-4 rounded-lg lg:text-base text-sm py-1 px-2"
          >
            Shop Now
          </Link>
        </div>
        <div>
          <img
            src={scrunchie}
            alt="Scrunchie"
            className="relative lg:left-80 lg:bottom-40 lg:w-36 lg:h-36 w-16 h-16 left-48 bottom-24"
          />
          <img src={double} alt="double-layer" className="relative lg:left-96 lg:bottom-60 lg:h-36 lg:w-36 w-16 h-16 left-52 bottom-28" />
        </div>
      </div>

      <div className="lg:w-adH lg:h-adW h-32 lg:flex lg:flex-col font-popins rounded-2xl bg-white relative left-14 border border-customOrange hidden">
        <div className="pl-5 pt-7">
          <h2 className="text-2xl w-2/3">
            <span className="font-lemonda">shop FANCY</span> 5th Year
            Anniversary Sales
          </h2>
          <p className="text-base w-2/4 mt-2 mb-5">
            5 customers will get Special Offers for 5 hours
          </p>
          <Link
            to="/no-page"
            className="border border-customOrange text-customOrange py-2 px-4 rounded-lg"
          >
            12pm - 5pm
          </Link>
        </div>
        <div>
          <img src={tote} alt="tote-bag" className="relative left-72 bottom-44"/>
          <img src={cloud} alt="cloud-mirror" className="relative left-80 bottom-60"/>
        </div>
      </div>

      
    </div>
  );
};

export default Ads;
