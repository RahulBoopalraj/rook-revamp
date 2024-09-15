import ServiceDetails from "@/components/services-section/service-details";
export const metadata = {
  title: "Axleo - Digital Agency Creative Portfolio Template",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
const ServiceInsightsPage = () => {
  return (
    <>
      <div className="details-page-wrapper service-details pt-130 mb-130">
        <div className="container-lg container-fluid">
          <div className="details-page-content mb-130">
            <h3>Overview/Insights</h3>
            <div className="row g-lg-4 gy-3">
              <div className="col-lg-6">
                <p className="first-para">
                  At Rook, our consulting services are designed to propel your
                  business forward with strategic insights and innovative
                  solutions. From Market Research & Analysis to Innovation
                  Consulting, we provide tailored guidance to help you navigate
                  industry trends and make informed decisions.
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  We also offer expertise in Software Architecture, Social Media
                  Strategy, and Market Validation, ensuring your technology,
                  digital presence, and product offerings are optimized for
                  success. Partner with Rook to turn challenges into
                  opportunities and drive sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceInsightsPage;
