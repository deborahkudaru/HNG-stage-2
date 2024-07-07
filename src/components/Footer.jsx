import React from "react";
import Logo from "./Logo";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" flex gap-24 h-footerHeight w-arrivalWidth bg-customOrange mt-10 text-white font-popins">
      <Logo />
      <div className="flex flex-col ml-20 relative top-5 gap-4">
        <h4 className="text-2xl">About Shop Fancy</h4>
        <Link>Contact Us</Link>
        <Link>About Us</Link>
      </div>
      <div className="flex flex-col relative top-5 gap-4">
        <h4 className="text-2xl">Payment</h4>
        <Link>Mastercard</Link>
        <Link>Visa</Link>
        <Link>Verve</Link>
      </div>
      <div className="flex flex-col relative top-5 gap-4">
        <h4 className="text-2xl">Terms & Policy</h4>
        <Link>Terms & Conditions</Link>
        <Link>Privacy Policy</Link>
      </div>
      <div className="flex relative top-5 gap-4 text-xl">
        <FaFacebookF />
        <FaInstagram />
        <FaPinterestP />
        <FaXTwitter />
      </div>
    </div>
  );
};

export default Footer;
