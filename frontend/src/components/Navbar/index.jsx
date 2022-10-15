import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";

const MobileNav = ({ user, isDropDowm, setisDropDowm }) => {


  return (
    <div className="flex w-full items-center justify-between lg:hidden container mx-auto">
      <div className="w-28">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="logo"
          className="w-full h-full"
        />
      </div>
      <div className="flex items-center gap-3 relative">
        <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">
          Use App
        </button>
        {user?.fullname ? (
          <>
            <div
              onClick={() => setisDropDowm((prev) => !prev)}
              className="border border-gray-300 text-zomato-400 w-10 h-10 rounded-full"
            >
              <img
                src="https://cdn3.vectorstock.com/i/1000x1000/00/92/teen-boy-character-avatar-vector-11360092.jpg"
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
            {isDropDowm && (
              <div className="absolute shadow-lg py-3 -bottom-16 -right-4 w-full z-20 flex flex-col gap-3 border border-gray-100">
                <button>Sign Out</button>
              </div>
            )}
          </>
        ) : (
          <>
            <span
              onClick={() => setisDropDowm((prev) => !prev)}
              className="border p-2 border-gray-600 rounded-full"
            >
              <FaUserAlt className="w-full h-full" />
            </span>
            {isDropDowm && (
              <div className="absolute shadow-lg py-3 -bottom-24 -right-4 w-full z-20 flex flex-col gap-3 border border-gray-100">
                <button>Sign In</button>
                <button>Sign Out</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const LargeNav = ({ user, isDropDowm, setisDropDowm }) => {

  return (
    <div className="lg:flex w-full items-center hidden justify-between px-14">
      <div className="gap-4 flex items-center justify-around">
        <div className="w-20">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="logo"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="w-3/4 flex bg-white shadow-md p-3 items-center gap-3 border border-gray-200 rounded">
        <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
          <span className="text-zomato-400">
            <HiLocationMarker />
          </span>
          <input
            type="text"
            placeholder="Delhi NCR"
            className="w-full focus:outline-none"
          />
          <IoMdArrowDropdown />
        </div>
        <div className="flex w-full items-center gap-2">
          <RiSearch2Line />
          <input
            type="search"
            placeholder="Search for restaurant, cuisine or a dish"
            className="w-full focus:outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 relative">
        {user?.fullname ? (
          <>
            <div
              onClick={() => setisDropDowm((prev) => !prev)}
              className="border border-gray-300 text-zomato-400 w-10 h-10 rounded-full"
            >
              <img
                src="https://cdn3.vectorstock.com/i/1000x1000/00/92/teen-boy-character-avatar-vector-11360092.jpg"
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
            {isDropDowm && (
              <div className="absolute shadow-lg py-3 -bottom-16 -right-0  w-32 bg-white z-20 flex flex-col gap-3 border border-gray-100">
                <button>Sign Out</button>
              </div>
            )}
          </>
        ) : (
          <>
            <span
              onClick={() => setisDropDowm((prev) => !prev)}
              className="border p-2 border-gray-600 rounded-full"
            >
              <FaUserAlt className="w-full h-full" />
            </span>
            {isDropDowm && (
              <div className="absolute shadow-lg py-3 -bottom-24 -right-4 w-32 z-20 bg-white flex flex-col gap-3 border border-gray-100">
                <button>Sign In</button>
                <button>Sign Out</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isDropDowm, setisDropDowm] = useState(false);

  const user = {
    fullname: "Ravi",
  };
  return (
    <>
      <nav className="p-4 lg:py-2  flex bg-white shadow-md lg:shadow-none lg: border-b-2 border-gray-100 w-full items-center">
        <MobileNav user={user} setisDropDowm={setisDropDowm} isDropDowm={isDropDowm} />
        <LargeNav user={user} setisDropDowm={setisDropDowm} isDropDowm={isDropDowm} />
      </nav>

    </>
  );
};

export default Navbar;
