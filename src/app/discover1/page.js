"use client"
import React from "react";
import Footer6 from "@/components/Footer/Footer6";
import Home6BannerSection from "@/components/Rook-D2C/banner-d2c";
import Home6FeatureSection from "@/components/Rook-D2C/key-features-d2c";
import Header6 from "@/components/header/Header6";
import Home6ProjecManagement from "@/components/Rook-D2C/Project-management-d2c";
import Home6TestimonialSection from "@/components/Rook-D2C/Experts-d2c";

// export const metadata = {
//   title: "Axleo - Digital Agency Creative Portfolio Template",
//   icons: {
//     icon: "/assets/img/sm-logo.svg",
//   },
// };
const Sasspage = () => {
  return (
    <>
      <Header6 />
      <Home6BannerSection />
      <Home6FeatureSection />
      <Home6ProjecManagement />
      <Home6TestimonialSection />
      <Footer6 />
    </>
  );
};

export default Sasspage;
