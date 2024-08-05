import Footer from "@/components/Footer/Footer";
import Home1About from "@/components/Gaming-Media/about-gaming-media";
import Home1BannerSection from "@/components/Gaming-Media/banner-gaming-media";
import Home1BlogSection from "@/components/Gaming-Media/insights-gaming-media";
import Home1ContactSection from "@/components/Gaming-Media/contact-gaming-media";
import Header from "@/components/header/Header";
import Home1ProcessSection from "@/components/Gaming-Media/trends-gaming-media";
import Home1solutionSection from "@/components/Gaming-Media/solution-gaming-media";
import Home1TestimonialSection from "@/components/Gaming-Media/clientFeedback-gaming-media";
import HomeworkSection from "@/components/Gaming-Media/service-gaming-media";

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
