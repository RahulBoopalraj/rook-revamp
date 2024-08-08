import Footer from "@/components/Footer/Footer";
import Home1About from "@/components/Infrastructure-construction/about-Infrastructure-Construction";
import Home1BannerSection from "@/components/Infrastructure-construction/banner-infrastructure-construction";
import Home1BlogSection from "@/components/Infrastructure-construction/insights-Infrastructure-Construction";
import Home1ContactSection from "@/components/Infrastructure-construction/contact-Infrastructure-Construction";
import Header from "@/components/header/Header";
import Home1ProcessSection from "@/components/Infrastructure-construction/trends-Infrastructure-Construction";
import Home1solutionSection from "@/components/Infrastructure-construction/solution-Infrastructure-Construction";
import Home1TestimonialSection from "@/components/Infrastructure-construction/clientFeedback-Infrastructure-Construction";
import HomeworkSection from "@/components/Infrastructure-construction/service-Infrastructure-Construction";

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
