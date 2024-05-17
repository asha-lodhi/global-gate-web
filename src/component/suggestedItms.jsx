import React from "react";
import Food from "../assets/product/food-img-1.jpeg";
import food2 from "../assets/product/food-img-2.jpeg";
import food3 from "../assets/product/food-img-3.jpeg";
import food4 from "../assets/product/food-img-4.jpeg";
import food5 from "../assets/product/food-img-5.jpeg";

// const suggestedItems = ["Item 1", "Item 2", "Item 3", "Item 4"];

const SuggestedItems = () => {
  const subFood = [
    { id: 1, img: food2 },
    { id: 2, img: food3 },
    { id: 3, img: food4 },
    { id: 4, img: food5 },
    { id: 5, img: Food },
  ];
  return (
    <div className="flex justify-center w-full  h-[400px]  items-center rounded-lg border ml-10 overflow-auto">
      <div className="w-full h-full p-4 bg-gray-100 rounded-lg shadow-lg ">
        <h2 className="text-2xl font-semibold mb-4 ">Recommended sellers</h2>
        <ul className="space-y-2 overflow-scroll ">
          {subFood.map((item, index) => (
            <div
              key={index}
              className="p-2 bg-white rounded-md shadow-sm hover:bg-gray-50 flex"
            >
              <div className="">
                <img src={item.img} className="h-20 w-20" alt="Recommended" />
              </div>

              <div className="w-full flex flex-col items-start space-y-1 mx-4">
                <span className="text-lg font-semibold text-[#00b5b6]">
                  {" "}
                  ABC Company
                </span>
                <div class="flex items-center  gap-4  ">
                  <div className="flex">
                    <svg
                      class="w-4 h-4 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="20"
                    >
                      <path d="M549-120 280-400v-80h140q53 0 91.5-34.5T558-600H240v-80h306q-17-35-50.5-57.5T420-760H240v-80h480v80H590q14 17 25 37t17 43h88v80h-81q-8 85-70 142.5T420-400h-29l269 280H549Z" />
                    </svg>
                    <span className="font-semibold text-sm font-sansation">
                      2,649
                    </span>
                  </div>
                  <span className="text-gray-400  text-sm line-through font-sansation">
                    3,499
                  </span>
                  <span className="text-green-600 text-sm font-semibold font-sansation">
                    24% off
                  </span>
                </div>
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
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SuggestedItems;
