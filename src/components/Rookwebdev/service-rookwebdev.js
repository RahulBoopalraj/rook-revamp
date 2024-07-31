import ServiceDetails from "@/components/services-section/service-details";
export const metadata = {
  title: "Axleo - Digital Agency Creative Portfolio Template",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
const ServiceDetailsPage = () => {
  return (
    <>
      <div className="details-page-wrapper service-details pt-130 mb-130">
        <div className="container-lg container-fluid">
          <ServiceDetails />
          <span className="line-break" />
          <span className="line-break" />
          <span className="line-break" />
          <span className="line-break" />
          <span className="line-break" />
          <span className="line-break" />
          <div className="details-page-content mb-130">
            <h3>Service Overview</h3>
            <div className="row g-lg-4 gy-3">
              <div className="col-lg-6">
                <p className="first-para">
                  Our Web Development service at Rook is designed to empower
                  businesses with robust and user-centric websites. Leveraging
                  our expertise in web technologies and design, we create
                  tailored solutions that enhance your online presence and drive
                  business growth.
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  We understand that a successful website requires more than
                  just aesthetics; it needs seamless functionality, intuitive
                  navigation, and a responsive design. Our team collaborates
                  closely with you to understand your brand identity and
                  business objectives, ensuring that every aspect of your
                  website aligns with your vision.
                </p>
              </div>
            </div>
            <span className="line-break" />
            <span className="line-break" />
            <h3>Key Features</h3>
            <div className="row g-lg-4 gy-3">
              <div className="col-lg-6">
                <p>
                  Rook Web Development service offers custom website design and
                  development tailored to your unique needs. We prioritize user
                  experience and incorporate the latest web technologies to
                  optimize performance and engagement.
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  Additionally, we provide comprehensive testing and
                  optimization to ensure your website functions flawlessly
                  across devices and browsers. Our team also offers ongoing
                  support and maintenance to keep your website secure and
                  up-to-date with evolving industry standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsPage;
