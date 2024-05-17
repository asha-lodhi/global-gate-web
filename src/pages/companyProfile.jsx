import React, { useEffect } from "react";
import SubNavbar from "../component/subNavbar";
import { FaHome } from "react-icons/fa";
import { FaStarHalfAlt, FaRegHeart, FaRupeeSign } from "react-icons/fa";
import { FaStar, FaCartPlus } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
import Food from "../assets/product/food-img-1.jpeg";
import food2 from "../assets/product/food-img-2.jpeg";
import food3 from "../assets/product/food-img-3.jpeg";
import food4 from "../assets/product/food-img-4.jpeg";
import food5 from "../assets/product/food-img-5.jpeg";
import ProductAnalysis from "../component/productAnalysis";
import { useNavigate } from "react-router-dom";
import SuggestedItems from "../component/suggestedItms";
import ProductCard from "../component/productCard";
import Dals from "../assets/product/dals.jpeg";
import { useParams } from "react-router-dom";
import { RecommendedData } from "../constants";
import axios from "axios";

const CompanyProfile = () => {
  const navigate = useNavigate();
  let { companyID } = useParams();
  const [companyDetail, setCompanyDetail] = React.useState({});
  const [companyList, setCompanyList] = React.useState([]);

  const subFood = [
    { id: 1, img: food2 },
    { id: 2, img: food3 },
    { id: 3, img: food4 },
    { id: 4, img: food5 },
    { id: 5, img: Food },
  ];

  useEffect(() => {
    if (companyID) {
      fetchSuggestedList(companyID);
      const companyFilter = RecommendedData?.filter(
        (v) => Number(v?.sellerId) === Number(companyID)
      );
      setCompanyDetail(companyFilter?.[0]);
    }
  }, [companyID]);

  const fetchSuggestedList = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:5001/query", {
        application_no: companyID,
      });
      const { application_ids } = res?.data;
      if (application_ids && application_ids?.length) {
        const filterData = RecommendedData?.filter((v) =>
          application_ids?.includes(String(v?.sellerId))
        );
        setCompanyList(filterData);
      }
    } catch (error) {
      console.error("Error fetching bot response:", error);
    }
  };

  return (
    <div className="w-full">
      <SubNavbar />

      <div class="">
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

          <div class="max-w-7xl max-lg:w-full mx-auto px-4 sm:px-6 lg:px-8 mt-6 ">
            <div class="flex flex-col md:flex-row -mx-4 ">
              <div class="w-[1000px] px-4">
                <div className="h-[400px] bg-gray-100  rounded-lg">
                  <div class="relative flex h-full md:h-full rounded-lg bg-gray-100 mb-4 justify-center">
                    <div class="w-[20%] h-64 md:h-auto rounded-lg bg-gray-100 flex items-center justify-around flex-col space-y-1">
                      {subFood?.map((item, index) => (
                        <div
                          key={index}
                          className="h-18 md:w-24 flex justify-center items-center"
                        >
                          <img
                            src={item.img}
                            className="object-contain rounded"
                            alt="product"
                          />
                        </div>
                      ))}
                    </div>
                    <div class="w-[80%] h-[100%] rounded-lg bg-gray-100  flex items-center justify-center overflow-hidden">
                      <img
                        src={companyDetail?.img}
                        className="w-full object-fill h-[100%]"
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

              <div class="w-[550px]">
                <SuggestedItems RecommendedList={companyList} />
              </div>
            </div>
          </div>
        </div>
        <div class=" max-w-screen-xl mx-auto  h-auto w-full md:flex md:flex-1 flex px-4 justify-center items-center align-middle border-b pb-10">
          <div className="">
            <h2 class="mb-2 leading-tight tracking-tight font-semibold text-[#01b5b6] text-sm md:text-sm">
              Whey Proteins
            </h2>
            <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-lg md:text-[32px]">
              Lorem ipsum dolor, sit amet consectetur, adipisicing elit.
            </h2>

            <div class="flex text-gray-500 items-center">
              By{" "}
              <span
                class="text-[#01b5b6] hover:underline text-base font-bold ml-2 cursor-pointer"
                onClick={() =>
                  navigate(`/company-details/${companyDetail?.sellerId}`)
                }
              >
                {companyDetail?.sellerName}
              </span>
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
                <h4 class="text-black font-normal text-base">(40 Reviews)</h4>
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
              <span className="text-[#04A755] font-semibold mx-4">20% off</span>
            </div>
            <div className="text-[#04a755] text-xs ">
              Inclusive of all taxes
            </div>
            <p class="text-gray-500">
              Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae
              exercitationem porro saepe ea harum corrupti vero id laudantium
              enim, libero blanditiis expedita cupiditate a est.
            </p>

            <div class="flex flex-col py-4 space-x-4 gap-2 md:flex-row">
              <div
                class="py-2 px-3   bg-white border border-gray-200 rounded-lg  items-center flex justify-center align-middle"
                data-hs-input-number=""
              >
                <div class="flex items-center gap-x-1.5 align-middle justify-center">
                  <button
                    type="button"
                    class="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none  "
                    data-hs-input-number-decrement=""
                  >
                    <svg
                      class="flex-shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                    </svg>
                  </button>
                  <input
                    class="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 "
                    type="text"
                    value="0"
                    data-hs-input-number-input=""
                  />
                  <button
                    type="button"
                    class="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
                    data-hs-input-number-increment=""
                  >
                    <svg
                      class="flex-shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </button>
                </div>
              </div>

              <button
                type="button"
                class=" flex  items-center gap-2 h-12 px-6 py-2 font-semibold rounded-xl bg-orange-100 hover:bg-orange-500 text-orange-400 border hover:text-white border-orange-400"
              >
                <FaCartPlus />
                Add to Cart
              </button>
              <button
                type="button"
                class=" flex   items-center gap-2 h-12 px-12 py-2 font-semibold rounded-xl bg-orange-500 hover:bg-orange-500 text-orange-200 border border-orange-400"
              >
                Quick Buy
              </button>
            </div>
          </div>
        </div>
        <ProductAnalysis />
        <div class="pb-12 px-4 mx-auto text-center lg:px-6 mt-6">
          <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
              Our Products
            </h2>
            <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Explore the whole collection of open-source web components and
              elements built with the utility classes from Tailwind
            </p>
          </div>
          <div className="flex flex-wrap justify-center  gap-2 lg:gap-4 -top-20">
            {[1, 2, 3, 4].map((i) => (
              <ProductCard productImage={Dals} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
