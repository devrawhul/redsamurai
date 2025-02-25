import React, { useState, useRef } from "react";
import { GoArrowRight } from "react-icons/go";

const Navbar = () => {
  const [display, setDisplay] = useState("hidden");
  const [hamText, setHamText] = useState("Menu");
  const [invert, setInvert] = useState("");

  function toggleMenu() {
    if (window.innerWidth <= 768) {
      setDisplay(display === "hidden" ? "fixed" : "hidden");
      setHamText(hamText === "Menu" ? "Close" : "Menu");
      setInvert(invert === "" ? "invert" : "");
    }
  }

  return (
    <nav
      className={` text-md sm:py-[1vw] z-[99] py-10 sm:px-[3.5vw]  fixed left-0 top-0 flex justify-between items-center w-full`}
    >
      {/* Logo */}
      <div
        className={`${invert}  z-[99] px-6 sm:px-0 text-white  flex justify-between items-center sm:w-auto w-full `}
      >
        <div className="text-4xl sm:text-[3vw] font-bold cursor-pointer">
          <img src="" alt="" />
          <span className="cursive  ">R</span>
          <span>ed</span>
        </div>

        {/* Ham */}
        <div className="sm:hidden cursor-pointer " onClick={toggleMenu}>
          {hamText}
        </div>
      </div>

      {/* Menus */}
      <div
        className={`sm:py-0 sm:flex pt-46  sm:px-0 px-6 ${display} top-0 left-0 sm:bg-transparent bg-[#d6d6d6] text-black sm:text-white/65 w-screen sm:w-auto sm:h-auto h-screen`}
      >
        <ul
          className={`  text-5xl sm:text-[1vw] flex-col sm:flex-row flex gap-4 sm:gap-[4vw] sm:justify-between mb-36 sm:mb-0 `}
        >
          <li>
            <a href="#home">Our Work</a>
          </li>
          <li>
            <a href="#about">Company</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact" className="sm:hidden">
              Get In Touch
            </a>
          </li>
        </ul>

        {/* social */}
        <ul
          className={` sm:hidden absolute top-[80vh] pb-32  gap-2 ${display} flex-col`}
        >
          <li>Instagram</li>
          <li>LinkedIn</li>
        </ul>
      </div>

      {/* buttons */}
      <div className=" cursor-pointer hidden sm:flex button my-8 sm:my-0 sm:gap-[.8vw] gap-4 justify-start items-center">
        <div className="h-8 w-8 sm:w-[1.6vw] sm:h-[1.6vw] pinkbg justify-center items-center flex rounded-full">
          <div className="text-black text-[1vw]">
            <GoArrowRight />
          </div>
        </div>
        <h4 className="sm:text-[1vw] text-white">Get in Touch</h4>
      </div>
    </nav>
  );
};

export default Navbar;
