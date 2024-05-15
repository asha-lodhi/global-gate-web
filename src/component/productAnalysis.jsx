import React, { useState, useEffect } from "react";
import FoodChartImg from "../assets/product/food-chart-img.jpeg";

const ProductAnalysis = () => {
  const [openTab, setOpenTab] = useState("profile");
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window?.scrollY;
      const sections = ["profile", "professionalMembership", "awards"];
      let active = null;

      sections.forEach((sectionId) => {
        const section = document?.getElementById(sectionId);
        if (
          section?.offsetTop - 180 <= scrollPosition &&
          section?.offsetTop + section?.offsetHeight - 180 > scrollPosition
        ) {
          active = sectionId;
        }
      });
      if (active) {
        setOpenTab(active);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTarget = (id) => {
    const targetDiv = document.getElementById(id);
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto  h-auto w-full md:flex ">
        <div className="max-w-screen-xl mx-auto py-8 pt-4 h-auto w-full">
          <div className="flex w-full justify-center items-center mb-4   sticky top-[10px] bg-white">
            <ul
              className="md:flex flex-wrap -mb-px text-sm font-medium text-center  justify-between"
              id="default-tab"
              data-tabs-toggle="#default-tab-content"
              role="tablist"
            >
              <li className="" role="presentation">
                <button
                  onClick={() => {
                    setOpenTab("profile");
                    scrollToTarget("profile");
                  }}
                  className={` px-10 text-black inline-block p-4 border-b-2 rounded-t-lg text-[18px] font-poppins ${
                    openTab === "profile"
                      ? "border-[#171717] font-semibold"
                      : ""
                  }`}
                  id="profile-tab"
                  data-tabs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Product Analysis
                </button>
              </li>
              <li className="" role="presentation">
                <button
                  onClick={() => {
                    setOpenTab("professionalMembership");
                    scrollToTarget("professionalMembership");
                  }}
                  className={` px-10  text-black inline-block p-4 border-b-2 rounded-t-lg text-[18px] font-poppins ${
                    openTab === "professionalMembership"
                      ? "border-[#171717] font-semibold"
                      : ""
                  }`}
                  id="dashboard-tab"
                  data-tabs-target="#dashboard"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                >
                  Professional Membership
                </button>
              </li>
              <li className="" role="presentation">
                <button
                  onClick={() => {
                    setOpenTab("awards");
                    scrollToTarget("awards");
                  }}
                  className={`  px-10 text-black inline-block p-4 border-b-2 rounded-t-lg text-[18px] font-poppins ${
                    openTab === "awards" ? "border-[#171717] font-semibold" : ""
                  }`}
                  id="settings-tab"
                  data-tabs-target="#settings"
                  type="button"
                  role="tab"
                  aria-controls="settings"
                  aria-selected="false"
                >
                  Awards & Recognitions
                </button>
              </li>
              <li className="" role="presentation">
                <button
                  onClick={() => {
                    setOpenTab("awards");
                    scrollToTarget("awards");
                  }}
                  className={`  px-10 text-black inline-block p-4 border-b-2 rounded-t-lg text-[18px] font-poppins ${
                    openTab === "awards" ? "border-[#171717] font-semibold" : ""
                  }`}
                  id="settings-tab"
                  data-tabs-target="#settings"
                  type="button"
                  role="tab"
                  aria-controls="settings"
                  aria-selected="false"
                >
                  Awards & Recognitions
                </button>
              </li>
            </ul>
          </div>
          <div id="default-tab-content ">
            <div
              className=" flex-col md:px-10 px-4 py-4 rounded-lg  scroll-mt-64 md:scroll-mt-36 flex items-center justify-center "
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="text-md text-black  leading-loose md:px-10">
                The image you sent me shows the price to weight ratio trends in
                food exports from North Europe from 2000 to 2023. The price to
                weight ratio is the cost of one unit of weight of a food
                product. The chart shows that the price to weight ratio of most
                food items has increased over time. For example, in 2000, the
                price to weight ratio of meats was around $2,000 per ton, while
                in 2023, it is around $4,000 per ton.
                <p className="text-md text-black mt-1">
                  Here are some other observations from the chart:
                </p>
                <ul className="px-6">
                  <li className="text-md text-black mt-1 list-disc">
                    The price to weight ratio of vegetables, fruits, and nuts
                    has increased more than the price to weight ratio of meats
                    and dairy
                  </li>{" "}
                  <li className="text-md text-black mt-1 list-disc">
                    The price to weight ratio of coffee, tea, and spices has
                    fluctuated more than the price to weight ratio of other food
                    items.
                  </li>{" "}
                  <li className="text-md text-black mt-1 list-disc">
                    The price to weight ratio of sugar and candy has decreased
                    slightly since 2000.
                  </li>
                </ul>
                <p className="text-md text-black mt-1">
                  It is important to note that this chart only shows the price
                  to weight ratio of food exports from North Europe. The price
                  to weight ratio of food exports can vary depending on the
                  country or region.
                </p>
              </div>
              <div className="md:p-20">
                <img src={FoodChartImg} alt="food chart" />
              </div>
            </div>
            {/* <div
              className="p-4 rounded-lg space-y-6 scroll-mt-64 md:scroll-mt-36"
              id="professionalMembership"
              role="tabpanel"
              aria-labelledby="professionalMembership-tab"
            >
              <p className="text-2xl font-bold font-poppins mb-6  text-black">
                Professional Membership
              </p>
              <div className="flex">
                <div>
                  <FaCheck />
                </div>

                <span className=" font-normal mx-2 text-lg font-poppins  text-black">
                  Chairman of Indirect Tax Committee of PHD Chamber of Commerce
                </span>
              </div>
              <div className="flex">
                <div>
                  <FaCheck />
                </div>
                <span className=" font-normal mx-2 text-lg font-poppins  text-black">
                  Chairman of the Corporate Advisory Committee of IPEM Group of
                  Institutions
                </span>
              </div>
              <div className="flex">
                <div>
                  <FaCheck />
                </div>
                <span className=" font-normal mx-2 text-lg font-poppins  text-black">
                  Member of Indirect Tax Committee of ASSOCHAM/ FICCI
                </span>
              </div>
              <div className="flex">
                <div>
                  <FaCheck />
                </div>
                <span className=" font-normal mx-2 text-lg font-poppins  text-black">
                  Special invitee of Indirect Tax Committee of ICAI/ ICSI
                </span>
              </div>
              <div className="flex">
                <div>
                  <FaCheck />
                </div>
                <span className=" font-normal mx-2 text-lg font-poppins  text-black">
                  Member of eminent faculties in Indirect Tax Committee of ICAI/
                  ICSI/ ICMA
                </span>
              </div>
            </div>
            <div
              className="p-4 rounded-lg space-y-6 scroll-mt-64 md:scroll-mt-36"
              id="awards"
              role="tabpanel"
              aria-labelledby="awards-tab"
            >
              <p className="text-2xl font-bold font-poppins mb-6  text-black">
                Awards & Recognitions
              </p>
              <div className="flex">
                <div>
                  <FaCheck />
                </div>
                <p className=" font-normal mx-2 text-lg font-poppins  text-black">
                  Keynote Speaker at Guinness World Record made by ICSI in
                  Largest Taxation Lesson on GST attended by 4500+ Participants,
                  breaking earlier record held by Japan
                </p>
              </div>
              <div className="flex">
                <div>
                  <FaCheck />
                </div>
                <span className=" font-normal mx-2 text-lg font-poppins  text-black">
                  Business Leader Award from Amity School, Noida
                </span>
              </div>
              <div className="flex">
                <div>
                  <FaCheck />
                </div>
                <span className=" font-normal mx-2 text-lg font-poppins  text-black">
                  Best Speaker Award from NIRC - ICAI/ ICWAI
                </span>
              </div>
              <div className="flex">
                <div>
                  <FaCheck />
                </div>
                <span className=" font-normal mx-2 text-lg font-poppins  text-black">
                  Young Achievers Award at Igniting Minds, 2015
                </span>
              </div>
              <div className="flex">
                <div>
                  <FaCheck />
                </div>
                <span className=" font-normal mx-2 text-lg font-poppins  text-black">
                  Best Participant Award in MSOP - 117th Batch by ICSI
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductAnalysis;
