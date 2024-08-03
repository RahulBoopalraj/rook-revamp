import Footer from "@/components/Footer/Footer";
import Home1About from "@/components/Fintech/about-fintech";
import Home1BannerSection from "@/components/Fintech/banner-fintech";
import Home1BlogSection from "@/components/Fintech/insights-fintech";
import Home1ContactSection from "@/components/Fintech/contact-fintech";
import Header from "@/components/header/Header";
import Home1ProcessSection from "@/components/Fintech/trends-fintech";
import Home1solutionSection from "@/components/Fintech/solution-fintech";
import Home1TestimonialSection from "@/components/Fintech/clientFeedback";
import HomeworkSection from "@/components/Fintech/services-fintech";

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
