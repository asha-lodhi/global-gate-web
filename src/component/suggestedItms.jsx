import React from "react";
import { useNavigate } from "react-router-dom";

const SuggestedItems = ({ RecommendedList }) => {
  const navigate = useNavigate();

  const redirectToProduct = (id) => {
    navigate(`/company-profile/${id}`);
  };

  return (
    <div className="flex justify-center w-full  h-[400px]  items-center rounded-lg border ml-10 overflow-auto">
      <div className="w-full h-full p-4 bg-gray-100 rounded-lg shadow-lg ">
        <h2 className="text-2xl font-semibold mb-4 ">Recommended sellers</h2>
        <ul className="space-y-2 overflow-scroll ">
          {RecommendedList?.map((item, index) => (
            <div
              key={item.sellerId}
              onClick={() => {
                redirectToProduct(item.sellerId);
              }}
              className="p-2 bg-white rounded-md shadow-sm hover:bg-gray-50 flex cursor-pointer"
            >
              <div className="">
                <img src={item.img} className="h-20 w-20" alt="Recommended" />
              </div>

              <div className="w-full flex flex-col items-start space-y-1 mx-4">
                <span className="text-lg font-semibold text-[#00b5b6] cursor-pointer">
                  {" "}
                  {item.sellerName}
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
