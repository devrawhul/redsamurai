import React from "react";

const Footer = () => {
  return (
    <div className="text-[#999]     ">
      <div>
        <img src="" alt="" />
      </div>

      <div className=" sm:mt-[2vw] justify-between sm:flex-row gap-16 flex-col sm:px-[3.5vw] p-6">
        <div className=" sm:flex justify-between sm:mb-[8vw]">
          <ul className="flex  sm:text-[2.8vw] leading-10 sm:leading-[3vw] sm:gap-0 items-start font-bold uppercase flex-col text-3xl">
            <li>Our Work</li>
            <li>Company</li>
            <li>Services</li>
            <li>Get In Touch</li>
          </ul>
          <ul className="sm:text-[1vw] leading-8 sm:leading-[1.8vw] text-white/80 sm:m-0 mb-24 sm:my-0 mt-12 text-left">
            <li>Instagram</li>
            <li>Linkedin</li>
          </ul>
        </div>

        <div className=" sm:text-[.8vw] text-xs uppercase sm:flex justify-between">
          <p className="  text-white/80 hidden sm:block ">
            Copyright © 2025 Red Samurai Media
          </p>
          <p className="">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
