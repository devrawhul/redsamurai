import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSecCard = ({ data }) => {
  const animateImgRef = useRef(null);

  useEffect(() => {
    const animateImg = animateImgRef.current;

    // Animation for the "animateImg" element
    gsap.fromTo(
      animateImg,
      {
        top: "8vw", // Initial position (covering the text)
      },
      {
        top: 0,
        stagger: 0.5, // Move up by 8vw (revealing the text)
        scrollTrigger: {
          trigger: animateImg, // Trigger when the element comes into view
          start: "top center", // Start animation when the top of the element hits the center of the viewport
          end: "bottom center", // End animation when the bottom of the element hits the center of the viewport
          scrub: 1, // Smooth scrubbing
          // For debugging (remove in production)
        },
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="projContainer relative flex top-[3.5vw] flex-col justify-start sm:min-w-[20vw] sm:w-[20vw] sm:h-[36vw] h-auto min-w-[20rem] w-[20rem] ">
      <div
        ref={animateImgRef}
        className="animateImg  rounded-3xl sm:rounded-[1.6vw] overflow-hidden relative z-1 h-full w-full"
      >
        <video
          className="media w-full vid played object-contain"
          loop
          playsInline
          poster="https://rhythm-influence.transforms.svdcdn.com/staging/Mariah_Poster.png?w=320&h=560&auto=compress%2Cformat&fit=crop&dm=1733156415&s=d2a0bf388444e9e1d7f6dc7d78ec352e"
        >
          <source src={data.link} />
        </video>
      </div>
      <div className="relative">
        <div className="mt-4 sm:mt-[1.4vw] sm:text-[1vw] text-lg uppercase font-bold">
          We Partnered with
        </div>
        <div className="my-4 sm:my-[.6vw] uppercase font-bold sm:text-[1.25vw] text-2xl leading-none">
          <span className="cursive font-light">M</span>
          <span>ariah carey to create content with</span>
          <span className="cursive font-light">K</span>
          <span>ay jewelers</span>
        </div>
        <p className="text-lg sm:text-[1vw]">{data.brand}</p>
      </div>
    </div>
  );
};

export default ProjectsSecCard;
