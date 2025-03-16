import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutSec = () => {
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);

  useEffect(() => {
    // GSAP animation for desktop text elements
    const desktopElements = desktopRef.current.children;
    gsap.fromTo(
      desktopElements,
      {
        opacity: 0.25,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.35,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: desktopRef.current,
          start: "top 70%",
          end: "bottom 30%",
          scrub: 1, // Smoothly animate on scroll
        },
      }
    );

    // GSAP animation for each image individually (desktop)
    const desktopImageSpans =
      desktopRef.current.querySelectorAll("span.bg-gray-500");
    desktopImageSpans.forEach((span) => {
      gsap.fromTo(
        span,
        {
          width: "0vw",
        },
        {
          width: "8vw",
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: span, // Use the image itself as the trigger
            start: "top 80%", // Start animation when the top of the image is 80% in view
            end: "top 30%", // End animation when the top of the image is 30% in view
            scrub: 1, // Smoothly animate on scroll
          },
        }
      );
    });

    // GSAP animation for mobile text elements
    const mobileElements = mobileRef.current.children;
    gsap.fromTo(
      mobileElements,
      {
        opacity: 0.25,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.35,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mobileRef.current,
          start: "top 70%",
          end: "bottom 30%",
          scrub: 1, // Smoothly animate on scroll
        },
      }
    );

    // GSAP animation for each image individually (mobile)
    const mobileImageSpans =
      mobileRef.current.querySelectorAll("span.bg-gray-500");
    mobileImageSpans.forEach((span) => {
      gsap.fromTo(
        span,
        {
          width: "0vw",
        },
        {
          width: "8vw",
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: span, // Use the image itself as the trigger
            start: "top 80%", // Start animation when the top of the image is 80% in view
            end: "top 30%", // End animation when the top of the image is 30% in view
            scrub: 1, // Smoothly animate on scroll
          },
        }
      );
    });
  }, []);

  return (
    <div className="px-4 text-white sm:py-[4vw] h-screen sm:h-auto text-center flex flex-col justify-center items-center">
      {/* mobile */}
      <div
        ref={mobileRef}
        className="mobile mx-auto sm:hidden uppercase font-bold text-[8vw] w-[19rem] leading-none"
      >
        <p>from</p>
        <p>powerful</p>
        <p>
          <span className="cursive">B</span>randing
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
      <div
        ref={desktopRef}
        className="dsktp hidden mx-auto sm:block uppercase font-bold leading-none sm:text-[6.4vw] sm:w-[80vw] sm:leading-[6.5vw]"
      >
        <p className="relative flex items-center justify-center">
          <span className="mr-[.5vw]">from </span>
          <span className="bg-gray-500 relative inline-block w-[8vw] rounded-[.8vw] overflow-hidden h-[5.4vw]">
            <img
              className="w-full h-full object-cover"
              src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
              alt=""
            />
          </span>
          <span className="ml-[.5vw]">powerful</span>
        </p>

        <p className="flex items-center justify-center">
          <span className="cursive relative top-[1vw]">B</span>
          <span className="mr-[.5vw]">randing</span>
          <span className="bg-gray-500 relative inline-block w-[8vw] rounded-[.8vw] overflow-hidden h-[5.4vw]">
            <img
              className="w-full h-full object-cover"
              src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
              alt=""
            />
          </span>
          <span className="ml-[.5vw]">and</span>
        </p>

        <p>impactful</p>

        <p className="flex items-center justify-center">
          <span className="mr-[.5vw]">marketing</span>
          <span className="bg-gray-500 relative inline-block w-[8vw] rounded-[.8vw] overflow-hidden h-[5.4vw]">
            <img
              className="w-full h-full object-cover"
              src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
              alt=""
            />
          </span>
          <span className="ml-[.5vw]">by</span>
        </p>

        <p className="relative flex items-center justify-center">
          <span className="mr-[.5vw]">industry</span>
          <span className="ml-[.5vw]">experts</span>
        </p>

        <p className="flex items-center justify-center">
          <span className="mr-[.5vw]">to</span>
          <span className="bg-gray-500 relative inline-block w-[8vw] rounded-[.8vw] overflow-hidden h-[5.4vw]">
            <img
              className="w-full h-full object-cover"
              src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
              alt=""
            />
          </span>
          <span className="ml-[.5vw]">engaging</span>
        </p>

        <p>
          <span>offline </span>
          <span>promotional</span>
        </p>

        <p className="flex items-center justify-center">
          <span className="cursive relative left-[-.6vw] top-[1vw]">C</span>
          <span>ampaigns,</span>
          <span className="bg-gray-500 relative inline-block w-[8vw] rounded-[.8vw] overflow-hidden h-[5.4vw]">
            <img
              className="w-full h-full object-cover"
              src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
              alt=""
            />
          </span>
          <span className="ml-[.5vw]">we've</span>
        </p>

        <p>
          <span>got&nbsp;</span>
          <span>you&nbsp;</span>
          <span>covered.</span>
        </p>
      </div>

      <div className="leading-7 sm:leading-[2.1vw] mt-10 text-2xl sm:text-[2vw] text-[#999999] sm:w-full sm:flex sm:justify-end sm:px-[4vw] sm:py-[4vw]">
        <p className="sm:w-1/2 sm:text-left">
          Served 50+ brands across different segments with Branding advertising
          social media marketing, advertising, video edits ,web development and
          beyond From strategy to execution, we ensure every brand we work with
          achieves its full potential in the digital landscape.
        </p>
      </div>
    </div>
  );
};

export default AboutSec;
