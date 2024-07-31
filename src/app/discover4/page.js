import Footer4 from "@/components/Footer/Footer4";
import Home4About from "@/components/rookbranding/about-rookbranding";
import Home4BannerSection from "@/components/rookbranding/banner-rookbranding";
import Home1ContactSection from "@/components/rookbranding/contact-rookbranding";
import Header4 from "@/components/header/Header4";
import Home4ProcessSection from "@/components/rookbranding/solutions-rookbranding";
import Home4TestimonialSection from "@/components/rookbranding/clientFeedback-rookbranding";
import Home4WorkSection from "@/components/work-section/home4-work-section";
import ServiceDetailsPage from "@/components/rookbranding/service-rookbranding"
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Axleo - Digital Agency Creative Portfolio Template",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
const DesignStudio = () => {
  return (
    <>
      <Header4 />
      <Home4BannerSection />
      <Home4About />
      <Home4WorkSection />
      <Home4ProcessSection />
      <ServiceDetailsPage/>
      <Home4TestimonialSection />
      <Home1ContactSection />
      <Footer4 />
    </>
  );
};

export default DesignStudio;
