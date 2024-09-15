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
                At Rook, we empower enterprises with advanced platform solutions designed to drive innovation and growth. Our services include platform development, integration, and optimization, tailored to meet your unique needs. With a focus on security, scalability, and efficiency, we help businesses streamline operations and achieve strategic goals.
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                From Platform Development and Integration to Advanced Analytics and System Optimization, we provide the tools and expertise necessary to transform your business operations. Elevate your enterprise capabilities with Rook and stay ahead in today’s competitive landscape, redefining what’s possible for your business.
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
