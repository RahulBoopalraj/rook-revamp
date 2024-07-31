"use client";

import Home1ContactSection from "@/components/Rookwebdev/footer-rookwebdev";
import Home5About from "@/components/Rookwebdev/About-rookwebdev";
import Home5BannerSection from "@/components/Rookwebdev/banner-rookwebdev";
import Home5ExperienceSection from "@/components/Rookwebdev/experience-rookwebdev";
import Header5 from "@/components/header/Header5";
import PricingRook from "@/components/Rookwebdev/pricing-rookwebdev";
import Home5TestimonialSection from "@/components/Rookwebdev/clientFeedback-rookwebdev";
import Home5WorkSection from "@/components/Rookwebdev/work-rookwebdev";
import ServiceDetailsPage from "@/components/Rookwebdev/service-rookwebdev";
import Link from "next/link";
import React, { useEffect } from "react";

const PersonalPortfolio = () => {
  useEffect(() => {
    document.body.classList.add("dark");
  }, []);
  return (
    <>
      <Header5 />
      <Home5BannerSection />
      <Home5About />
      <Home5WorkSection />
      <ServiceDetailsPage />
      <PricingRook />
      <Home5ExperienceSection />
      <Home5TestimonialSection />
      < Home1ContactSection />
    </>
  );
};

export default PersonalPortfolio;
