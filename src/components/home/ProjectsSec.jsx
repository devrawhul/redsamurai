import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectsSecCard from "./ProjectsSecCard";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSec = () => {
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    const cardsContainer = cardsContainerRef.current;

    // Ensure the container starts from 100% right
    gsap.set(cardsContainer, { x: "100vw" });

    // Calculate the total horizontal scroll distance
    const totalScrollWidth = cardsContainer.scrollWidth;

    // Horizontal scroll animation
    gsap.to(cardsContainer, {
      x: `-${totalScrollWidth}px`,
      ease: "none",
      scrollTrigger: {
        trigger: ".wrpr",
        start: "top top",
        end: () => `+=${totalScrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const PrCardData = [
    {
      link: "projects/clip1.mp4",
      brand: "Essentia Environments",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      link: "projects/clip5.mp4",
      brand: "Sardar Exclusive",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      link: "projects/clip3.mp4",
      brand: "Essentia Environments",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      link: "projects/clip2.mp4",
      brand: "Essentia Environments",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      link: "projects/clip4.mp4",
      brand: "DB Valves",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      link: "projects/clip6.mp4",
      brand: "ElectroRide",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      link: "projects/clip7.mp4",
      brand: "VC Panel",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      link: "projects/clip8.mp4",
      brand: "Eicher Motors",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      link: "projects/clip9.mp4",
      brand: "Eicher Motors",
      desc: "Lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <div className="wrpr   overflow-hidden w-full flex justify-center flex-col sm:py-[4vw] sm:h-[100vh]  sticky top-0 py-12">
      <h3 className="sm:px-[3.5vw] px-6 pt-6 sm:pt-0 uppercase text-xs sm:text-[1vw] sm:mb-[-1.6vw] mb-4">
        Previous work
      </h3>
      <div className="relative w-full px-4 cntnt">
        <div
          ref={cardsContainerRef}
          className="cardss relative  flex gap-12 sm:gap-[2.2vw] flex-nowrap"
        >
          {PrCardData.map((data, index) => (
            <ProjectsSecCard key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSec;
