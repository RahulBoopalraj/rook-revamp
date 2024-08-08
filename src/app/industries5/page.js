import Footer from "@/components/Footer/Footer";
import Home1About from "@/components/Public-Government/about-public-government";
import Home1BannerSection from "@/components/Public-Government/banner-public-government";
import Home1BlogSection from "@/components/Public-Government/insights-public-government";
import Home1ContactSection from "@/components/Public-Government/contact-public-government";
import Header from "@/components/header/Header";
import Home1ProcessSection from "@/components/Public-Government/trends-public-government";
import Home1solutionSection from "@/components/Public-Government/solution-public-government";
import Home1TestimonialSection from "@/components/Public-Government/clientFeedback-public-government";
import HomeworkSection from "@/components/Public-Government/service-public-government";

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
