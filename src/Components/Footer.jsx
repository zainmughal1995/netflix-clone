import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900 w-full h-[350px]">
      <div className="w-[970px] mx-auto pt-[100px]">
        <div className="social-media-logos text-white text-2xl flex gap-6 cursor-pointer">
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
        </div>
        <div className="some-lists">
          <div className="grid grid-cols-4 gap-3 h-[100px] text-gray-500 mt-[10px] text-sm cursor-pointer">
            <a className="hover:underline">Audio Description</a>
            <a className="hover:underline">Help Center</a>
            <a className="hover:underline">Gift Cards</a>
            <a className="hover:underline">Media Center</a>
            <a className="hover:underline">Investor Relations</a>
            <a className="hover:underline">Jobs</a>
            <a className="hover:underline">Terms of Use</a>
            <a className="hover:underline">Privacy</a>
            <a className="hover:underline">Legal Notices</a>
            <a className="hover:underline">Cookie Preferences</a>
            <a className="hover:underline">Corporate Information</a>
            <a className="hover:underline">Contact Us</a>
          </div>
        </div>
        <div className="service-code-button">
          <button className="border border-gray-500 mt-[20px] text-gray-500 text-sm p-2 hover:text-gray-200">
            Service Code
          </button>
        </div>
        <div className="copyright text-gray-500 py-[15px] text-[10px]">
          <h2>&#169; 1997-2024 Netflix, Inc.</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
