import React from "react";
import TestimonialsSec from "./TestimonialsSec";
import { GoArrowRight } from "react-icons/go";

const ServicesSec = () => {
  return (
    <div className="relative  w-full h-full ">
      <div className="opacity-25 sticky top-0  ">
        <img
          className=" h-[110vh] sm:h-[full] sm:w-[100vw] object-cover"
          src="https://rhythm-influence.transforms.svdcdn.com/staging/Full-Set-BTS-1.png?w=1440&h=1000&q=85&auto=format&fit=crop&dm=1729169791&s=bae1379dcf2d66587aca50212245bb27"
          alt=""
        />
      </div>

      {/* Content container -mt-132*/}
      <div className="relative -top-36 sm:-top-0 p-4 sm:px-[8vw] sm:pb-[8vw]">
        <h3 className="flex  gap-3 sm:gap-[1vw] sm:w-[45vw] sm:leading-[3.8vw] text-[12vw] sm:text-[5vw] sm:text-white uppercase flex-wrap leading-8 font-bold mb-16 sm:mb-[4vw]">
          <span>A</span>
          <span className="cursive -mr-4">T</span>
          <span>alent</span>
          <span>First</span>
          <span>Approach</span>
          <span>To</span>
          <span>FUll</span>
          <span className="cursive -mr-3">S</span>
          <span>ervice.</span>
          <span>working</span>
          <span>with</span>
          <span>content</span>
          <span>creators</span>
          <span>to</span>
          <span className="pink flex-wrap flex gap-3">
            <span>bring</span>
            <span className=" -mr-3">B</span>
            <span>rand</span>
            <span>stories</span>
            <span>to</span>
            <span>life.</span>
          </span>
        </h3>
        <ol className="text-2xl sm:text-white sm:ml-[52vw] sm:mr-[7vw] sm:text-[1.8vw] gap-2 sm:gap-[.2vw] flex flex-col list-decimal list-inside">
          <li className="border-b sm:h-[3vw] border-white/75">
            Strategy & Identity
          </li>
          <li className="border-b sm:h-[3vw] border-white/75">
            Content Creation
          </li>
          <li className="border-b sm:h-[3vw] border-white/75">
            Social Media Management
          </li>
          <li className="border-b sm:h-[3vw] border-white/75">
            Brand Development
          </li>
          <li className="border-b sm:h-[3vw] border-white/75">
            Video Production
          </li>
          <li className="border-b sm:h-[3vw] border-white/75">
            Marketing Strategy
          </li>
          {/* buttons */}
          <div className="button my-8 sm:my-[2.5vw] text-xl sm:text-[1vw] flex gap-4 justify-start items-center">
            <div className="h-8 w-8 pinkbg justify-center items-center flex rounded-full">
              <div className="text-black">
                <GoArrowRight />
              </div>
            </div>
            <h4 className="capitalize ">See Our services</h4>
          </div>
        </ol>

        <div className="mt-32 sm:mt-[2vw] sm:w-[26vw] sm:leading-[2rem] leading-2rem sm:text-white sm:text-[1.4vw]">
          <p className="">
            From talent discovery to advanced campaign analytics, our team
            handles every step of the process for successful partnerships with
            your brand.
          </p>
          {/* buttons */}
          <div className="button my-8 sm:my-[2.5vw] text-xl sm:text-[1vw] flex gap-4 justify-start items-center">
            <div className="h-8 w-8 pinkbg justify-center items-center flex rounded-full">
              <div className="text-black">
                <GoArrowRight />
              </div>
            </div>
            <h4 className="capitalize ">About Our company</h4>
          </div>
        </div>
      </div>
      <TestimonialsSec />
    </div>
  );
};

export default ServicesSec;
