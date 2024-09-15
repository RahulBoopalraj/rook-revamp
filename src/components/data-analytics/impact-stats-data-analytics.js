"use client";
import ModalVideo from "react-modal-video";
import React, { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
const Home3TestimonialSection = () => {
  const [isOpen, setOpen] = useState(false);
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      // loop: true,
      effect: "fade", // Use the fade effect
      fadeEffect: {
        crossFade: true, // Enable cross-fade transition
      },
      pagination: {
        el: ".franctional-pagi3",
        type: "fraction",
      },
      navigation: {
        nextEl: ".next-3",
        prevEl: ".prev-3",
      },
    };
  }, []);
  return (
    <>
      <div className="home3-testimonial-section mb-130">
        <div className="container-lg container-fluid">
          <div className="row mb-70">
            <div className="col-lg-4"></div>
            <div className="col-lg-8">
              <div className="section-title">
                <div className="text-animation">
                  <h2>Impact &amp; Stats </h2>
                </div>
                <div className="dash-and-paragraph">
                  <div className="dash" />
                  <div className="paragraph-and-btn">
                    <div className="text-animation">
                      <p>
                        {" "}
                        At Rook, we deliver key data analytics impacts and
                        stats, emphasizing performance improvements and
                        actionable insights for optimal business decisions..
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 position-relative">
              <svg
                className="vector"
                xmlns="http://www.w3.org/2000/svg"
                width={283}
                height={289}
                viewBox="0 0 283 289"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M207.105 81C191.538 67.8954 171.441 60 149.5 60C100.071 60 60 100.071 60 149.5C60 177.965 73.2883 203.326 94 219.719V288.359C38.9136 266.322 0 212.455 0 149.5C0 66.9334 66.9334 0 149.5 0C207.378 0 257.575 32.8903 282.419 81H207.105Z"
                />
              </svg>
              <Swiper {...settings} className="swiper home3-testimonial-slider">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-wrapper">
                      <div className="row g-lg-4 gy-5">
                        <div className="col-lg-5">
                          <div className="testimonial-img-wrap">
                            <div className="testimonial-img">
                              <img
                                src="assets/img/data_analytics/stats.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-7">
                          <div className="testimonial-content-wrapper">
                            <p>
                              Our data analytics solutions reduce operational
                              costs, accelerate decision-making with real-time
                              insights, enhance marketing ROI through customer
                              segmentation, and boost efficiency by automating
                              data processes.
                            </p>
                            <ul className="counter-wrap">
                              <li className="single-counter">
                                <div className="content">
                                  <div className="number">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={23}
                                      height={23}
                                      viewBox="0 0 23 23"
                                      fill="none"
                                    >
                                      <path d="M19.6734 6.53207V5.32496L18.8198 6.17851L2.70543 22.2929L0.707086 20.2945L16.8196 4.18017L17.673 3.32664H16.466H2.4535V0.5H22.5V20.5465H19.6734V6.53207Z" />
                                    </svg>
                                    <h3 className="counter">80</h3>
                                    <span>%</span>
                                  </div>
                                  <p>
                                  Improvement Analytics  <br />  Marketing ROI
                                  </p>
                                </div>
                              </li>
                              <li className="single-counter">
                                <div className="content">
                                  <div className="number">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={23}
                                      height={23}
                                      viewBox="0 0 23 23"
                                      fill="none"
                                    >
                                      <path d="M19.6734 6.53207V5.32496L18.8198 6.17851L2.70543 22.2929L0.707086 20.2945L16.8196 4.18017L17.673 3.32664H16.466H2.4535V0.5H22.5V20.5465H19.6734V6.53207Z" />
                                    </svg>
                                    <h3 className="counter">70</h3>
                                    <span>%</span>
                                  </div>
                                  <p>Increase Data-Driven Efficiency</p>
                                </div>
                              </li>
                              <li className="single-counter">
                                <div className="content">
                                  <div className="number">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={23}
                                      height={23}
                                      viewBox="0 0 23 23"
                                      fill="none"
                                    >
                                      <path d="M19.6734 6.53207V5.32496L18.8198 6.17851L2.70543 22.2929L0.707086 20.2945L16.8196 4.18017L17.673 3.32664H16.466H2.4535V0.5H22.5V20.5465H19.6734V6.53207Z" />
                                    </svg>
                                    <h3 className="counter">30</h3>
                                    <span>%</span>
                                  </div>
                                  <p>Reduces Analytics-Driven Costs</p>
                                </div>
                              </li>
                              <li className="single-counter">
                                <div className="content">
                                  <div className="number">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={23}
                                      height={23}
                                      viewBox="0 0 23 23"
                                      fill="none"
                                    >
                                      <path d="M19.6734 6.53207V5.32496L18.8198 6.17851L2.70543 22.2929L0.707086 20.2945L16.8196 4.18017L17.673 3.32664H16.466H2.4535V0.5H22.5V20.5465H19.6734V6.53207Z" />
                                    </svg>
                                    <h3 className="counter">100</h3>
                                    <span>% </span>
                                  </div>
                                  <p>Faster Data-Driven Decision-Making</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
        <React.Fragment>
          <ModalVideo
            channel="youtube"
            onClick={() => setOpen(true)}
            isOpen={isOpen}
            animationSpeed="350"
            videoId="r4KpWiK08vM"
            ratio="16:9"
            onClose={() => setOpen(false)}
          />
        </React.Fragment>
      </div>
    </>
  );
};

export default Home3TestimonialSection;
