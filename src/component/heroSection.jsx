import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className=" flex w-full h-1/2  relative  justify-center items-center ">
        <img
          //   src={WebDevelopment}
          alt="services"
          className="w-full h-[800px] object-cover opacity-90"
        />
        <div className="flex absolute top-10 mt-48 flex-col justify-center items-center px-10">
          <span className=" text-2xl md:text-6xl font-sans font-seminbold text-black">
            Global B2B food & drink Marketplace
          </span>
          <p className="text-sm md:text-base font-light text-white  text-center line-clamp-2 md:w-[500px] my-8">
            Connecting food and beverage companies worldwide with AI-powered
            insights, efficient operations, and personalized experiences.
          </p>
          <button
            className=" text-[20px]  bg-white text-[#146AA1] font-poppins px-4 py-2 rounded-full"
            // onClick={() => scrollToTarget("Contact-Us")}
          >
            Explore
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
