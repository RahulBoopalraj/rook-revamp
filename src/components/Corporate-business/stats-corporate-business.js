"use client";
import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ServiceImpactStatsPage = () => {
  useEffect(() => {
    const allProcesses = document.querySelectorAll(
      ".home2-process-wrapper .single-process-static"
    );
    if (allProcesses.length > 0) {
      const allButLastProcess = Array.from(allProcesses).slice(0, -1);
      const totalProcesses = allProcesses.length;
      // Calculate the circumference of the circle
      const radius = 150; // Same as your SVG's radius
      const circumference = 2 * Math.PI * radius;

      // Select elements
      const progressBar = document.querySelector(".progress-bar");
      const pct = document.querySelector(".pct");

      // Set the initial stroke-dasharray and stroke-dashoffset to circumference
      progressBar.style.strokeDasharray = `${circumference} ${circumference}`;
      progressBar.style.strokeDashoffset = circumference;

      // Assuming you have a place to display the current page/total, e.g., <p id="pageIndicator">1/4</p>
      const pageIndicator = document.getElementById("pageIndicator");
      if (pageIndicator) pageIndicator.textContent = `1/${totalProcesses}`;

      const actl = gsap.timeline({
        scrollTrigger: {
          trigger: ".home2-process-wrapper",
          start: "top 250px",
          scrub: 1,
          ease: "linear",
          markers: false,
          onUpdate: (self) => {
            const progress = self.progress; // 0 to 1
            const offset = circumference - progress * circumference;
            progressBar.style.strokeDashoffset = offset;
            pct.textContent = `${Math.round(progress * 100)}%`;

            // Calculate the current page based on scroll progress
            const currentPage = Math.min(
              Math.ceil(progress * totalProcesses),
              totalProcesses
            );
            if (pageIndicator)
              pageIndicator.textContent = `${currentPage}/${totalProcesses}`;
          },
        },
      });
      gsap.to(".progress-bar", {
        strokeDashoffset: 0, // Animate from full circumference to 0 to fill the circle
        duration: 5, // Duration in seconds
        ease: "linear", // Use an easing function to make the animation smooth
        // You can control the progress dynamically by adjusting the end value of strokeDashoffset
      });
    }
  }, []); // Empty dependency array to ensure effect runs only once
  return (
    <>
      <div className="home2-process-section mb-130">
        <div className="container-lg container-fluid">
          <div className="row mb-60">
            <div className="col-lg-12">
              <div className="section-title three text-animation">
                <h2>
                  Impact/
                  <br />
                  <span>Stats</span>
                </h2>
                <div className="dash-and-paragraph three">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477 65">
                    <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM475 3L475.255 3.42984L476.82 2.5H475V3ZM438.668 65L441.872 60.197L436.111 59.8239L438.668 65ZM3 3.5H475V2.5H3V3.5ZM474.745 2.57016C459.928 11.3742 441.341 27.8789 438.461 60.47L439.457 60.5581C442.3 28.3895 460.613 12.1303 475.255 3.42984L474.745 2.57016Z" />
                  </svg>
                  <div className="btn-and-paragraph">
                    <p>
                      At Rook, we deliver key cognitive business operations
                      impact stats, showcasing enhanced decision-making,
                      streamlined processes, and improved customer experiences
                      to drive business growth and efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-lg-4" id="scroll-progress">
            <div className="col-lg-6">
              <div className="progress-wrapper">
                <p className="pct">0%</p>
                <div className="counter-wrap">
                  <p className="steps">STATS</p>
                  <p id="pageIndicator">01/04</p>
                </div>
                <svg className="complete" width={340} height={340}>
                  <defs>
                    <linearGradient id="grad">
                      <stop offset="0%" />
                      <stop offset="100%" />
                    </linearGradient>
                  </defs>
                  <circle cx={168} cy={168} r={150} />
                  <circle className="progress-bar" cx={168} cy={168} r={150} />
                </svg>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="home2-process-wrapper">
                <div className="single-process-static">
                  <div className="single-process">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={70}
                        height={70}
                        viewBox="0 0 70 70"
                      >
                        <g>
                          <path d="M67.6527 16.0958C68.7855 14.6144 67.827 11.5646 65.5614 12.436C60.246 14.5273 54.7564 19.1456 51.1838 23.6767C47.4368 28.4693 46.7397 34.5689 48.4825 40.3199C51.0095 48.6851 58.4161 54.1748 65.5614 58.6188C68.8726 60.7101 71.8353 55.4818 68.6112 53.3905C63.383 50.1665 57.5448 46.071 54.9307 40.3199C52.9265 35.7888 52.9265 30.6477 56.2377 26.6394C59.5489 22.7182 64.4286 20.1041 67.6527 16.0958ZM1.42836 53.3905C-1.88286 55.3947 1.16694 60.6229 4.47816 58.6188C11.6234 54.1748 18.943 48.6851 21.5571 40.3199C23.2998 34.7432 22.6899 28.6435 19.1172 24.0253C15.6317 19.407 9.96781 14.6144 4.5653 12.5231C2.29973 11.6518 1.25408 14.7016 2.474 16.1829C5.61095 20.1041 10.3164 22.7182 13.6276 26.4651C17.1131 30.4734 17.2873 35.7017 15.196 40.4942C12.4948 46.071 6.56946 50.1665 1.42836 53.3905ZM53.3622 1.36957C50.1381 6.59781 46.0426 12.436 40.2916 15.0501C35.7604 17.0543 30.6193 17.0543 26.611 13.7431C22.6027 10.4319 19.9886 5.55216 15.9803 2.32808C14.5861 1.1953 11.5363 2.24094 12.4077 4.50651C14.499 9.82189 19.1172 15.3115 23.6484 18.8842C28.4409 22.6311 34.5405 23.3282 40.2916 21.5854C48.6568 19.0584 54.1464 11.6518 58.5904 4.50651C60.5946 1.1953 55.4535 -1.85451 53.3622 1.36957ZM58.5904 65.5898C54.1464 58.4445 48.6568 51.125 40.2916 48.5108C34.7148 46.7681 28.6152 47.3781 23.9969 50.9507C19.3786 54.4362 14.5861 60.1001 12.4948 65.5026C11.6234 67.7682 14.6732 68.8138 16.1546 67.5939C20.0757 64.457 22.6899 59.7516 26.4368 56.4403C30.4451 52.9548 35.6733 52.7806 40.4659 54.8719C46.2169 57.486 50.2252 63.3242 53.5365 68.5524C55.4535 71.8636 60.5946 68.901 58.5904 65.5898Z" />
                        </g>
                      </svg>
                    </div>
                    <div className="content">
                      <p>
                        Clients improved strategic decision-making and market
                        positioning through our{" "}
                        <strong>Market Research & Analysis </strong>
                        services.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="single-process-static">
                  <div className="single-process">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={70}
                        height={70}
                        viewBox="0 0 70 70"
                      >
                        <path d="M58.3331 63C58.3331 50.1144 47.8856 39.6669 35 39.6669C22.1144 39.6669 11.6669 50.1144 11.6669 63H7C7 47.537 19.537 35 35 35C50.463 35 63 47.537 63 63H58.3331ZM39.6669 7C39.6669 19.8856 50.1144 30.3338 63 30.3338V35C47.537 35 35 22.463 35 7H39.6669Z" />
                        <path d="M56 21C59.866 21 63 17.866 63 14C63 10.134 59.866 7 56 7C52.134 7 49 10.134 49 14C49 17.866 52.134 21 56 21Z" />
                        <path
                          d="M35.0001 63.0007C40.1546 63.0007 44.3332 58.8221 44.3332 53.6676C44.3332 48.513 40.1546 44.3345 35.0001 44.3345C29.8456 44.3345 25.667 48.513 25.667 53.6676C25.667 58.8221 29.8456 63.0007 35.0001 63.0007Z"
                          fill="#F5BEBE"
                        />
                        <path
                          d="M18.6669 30.3338C25.1104 30.3338 30.3338 25.1104 30.3338 18.6669C30.3338 12.2234 25.1104 7 18.6669 7C12.2234 7 7 12.2234 7 18.6669C7 25.1104 12.2234 30.3338 18.6669 30.3338Z"
                          fill="#F5BEBE"
                        />
                      </svg>
                    </div>
                    <div className="content">
                      <p>
                        faster <strong>time-to-market </strong> for new products
                        achieved with our Innovation Consulting, helping
                        businesses outpace competitors.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="single-process-static">
                  <div className="single-process">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={70}
                        height={70}
                        viewBox="0 0 70 70"
                      >
                        <path d="M60.9 25.69H44.31V9.1C44.31 7.91 45.22 7 46.41 7H60.9C62.09 7 63 7.91 63 9.1V23.59C63 24.71 62.09 25.69 60.9 25.69ZM44.31 44.31H25.69V27.79C25.69 26.6 26.6 25.69 27.79 25.69H44.38V44.31H44.31ZM23.59 63H9.1C7.91 63 7 62.09 7 60.9V46.41C7 45.22 7.91 44.31 9.1 44.31H25.69V60.9C25.69 62.09 24.71 63 23.59 63ZM9.1 7H22.54C23.73 7 24.29 8.4 23.45 9.24L9.24 23.45C8.4 24.29 7 23.66 7 22.54V9.1C7 7.91 7.91 7 9.1 7Z" />
                        <path d="M60.9001 63.0001H46.4101C45.2201 63.0001 44.3101 62.0901 44.3101 60.9001V44.3101H60.9001C62.0901 44.3101 63.0001 45.2201 63.0001 46.4101V60.9001C63.0001 62.0901 62.0901 63.0001 60.9001 63.0001Z" />
                      </svg>
                    </div>
                    <div className="content">
                      <p>
                        reduction in system downtime and maintenance costs with
                        our <strong>Software Architecture Consulting </strong>,
                        ensuring reliable performance.
                      </p>
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

export default ServiceImpactStatsPage;
