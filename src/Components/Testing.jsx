import React, { useState } from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import profilePhoto1 from "./../Assets/profile_photo_1.jpeg";
import profilePhoto2 from "./../Assets/profile_photo_2.jpeg";
import profilePhoto3 from "./../Assets/profile_photo_3.jpeg";
import profilePhoto4 from "./../Assets/profile_photo_4.jpeg";

const Testing = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="relative group w-[30px] h-[70px] flex items-center
      border-black"
      onMouseEnter={handleToggle}
      onMouseLeave={handleToggle}
    >
      <div className="block w-[100">
        <TiArrowSortedUp className="flex text-md hover:rotate-180 duration-300 cursor-pointer" />
      </div>

      {isOpen && (
        <div className="absolute top-[60px] right-[30px]">
          <div className="text-white w-[150px] border p-[20px] w-[300px]  text-[17px] border-gray-400 text-white bg-gray-900">
            <ul className="pb-[10px]">
              <li className="cursor-pointer hover:underline flex gap-3 pb-2 items-center">
                <img className="w-[45px] h-[45px]" src={profilePhoto1}></img>
                User 1
              </li>
              <li className="cursor-pointer hover:underline flex gap-3 pb-2 items-center">
                <img className="w-[45px] h-[45px]" src={profilePhoto2}></img>
                User 2
              </li>
              <li className="cursor-pointer hover:underline flex gap-3 pb-2 items-center">
                <img className="w-[45px] h-[45px]" src={profilePhoto3}></img>
                User 3
              </li>
              <li className="cursor-pointer hover:underline flex gap-3 pb-2 items-center">
                <img className="w-[45px] h-[45px]" src={profilePhoto4}></img>
                User 4
              </li>
            </ul>
            <ul>
              <li className="cursor-pointer hover:underline">Manage Profile</li>
              <li className="cursor-pointer hover:underline">Exit Profile</li>
              <li className="cursor-pointer hover:underline">
                Transfer Profile
              </li>
              <li className="cursor-pointer hover:underline">Account</li>
              <li className="cursor-pointer hover:underline">Help Center</li>
            </ul>
          </div>
          <p className="border border-gray-800 bg-gray-900 flex p-3 items-center justify-center text-[17px]">
            Sign Out of Netflix
          </p>
        </div>
      )}
    </div>
  );
};

export default Testing;
