import React from "react";

const HeroSec = () => {
  return (
    // sm:h-[40vh] md:h-[50vh] lg:h-[100vh]
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
                onPlaying={() => {
                  // if (!this.classList.contains("init")) {
                  //   this.pause();
                  //   this.classList.add("init");
                  // }
                }}
                poster="https://rhythm-influence.transforms.svdcdn.com/staging/David-Video-Poster.png?w=280&amp;h=400&amp;auto=compress%2Cformat&amp;fit=crop&amp;dm=1730986844&amp;s=e775cc6b51bdc360b8f16b265e8baeaa"
              >
                <source src="https://servd-rhythm-influence.b-cdn.net/staging/David-V8-Edit.mp4" />
                <source src="https://servd-rhythm-influence.b-cdn.net/staging/David-Mobile-Vid_Compressed.mp4" />
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

        <p className="sm:text-[1.4vw]  sm:w-[33vw] text-lg sm:leading-[1.6vw]  -top-20  relative sm:absolute sm:top-[36vw] sm:left-[33.5vw]  ">
          The #1 most trusted partner in influencer marketing, connecting the
          world’s leading brands with the best-suited top talent.
        </p>
      </div>
    </div>
  );
};

export default HeroSec;
