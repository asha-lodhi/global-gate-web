import React from "react";
import MainLogo from "../assets/main-logo.png";

const SubNavbar = () => {
  return (
    <>
      <nav class="bg-transparent z-10 border-b border-black">
        <div class="w-[90%] flex flex-wrap items-center justify-between mx-auto bg-transparent">
          <span className="flex items-center space-x-3">
            <img src={MainLogo} className="h-32 w-36" alt="Logo" />
          </span>
          <form class="max-w-md mx-auto w-full">
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-2 ps-10 text-sm text-gray-800 border border-gray-200 rounded-lg bg-gray-200  dark:bg-gray-200 dark:border-gray-200 dark:placeholder-gray-400 dark:text-black "
                placeholder=" Search for products and brands......"
                required
              />
            </div>
          </form>
        </div>
      </nav>
    </>
  );
};

export default SubNavbar;
