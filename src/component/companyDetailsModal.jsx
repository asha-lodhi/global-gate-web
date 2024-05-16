import React from "react";
import { RxCross2 } from "react-icons/rx";

const CompanyDetailsModal = (props) => {
  return (
    <div>
      <div class=" z-10 fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
        <div class="max-h-full w-full max-w-2xl sm:rounded-2xl bg-white">
          <div class="w-full relative">
            <div className=" -top-6 -right-6 z-[9999] w-16 h-16 bg-[#00b5b6] absolute flex flex-col  justify-center items-center flex-grow  shadow-xl rounded-full">
              <RxCross2
                className="text-white text-3xl"
                onClick={() => {
                  props?.onPress?.();
                }}
              />
            </div>
            <div class="mx-auto max-w-2xl py-12 px-8">
              <div class="mb-8">
                <h1 class="mb-4 text-3xl font-extrabold">
                  Turn on notifications
                </h1>
                <p class="text-gray-600">
                  Get the most out of Twitter by staying up to date with what's
                  happening.
                </p>
              </div>
              <div class="space-y-4">
                <button class="p-3 bg-black rounded-full text-white w-full font-semibold">
                  Allow notifications
                </button>
                <button
                  class="p-3 bg-white border rounded-full w-full font-semibold"
                  onClick={() => {
                    props?.onPress?.();
                  }}
                >
                  Skip for now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetailsModal;
