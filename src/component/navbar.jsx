import React from "react";
import MainLogo from "../assets/main-logo.png";
import user from "../assets/user-image.jpeg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
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
          <span className="flex items-center space-x-3">
            <img src={MainLogo} className="h-32 w-36" alt="Logo" />
          </span>
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
                  <span className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 cursor-pointer font-sansation">
                    Services
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
                      alt="user photo"
                    />
                  </button>
                  <div className="absolute z-[99] top-[100%] left-[50%] translate-x-[-50%] rounded-md overflow-hidden shadow-lg min-w-[150px] w-max peer-focus:visible peer-focus:opacity-100 opacity-0 invisible duration-200 p-1 bg-white dark:bg-white  border border-dimmed text-xs md:text-sm">
                    <div className=" w-full block cursor-pointer hover:bg-blue-200 bg-white  hover:text-link px-3 py-2 rounded-md">
                      <span class="block text-sm text-black dark:text-black">
                        Bonnie Green
                      </span>
                      <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">
                        name@flowbite.com
                      </span>
                    </div>
                    <div
                      className=" w-full block cursor-pointer hover:bg-blue-200 bg-white  hover:text-link px-3 py-2 rounded-md"
                      onClick={() => navigate("/become-seller")}
                    >
                      Become a Seller
                    </div>
                    <div
                      className=" w-full block cursor-pointer hover:bg-blue-200 bg-white  hover:text-link px-3 py-2 rounded-md"
                      onClick={() => navigate("/add-product")}
                    >
                      Add Product
                    </div>
                    <div className=" w-full block cursor-pointer hover:bg-blue-200 bg-white  hover:text-link px-3 py-2 rounded-md">
                      Settings
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
