import React from "react";
import { FaRegEyeSlash } from "react-icons/fa";

const SellerAccount = () => {
  return (
    <div className="min-h-screen flex w-full  justify-center items-center align-middle ">
      <div className="flex border-2 border-gray-200 rounded shadow-md  w-1/2 my-4">
        <div class="min-h-auto w-full flex flex-col justify-center items-center py-6 ">
          <div class=" sm:w-full sm:max-w-md">
            <h2 class="mt-2 text-center text-3xl font-extrabold text-gray-900">
              Register as a Seller
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600 max-w">
              Or
              <a href="#" class="font-medium text-blue-600 hover:text-blue-500">
                Login to your account
              </a>
            </p>
          </div>

          <div class="mt-2 sm:mx-auto sm:w-full sm:max-w-auto px-6">
            <div class="bg-white  py-10  sm:rounded-lg sm:px-10">
              <form class="space-y-6" action="#" method="POST">
                <div class="mb-4 md:flex md:justify-between">
                  <div class="mb-4  md:mb-0 w-full">
                    <label
                      class="block mb-2 text-sm font-medium  dark:text-black"
                      for="firstName"
                    >
                      First Name
                    </label>
                    <input
                      class="w-full px-3 py-2 text-sm leading-tight  text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div class="md:ml-2 w-full">
                    <label
                      class="block mb-2 text-sm font-medium text-black"
                      for="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="phone"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Mobile
                  </label>
                  <div class="mt-1">
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      autocomplete="phone"
                      required
                      class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Mobile no."
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="company"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Company Name
                  </label>
                  <div class="mt-1">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autocomplete="company"
                      required
                      class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Company name"
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="address"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <div class="mt-1">
                    <input
                      id="address"
                      name="address"
                      type="text"
                      autocomplete="address"
                      required
                      class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Address"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div class="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autocomplete="email"
                      required
                      class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="password"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div class="mt-1 flex">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autocomplete="current-password"
                      required
                      class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Enter your password"
                    />
                    <FaRegEyeSlash className="relative top-2 right-6 text-xl" />
                  </div>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <input
                      id="remember_me"
                      name="remember_me"
                      type="checkbox"
                      class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      for="remember_me"
                      class="ml-2 block text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>

                  {/* <div class="text-sm">
                    <a
                      href="#"
                      class="font-medium text-blue-600 hover:text-blue-500"
                    >
                      Forgot your password?
                    </a>
                  </div> */}
                </div>

                <div>
                  <button
                    type="submit"
                    class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
              <div class="mt-6">
                <div class="relative">
                  <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-gray-300"></div>
                  </div>
                  <div class="relative flex justify-center text-sm">
                    <span class="px-2 bg-gray-100 text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div class="mt-6 grid grid-cols-3 gap-3">
                  <div>
                    <a
                      href="#"
                      class="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <img
                        class="h-5 w-5"
                        src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      class="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <img
                        class="h-5 w-5"
                        src="https://www.svgrepo.com/show/513008/twitter-154.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      class="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <img
                        class="h-6 w-6"
                        src="https://www.svgrepo.com/show/506498/google.svg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerAccount;
