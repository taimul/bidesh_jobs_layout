import React, { useState } from "react";
import { IoMdPricetag } from "react-icons/io";
import Content1 from "./Content1";
import Content2 from "./Content2";
import { BiRightArrow, BiArrowToRight } from "react-icons/bi";
import bg1 from "../../../Assets/thousand_cv.png";
import bg2 from "../../../Assets/make-bio.png";

const Categories = () => {
  const [activeButton, setActiveButton] = useState("button1");
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton1 = () => {
    setActiveButton("button1");
  };

  const toggleButton2 = () => {
    setActiveButton("button2");
  };
  //handle expand
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#ECEFF1]  p-5">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between md:w-4/5">
          <div className="flex items-center font-bold text-black">
            <span>
              <IoMdPricetag />
            </span>
            <h3>পেশা</h3>
          </div>
          <div className="flex">
            <div className="border-blue-500 border-2 rounded text-xs">
              <button
                className={`px-4 py-2 h-10 ${
                  activeButton === "button1"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={toggleButton1}
              >
                স্পেশাল স্কিলড
              </button>
              <button
                className={`px-4 py-2 h-10 ${
                  activeButton === "button2"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={toggleButton2}
              >
                জেনারেল
              </button>
            </div>
          </div>
        </div>
        <div className="lg:flex">
          <div className="md:w-4/5">
            {activeButton === "button1" ? <Content1 /> : <Content2 />}
            <div className="grid md:grid-cols-2 gap-5 mt-5 ">
              <div className="bg-[#036DC5] bg-no-repeat rounded-lg md:h-40 overflow-hidden">
                <div className="flex p-5">
                  <div className="w-1/3">
                    <img src={bg1} alt="" className="" />
                  </div>
                  <div className="w-2/3">
                    <p className="text-sm text-white mb-2">
                      হাজারো চাকরির মাঝে আপনার পছন্দের চাকরি খুঁজে আবেদন করতে
                      জয়েন করুন আমাদের সাইটে।
                    </p>
                    <button className="w-32 h-10 bg-[#FFDC79] text-black rounded-lg text-xs font-bold">
                      একাউণ্ট খুলুন
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#036DC5] bg-no-repeat rounded-lg md:h-40 overflow-hidden">
                <div className="flex p-5">
                  <div className="w-1/3">
                    <img src={bg2} alt="" className="" />
                  </div>
                  <div className="w-2/3">
                    <h4 className="text-white mb-2">
                      বায়োডাটা তৈরি করতে চান?
                    </h4>
                    <p className="text-sm text-white mb-2">
                      সহজ কয়েকটি ধাপে এখনই স্বল্প সময়েই তৈরি করুন আপনার সিভি
                    </p>
                    <button className="w-32 h-10 bg-[#FFDC79] text-black rounded-lg text-xs font-bold">
                      একাউণ্ট খুলুন
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/5">
            <div className=" bg-white h-fit mt-5 md:ml-4 rounded-lg p-3">
              <h4 className="text-black font-bold text-xs">
                বিদেশ জবস্ এর গাইডলাইন
              </h4>
              <ul className="text-xs text-gray-600">
                <li className="mt-3 flex items-center">
                  <BiRightArrow />
                  "বিদেশ জবস্"-নির্দেশিকা
                </li>
                <li className="mt-3 flex items-center">
                  <BiRightArrow />
                  বিদেশে যাওয়ার গাইডলাইন
                </li>
                <li className="mt-3 flex items-center">
                  <BiRightArrow />
                  বিদেশে চাকরির পূর্ব প্রস্তুতি
                </li>
                <li
                  onClick={handleClick}
                  className="cursor-pointer mt-3 flex items-center"
                >
                  <BiRightArrow />
                  বিদেশে যাওয়ার প্রাসঙ্গিক কাজ
                </li>
                <ul
                  className={`ml-2 ${
                    isOpen ? "block" : "hidden"
                  } transition duration-1000 ease-in-out`}
                >
                  <li className="m-3 flex items-center">
                    <BiRightArrow />
                    নাম নিবন্ধন
                  </li>
                  <li className="m-3 flex items-center">
                    <BiRightArrow />
                    নাগরিক ও জন্মসনদ তৈরি
                  </li>
                  <li className="m-3 flex items-center">
                    <BiRightArrow />
                    নাগরিক সনদপত্র পেতে করণীয়
                  </li>
                  <li className="m-3 flex items-center">
                    <BiRightArrow />
                    জন্ম সনদপত্র পেতে করণীয়
                  </li>
                  <li className="m-3 flex items-center">
                    <BiRightArrow />
                    পাসপোর্ট তৈরি
                  </li>
                  <li className="m-3 flex items-center">
                    <BiRightArrow />
                    ভিসা সংগ্রহ ও যাচাই
                  </li>
                  <li className="m-3 flex items-center">
                    <BiRightArrow />
                    চাকরির চুক্তিপত্র
                  </li>
                  <li className="m-3 flex items-center">
                    <BiRightArrow />
                    ব্যাংক অ্যাকাউন্ট তৈরি
                  </li>
                  <li className="m-3 flex items-center">
                    <BiRightArrow />
                    স্বাস্থ্য পরীক্ষা
                  </li>
                  <li className="m-3 flex items-center">
                    <BiRightArrow />
                    বিএমইটি'র ব্রিফিং
                  </li>
                  <li className="m-3 flex items-center">
                    <BiRightArrow />
                    স্মার্ট বা ইমিগ্রেশন ক্লিয়ারেন্স কার্ড
                  </li>
                </ul>
                <li className="mt-3 flex items-center">
                  <BiRightArrow />
                  বিদেশের যাত্রাপথে করনীয়
                </li>
                <li className="mt-3 flex items-center">
                  <BiRightArrow />
                  বিদেশে জীবনযাত্রা
                </li>
              </ul>
            </div>
            <div className="bg-white h-fit mt-5 md:ml-4 rounded-lg p-3">
              <h4 className="text-black font-bold text-xs">
                সরকারি গুরুত্বপূর্ণ লিংক সমূহ
              </h4>
              <ul className="text-xs text-gray-600">
                <li className="mt-3 flex ">
                  <BiArrowToRight />
                  ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তর
                </li>
                <li className="mt-3 flex ">
                  <BiArrowToRight />
                  বাংলাদেশ কারিগরি শিক্ষা বোর্ড
                </li>
                <li className="mt-3 flex ">
                  <BiArrowToRight />
                  জনশক্তি কর্মসংস্থান ও প্রশিক্ষণ ব্যুরো
                </li>
                <li className="mt-3 flex ">
                  <BiArrowToRight />
                  প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয়
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
