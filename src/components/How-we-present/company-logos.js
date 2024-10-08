"use client";
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


const Home6BlogSection = () => {
       const settings = useMemo(() => {
        return {
            slidesPerView: "auto",
    speed: 1500,
    spaceBetween: 25,
    autoplay: {
      delay: 2500, // Autoplay duration in milliseconds
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".next-3",
      prevEl: ".prev-3",
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      386: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
        };
      }, []);
      
  return (
    <>
    <div className="home6-blog-section mt-130">
    <div className="container-lg container-fluid">
        <div className="row mb-60">
        <div className="col-lg-12 d-flex align-items-end justify-content-between flex-wrap gap-3">
            <div className="section-title3 text-animation">
            <h2>Our Brand Kit</h2>
            <p>This brand kit embodies Rook's identity, outlining our commitment to empowering brands with innovative solutions and personalized marketing.

</p>
            </div>
            <div className="slider-btn-group two">
            <div className="slider-btn prev-3">
                <svg xmlns="http://www.w3.org/2000/svg" width={15} height={11} viewBox="0 0 15 11">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.416666 5.9668H15V4.7168H0.416666V5.9668Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M1.04115 4.7168C3.98115 4.7168 6.38281 7.3018 6.38281 10.0585V10.6835H5.13281V10.0585C5.13281 7.96596 3.26448 5.9668 1.04115 5.9668H0.416979V4.7168H1.04115Z">
                </path>
                <path fillRule="evenodd" clipRule="evenodd" d="M1.04115 5.96667C3.98115 5.96667 6.38281 3.38167 6.38281 0.625V0H5.13281V0.625C5.13281 2.71833 3.26448 4.71667 1.04115 4.71667H0.416979V5.96667H1.04115Z">
                </path>
                </svg>
            </div>
            <div className="slider-btn next-3">
                <svg xmlns="http://www.w3.org/2000/svg" width={15} height={11} viewBox="0 0 15 11">
                <path fillRule="evenodd" clipRule="evenodd" d="M14.5833 5.9668H0V4.7168H14.5833V5.9668Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M13.9589 4.7168C11.0189 4.7168 8.61719 7.3018 8.61719 10.0585V10.6835H9.86719V10.0585C9.86719 7.96596 11.7355 5.9668 13.9589 5.9668H14.583V4.7168H13.9589Z">
                </path>
                <path fillRule="evenodd" clipRule="evenodd" d="M13.9589 5.96667C11.0189 5.96667 8.61719 3.38167 8.61719 0.625V0H9.86719V0.625C9.86719 2.71833 11.7355 4.71667 13.9589 4.71667H14.583V5.96667H13.9589Z">
                </path>
                </svg>
            </div>
            </div>
        </div>
        </div>
        <div className="blog-slider-wrap">
        <div className="row">
            <div className="col-lg-12">
            <Swiper {...settings} className="swiper home6-blog-slider">
                <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                <div className="blog-card1">
  <Link href="/blog-details" className="blog-img">
    <img src="assets/img/Rook-dark.png" alt="blog-img-01" />
  </Link>
  <div className="blog-content">
    <ul className="mete pt-5">
     
      <li>
        <Link href="/blog-grid">08 Oct, 2024</Link>
      </li>
      <li>
        <Link href="/blog-grid">Download</Link>
        <a
          href="https://www.rookhq.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frook-white.fa33c17a.webp&w=128&q=75" // Image URL for downloading
          download="rook-white.webp" // Optional: specify the filename for the downloaded image
          aria-label="Download"
          style={{ marginLeft: '8px' }} // Optional: adds space between the link and the icon
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ verticalAlign: 'middle' }} // Optional: aligns the icon vertically
          >
            <path
              d="M12 16l-4-4h3V2h2v10h3l-4 4zm8 4H4v-2h16v2z"
              fill="black" // Change this to your preferred color
            />
          </svg>
        </a>
      </li>
    </ul>
    {/* <h4>
      <Link href="/blog-details">How Project Management SaaS Transforms Work.</Link>
    </h4> */}
  </div>
</div>

                </SwiperSlide>
              
                <SwiperSlide className="swiper-slide">
                <div className="blog-card1">
  <Link href="/blog-details" className="blog-img">
    <img src="assets/img/Rook-white.png" alt="blog-img-01" />
  </Link>
  <div className="blog-content">
    <ul className="mete pt-5">
     
      <li>
        <Link href="/blog-grid">08 Oct, 2024</Link>
      </li>
      <li>
        <Link href="/blog-grid">Download</Link>
        <a
          href="https://www.rookhq.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frook-white.fa33c17a.webp&w=128&q=75" // Image URL for downloading
          download="rook-white.webp" // Optional: specify the filename for the downloaded image
          aria-label="Download"
          style={{ marginLeft: '8px' }} // Optional: adds space between the link and the icon
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ verticalAlign: 'middle' }} // Optional: aligns the icon vertically
          >
            <path
              d="M12 16l-4-4h3V2h2v10h3l-4 4zm8 4H4v-2h16v2z"
              fill="black" // Change this to your preferred color
            />
          </svg>
        </a>
      </li>
    </ul>
    {/* <h4>
      <Link href="/blog-details">How Project Management SaaS Transforms Work.</Link>
    </h4> */}
  </div>
