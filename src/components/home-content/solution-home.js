import Link from 'next/link'
import React from 'react'

const HomeSolution = () => {
  return (
    <div className="home2-portfolio-section mb-130">
    <div className="container-lg container-fluid">
      <div className="row mb-60">
        <div className="col-lg-12">
          <div className="section-title text-animation">
            <h2>Solution</h2>
            <div className="dash-and-paragraph three">
              <div className="dash" />
              <div className="btn-and-paragraph">
                <Link href="/portfolio-manonery">Explore More
                  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z">
                    </path>
                  </svg>
                </Link>
                <p>Offer a wide range of services to help businesses establish and enhance their
                  online
                  presence.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row gy-lg-5 g-4 justify-content-between">
        <div className="col-lg-6 col-md-6">
          <div className="portfolio-card magnetic-item">
            <div className="image-and-tag">
              <div className="portfolio-img">
                <img src="assets/img/homepage/solution-1.jpg" alt="" />
                <Link className="details-btn" href="/portfolio-details">
                  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z">
                    </path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="portfolio-content">
              <h4><Link href="/portfolio-details">Consultancy</Link></h4>
              <p className="pt-3" style={{color:"#31cec6"}}>Our expert consultants deliver tailored solutions, offering strategic insights and actionable plans to fuel your business growth and innovation.</p>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
          <div className="portfolio-card magnetic-item">
            <div className="image-and-tag">
              <div className="portfolio-img">
                <img src="assets/img/homepage/solution-2.jpg" alt="" />
                <Link className="details-btn" href="/portfolio-details">
                  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z">
                    </path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="portfolio-content">
              <h4><Link href="/portfolio-details">Designing</Link></h4>
              <p className="pt-3" style={{color:"#31cec6"}}>We combine creativity and functionality to create designs that engage your audience and enhance user experience.</p>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
          <div className="portfolio-card magnetic-item">
            <div className="image-and-tag">
              <div className="portfolio-img">
                <img src="assets/img/homepage/solution-3.jpg" alt="" />
                <Link className="details-btn" href="/portfolio-details">
                  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z">
                    </path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="portfolio-content">
              <h4><Link href="/portfolio-details">Digital Marketingy</Link></h4>
              <p className="pt-3" style={{color:"#31cec6"}}>We boost brand visibility with data-driven strategies and targeted outreach, turning engagement into conversions to drive business growth.</p>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
          <div className="portfolio-card magnetic-item">
            <div className="image-and-tag">
              <div className="portfolio-img">
                <img src="assets/img/homepage/solution-4.jpg" alt="" style={{height:"310px"}} />
                <Link className="details-btn" href="/portfolio-details">
                  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z">
                    </path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="portfolio-content">
              <h4><Link href="/portfolio-details">Product Development</Link></h4>
              <p className="pt-3" style={{color:"#31cec6"}}>From concept to launch, we build products that solve real problems, focusing on scalability, performance, and user satisfaction.</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default HomeSolution
