import React from "react";
import { motion, useScroll } from "motion/react";
import { easeInOut } from "motion";

const AboutSec = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="px-4 text-white sm:py-[4vw]  h-screen sm:h-auto text-center flex flex-col justify-center  items-center ">
      {/* mobile */}
      <div className="mobile mx-auto sm:hidden  uppercase font-bold text-[8vw] w-[19rem] leading-none ">
        <p>from</p>
        <p>powerful</p>
        <p>
          <span className=" cursive">B</span>randing
        </p>
        <p>
          <span>& </span>
          <span>impactful</span>
        </p>
        <p>marketing</p>
        <p>
          <span>by </span>
          <span>industry</span>
        </p>
        <p>experts</p>
        <p>
          <span>to </span>
          <span>engaging</span>
        </p>
        <p>offline</p>
        <p>promotional</p>
        <p>
          <span className="cursive mr-1">C</span>
          <span>ampaigns,</span>
        </p>
        <p>we've got</p>
        <p>you covered.</p>
      </div>

      {/* desktop */}
      <motion.div
        whileInView="fadeScale"
        transition={{
          duration: 0.3,
          staggerChildren: 0.35,
          ease: easeInOut,
        }}
        viewport={{
          once: "true",
          margin: "-450px",
        }}
        className="dsktp hidden mx-auto sm:block uppercase font-bold leading-none sm:text-[6.4vw] sm:w-[80vw] sm:leading-[6.5vw]"
      >
        <motion.p
          initial={{ opacity: 0.15 }}
          variants={{
            fadeScale: {
              opacity: 1,
            },
          }}
          className=" relative flex items-center justify-center"
        >
          <span className="mr-[.5vw]">from </span>
          <motion.span
            initial={{ width: "0vw" }}
            variants={{
              fadeScale: {
                width: "8vw",
              },
            }}
            className="bg-gray-500  relative inline-block w-[8vw] rounded-[.8vw]  overflow-hidden  h-[5.4vw]  "
          >
            <img
              className="w-full h-full object-cover"
              src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
              alt=""
            />
          </motion.span>
          <span className="ml-[.5vw]">powerful</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0.15 }}
          variants={{
            fadeScale: {
              opacity: 1,
            },
          }}
          className="flex items-center justify-center"
        >
          <span className="cursive  relative top-[1vw]">B</span>
          <span className="mr-[.5vw]"> randing</span>
          <motion.span
            initial={{ width: "0vw" }}
            variants={{
              fadeScale: {
                width: "8vw",
              },
            }}
            className="bg-gray-500 relative inline-block w-[8vw] rounded-[.8vw]  overflow-hidden  h-[5.4vw]  "
          >
            <img
              className="w-full h-full object-cover"
              src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
              alt=""
            />
          </motion.span>
          <span className="ml-[.5vw]"> and</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0.15 }}
          variants={{
            fadeScale: {
              opacity: 1,
            },
          }}
        >
          impactful
        </motion.p>

        <motion.p
          initial={{ opacity: 0.15 }}
          variants={{
            fadeScale: {
              opacity: 1,
            },
          }}
          className="flex items-center justify-center"
        >
          <span className="mr-[.5vw]">marketing</span>
          <motion.span
            initial={{ width: "0vw" }}
            variants={{
              fadeScale: {
                width: "8vw",
              },
            }}
            className="bg-gray-500 relative inline-block w-[8vw] rounded-[.8vw]  overflow-hidden  h-[5.4vw]  "
          >
            <img
              className="w-full h-full object-cover"
              src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
              alt=""
            />
          </motion.span>
          <span className="ml-[.5vw]"> by</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0.15 }}
          variants={{
            fadeScale: {
              opacity: 1,
            },
          }}
          className=" relative flex items-center justify-center"
        >
          <span className="mr-[.5vw]">industry</span>
          <span className="ml-[.5vw]">experts</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0.15 }}
          variants={{
            fadeScale: {
              opacity: 1,
            },
          }}
          className="flex items-center justify-center"
        >
          <span className="mr-[.5vw]">to</span>
          <motion.span
            initial={{ width: "0vw" }}
            variants={{
              fadeScale: {
                width: "8vw",
              },
            }}
            className="bg-gray-500 relative inline-block w-[8vw] rounded-[.8vw]  overflow-hidden  h-[5.4vw]  "
          >
            <img
              className="w-full h-full object-cover"
              src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
              alt=""
            />
          </motion.span>
          <span className="ml-[.5vw]">engaging</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0.15 }}
          variants={{
            fadeScale: {
              opacity: 1,
            },
          }}
        >
          <span>offline </span>
          <span>promotional</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0.15 }}
          variants={{
            fadeScale: {
              opacity: 1,
            },
          }}
          className="flex items-center justify-center"
        >
          <span className="cursive  relative left-[-.6vw] top-[1vw]">C</span>
          <span>ampaigns,</span>
          <motion.span
            initial={{ width: "0vw" }}
            variants={{
              fadeScale: {
                width: "8vw",
              },
            }}
            className="bg-gray-500 relative inline-block w-[8vw] rounded-[.8vw]  overflow-hidden  h-[5.4vw]  "
          >
            <img
              className="w-full h-full object-cover"
              src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
              alt=""
            />
          </motion.span>
          <span className="ml-[.5vw]">we've</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0.15 }}
          variants={{
            fadeScale: {
              opacity: 1,
            },
          }}
        >
          <span>got</span>
          <span> you </span>
          <span>covered.</span>
        </motion.p>
      </motion.div>

      <div className="leading-7 sm:leading-[2.1vw] mt-10 text-2xl sm:text-[2vw] text-[#999999] sm:w-full sm:flex sm:justify-end sm:px-[4vw]  sm:py-[4vw] ">
        <p className="sm:w-1/2 sm:text-left">
          With more than 100+ direct connections to celebrity talent agencies,
          premium influencer representation companies, mid-tier, and
          micro-creator networks, we bring unparalleled access to the best
          talent in the world, allowing us to utilize every influential voice in
          the industry.
        </p>
      </div>
    </div>
  );
};

export default AboutSec;
