import React from "react";
import { FaFacebook, FaYoutube, FaUserCircle, FaPhone } from "react-icons/fa";
import jointVenture from "../../Assets/Joint_venture.png";

const Header = () => {
  return (
    <div className="bg-white">
      <header className="bg-[#ECEFF1] text-gray-900 p-2 text-xs hidden sm:block">
        <div className="">
          <div className="container mx-auto max-w-6xl font-bold">
            <div className="flex justify-between items-center">
              <div className="flex-1">
                <ul className="flex space-x-6">
                  <li>
                    <a href="https://bdjobs.com/">বিডিজবস্</a>
                  </li>
                  <li>
                    <a href="jobsearchbn.com">চাকরির খবর</a>
                  </li>
                  <li>
                    <a href="https://bdjobs.com/">চাকরিপ্রার্থীর একাউন্ট</a>
                  </li>
                  <li>
                    <a href="https://bdjobs.com/">
                      নিয়োগকারী সংস্থা/ বিদেশী নিয়োগকর্তা{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex items-center">
                <ul className="flex space-x-4">
                  <li>
                    <button className="bg-blue-500 rounded-full p-1 text-white">
                      <FaFacebook />
                    </button>
                  </li>
                  <li>
                    <button className="bg-red-500 rounded-full p-1 text-white">
                      <FaYoutube />
                    </button>
                  </li>
                </ul>
                <div className="lang ml-4 border-blue-500 border-2">
                  <button className="bg-blue-500 p-1 text-white font-thin">
                    বাংলা
                  </button>
                  <button className="p-1 font-thin">ENG</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Second Header start*/}
      <div className="navbar container mx-auto max-w-6xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li tabIndex={0}>
                <a href="/" className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <button className="hidden sm:block">
            <img
              src="https://bdesh.bdjobs.com/images/logo_bdesh.svg"
              alt=""
              className="w-40"
            />
          </button>
        </div>
        <div className="sm:hidden block">
          <img
            src="https://bdesh.bdjobs.com/images/logo_bdesh.svg"
            alt=""
            className="w-40"
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <img src={jointVenture} alt="" />
        </div>
        <div className="navbar-end text-sm">
          <div className="flex items-center hidden md:inline-block">
            <ul className="flex items-center">
              <li className="mr-4 ">
                <a href="/" className="flex items-center">
                  <FaUserCircle className="text-blue-700 mr-1 text-lg" />
                  <span className="hidden md:inline-block text-blue-400">
                    সাইন ইন / অ্যাকাউন্ট তৈরি
                  </span>
                </a>
              </li>
              <li>
                <a href="/" className="flex items-center text-gray-900">
                  <FaPhone className=" mr-1" />
                  <span className="hidden md:inline-block">যোগাযোগ</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
