import React from "react";
import MySwiperComponent from "./mySwiperComponent";
import Food from "../assets/product/food-img-1.jpeg";
import bevarage from "../assets/product/bevarage-img-1.jpeg";

const products = () => {
  return (
    <div className="md:mt-48 bg-white pb-10" id='ProductDiv'>
      <div className="flex justify-center items-center">
        <h2 className="flex font-sansation md:text-[60px] text-[60px] font-bold lmd:text-[48px] z-10 text-[#347CA4] xxmd:text-[60px] xxmd:w-[80%]">
          Products
        </h2>
      </div>
      <div className="flex flex-col md:mx-20">
        <div className="flex">
          <h2 className="md:my-6 font-sansation font-semibold text-[30px] lmd:text-[48px] z-10 text-black  xxmd:text-5xl xxmd:w-[80%] ">
            Foods
          </h2>
        </div>
        <div>
          <MySwiperComponent productImage={Food} />
        </div>
      </div>
      <div className="flex flex-col md:mx-20">
        <div className="flex">
          <h2 className="md:my-6 font-sansation font-semibold text-[30px] lmd:text-[48px] z-10 text-black  xxmd:text-5xl xxmd:w-[80%] ">
            Beverage
          </h2>
        </div>
        <div>
          <MySwiperComponent productImage={bevarage} />
        </div>
      </div>
    </div>
  );
};

export default products;
