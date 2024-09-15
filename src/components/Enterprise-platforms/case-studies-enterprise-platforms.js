import Footer3 from "@/components/Footer/Footer3";
import InnerPageHeader from "@/components/header/InnerPageHeader";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Axleo - Digital Agency Creative Portfolio Template",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
const CaseStudyPage = () => {
  return (
    <>
      <div className="case-study-grid-section  mb-130">
        <div className="container-lg container-fluid">
          <div className="row gy-5 justify-content-between mb-70">
            <div className="col-lg-8">
              <div className="section-title">
                <div className="text-animation">
                  <h2>
                    Case Studies &amp; <br /> Problem Statements{" "}
                  </h2>
                </div>
                <div className="dash-and-paragraph">
                  <div className="dash" />
                  <div className="paragraph-and-btn">
                    <div className="text-animation">
                      <p>
                        At Rook, we provide insightful enterprise platform case
                        studies and problem statements, showcasing real-world
                        challenges and delivering effective, scalable solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="magnetic-wrap">
                <div className="case-study-card">
                  <div className="case-study-img">
                    <img
                      src="assets/img/Enterprise_platforms/case-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="case-study-content">
                    <h3>
                      <Link href="/case-study-details">
                        Client: Retail Chain
                      </Link>
                    </h3>
                    <p className="pb-1">
                      <strong>Problem: </strong>Inefficient SCM processes resulted in high inventory costs and delayed product delivery.
                    </p>
                    <Link
                      href="/case-study-details"
                      className="primary-btn5 btn-hover"
                    >
                      Solutions
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                      </svg>
                      <span style={{ top: "50.5px", left: "83.75px" }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="magnetic-wrap">
                <div className="case-study-card">
                  <div className="case-study-img">
                    <img
                      src="assets/img/Enterprise_platforms/case-2.jpg"
                      style={{height:"350px", width:"100%"}}
                      alt=""
                    />
                  </div>
                  <div className="case-study-content">
                    <h3>
                      <Link href="/case-study-details">
                        Client: Telecom Company
                      </Link>
                    </h3>
                    <p>
                      <strong>Problem: </strong> Outdated CRM systems were causing delays in customer service and impacting client satisfaction.
                    </p>
                    <Link
                      href="/case-study-details"
                      className="primary-btn5 btn-hover"
                    >
                      Solutions
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                      </svg>
                      <span style={{ top: "50.5px", left: "83.75px" }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudyPage;
