import Link from 'next/link'
import React from 'react'

const Home1ContactSection = () => {
  return (
    <div className="contact-section mb-130">
  <div className="container-lg container-fluid">
    <div className="row g-lg-4 gy-5">
      <div className="col-lg-8">
        <div className="section-title text-animation">
          <h2>Let’s <span>CONNECT</span></h2>
          <div className="dash-and-paragraph">
            <div className="dash" />
            <div className="content-and-social">
              <p>Ready to innovate with Rook® for Fintech? Whether enhancing banking, optimizing insurance, revolutionizing market infrastructure, or transforming payments, we’re here to help.</p>
              <div className="social-area">
                <h6>Connect Us</h6>
                <svg xmlns="http://www.w3.org/2000/svg" width={50} height={6} viewBox="0 0 50 6">
                  <path d="M50 3L45 0.113249V5.88675L50 3ZM0 3.5H45.5V2.5H0V3.5Z" />
                </svg>
                <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/RookCom"
                          target="blank"
                        >
                          <i className="bx bxl-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com/RookHQ" target="blank">
                          <i className="bi bi-twitter-x" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/rook/mycompany/verification/"
                          target="blank"
                        >
                          <i className="bx bxl-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/rookhq/"
                          target="blank"
                        >
                          <i className="bx bxl-instagram-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/@rookl" target="blank">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M19.437 19.937H4.562a2.5 2.5 0 0 1-2.5-2.5V6.563a2.5 2.5 0 0 1 2.5-2.5h14.875a2.5 2.5 0 0 1 2.5 2.5v10.874a2.5 2.5 0 0 1-2.5 2.5M4.562 5.063a1.5 1.5 0 0 0-1.5 1.5v10.874a1.5 1.5 0 0 0 1.5 1.5h14.875a1.5 1.5 0 0 0 1.5-1.5V6.563a1.5 1.5 0 0 0-1.5-1.5Z"
                            />
                            <path
                              fill="currentColor"
                              d="M14.568 11.149L10.6 8.432a1.032 1.032 0 0 0-1.614.851v5.434a1.032 1.032 0 0 0 1.614.851l3.972-2.717a1.03 1.03 0 0 0-.004-1.702"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.crunchbase.com/organization/rook"
                          target="blank"
                        >
                          <img src="crunchbase_logo_icon_145361.svg" alt="" />
                        </a>
                      </li>
                    </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 d-lg-flex justify-content-end align-items-center">
        <div className="btn_wrapper">
          <Link className="circle-btn btn-hover" href="/contact">
            <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
              <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z">
              </path>
            </svg> Contact <strong>Now</strong>
            <span style={{top: '50.5px', left: '83.75px'}} />
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Home1ContactSection
