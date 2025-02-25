import React from "react";

const ProjectsSecCard = ({ data }) => {
  return (
    // sm:min-w-[20vw] sm:w-[20vw] sm:h-[36vw] min-w-[20rem] w-[20rem] h-[40rem] --img down animatn sm:top-[8vw]
    <div className=" projContainer relative flex flex-col    justify-start sm:min-w-[20vw] sm:w-[20vw] sm:h-[36vw]  min-w-[20rem] w-[20rem] h-[40rem]">
      <div className="sm:top-[8vw] rounded-3xl sm:rounded-[1.6vw] overflow-hidden  relative  z-1 h-full w-full  ">
        <video
          className="media w-full  vid played object-contain "
          loop=""
          playsInline
          poster="https://rhythm-influence.transforms.svdcdn.com/staging/Mariah_Poster.png?w=320&amp;h=560&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1733156415&amp;s=d2a0bf388444e9e1d7f6dc7d78ec352e"
        >
          <source src={data.link} />
        </video>
      </div>
      <div className="relative ">
        <div className=" mt-4 sm:mt-[1.4vw] sm:text-[1vw] text-lg uppercase font-bold ">
          We Partnered with
        </div>
        <div className="my-4 sm:my-[.6vw] uppercase font-bold sm:text-[1.25vw] text-2xl leading-none">
          <span className="cursive font-light ">M</span>
          <span>Ariah carey to create content with</span>
          <span className="cursive font-light">K</span>
          <span>Ay jewelers</span>
        </div>
        <p className="text-lg sm:text-[1vw]">{data.brand}</p>
      </div>
    </div>
  );
};

export default ProjectsSecCard;
