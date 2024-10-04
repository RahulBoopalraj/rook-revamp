import Footer from "@/components/Footer/Footer";
import Breadcrumb from "@/components/common/Breadcrumb";
import Header from "@/components/header/Header";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Axleo - Digital Agency Creative Portfolio Template",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const ServicePage = () => {
  return (
    <>
      <Header />
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
            <div className="col-xl-4 col-lg-4 col-sm-6">
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
                    src="https://www.highvail.com/wp-content/uploads/2020/04/AWS-Logo-halfwhite.png " style={{width:"100px", height:"50px"}}
                    alt=""
                  />
                  <img
                    className="black"
                    src="https://www.pngplay.com/wp-content/uploads/3/Amazon-Web-Services-AWS-Logo-Transparent-PNG.png" style={{width:"100px", height:"50px"}}
                    alt=""
                  />
                </div>
                <a href="/Rook-AWS" target="_blank" rel="noopener noreferrer">
      <p>AWS</p>
    </a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
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
                    src="https://vectorseek.com/wp-content/uploads/2023/08/Azure-Logo-Vector.svg-1-1.png " style={{width:"100px", height:"50px"}}
                    alt=""
                  />
                  <img
                    className="black"
                    src="https://vectorseek.com/wp-content/uploads/2023/08/Azure-Logo-Vector.svg-1-1.png " style={{width:"100px", height:"50px"}}
                    alt=""
                  />
                </div>
                <a href="/Rook-Azure" target="_blank" rel="noopener noreferrer">
      <p>Azure</p>
    </a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
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
                    src="https://logos-world.net/wp-content/uploads/2021/02/Google-Cloud-Symbol.png" style={{width:"100px", height:"50px"}}
                    alt=""
                  />
                  <img
                    className="black"
                    src="https://logos-world.net/wp-content/uploads/2021/02/Google-Cloud-Symbol.png"style={{width:"100px", height:"50px"}}
                    alt=""
                  />
                </div>
                <a href="/Rook-Google-Cloud" target="_blank" rel="noopener noreferrer">
      <p>Google Cloud</p>
    </a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
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
                    src="https://www.freepnglogos.com/uploads/microsoft-logo-4.png"  style={{width:"100px", height:"50px"}}
                    alt=""
                  />
                  <img
                    className="black"
                    src="https://www.freepnglogos.com/uploads/microsoft-logo-4.png"style={{width:"100px", height:"50px"}}
                    alt=""
                  />
                </div>
                <a href="/Rook-Microsoft" target="_blank" rel="noopener noreferrer">
      <p>Microsoft</p>
    </a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
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
                    src="https://dashboard.razorpay.com/img/logo_full.png" style={{width:"100px", height:"50px"}}
                    alt=""
                  />
                  <img
                    className="black"
                    src="https://latestlogo.com/wp-content/uploads/2024/01/razorpay-logo.png" style={{width:"100px", height:"50px"}}
                    alt=""
                  />
                </div>
                <a href="/Rook-Razorpay" target="_blank" rel="noopener noreferrer">
      <p>Razorpay</p>
    </a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
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
                    src="https://res.cloudinary.com/flux-forms/image/upload/v1688559539/fluxforms_assets/seo_images/fosyd7kva05lltrspjkv.png"style={{width:"100px", height:"50px"}}
                    alt=""
                  />
                  <img
                    className="black"
                    src="https://res.cloudinary.com/flux-forms/image/upload/v1688559539/fluxforms_assets/seo_images/fosyd7kva05lltrspjkv.png"style={{width:"100px", height:"50px"}}
                    alt=""
                  />
                </div>
                <a href="/Rook-Vizdale" target="_blank" rel="noopener noreferrer">
      <p>Vizdale</p>
    </a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
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
                    src="https://www.wati.io/wp-content/uploads/2023/05/new-wati-white.png" style={{width:"100px", height:"50px"}}
                    alt=""
                  />
                  <img
                    className="black"
                    src="https://www.wati.io/wp-content/uploads/2023/05/new-branding-wati-image.png"style={{width:"100px", height:"50px"}}
                    alt=""
                  />
                </div>
                <a href="/Rook-Wati" target="_blank" rel="noopener noreferrer">
      <p>Wati</p>
    </a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="single-pertner magnetic-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={105}
                  height={121}
                  viewBox="0 0 105 121"
                >
                  <path d="M89.5878 -9.19809L90 -8.59758L90.4122 -9.19809L117.267 -48.3197L115.945 -0.858616L115.925 -0.129375L116.612 -0.373528L161.416 -16.2858L132.406 21.3044L131.96 21.8831L132.661 22.0895L178.229 35.5L132.661 48.9105L131.96 49.1169L132.406 49.6956L161.416 87.2858L116.612 71.3735L115.925 71.1294L115.945 71.8586L117.267 119.32L90.4122 80.1981L90 79.5976L89.5878 80.1981L62.7327 119.32L64.0546 71.8586L64.075 71.129L63.3873 71.3736L18.6534 87.2858L47.5939 49.6952L48.0394 49.1166L47.3389 48.9105L1.77101 35.5L47.3389 22.0895L48.0394 21.8834L47.5939 21.3048L18.6534 -16.2858L63.3873 -0.373611L64.075 -0.12899L64.0546 -0.858616L62.7327 -48.3197L89.5878 -9.19809Z" />
                </svg>
            
                <div className="partner-logos" >
                  <img
                    className="white"
                    src="https://assets.webengage.com/wp-content/uploads/2023/04/WebEngage-Logo-R-white-768x189.png"style={{width:"100px", height:"50px"}}
                    alt=""
                  />
                  <img
                    className="black"
                    src="https://techstory.in/wp-content/uploads/2018/02/webengage.png"style={{width:"100px", height:"50px"}}
                    alt=""
                  />
                </div>
                <a href="/Rook-WebEngage" target="_blank" rel="noopener noreferrer">
      <p>WebEngage</p>
    </a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="single-pertner magnetic-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={105}
                  height={121}
                  viewBox="0 0 105 121"
                >
                  <path d="M89.5878 -9.19809L90 -8.59758L90.4122 -9.19809L117.267 -48.3197L115.945 -0.858616L115.925 -0.129375L116.612 -0.373528L161.416 -16.2858L132.406 21.3044L131.96 21.8831L132.661 22.0895L178.229 35.5L132.661 48.9105L131.96 49.1169L132.406 49.6956L161.416 87.2858L116.612 71.3735L115.925 71.1294L115.945 71.8586L117.267 119.32L90.4122 80.1981L90 79.5976L89.5878 80.1981L62.7327 119.32L64.0546 71.8586L64.075 71.129L63.3873 71.3736L18.6534 87.2858L47.5939 49.6952L48.0394 49.1166L47.3389 48.9105L1.77101 35.5L47.3389 22.0895L48.0394 21.8834L47.5939 21.3048L18.6534 -16.2858L63.3873 -0.373611L64.075 -0.12899L64.0546 -0.858616L62.7327 -48.3197L89.5878 -9.19809Z" />
                </svg>
            
                <div className="partner-logos" >
                  <img
                    className="white"
                    src="https://download.logo.wine/logo/Zoho_Corporation/Zoho_Corporation-Logo.wine.png"style={{width:"100px", height:"70px"}}
                    alt=""
                  />
                  <img
                    className="black"
                    src="https://download.logo.wine/logo/Zoho_Corporation/Zoho_Corporation-Logo.wine.png"style={{width:"100px", height:"70px"}}
                    alt=""
                  />
                </div>
                <a href="/Rook-Zoho" target="_blank" rel="noopener noreferrer">
      <p>Zoho</p>
    </a>
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
