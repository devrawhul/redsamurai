import React from "react";

const HeroSec = () => {
  return (
    <div className=" bg-black text-center h-[90vh] sm:h-[60vw]  flex  ">
      <div className="relative text-[19vw] sm:text-[8vw]  text-white w-full flex flex-col justify-center items-center">
        <h1 className=" gap-4 sm:gap-[15vw] flex font-bold uppercase z-9  sm:absolute sm:top-[10vw] sm:left-[1/2]">
          <span>We</span>
          <span>Are</span>
        </h1>

        {/* vids */}

        <div>
          <div className="w-42  sm:w-[16vw] sm:h-[22vw] -rotate-9 rounded-lg sm:rounded-[.8vw]  overflow-hidden  sm:absolute sm:top-[10vw] sm:left-[42vw]">
            <div>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="media vit init w-full"
                onPlaying={() => {}}
              >
                <source src="projects/clip1.mp4" />
              </video>
            </div>
          </div>
        </div>

        <h1 className="font-bold  sm:gap-[15vw] sm:absolute sm:top-[18vw] sm:left-[22vw] uppercase sm:flex sm:justify-center sm:items-center -top-12 relative ">
          <span>
            <span className="cursive ">R</span>
            <span>ed</span>
          </span>
          <span>
            <div className="-top-12 sm:top-0 relative">Samurai</div>
          </span>
        </h1>

        <p className="sm:text-[1.4vw] px-18  sm:px-0  sm:w-[33vw] text-lg sm:leading-[1.8vw]  -top-20  relative sm:absolute sm:top-[36vw] sm:left-[33.5vw]  ">
          Trusted by Leading Brands to Forge the Impactful Market Presence.
          Delivering masterful media & marketing with precision & pure quality
        </p>
      </div>
    </div>
  );
};

export default HeroSec;

// {/* vids */}
// {/* <div className="">
// {/* 1 */}
// <div className="w-42  sm:w-[16vw] sm:h-[22vw] -rotate-0 rounded-lg sm:rounded-[.8vw]  overflow-hidden  sm:absolute sm:top-[10vw] sm:left-[42vw]">
//   <div>
//     <video
//       autoPlay
//       muted
//       loop
//       playsInline
//       className="media vit init w-full"
//       onPlaying={() => {}}
//       poster="https://rhythm-influence.transforms.svdcdn.com/staging/David-Video-Poster.png?w=280&amp;h=400&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1730986844&amp;s=e775cc6b51bdc360b8f16b265e8baeaa"
//     >
//       <source src="projects/clip6.mp4" />
//     </video>
//   </div>
// </div>

// {/* 2 */}
// <div className="w-42  sm:w-[16vw] sm:h-[22vw] -rotate-6 rounded-lg sm:rounded-[.8vw]  overflow-hidden  sm:absolute sm:top-[10vw] sm:left-[42vw]">
//   <div>
//     <video
//       autoPlay
//       muted
//       loop
//       playsInline
//       className="media vit init w-full"
//       onPlaying={() => {}}
//       poster="https://rhythm-influence.transforms.svdcdn.com/staging/David-Video-Poster.png?w=280&amp;h=400&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1730986844&amp;s=e775cc6b51bdc360b8f16b265e8baeaa"
//     >
//       <source src="projects/clip1.mp4" />
//     </video>
//   </div>
// </div>

// {/* 3 */}
// <div className="w-42  sm:w-[16vw] sm:h-[22vw] -rotate-12 rounded-lg sm:rounded-[.8vw]  overflow-hidden  sm:absolute sm:top-[10vw] sm:left-[42vw]">
//   <div>
//     <video
//       autoPlay
//       muted
//       loop
//       playsInline
//       className="media vit init w-full"
//       onPlaying={() => {}}
//       poster="https://rhythm-influence.transforms.svdcdn.com/staging/David-Video-Poster.png?w=280&amp;h=400&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1730986844&amp;s=e775cc6b51bdc360b8f16b265e8baeaa"
//     >
//       <source src="projects/clip5.mp4" />
//     </video>
//   </div>
// </div>

// {/* 4 */}
// <div className="w-42  sm:w-[16vw] sm:h-[22vw] -rotate-18 rounded-lg sm:rounded-[.8vw]  overflow-hidden  sm:absolute sm:top-[10vw] sm:left-[42vw]">
//   <div>
//     <video
//       autoPlay
//       muted
//       loop
//       playsInline
//       className="media vit init w-full"
//       onPlaying={() => {}}
//       poster="https://rhythm-influence.transforms.svdcdn.com/staging/David-Video-Poster.png?w=280&amp;h=400&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1730986844&amp;s=e775cc6b51bdc360b8f16b265e8baeaa"
//     >
//       <source src="projects/clip5.mp4" />
//     </video>
//   </div>
// </div>
// </div> */}
