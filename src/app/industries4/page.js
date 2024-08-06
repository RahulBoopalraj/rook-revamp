import Footer from "@/components/Footer/Footer";
import Home1About from "@/components/Travel-Logistics/about-travel-logistics";
import Home1BannerSection from "@/components/Travel-Logistics/banner-travel-logistics";
import Home1BlogSection from "@/components/Travel-Logistics/insights-travel-logistics";
import Home1ContactSection from "@/components/Travel-Logistics/contact-travel-logistics";
import Header from "@/components/header/Header";
import Home1ProcessSection from "@/components/Travel-Logistics/trends-travel-logistics";
import Home1solutionSection from "@/components/Travel-Logistics/solution-travel-logistics";
import Home1TestimonialSection from "@/components/Travel-Logistics/clientFeedback-travel-logistics";
import HomeworkSection from "@/components/Travel-Logistics/service-travel-logistics";

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
        <Home1solutionSection style="pb-130" />
        <HomeworkSection />
        <Home1ProcessSection />
        <Home1TestimonialSection />
        <Home1BlogSection />
        <Home1ContactSection />
      </main>
      <Footer />
    </>
  );
}
