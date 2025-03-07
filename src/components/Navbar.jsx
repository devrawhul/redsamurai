import React, { useState } from "react";
import { motion } from "motion/react";

const Navbar = () => {
  const [display, setDisplay] = useState("hidden");
  const [hamText, setHamText] = useState("Menu");
  const [invert, setInvert] = useState("");

  const menu = ["Our Work", "Company", "Services"];
  if (window.innerWidth <= 768) {
    menu.push("Get In Touch");
  }

  function toggleMenu() {
    if (window.innerWidth <= 768) {
      setDisplay(display === "hidden" ? "fixed" : "hidden");
      setHamText(hamText === "Menu" ? "Close" : "Menu");
      setInvert(invert === "" ? "invert" : "");
    }
  }

  return (
    <nav
      className={` text-md sm:py-[1vw] z-[99] py-4 sm:px-[3.5vw]  fixed left-0 top-0 flex justify-between items-center w-full`}
    >
      {/* Logo */}
      <div
        className={`${invert}  z-[99] px-6 sm:px-0 text-white  flex justify-between items-center sm:w-auto w-full `}
      >
        <div className="text-4xl sm:text-[3vw] font-bold cursor-pointer">
          <img
            className="w-32 sm:w-[8vw]"
            img
            src="https://iili.io/3KGl6jp.png"
            alt=""
          />
          {/* <span className="cursive  ">R</span>
          <span>ed</span> */}
        </div>

        {/* Ham */}
        <div className="sm:hidden cursor-pointer " onClick={toggleMenu}>
          {hamText}
        </div>
      </div>

      {/* Menus */}
      <div
        className={`sm:py-0 sm:flex pt-46  sm:px-0 px-6 ${display} top-0 left-0 sm:bg-transparent  bg-[#d6d6d6] text-black  w-screen sm:w-auto sm:h-auto h-screen`}
      >
        <ul
          className={`  text-5xl sm:text-[1vw] flex-col sm:flex-row flex gap-4 sm:gap-[3.5vw]  sm:justify-between mb-36 sm:mb-0 border-yellow-500  overflow-hidden`}
        >
          {menu.map((item, index) => (
            <motion.li
              data-content={item}
              className="cursor-pointer after:cursor-pointer relative  after:text-nowrap sm:text-white text-black  after:absolute after:top-8 after:left-0   sm:after:content-[attr(data-content)]"
              key={index}
              whileHover={{
                opacity: 1,
                y: -33,
              }}
              initial={{
                opacity: 0.7,
              }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
              }}
            >
              <a href="">{item}</a>
            </motion.li>
          ))}
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
      <motion.div
        whileHover="hover"
        className=" cursor-pointer hidden sm:flex button my-8 sm:my-0 sm:gap-[.8vw] gap-4 justify-start items-center"
      >
        <div className="h-8 w-8 sm:w-[1.8vw] sm:h-[1.8vw] pinkbg justify-center items-center overflow-hidden flex rounded-full text-black">
          <motion.div
            variants={{
              hover: {
                x: 32,
                transition: {
                  duration: 0.3,
                  ease: "easeInOut",
                },
              },
            }}
            className=" text-[1vw]  before:content-['→'] relative before:text-nowrap before:absolute before:top-[-.4px]  before:left-[-2rem]   "
          >
            <span className="leading-none relative top-[-.4px]">→</span>
          </motion.div>
        </div>
        <div className="relative  overflow-hidden ">
          <motion.h4
            variants={{
              hover: {
                y: -33,
                transition: {
                  duration: 0.3,
                  ease: "easeInOut",
                },
              },
            }}
            className="sm:text-[1vw] text-white relative after:content-['Get_in_Touch'] after:text-nowrap after:absolute after:left-0  after:top-8"
          >
            Get in Touch
          </motion.h4>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
