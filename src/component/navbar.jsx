import React from "react";
import MainLogo from "../assets/main-logo.png";
import user from "../assets/user-image.jpeg";

const navbar = () => {

  const scrollTo = (id) => {
    const targetDiv = document.getElementById(id);
    if (targetDiv) {
      targetDiv.scrollIntoView({behavior: 'smooth', block: "start"});
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
                <li className="header-nav-bar" onClick={() => scrollTo("HomeDiv")}>
                  <span
                    className="block py px-3 text-white rounded md:bg-transparent md:p-0 cursor-pointer font-sansation"
                    aria-current="page"
                  >
                    Home
                  </span>
                </li>
                <li className="header-nav-bar" onClick={() => scrollTo("AboutDiv")}>
                  <span className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 cursor-pointer font-sansation">
                    About
                  </span>
                </li>
                <li className="header-nav-bar" onClick={() => scrollTo("ProductDiv")}>
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
                <div
                  class="z-50 hidden my-4 text-base list-none bg-transparent divide-y divide-gray-100 rounded-lg shadow dark:bg-transparent dark:divide-gray-600"
                  id="user-dropdown"
                >
                  <div class="px-4 py-3">
                    <span class="block text-sm text-gray-900 dark:text-white">
                      Bonnie Green
                    </span>
                    <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">
                      name@flowbite.com
                    </span>
                  </div>
                  <ul class="py-2 " aria-labelledby="user-menu-button">
                    <li>
                      <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-transparent dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        Dashboard
                      </span>
                    </li>
                    <li>
                      <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-transparent dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        Settings
                      </span>
                    </li>
                    <li>
                      <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        Earnings
                      </span>
                    </li>
                    <li>
                      <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        Sign out
                      </span>
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  class="flex text-sm bg-transparent rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  id="user-menu-button"
                  aria-expanded="false"
                  data-dropdown-toggle="user-dropdown"
                  data-dropdown-placement="bottom"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    className="w-14 h-14 rounded-full object-cover"
                    src={user}
                    alt="user photo"
                  />
                </button>
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

export default navbar;
