import React from "react";
import { Link } from "react-router-dom";
import scrunchie from "../images/scrunchie.png";
import double from "../images/doubleLayer.png";
import tote from "../images/tote.png";
import cloud from "../images/cloud.png";

const Ads = () => {
  return (
    <div className="flex gap-10 relative top-24">
      <div className="w-adH h-adW font-popins rounded-2xl bg-white relative left-14 border border-customOrange">
        <div className="pl-5 pt-10">
          <h2 className="text-3xl mt-3">CLEARANCE SALES!</h2>
          <h3 className="text-2xl mt-3 mb-10">UP TO 40% OFF</h3>
          <Link
            to="/no-page"
            className="bg-customOrange text-white py-2 px-4 rounded-lg"
          >
            Shop Now
          </Link>
        </div>
        <div>
          <img
            src={scrunchie}
            alt="Scrunchie"
            className="relative left-80 bottom-40"
          />
          <img src={double} alt="double-layer" className="relative left-96 bottom-60" />
        </div>
      </div>

      <div className="w-adH h-adW font-popins rounded-2xl bg-white relative left-14 border border-customOrange">
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
