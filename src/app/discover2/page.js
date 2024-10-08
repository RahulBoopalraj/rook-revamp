import Footer6 from "@/components/Footer/Footer";
import Home6BannerSection from "@/components/rook-startup/banner-startup";
import Home6FeatureSection from "@/components/rook-startup/key-features-startup";
import StartupHeader from "@/components/header/Header-Startups";
import Home6ProjecManagement from "@/components/rook-startup/Project-management-startup";
import Home6TestimonialSection from "@/components/rook-startup/Experts-startup";
import React from "react";
// export const metadata = {
//   title: "Axleo - Digital Agency Creative Portfolio Template",
//   icons: {
//     icon: "/assets/img/sm-logo.svg",
//   },
// };
const Sasspage = () => {
  return (
    <>
      <StartupHeader />
      <Home6BannerSection />
      <Home6FeatureSection />
      <Home6ProjecManagement />
      <Home6TestimonialSection />
      <Footer6 />
    </>
  );
};

export default Sasspage;
