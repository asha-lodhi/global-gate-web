import React from "react";
import HeroImage from "../assets/hero-section-image.jpeg";
import Navbar from "./navbar";

const HeroSection = () => {
  return (
    <>
      <div className=" flex w-full h-1/2  relative  justify-start items-center ">
        <img
          src={HeroImage}
          alt="services"
          className="w-full h-[800px] object-cover opacity-90"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-transparent">
          <Navbar />
        </div>
        <div className="flex absolute  flex-col justify-center items-start  px-4 md:px-40">
          <span className="w-full md:w-[966px] text-[45px] md:text-[90px] font-sans font-semibold text-white">
            Global B2B food & drink Marketplace
          </span>
          <span className="text-sm md:text-base font-light text-white  text-start line-clamp-3 md:w-[678px] my-8">
            Connecting food and beverage companies worldwide with AI-powered
            insights, efficient operations, and personalized experiences.
          </span>
          <button className="text-[20px]  bg-transparent text-white font-poppins px-8 py-1 rounded-md border-2 border-white">
            Explore
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