</div>

                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                <div className="blog-card1">
  <Link href="/blog-details" className="blog-img">
    <img src="assets/img/Rook-Startup-logo-dark.png" alt="blog-img-01" />
  </Link>
  <div className="blog-content">
    <ul className="mete">
     
      <li>
        <Link href="/blog-grid">08 Oct, 2024</Link>
      </li>
      <li>
        <Link href="/blog-grid">Download</Link>
        <a
          href="https://www.rookhq.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frook-white.fa33c17a.webp&w=128&q=75" // Image URL for downloading
          download="rook-white.webp" // Optional: specify the filename for the downloaded image
          aria-label="Download"
          style={{ marginLeft: '8px' }} // Optional: adds space between the link and the icon
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ verticalAlign: 'middle' }} // Optional: aligns the icon vertically
          >
            <path
              d="M12 16l-4-4h3V2h2v10h3l-4 4zm8 4H4v-2h16v2z"
              fill="black" // Change this to your preferred color
            />
          </svg>
        </a>
      </li>
    </ul>
    {/* <h4>
      <Link href="/blog-details">How Project Management SaaS Transforms Work.</Link>
    </h4> */}
  </div>
</div>

                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                <div className="blog-card1">
  <Link href="/blog-details" className="blog-img">
    <img src="assets/img/Rook-Startup-logo-white.png" alt="blog-img-01" />
  </Link>
  <div className="blog-content">
    <ul className="mete">
     
      <li>
        <Link href="/blog-grid">08 Oct, 2024</Link>
      </li>
      <li>
        <Link href="/blog-grid">Download</Link>
        <a
          href="https://www.rookhq.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frook-white.fa33c17a.webp&w=128&q=75" // Image URL for downloading
          download="rook-white.webp" // Optional: specify the filename for the downloaded image
          aria-label="Download"
          style={{ marginLeft: '8px' }} // Optional: adds space between the link and the icon
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ verticalAlign: 'middle' }} // Optional: aligns the icon vertically
          >
            <path
              d="M12 16l-4-4h3V2h2v10h3l-4 4zm8 4H4v-2h16v2z"
              fill="black" // Change this to your preferred color
            />
          </svg>
        </a>
      </li>
    </ul>
    {/* <h4>
      <Link href="/blog-details">How Project Management SaaS Transforms Work.</Link>
    </h4> */}
  </div>
</div>

                </SwiperSlide>
                </div>
            </Swiper>
            </div>
        </div>
        </div>
    </div>
    </div> 
   </>
  )
}

export default Home6BlogSection
