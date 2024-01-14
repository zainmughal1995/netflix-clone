import React from "react";
import logo from "./../Assets/logo.png";

import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { TiArrowSortedUp } from "react-icons/ti";
import profilePicture from "./../Assets/profile_picture.jpg";
import Testing from "./Testing";

const Header = () => {
  return (
    <div className="flex nav-bar fixed top-0 w-full h-[65px] items-center bg-gradient-to-b from-gray-900 to-transparent transition-all duration-300  text-white scroll:bg-gray-900">
      <div className="flex w-[93%] mx-auto justify-between">
        <div className="nav-start flex gap-10 items-center">
          <div className="logo">
            <img className="w-[92.5px] h-[29.6px]" src={logo}></img>
          </div>
          <ul className="flex gap-5 cursor-pointer">
            <li className=" hover:text-gray-400 duration-300">Home</li>
            <li className=" hover:text-gray-400 duration-300">TV Shows</li>
            <li className=" hover:text-gray-400 duration-300">Movies</li>
            <li className=" hover:text-gray-400 duration-300">New & Popular</li>
            <li className=" hover:text-gray-400 duration-300">My List</li>
            <li className=" hover:text-gray-400 duration-300">
              Browser By Language
            </li>
          </ul>
        </div>
        <div className="nav-end flex gap-7 text-2xl items-center">
          <CiSearch />
          <FaRegBell />
          <div className="profile-picture flex items-center gap-2 scale-[80%]">
            <img src={profilePicture} className="h-[40px] rounded-md"></img>
            <Testing />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
