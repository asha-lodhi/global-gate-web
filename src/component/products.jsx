import React from "react";
import MySwiperComponent from "./mySwiperComponent";
import Food from "../assets/product/food-img-1.jpeg";
import Apple from "../assets/product/apple-1.jpeg";
import Grapes from "../assets/product/grapes-1.jpeg";
import Dals from "../assets/product/dals.jpeg";
import bevarage from "../assets/product/bevarage-img-1.jpeg";
import RedWine from "../assets/product/redWine.jpeg";
import mtnDew from "../assets/product/mtnDew.jpeg";
import Thumbsup from "../assets/product/thumpsUp.jpeg";

const FoodList = [
  { img: Food, title: "Basmati Rice" },
  { img: Apple, title: "Apple" },
  { img: Grapes, title: "Basmati Rice" },
  { img: Dals, title: "Pulse" },
];
const bevarageList = [
  { img: bevarage, title: "Coca-cola" },
  { img: RedWine, title: "Red Wine" },
  { img: mtnDew, title: "Mountain Dew" },
  { img: Thumbsup, title: "Thumbs-up" },
];

const products = () => {
  return (
    <div className="md:mt-48 bg-white pb-10" id="ProductDiv">
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
          <MySwiperComponent productList={FoodList} />
        </div>
      </div>
      <div className="flex flex-col md:mx-20">
        <div className="flex">
          <h2 className="md:my-6 font-sansation font-semibold text-[30px] lmd:text-[48px] z-10 text-black  xxmd:text-5xl xxmd:w-[80%] ">
            Beverage
          </h2>
        </div>
        <div>
          <MySwiperComponent productList={bevarageList} />
        </div>
      </div>
    </div>
  );
};

export default products;
