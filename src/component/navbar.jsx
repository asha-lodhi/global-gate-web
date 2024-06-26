import React, { useState } from "react";
import MainLogo from "../assets/main-logo.png";
import user from "../assets/user-image.jpeg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isBuyer, setIsBuyer] = useState(true);
  const navigate = useNavigate();
  const scrollTo = (id) => {
    const targetDiv = document.getElementById(id);
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <nav class="bg-transparent z-20">
        <div class="w-[90%] flex flex-wrap items-center justify-between mx-auto bg-transparent z-20">
          <span className="flex items-center space-x-3 ">
            <img
              src={MainLogo}
              className="h-32 w-36 cursor-pointer"
              alt="Logo"
              onClick={() => {
                navigate("/");
              }}
            />
          </span>
          <form class="max-w-md mx-auto pl-24 w-full">
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
                placeholder=" Search by Product/Company"
                required
              />
            </div>
          </form>
          <div class="flex items-center align-middle md:order-2 space-x-3 md:space-x-0">
            <div
              class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-user"
            >
              <ul class="group header-nav-bar flex align-middle  justify-center items-center flex-col text-xl p-4 md:p-0  border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-transparent">
                <li
                  className="header-nav-bar"
                  onClick={() => scrollTo("HomeDiv")}
                >
                  <span
                    className="block py px-3 text-white rounded md:bg-transparent md:p-0 cursor-pointer font-sansation"
                    aria-current="page"
                  >
                    Home
                  </span>
                </li>
                <li
                  className="header-nav-bar"
                  onClick={() => scrollTo("AboutDiv")}
                >
                  <span className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 cursor-pointer font-sansation">
                    About
                  </span>
                </li>
                <li
                  className="header-nav-bar"
                  onClick={() => scrollTo("ProductDiv")}
                >
                  <span className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 cursor-pointer font-sansation">
                    Products
                  </span>
                </li>
                <li className="header-nav-bar">
                  <div className="relative w-full group">
                    <button className="py-2 px-3 text-white  md:bg-transparent md:p-0 cursor-pointer font-sansation   text-site  bg-white  peer flex items-center justify-between">
                      Services
                    </button>
                    <div className="absolute z-[99] top-[100%] left-[50%] translate-x-[-50%] rounded-md overflow-hidden shadow-lg min-w-[150px] w-max peer-focus:visible peer-focus:opacity-100 opacity-0 invisible duration-200 p-1 bg-white dark:bg-white  border border-dimmed text-xs md:text-sm">
                      <div className=" text-center border-b w-full block cursor-pointer hover:bg-blue-200 bg-white  hover:text-link px-3 py-2 rounded-md">
                        Consultant
                      </div>

                      <div className="text-center w-full block cursor-pointer hover:bg-blue-200 bg-white  hover:text-link px-3 py-2 rounded-md">
                        Courses
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="header-nav-bar"
                  onClick={() => {
                    navigate("/trends");
                  }}
                >
                  <span className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 cursor-pointer font-sansation">
                    Trends
                  </span>
                </li>

                <li className="header-nav-bar">
                  <span className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 cursor-pointer font-sansation">
                    Blogs
                  </span>
                </li>

                <div className="relative w-full group">
                  <button className="w-14 h-14 md:text-sm text-site rounded-full bg-white border border-dimmed focus:border-brand focus:outline-none focus:ring-0 peer flex items-center justify-between  font-semibold">
                    <img
                      className="w-full h-full rounded-full object-cover"
                      src={user}
                      alt="user"
                    />
                  </button>
                  <div className="absolute z-[99] top-[100%] left-[50%] translate-x-[-50%] rounded-md overflow-hidden shadow-lg min-w-[150px] w-max peer-focus:visible peer-focus:opacity-100 opacity-0 invisible duration-200 p-1 bg-white dark:bg-white  border border-dimmed text-xs md:text-sm">
                    <div
                      className={`  ${
                        isBuyer ? "bg-white" : "bg-red-300"
                      } w-full block cursor-pointer hover:bg-blue-200   hover:text-link px-3 py-2 rounded-md`}
                      onClick={() => {
                        setIsBuyer(false);
                        navigate("/become-seller");
                      }}
                    >
                      Seller
                    </div>
                    <div
                      className={`  ${
                        isBuyer ? "bg-red-300" : "bg-white"
                      } w-full block cursor-pointer hover:bg-blue-200   hover:text-link px-3 py-2 rounded-md`}
                      onClick={() => setIsBuyer(true)}
                    >
                      Buyer
                    </div>
                  </div>
                </div>
              </ul>
            </div>

            <button
              data-collapse-toggle="navbar-user"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
