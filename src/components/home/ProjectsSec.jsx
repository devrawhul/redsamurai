import React from "react";
import ProjectsSecCard from "./ProjectsSecCard";

const ProjectsSec = () => {
  const PrCardData = [
    {
      link: "https://example.com/video1.mp4",
      brand: "Essentia Homes",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      link: "https://example.com/video1.mp4",
      brand: "MHV Media",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      link: "https://example.com/video1.mp4",
      brand: "Eicher Motors",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      link: "https://example.com/video1.mp4",
      brand: "Essentia Homes",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      link: "https://example.com/video1.mp4",
      brand: "MHV Media",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      link: "https://example.com/video1.mp4",
      brand: "Eicher Motors",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      link: "https://example.com/video1.mp4",
      brand: "Essentia Homes",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      link: "https://example.com/video1.mp4",
      brand: "MHV Media",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      link: "https://example.com/video1.mp4",
      brand: "Eicher Motors",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
  ];
  return (
    <div className="overflow-hidden w-full flex justify-center flex-col sm:py-[4vw]  py-12">
      <h3 className="sm:px-[3.5vw] px-6 uppercase text-xs sm:text-[1vw] sm:mb-[-1.6vw]  mb-8">
        Previous work
      </h3>
      <div className="relative w-full justify-self-start flex gap-12 sm:gap-[2.2vw] px-4 flex-nowrap  ">
        {PrCardData.map((data, index) => (
          <ProjectsSecCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSec;
