import React from "react";
import Products from "../component/products";
import AboutSection from "../component/about";
import HomeSection from "../component/heroSection";
import ChatBox from "../component/chatBox";

const Dashboard = () => {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <Products />
      <ChatBox />
    </>
  );
};

export default Dashboard;
