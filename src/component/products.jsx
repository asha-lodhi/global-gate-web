import React from "react";
import MySwiperComponent from "./mySwiperComponent";

const products = () => {
  return (
    <div className="mt-56 bg-white pb-10">
      <div className="flex justify-center items-center">
        <h2 className="flex font-sans text-[48px] md:text-[60px] lmd:text-[48px] z-10 text-[#347CA4] xxmd:text-[60px] xxmd:w-[80%]">
          products
        </h2>
      </div>
      <div className="flex flex-col mx-20">
        <div className="flex">
          <h2 className="md:my-10 font-sans text-[30px] lmd:text-[48px] z-10 text-black  xxmd:text-5xl xxmd:w-[80%] select-none">
            Foods
          </h2>
        </div>
        <div>
          <MySwiperComponent />
        </div>
      </div>
    </div>
  );
};

export default products;
