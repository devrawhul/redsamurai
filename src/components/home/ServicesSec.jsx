import React from "react";
import TestimonialsSec from "./TestimonialsSec";
import { GoArrowRight } from "react-icons/go";
import { motion } from "motion/react";
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
          <motion.div
            whileHover="hover"
            className=" cursor-pointer sm:pt-[2vw] flex button my-8 sm:my-0 sm:gap-[.8vw] gap-4 justify-start items-center"
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
                className=" sm:text-[1vw] text-2xl   before:content-['→'] relative before:text-nowrap before:absolute before:top-[-.4px]  before:left-[-2rem]   "
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
                className="sm:text-[1vw] text-xl text-white relative after:content-['See_our_services'] after:text-nowrap after:absolute after:left-0 capitalize after:top-8"
              >
                See our services
              </motion.h4>
            </div>
          </motion.div>
        </ol>

        <div className="mt-32 sm:mt-[2vw]  sm:w-[26vw] sm:leading-[2rem] leading-2rem sm:text-white sm:text-[1.4vw]">
          <p className="">
            From talent discovery to advanced campaign analytics, our team
            handles every step of the process for successful partnerships with
            your brand.
          </p>
          {/* buttons */}
          <motion.div
            whileHover="hover"
            className=" cursor-pointer sm:pt-[2vw] flex button my-8 sm:my-0 sm:gap-[.8vw] gap-4 justify-start items-center"
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
                className=" sm:text-[1vw] text-2xl   before:content-['→'] relative before:text-nowrap before:absolute before:top-[-.4px]  before:left-[-2rem]   "
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
                className="sm:text-[1vw] text-xl text-white relative after:content-['About_our_company'] after:text-nowrap after:absolute after:left-0 capitalize after:top-8"
              >
                About our company
              </motion.h4>
            </div>
          </motion.div>
        </div>
      </div>
      <TestimonialsSec />
    </div>
  );
};

export default ServicesSec;
