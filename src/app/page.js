import Footer from "@/components/Footer/Footer";
import Portfolioesonary from "@/components/home-content/portfolio-home"
import Home4BannerSection from "@/components/banner-section/home4-banner-section";
import Home1BlogSection from "@/components/blog-section/home1-blog-section";
import Home1ContactSection from "@/components/contact-section/home1-contact-section";
import Header from "@/components/header/Header";
import Home1ProcessSection from "@/components/process-section/home1-process-section";
import Home4TestimonialSection from "@/components/testimonial-section/home4-testimonial-section";
import HomeworkSection from "@/components/work-section/Homework-section";

import HomeSolution from "@/components/home-content/solution-home";
import AboutPage from "@/components/home-content/about-home"
import Home5About from "@/components/home-content/about-home-1"

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
        <Home4BannerSection />
       
        
        <Home5About/>
        
        <HomeSolution/>

        <HomeworkSection />
        <Home1ProcessSection />
        

        <Home4TestimonialSection />
        <Portfolioesonary/>
        <Home1BlogSection />
        <Home1ContactSection />
        <AboutPage/>
      </main>
      <Footer />
    </>
  );
}
