import React from "react";
import SubNavbar from "../component/subNavbar";
import { FaHome } from "react-icons/fa";
import { FaStarHalfAlt, FaRegHeart, FaRupeeSign } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
import Food from "../assets/product/food-img-1.jpeg";
import food2 from "../assets/product/food-img-2.jpeg";
import food3 from "../assets/product/food-img-3.jpeg";
import food4 from "../assets/product/food-img-4.jpeg";
import food5 from "../assets/product/food-img-5.jpeg";

const productDetails = () => {
  const subFood = [
    { id: 1, img: food2 },
    { id: 2, img: food3 },
    { id: 3, img: food4 },
    { id: 4, img: food5 },
    { id: 5, img: Food },
  ];
  return (
    <>
      <SubNavbar />
      <div class="antialiased">
        <div class="py-6">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <div class="flex items-center space-x-2 text-gray-400 text-sm">
              <a href="#" class="hover:underline hover:text-gray-600">
                <FaHome className="text-xl text-[#01b5b6]" />
              </a>
              <span>
                <svg
                  class="h-5 w-5 leading-none text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              <a href="#" class="hover:underline hover:text-gray-600">
                Products
              </a>
              <span>
                <svg
                  class="h-5 w-5 leading-none text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              <span>Foods</span>
              <span>
                <svg
                  class="h-5 w-5 leading-none text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              <span className="text-black font-semibold">Basamati Rice</span>
            </div>
          </div>

          <div class="max-w-7xl max-lg:w-full mx-auto px-4 sm:px-6 lg:px-8 mt-6">
            <div class="flex flex-col md:flex-row -mx-4">
              <div class="md:flex-1 px-4">
                <div>
                  <div class=" relative flex h-64 md:h-auto rounded-lg bg-gray-100 mb-4 gap-2  items-center justify-center align-middle">
                    <div class="w-48 h-64 md:h-auto rounded-lg bg-gray-100  flex items-center justify-around flex-col space-y-1">
                      {subFood?.map((item, index) => (
                        <div
                          key={index}
                          className="h-20 md:w-24 flex justify-center items-center"
                        >
                          <img
                            src={item.img}
                            className="object-contain rounded"
                            alt="product"
                          />
                        </div>
                      ))}
                    </div>
                    <div class=" h-64 md:h-auto rounded-lg bg-gray-100  flex items-center justify-center align-middle ">
                      <img
                        src={Food}
                        className="object-contain rounded"
                        alt="product"
                      />
                    </div>
                    <span className="absolute top-2 right-2">
                      <svg
                        width="24"
                        height="24"
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
                        <circle
                          cx="15"
                          cy="14.9999"
                          r="6.66667"
                          fill="#28942C"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div class="md:flex-1 px-4">
                <h2 class="mb-2 leading-tight tracking-tight font-semibold text-[#01b5b6] text-sm md:text-sm">
                  Whey Proteins
                </h2>
                <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-lg md:text-[32px]">
                  Lorem ipsum dolor, sit amet consectetur, adipisicing elit.
                </h2>

                <div class="flex text-gray-500 items-center">
                  By{" "}
                  <a
                    href="#"
                    class="text-[#01b5b6] hover:underline text-base font-bold ml-2"
                  >
                    ABC Company
                  </a>
                  <svg
                    class="h-4 w-4 leading-none text-[#01b5b6] font-semibold mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                <div class="flex space-x-2 mt-4 items-center justify-between">
                  <div class="flex space-x-2 items-center">
                    {[1, 2, 3, 4]?.map((i) => (
                      <FaStar className="text-[#01b5b6] text-lg" />
                    ))}

                    <FaStarHalfAlt className="text-[#01b5b6] text-lg" />
                    <h4 class="text-black font-bold text-base">4.7</h4>
                    <h4 class="text-black font-normal text-base">
                      (40 Reviews)
                    </h4>
                  </div>
                  <div className="flex pr-20 gap-10">
                    <div className="flex rounded-full h-8 w-8 bg-gray-200 justify-center items-center">
                      <FaRegHeart className="text-gray-500 text-lg" />
                    </div>

                    <div className="flex rounded-full h-8 w-8 bg-gray-200 justify-center items-center">
                      <IoMdShare className="text-gray-500 text-xl" />
                    </div>
                  </div>
                </div>

                <div class="flex items-center space-x-2 my-2">
                  <span className="text-gray-500">MRP:</span>
                  <span className="line-through text-gray-500">6399</span>
                </div>
                <div className="flex  items-center">
                  <span className="text-black font-bold text-lg">Price:</span>
                  <div className=" flex text-black font-bold text-xl">
                    <FaRupeeSign className="mt-1" />
                    5,099
                  </div>
                  <span className="text-[#04A755] font-semibold mx-4">
                    20% off
                  </span>
                </div>
                <div className="text-[#04a755] text-xs ">
                  Inclusive of all taxes
                </div>
                <p class="text-gray-500">
                  Lorem ipsum, dolor sit, amet consectetur adipisicing elit.
                  Vitae exercitationem porro saepe ea harum corrupti vero id
                  laudantium enim, libero blanditiis expedita cupiditate a est.
                </p>

                <div class="flex py-4 space-x-4">
                  <div class="relative">
                    <div class="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                      Qty
                    </div>
                    <select class="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>

                    <svg
                      class="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      />
                    </svg>
                  </div>

                  <button
                    type="button"
                    class="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default productDetails;
