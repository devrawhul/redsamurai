import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSecCard = ({ data }) => {
  const animateImgRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const animateImg = animateImgRef.current;

    // GSAP Animation for video reveal
    gsap.fromTo(
      animateImg,
      { top: "8vw" }, // Initial state
      {
        top: 0, // Final state
        scrollTrigger: {
          trigger: animateImg, // Element to trigger the animation
          start: "right 40%", // Start animation when the card is 40% from the right
          end: "left 40%", // End animation when the card is 40% from the left
          scrub: 1.5, // Smoothly animate on scroll
        },
      }
    );
    // Add a fullscreenchange event listener to handle exiting fullscreen
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        // Exit fullscreen mode
        ScrollTrigger.refresh(); // Recalculate scroll positions
        if (videoRef.current) {
          videoRef.current.muted = true; // Mute the video after exiting fullscreen
        }
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    // Cleanup
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleFullScreen = (e) => {
    // Check if the clicked element is the video
    if (e.target.tagName.toLowerCase() === "video" && videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen(); // Safari
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen(); // IE/Edge
      }
    }
  };

  return (
    <div
      className="projContainer relative flex flex-col justify-start sm:min-w-[20vw] sm:w-[20vw] sm:h-[36vw] h-auto min-w-[90vw] w-[90vw] cursor-pointer mx-auto" // Adjusted for mobile view
      onClick={handleFullScreen} // Trigger fullscreen on card click
    >
      <div
        ref={animateImgRef}
        className="animateImg rounded-3xl sm:rounded-[1.6vw] overflow-hidden relative z-1 h-[58vh] sm:h-full w-full" // Adjusted height for mobile view
      >
        <video
          ref={videoRef}
          className="media w-full h-full vid played object-cover" // Use object-cover for better scaling
          loop
          playsInline
          autoPlay
          muted
        >
          <source src={data.link} />
        </video>
      </div>
      <div className="relative mt-4 sm:mt-[1.4vw] text-left sm:text-left">
        <div className="sm:text-[1vw] text-lg uppercase font-bold">
          WE PARTNERED WITH
        </div>
        <div className="my-2 sm:my-[.6vw] uppercase font-bold sm:text-[1.25vw] text-2xl leading-none">
          <span className="cursive font-light">M</span>
          <span>ARIAH CAREY TO CREATE CONTENT WITH </span>
          <span className="cursive font-light">K</span>
          <span>AY JEWELERS</span>
        </div>
        <p className="text-lg sm:text-[1vw]">{data.brand}</p>
      </div>
    </div>
  );
};

export default ProjectsSecCard;
