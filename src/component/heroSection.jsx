import React from "react";
import HeroImage from "../assets/hero-section-image.jpeg";
import Navbar from "./navbar";

const HomeSection = () => {
  return (
    <>
      <div className="flex flex-col w-full h-screen relative">
        <img
          src={HeroImage}
          alt="services"
          className="w-full h-screen object-cover opacity-90 absolute z-[0]"
        />
        <Navbar />
        <div className="max-w-screen-2xl flex-col flex flex-wrap justify-center mx-auto w-full z-10 h-4/5">
          <span className="w-full md:w-[966px] text-[45px] md:text-[90px] font-sans font-semibold text-white">
            Global B2B food & drink
          </span>
          <span className="w-full md:w-[966px] text-[45px] md:text-[90px] font-sans font-semibold text-white -mt-8">
            Marketplace
          </span>
          <span className="text-sm md:text-base font-light text-white  text-start line-clamp-3 md:w-[678px] mt-4">
            Connecting food and beverage companies worldwide with AI-powered
            insights, efficient operations, and personalized experiences.
          </span>
          <button className="text-[20px] w-[180px] bg-transparent text-white font-poppins px-8 py-1 rounded-md border-2 border-white mt-12">
            Explore
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
