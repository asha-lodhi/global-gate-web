import React from "react";
import Products from "../component/products";
import AboutSection from "../component/about";
import HomeSection from "../component/heroSection";

const dashboard = () => {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <Products />
    </>
  );
};

export default dashboard;
