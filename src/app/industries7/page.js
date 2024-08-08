import Footer from "@/components/Footer/Footer";
import Home1About from "@/components/CDH/about-CDH";
import Home1BannerSection from "@/components/CDH/banner-CDH";
import Home1BlogSection from "@/components/CDH/insights-CDH";
import Home1ContactSection from "@/components/CDH/contact-CDH";
import Header from "@/components/header/Header";
import Home1ProcessSection from "@/components/CDH/trends-CDH";
import Home1solutionSection from "@/components/CDH/solution-CDH";
import Home1TestimonialSection from "@/components/CDH/clientFeedback";
import HomeworkSection from "@/components/CDH/service-CDH";

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
