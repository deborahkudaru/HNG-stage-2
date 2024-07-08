import React from "react";
import Logo from "./Logo";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" flex gap-20 h-footerHeight w-arrivalWidth bg-customOrange mt-10 text-white font-popins pb-10">
      <Logo />
      <div className="flex flex-col ml-20 relative top-5 gap-4">
        <h4 className="text-2xl">About Shop Fancy</h4>
        <Link to="/no-page">Contact Us</Link>
        <Link to="/no-page">About Us</Link>
      </div>
      <div className="flex flex-col relative top-5 gap-4">
        <h4 className="text-2xl">Payment</h4>
        <Link to="/no-page">Mastercard</Link>
        <Link to="/no-page">Visa</Link>
        <Link to="/no-page">Verve</Link>
      </div>
      <div className="flex flex-col relative top-5 gap-4">
        <h4 className="text-2xl">Terms & Policy</h4>
        <Link to="/no-page">Terms & Conditions</Link>
        <Link to="/no-page">Privacy Policy</Link>
      </div>
      <div className="flex relative top-5 gap-4 text-4xl">
        <a href="">
          {" "}
          <FaFacebookF className="border border-white p-1 rounded-full" />
        </a>
        <a href="https://www.instagram.com/inemesittt?igsh=em41b3RpeGhqZDh1&utm_source=qr">
          <FaInstagram  className="border border-white p-1 rounded-full"/>
        </a>
        <a href="https://pin.it/48lOySLLN">
          <FaPinterestP  className="border border-white p-1 rounded-full"/>
        </a>
        <a href="">
          {" "}
          <FaXTwitter  className="border border-white p-1 rounded-full"/>
        </a>
      </div>
    </div>
  );
};

export default Footer;
