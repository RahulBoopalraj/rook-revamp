import Footer from "@/components/Footer/Footer";
import Home1About from "@/components/Education/about-education";
import Home1BannerSection from "@/components/Education/banner-education";
import Home1BlogSection from "@/components/Education/insights-education";
import Home1ContactSection from "@/components/Education/contact-education";
import Header from "@/components/header/Header";
import Home1ProcessSection from "@/components/Education/trends-education";
import Home1solutionSection from "@/components/Education/solution-education";
import Home1TestimonialSection from "@/components/Education/clientFeedback";
import HomeworkSection from "@/components/Education/service-education";

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
