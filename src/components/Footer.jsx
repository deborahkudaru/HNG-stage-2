import React from "react";
import Logo from "./Logo";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" flex lg:gap-20 gap-7 lg:h-footerHeight  bg-customOrange mt-10 text-white font-popins pb-10">
      <Logo />
      <div className="lg:flex lg:flex-col lg:ml-20 relative top-5 lg:gap-4 lg:visible hidden">
        <h4 className="lg:text-2xl text-sm ">About Shop Fancy</h4>
        <Link to="/no-page" className="lg:text-base text-small hover:text-orange-200">Contact Us</Link>
        <Link to="/no-page" className="lg:text-base text-small hover:text-orange-200">About Us</Link>
      </div>
      <div className="flex flex-col relative top-5 lg:gap-4 gap-2">
        <h4 className="lg:text-2xl text-sm">Payment</h4>
        <Link to="/no-page" className="lg:text-base text-small hover:text-orange-200">Mastercard</Link>
        <Link to="/no-page" className="lg:text-base text-small hover:text-orange-200">Visa</Link>
        <Link to="/no-page" className="lg:text-base text-small hover:text-orange-200">Verve</Link>
      </div>
      <div className="flex flex-col relative top-5 lg:gap-4 gap-2">
        <h4 className="lg:text-2xl text-sm">Terms & Policy</h4>
        <Link to="/no-page" className="lg:text-base text-small hover:text-orange-200">Terms & Conditions</Link>
        <Link to="/no-page" className="lg:text-base text-small hover:text-orange-200">Privacy Policy</Link>
      </div>
      <div className="flex relative top-5 lg:gap-4 gap-2 lg:text-4xl text-xl">
        <a href="">
          {" "}
          <FaFacebookF className="hover:hover:text-orange-200 border border-white lg:p-1 p-0.5 rounded-full" />
        </a>
        <a href="https://www.instagram.com/inemesittt?igsh=em41b3RpeGhqZDh1&utm_source=qr">
          <FaInstagram  className="hover:hover:text-orange-200 border border-white lg:p-1 p-0.5 rounded-full"/>
        </a>
        <a href="https://pin.it/48lOySLLN">
          <FaPinterestP  className="hover:hover:text-orange-200 border border-white lg:p-1 p-0.5 rounded-full"/>
        </a>
        <a href="">
          {" "}
          <FaXTwitter  className="hover:hover:text-orange-200 border border-white lg:p-1 p-0.5 rounded-full"/>
        </a>
      </div>
    </div>
  );
};

export default Footer;
