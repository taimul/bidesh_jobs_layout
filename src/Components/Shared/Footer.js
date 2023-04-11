import React from "react";
import question from "../../Assets/question-icon.png";

const Footer = () => {
  return (
    <div className="bg-white p-16">
      <div className="container mx-auto max-w-6xl">
        <footer className="footer">
          <div className="hidden sm:inline-flex flex-col">
            <span className="footer-title text-black">আমাদের সম্পর্কে</span>
            <a className="link link-hover">এই ওয়েবসাইট সম্পর্কিত</a>
            <a className="link link-hover">শর্তাবলী এবং নীতিমালা</a>
            <a className="link link-hover">ফিডব্যাক</a>
          </div>
          <div className="hidden sm:inline-flex flex-col">
            <span className="footer-title text-black">
              চাকরিপ্রার্থীদের জন্য
            </span>
            <a className="link link-hover">নতুন অ্যাকাউন্ট</a>
            <a className="link link-hover">ক্যারিয়ার পরামর্শ</a>
            <a className="link link-hover">প্রশ্নাবলী</a>
          </div>
          <div className="hidden sm:inline-flex flex-col">
            <span className="footer-title text-black">নিয়োগদাতাদের জন্য</span>
            <a className="link link-hover">পণ্য/সার্ভিস</a>
            <a className="link link-hover">চাকরি পোস্ট</a>
            <a className="link link-hover">প্রশ্নাবলী</a>
          </div>
          <div className="mx-auto ">
            <span className="footer-title text-black">
              টুলস ও সামাজিক মিডিয়া
            </span>
            <a className="link link-hover mx-auto sm:mx-0">
              Download Mobile App
            </a>
            <a className="link link-hover mx-auto sm:mx-0">
              <img
                src="https://bdesh.bdjobs.com/images/google-play-badge.svg"
                alt=""
              />
            </a>
          </div>
          <div className=" mx-auto text-center sm:text-left">
            <span className="footer-title text-black sm:mx-0 mx-auto">
              যোগাযোগ
            </span>
            <a className="link link-hover">
              চাকরি সংক্রান্ত যেকোনো প্রয়োজনে সরাসরি
            </a>
            <div className="flex justify-center items-center">
              <div>
                <img src={question} alt="" className="" />
              </div>
              <div className="ml-2">
                <p className="text-black font-bold">সাহায্যের জন্য কল করুন</p>
                <p className="text-red-500 font-bold text-2xl">16479</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
