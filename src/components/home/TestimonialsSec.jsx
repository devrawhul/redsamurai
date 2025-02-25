import React from "react";

const TestimonialsSec = () => {
  const clients = [
    {
      name: "Client Name",
      link: "https://rhythm-influence.files.svdcdn.com/staging/toyota.svg?dm=1728475199",
    },
    {
      name: "Client Name",
      link: "https://rhythm-influence.files.svdcdn.com/staging/toyota.svg?dm=1728475199",
    },
    {
      name: "Client Name",
      link: "https://rhythm-influence.files.svdcdn.com/staging/toyota.svg?dm=1728475199",
    },
    {
      name: "Client Name",
      link: "https://rhythm-influence.files.svdcdn.com/staging/toyota.svg?dm=1728475199",
    },
    {
      name: "Client Name",
      link: "https://rhythm-influence.files.svdcdn.com/staging/toyota.svg?dm=1728475199",
    },
    {
      name: "Client Name",
      link: "https://rhythm-influence.files.svdcdn.com/staging/toyota.svg?dm=1728475199",
    },
  ];
  return (
    <div className="relative  bg-black py-24 sm:py-[10vw] text-white sm:px-[8vw]">
      <div className="sm:flex justify-between">
        <div className=" sm:w-[50vw]">
          <p className=" px-4 sm:px-0 uppercase font-light text-sm sm:text-[1.4vw] sm:mb-[.8vw] mb-3">
            Partnering
          </p>
          <h3 className=" px-8 sm:w-[35vw] sm:leading-[4vw] uppercase sm:text-[5.5vw] text-6xl font-black mb-12 flex gap-2 flex-col  leading-10    ">
            <div>With The</div>
            <div className="text-right">world's</div>
            <div>leading</div>
            <div className="text-right">
              <span className="cursive pink">B</span>
              <span className="pink">rands</span>
            </div>
          </h3>
        </div>

        <div className="logoslider sm:w-[50vw] relative  sm:items-center no-scrollbar sm:flex-col  gap-4 sm:gap-0 flex flex-nowrap overflow-scroll">
          {clients.map((client, index) => (
            <img
              key={index}
              className="w-48 sm:w-[20rem] opacity-35 hover:opacity-100"
              src={client.link}
              alt={client.name}
            />
          ))}
        </div>
      </div>

      {/* Say Hello */}
      <div className="bg-black h-[80vh] sm:w-full  sm:h-[90vh] relative flex flex-col justify-center items-center">
        <div className="text-8xl font-bold uppercase flex sm:flex-row sm:text-[10vw] justify-center items-center flex-col">
          <div className="flex justify-center  relative sm:items-center items-end">
            <h1 className="z-10">Say</h1>
            <img
              className="w-26 -ml-2 sm:-mx-[.8vw] relative sm:w-[8.5vw]  sm:rounded-[1vw] rounded-lg"
              src="https://rhythm-influence.transforms.svdcdn.com/staging/Dj-Girl.png?w=240&h=220&q=85&auto=format&fit=crop&dm=1730837004&s=a287cdc8c95654c6fe0d9c0191b11bba"
              alt=""
            />
          </div>
          {/* BUTTON */}
          <div className="relative">
            <button className="text-xs sm:scale-200 text-black rounded-full px-4 py-3 -rotate-10 absolute left-1/2 top-1/2 -translate-y-[90%] -translate-x-1/2  uppercase bg-[#8ec6b5]">
              Get started
            </button>

            <span className="cursive">H</span>
            <span className="">ello</span>
          </div>
        </div>
        <p className="text-lg sm:text-[1.4vw] sm:mt-[1.6vw] mt-4">
          Let's find your perfect match.
        </p>
      </div>
    </div>
  );
};

export default TestimonialsSec;
