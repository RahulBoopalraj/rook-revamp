import Link from "next/link";
import React from "react";

const Home4About = () => {
  return (
    <>
      <div className="home4-about-section pt-130 mb-60">
        <div className="container-lg container-fluid">
          <div className="row mb-20">
            <div className="col-lg-12">
              <div className="sub-title text-animation mb-20">
                <h6>
                  Rook Branding
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={50}
                    height={6}
                    viewBox="0 0 50 6"
                  >
                    <path d="M50 3L45 0.113249V5.88675L50 3ZM0 3.5H45.5V2.5H0V3.5Z" />
                  </svg>
                </h6>
              </div>
              <div className="section-title text-animation">
                <h2>
                  Crafting Authentic
                  <span>Brand Identities.</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-xl-9">
              <div className="row g-lg-4 gy-5">
                <div className="col-md-6">
                  <div className="about-content">
                    <div className="about-top-content">
                      <p>
                        Crafting a compelling design brief is essential to
                        articulate your brand’s essence, values, and
                        distinctiveness, from choosing color palettes to
                        personalized content.
                      </p>
                      <p>
                        When selecting a name, we analyze the essence, visual
                        charm, and distinctive characteristics that define your
                        brand.
                      </p>
                    </div>
                    <ul className="counter-wrap">
                      <li className="single-counter">
                        <div className="number">
                          <h2 className="counter">800</h2>
                          <span>+</span>
                        </div>
                        <p>Creatives designed  </p>
                      </li>
                      <li className="single-counter">
                        <div className="number">
                          <h2 className="counter">10+</h2>
                        </div>
                        <p>  Brands Created </p>
                      </li>
                    </ul>
                    <Link className="primary-btn4 btn-hover" href="/about">
                      About More{" "}
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
                <div className="col-md-6">
                  <div className="about-img-wrap">
                    <div className="vectors">
                      <img
                        className="about-vectors-1"
                        src="assets/img/home4/icon/about-vector-01.svg"
                        alt=""
                      />
                      <img
                        className="about-vectors-2"
                        src="assets/img/home4/icon/about-vector-02.svg"
                        alt=""
                      />
                    </div>
                    <div className="about-img animet-images">
                      <img src="assets/img/home4/about-img.jpg" alt="" />
                    </div>
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

export default Home4About;
