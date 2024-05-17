import React from "react";
import Navbar from "./navbar";
import HeroImage from "../assets/hero-section-image.jpeg";
import Dals from "../assets/product/dals.jpeg";
import ProductCard from "./productCard";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const CompanyDetails = (props) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full relative" id="HomeDiv">
      <img
        src={HeroImage}
        alt="services"
        className="w-full min-h-screen object-cover opacity-90  z-[0] fixed"
      />
      <Navbar />
      <div className="flex w-full  justify-center items-center align-middle z-10 mb-10 ">
        <div className=" relative  flex flex-col border-2 border-gray-200 rounded shadow-md  w-4/5 my-4 bg-white  justify-center items-center">
          <div className=" absolute -top-4 -right-6 mx-2 z-40 w-16 h-16 bg-[#00b5b6]  flex flex-col justify-center items-center flex-grow shadow-xl rounded-full overflow-hidden ">
            <RxCross2
              className="text-blue text-3xl"
              onClick={() => navigate(-1)}
            />
          </div>
          <div class="min-h-auto w-full flex flex-col justify-center items-center py-6 ">
            <div class=" sm:w-full sm:max-w-xl">
              <h2 class="mt-2 text-center text-3xl font-extrabold text-gray-900">
                Welcome to the Global B2B food & drink Marketplace
              </h2>
            </div>
          </div>

          <div class="w-full md:w-9/12 mx-2 h-64  flex flex-col justify-center items-center">
            <div class="bg-white p-3 shadow-sm rounded-sm">
              <div class="flex items-center  justify-between space-x-2 font-semibold text-gray-900 leading-8 py-2">
                <span class="tracking-wide text-xl font-semibold">
                  {" "}
                  All About the company
                </span>
                <button className="bg-blue-400 rounded-xl px-4 py-1">
                  Company Analytics
                </button>
              </div>
              <div class="text-gray-700">
                <div class="grid md:grid-cols-2 text-sm">
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Company Name</div>
                    <div class="px-4 py-2">ABC</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Owner Name</div>
                    <div class="px-4 py-2">Doe</div>
                  </div>

                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Contact No.</div>
                    <div class="px-4 py-2">+11 998001001</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Current Address</div>
                    <div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Permanant Address</div>
                    <div class="px-4 py-2">Arlington Heights, IL, Illinois</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Email.</div>
                    <div class="px-4 py-2">
                      <a class="text-blue-800" href="mailto:jane@example.com">
                        jane@example.com
                      </a>
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Registered Date</div>
                    <div class="px-4 py-2">Feb 06, 1998</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="my-4"></div>
          </div>

          <div class=" py-4 px-4 mx-auto text-center lg:py-6 lg:px-6">
            <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
                Our Products
              </h2>
              <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                Explore the whole collection of open-source web components and
                elements built with the utility classes from Tailwind
              </p>
            </div>
            <div className="flex flex-wrap justify-center  gap-2 lg:gap-4">
              {[1, 2, 3, 4].map((i) => (
                <ProductCard productImage={Dals} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
