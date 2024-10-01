import Footer from "@/components/Footer/Footer";
import Breadcrumb from "@/components/common/Breadcrumb";
import InnerPageHeader from "@/components/header/InnerPageHeader";
import Home4ProcessSection from "@/components/process-section/home4-process-section";
import Home4ServicesSection from "@/components/services-section/home4-services-section";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

export const metadata = {
  title: "Axleo - Digital Agency Creative Portfolio Template",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const ServicePage = () => {
  return (
    <>
      <InnerPageHeader />
      <Breadcrumb bgImg="3" title2="Partner With ?" title="Who We " />

      <div className="partnership-area mb-130">
        <div className="container-lg container-fluid">
          <div className="row">
            <div
              className="col-lg-12 mb-60 d-flex flex-wrap gap-3 align-items-end justify-content-between wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="section-title text-animation">
                <h2>
                  Our Valued <br /> <span>Partners include.</span>
                </h2>
              </div>
              <div className="total-partner text-animation">
                <Link href="/about">
                  Almost 20+ Partner we have
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={10}
                    viewBox="0 0 10 10"
                  >
                    <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="row g-4 ">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="single-pertner magnetic-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={105}
                  height={121}
                  viewBox="0 0 105 121"
                >
                  <path d="M89.5878 -9.19809L90 -8.59758L90.4122 -9.19809L117.267 -48.3197L115.945 -0.858616L115.925 -0.129375L116.612 -0.373528L161.416 -16.2858L132.406 21.3044L131.96 21.8831L132.661 22.0895L178.229 35.5L132.661 48.9105L131.96 49.1169L132.406 49.6956L161.416 87.2858L116.612 71.3735L115.925 71.1294L115.945 71.8586L117.267 119.32L90.4122 80.1981L90 79.5976L89.5878 80.1981L62.7327 119.32L64.0546 71.8586L64.075 71.129L63.3873 71.3736L18.6534 87.2858L47.5939 49.6952L48.0394 49.1166L47.3389 48.9105L1.77101 35.5L47.3389 22.0895L48.0394 21.8834L47.5939 21.3048L18.6534 -16.2858L63.3873 -0.373611L64.075 -0.12899L64.0546 -0.858616L62.7327 -48.3197L89.5878 -9.19809Z" />
                </svg>

                <div className="partner-logos">
                  <img
                    className="white"
                    src="assets/img/home4/logo-11.png"
                    alt=""
                  />
                  <img
                    className="black"
                    src="assets/img/home4/logo-01.png"
                    alt=""
                  />
                </div>
                <p>Amazon Web Services (AWS)</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="single-pertner magnetic-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={105}
                  height={121}
                  viewBox="0 0 105 121"
                >
                  <path d="M89.5878 -9.19809L90 -8.59758L90.4122 -9.19809L117.267 -48.3197L115.945 -0.858616L115.925 -0.129375L116.612 -0.373528L161.416 -16.2858L132.406 21.3044L131.96 21.8831L132.661 22.0895L178.229 35.5L132.661 48.9105L131.96 49.1169L132.406 49.6956L161.416 87.2858L116.612 71.3735L115.925 71.1294L115.945 71.8586L117.267 119.32L90.4122 80.1981L90 79.5976L89.5878 80.1981L62.7327 119.32L64.0546 71.8586L64.075 71.129L63.3873 71.3736L18.6534 87.2858L47.5939 49.6952L48.0394 49.1166L47.3389 48.9105L1.77101 35.5L47.3389 22.0895L48.0394 21.8834L47.5939 21.3048L18.6534 -16.2858L63.3873 -0.373611L64.075 -0.12899L64.0546 -0.858616L62.7327 -48.3197L89.5878 -9.19809Z" />
                </svg>

                <div className="partner-logos">
                  <img
                    className="white"
                    src="assets/img/home4/logo-22.png"
                    alt=""
                  />
                  <img
                    className="black"
                    src="assets/img/home4/logo-02.png"
                    alt=""
                  />
                </div>
                <p>Azure</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="single-pertner magnetic-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={105}
                  height={121}
                  viewBox="0 0 105 121"
                >
                  <path d="M89.5878 -9.19809L90 -8.59758L90.4122 -9.19809L117.267 -48.3197L115.945 -0.858616L115.925 -0.129375L116.612 -0.373528L161.416 -16.2858L132.406 21.3044L131.96 21.8831L132.661 22.0895L178.229 35.5L132.661 48.9105L131.96 49.1169L132.406 49.6956L161.416 87.2858L116.612 71.3735L115.925 71.1294L115.945 71.8586L117.267 119.32L90.4122 80.1981L90 79.5976L89.5878 80.1981L62.7327 119.32L64.0546 71.8586L64.075 71.129L63.3873 71.3736L18.6534 87.2858L47.5939 49.6952L48.0394 49.1166L47.3389 48.9105L1.77101 35.5L47.3389 22.0895L48.0394 21.8834L47.5939 21.3048L18.6534 -16.2858L63.3873 -0.373611L64.075 -0.12899L64.0546 -0.858616L62.7327 -48.3197L89.5878 -9.19809Z" />
                </svg>

                <div className="partner-logos">
                  <img
                    className="white"
                    src="assets/img/home4/logo-33.png"
                    alt=""
                  />
                  <img
                    className="black"
                    src="assets/img/home4/logo-03.png"
                    alt=""
                  />
                </div>
                <p>Google Cloud</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="single-pertner magnetic-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={105}
                  height={121}
                  viewBox="0 0 105 121"
                >
                  <path d="M89.5878 -9.19809L90 -8.59758L90.4122 -9.19809L117.267 -48.3197L115.945 -0.858616L115.925 -0.129375L116.612 -0.373528L161.416 -16.2858L132.406 21.3044L131.96 21.8831L132.661 22.0895L178.229 35.5L132.661 48.9105L131.96 49.1169L132.406 49.6956L161.416 87.2858L116.612 71.3735L115.925 71.1294L115.945 71.8586L117.267 119.32L90.4122 80.1981L90 79.5976L89.5878 80.1981L62.7327 119.32L64.0546 71.8586L64.075 71.129L63.3873 71.3736L18.6534 87.2858L47.5939 49.6952L48.0394 49.1166L47.3389 48.9105L1.77101 35.5L47.3389 22.0895L48.0394 21.8834L47.5939 21.3048L18.6534 -16.2858L63.3873 -0.373611L64.075 -0.12899L64.0546 -0.858616L62.7327 -48.3197L89.5878 -9.19809Z" />
                </svg>

                <div className="partner-logos">
                  <img
                    className="white"
                    src="assets/img/home4/logo-44.png"
                    alt=""
                  />
                  <img
                    className="black"
                    src="assets/img/home4/logo-04.png"
                    alt=""
                  />
                </div>
                <p>Microsoft</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="single-pertner magnetic-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={105}
                  height={121}
                  viewBox="0 0 105 121"
                >
                  <path d="M89.5878 -9.19809L90 -8.59758L90.4122 -9.19809L117.267 -48.3197L115.945 -0.858616L115.925 -0.129375L116.612 -0.373528L161.416 -16.2858L132.406 21.3044L131.96 21.8831L132.661 22.0895L178.229 35.5L132.661 48.9105L131.96 49.1169L132.406 49.6956L161.416 87.2858L116.612 71.3735L115.925 71.1294L115.945 71.8586L117.267 119.32L90.4122 80.1981L90 79.5976L89.5878 80.1981L62.7327 119.32L64.0546 71.8586L64.075 71.129L63.3873 71.3736L18.6534 87.2858L47.5939 49.6952L48.0394 49.1166L47.3389 48.9105L1.77101 35.5L47.3389 22.0895L48.0394 21.8834L47.5939 21.3048L18.6534 -16.2858L63.3873 -0.373611L64.075 -0.12899L64.0546 -0.858616L62.7327 -48.3197L89.5878 -9.19809Z" />
                </svg>
          
                <div className="partner-logos">
                  <img
                    className="white"
                    src="assets/img/home4/logo-55.png"
                    alt=""
                  />
                  <img
                    className="black"
                    src="assets/img/home4/logo-05.png"
                    alt=""
                  />
                </div>
                <p>Razorpay</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="single-pertner magnetic-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={105}
                  height={121}
                  viewBox="0 0 105 121"
                >
                  <path d="M89.5878 -9.19809L90 -8.59758L90.4122 -9.19809L117.267 -48.3197L115.945 -0.858616L115.925 -0.129375L116.612 -0.373528L161.416 -16.2858L132.406 21.3044L131.96 21.8831L132.661 22.0895L178.229 35.5L132.661 48.9105L131.96 49.1169L132.406 49.6956L161.416 87.2858L116.612 71.3735L115.925 71.1294L115.945 71.8586L117.267 119.32L90.4122 80.1981L90 79.5976L89.5878 80.1981L62.7327 119.32L64.0546 71.8586L64.075 71.129L63.3873 71.3736L18.6534 87.2858L47.5939 49.6952L48.0394 49.1166L47.3389 48.9105L1.77101 35.5L47.3389 22.0895L48.0394 21.8834L47.5939 21.3048L18.6534 -16.2858L63.3873 -0.373611L64.075 -0.12899L64.0546 -0.858616L62.7327 -48.3197L89.5878 -9.19809Z" />
                </svg>
              
                <div className="partner-logos">
                  <img
                    className="white"
                    src="assets/img/home4/logo-66.png"
                    alt=""
                  />
                  <img
                    className="black"
                    src="assets/img/home4/logo-06.png"
                    alt=""
                  />
                </div>
                <p>Vizdale</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="single-pertner magnetic-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={105}
                  height={121}
                  viewBox="0 0 105 121"
                >
                  <path d="M89.5878 -9.19809L90 -8.59758L90.4122 -9.19809L117.267 -48.3197L115.945 -0.858616L115.925 -0.129375L116.612 -0.373528L161.416 -16.2858L132.406 21.3044L131.96 21.8831L132.661 22.0895L178.229 35.5L132.661 48.9105L131.96 49.1169L132.406 49.6956L161.416 87.2858L116.612 71.3735L115.925 71.1294L115.945 71.8586L117.267 119.32L90.4122 80.1981L90 79.5976L89.5878 80.1981L62.7327 119.32L64.0546 71.8586L64.075 71.129L63.3873 71.3736L18.6534 87.2858L47.5939 49.6952L48.0394 49.1166L47.3389 48.9105L1.77101 35.5L47.3389 22.0895L48.0394 21.8834L47.5939 21.3048L18.6534 -16.2858L63.3873 -0.373611L64.075 -0.12899L64.0546 -0.858616L62.7327 -48.3197L89.5878 -9.19809Z" />
                </svg>
                <div className="partner-logos">
                  <img
                    className="white"
                    src="assets/img/home4/logo-77.png"
                    alt=""
                  />
                  <img
                    className="black"
                    src="assets/img/home4/logo-07.png"
                    alt=""
                  />
                </div>
                <p>Wati</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="single-pertner magnetic-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={105}
                  height={121}
                  viewBox="0 0 105 121"
                >
                  <path d="M89.5878 -9.19809L90 -8.59758L90.4122 -9.19809L117.267 -48.3197L115.945 -0.858616L115.925 -0.129375L116.612 -0.373528L161.416 -16.2858L132.406 21.3044L131.96 21.8831L132.661 22.0895L178.229 35.5L132.661 48.9105L131.96 49.1169L132.406 49.6956L161.416 87.2858L116.612 71.3735L115.925 71.1294L115.945 71.8586L117.267 119.32L90.4122 80.1981L90 79.5976L89.5878 80.1981L62.7327 119.32L64.0546 71.8586L64.075 71.129L63.3873 71.3736L18.6534 87.2858L47.5939 49.6952L48.0394 49.1166L47.3389 48.9105L1.77101 35.5L47.3389 22.0895L48.0394 21.8834L47.5939 21.3048L18.6534 -16.2858L63.3873 -0.373611L64.075 -0.12899L64.0546 -0.858616L62.7327 -48.3197L89.5878 -9.19809Z" />
                </svg>
            
                <div className="partner-logos">
                  <img
                    className="white"
                    src="assets/img/home4/logo-88.png"
                    alt=""
                  />
                  <img
                    className="black"
                    src="assets/img/home4/logo-08.png"
                    alt=""
                  />
                </div>
                <p>WebEngage</p>
              </div>
            </div>
            <p>Together, we leverage cutting-edge technologies and collaborative innovation to address the unique needs and challenges of our clients, driving success and growth in the digital era.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ServicePage;
