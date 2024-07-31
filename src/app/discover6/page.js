import Footer from "@/components/Footer/Footer";
import Home1About from "@/components/RookDomain/about-rookdomain";
import Home1BannerSection from "@/components/RookDomain/banner-rookdomain";
import Home1ContactSection from "@/components/RookDomain/contact-rookdomain";
import Header from "@/components/header/Header";
import Home1TestimonialSection from "@/components/RookDomain/clientFeedback-rookdomain";
import ServiceDetailsPage from "@/components/RookDomain/service-rookdomain"
import Home1ProcessSection from "@/components/RookDomain/solution-rookdomain"
import PricingRook from "@/components/RookDomain/pricing-rookdomain"

export const metadata = {
  title: "Axleo - Digital Agency Creative Portfolio Template",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
export default function Home() {
  return (
    <>
      <Header />
      <main className="page-content">
        <div className="line_wrap">
          <div className="line_item first-line" />
          <div className="line_item center-line" />
          <div className="line_item last-line" />
        </div>
        <Home1BannerSection />
        <Home1About />
        <ServiceDetailsPage />
        <Home1ProcessSection />
        <PricingRook />
        <Home1TestimonialSection />
        <Home1ContactSection />
      </main>
      <Footer />
    </>
  );
}
