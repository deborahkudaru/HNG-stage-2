import React from "react";
import Logo from "./Logo";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="h-footerHeight w-arrivalWidth bg-customOrange mt-10">
      <Logo />
      <FaFacebookF />
      <FaInstagram />
      <FaPinterestP />
      <FaXTwitter />
    </div>
  );
};

export default Footer;
