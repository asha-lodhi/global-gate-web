import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        class="max-w-sm rounded overflow-hidden bg-[#eeeeee] mx-2 shadow-md mt-4 cursor-pointer"
        onClick={() => navigate(`/product-details/${123456}`)}
      >
        <img
          class="w-full my-10 px-2 h-[220px] object-contain mix-blend-multiply"
          src={props?.productDetail?.img}
          alt="food-img"
        />
        <div class="px-3 py-3 border border-gray-100 overflow-hidden rounded-b bg-white">
          <div className="flex  justify-between items-center">
            <div className="flex">
              <div class="flex items-center bg-[#00B6B7] px-2 gap-1 h-[20px] rounded">
                <p class="text-sm font-normal text-white dark:text-white font-sansation">
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
              <span class="text-sm font-light text-black mx-2 font-sansation">
                73 reviews
              </span>
            </div>
            <div class="flex items-center  px-2 gap-1 h-[20px] rounded">
              <span className="relative top-0 -right-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="1"
                    width="28"
                    height="28"
                    stroke="#28942C"
                    stroke-width="2"
                  />
                  <circle cx="15" cy="14.9999" r="6.66667" fill="#28942C" />
                </svg>
              </span>
            </div>
          </div>
          <div className="my-2 font-sansation text-left">
            {props?.productDetail?.title}
          </div>
          <div class="flex items-center  gap-4 ">
            <div className="flex">
              <svg
                class="w-6 h-5 text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="20"
              >
                <path d="M549-120 280-400v-80h140q53 0 91.5-34.5T558-600H240v-80h306q-17-35-50.5-57.5T420-760H240v-80h480v80H590q14 17 25 37t17 43h88v80h-81q-8 85-70 142.5T420-400h-29l269 280H549Z" />
              </svg>
              <span className="font-bold font-sansation">2,649</span>
            </div>
            <span className="text-gray-400 line-through font-sansation">
              3,499
            </span>
            <span className="text-green-600 text-sm font-semibold font-sansation">
              24% off
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
