import React from "react";
import HeroSection from "../component/heroSection";
import Products from "../component/products";
import AboutSection from "../component/about";
const dashboard = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Products />
    </>
  );
};

export default dashboard;
