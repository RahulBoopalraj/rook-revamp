import Footer2 from "@/components/Footer/Footer2";
import Home2About from "@/components/RookGTM/about-rookGTM";
import Home2BannerSection from "@/components/RookGTM/banner-rookGTM";
import Home2ContactSection from "@/components/RookGTM/contact-rookGTM";
import Header2 from "@/components/header/Header2";
import Home2ProcessSection from "@/components/RookGTM/solution-rookGTM";
import ServiceDetailsPage from "@/components/RookGTM/service-rookGTM";
import Home2TestimonialSection from "@/components/RookGTM/clientFeedback-rookGTM";
import PricingRook from "@/components/RookGTM/pricing-rookGTM"

export const metadata = {
  title: "Axleo - Digital Agency Creative Portfolio Template",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const SoftwareAgencyPage = () => {
  return (
    <>
      <Header2 />
      <Home2BannerSection />
      <Home2About />
      <ServiceDetailsPage />
      <Home2ProcessSection />
      <PricingRook />
      <Home2TestimonialSection />
      <Home2ContactSection />
      <Footer2 />
    </>
  );
};

export default SoftwareAgencyPage;
