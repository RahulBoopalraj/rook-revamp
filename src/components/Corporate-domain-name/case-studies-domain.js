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
                        At Rook, we offer insightful Corporate domain name case
                        studies and problem statements, showcasing real-world
                        business challenges and providing effective, tailored
                        solutions.
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
                      src="assets/img/Domain/case-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="case-study-content">
                    <h3>
                      <Link href="/case-study-details">
                        Client: Retail Brand
                      </Link>
                    </h3>
                    <p className="">
                      <strong>Problem: </strong>The brand was struggling with
                      managing a large domain portfolio across multiple regions,
                      leading to inconsistencies in brand identity and security
                      vulnerabilities.
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
                      src="assets/img/Domain/case-2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="case-study-content">
                    <h3>
                      <Link href="/case-study-details">
                        Client: Tech Startup
                      </Link>
                    </h3>
                    <p>
                      <strong>Problem: </strong> The startup faced challenges
                      with inconsistent domain registration and struggled with
                      securing domain assets, leading to brand misalignment and
                      security risks.
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
