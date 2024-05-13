import React from "react";
import { SwiperSlide } from "swiper/react";
import Food from "../assets/product/food-img-1.jpeg";

const productCard = () => {
  return (
    <>
      <div class="max-w-sm rounded overflow-hidden bg-[#eeeeee] mx-2 overflow-hidden">
        <img class="w-full my-10" src={Food} alt="food-img" />
        <div class="px-3 py-3 border border-gray-400 overflow-hidden rounded-b">
          <div className="flex  justify-between items-center">
            <div className="flex">
              <div class="flex items-center bg-[#00B6B7] px-2 gap-1 h-[20px] rounded">
                <p class="text-sm font-normal text-white dark:text-white">
                  4.7
                </p>
                <svg
                  class="w-3 h-3 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
              <span class="text-sm font-light text-black mx-2">73 reviews</span>
            </div>
            <div class="flex items-center  px-2 gap-1 h-[20px] rounded">
              <svg
                class="w-3 h-3 text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
          </div>
          <div>Basmati rice</div>
          <div>rs 2649</div>
        </div>
      </div>
    </>
  );
};

export default productCard;
