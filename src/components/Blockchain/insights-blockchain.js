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
                  At Rook, we leverage advanced cognitive technologies to
                  transform your business operations, enhancing decision-making
                  and automating routine tasks. Our solutions integrate machine
                  learning and predictive analytics to provide actionable
                  insights, enabling your business to operate with greater
                  efficiency and accuracy.
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  From intelligent automation and process optimization to
                  advanced analytics, AI-driven insights, and natural language
                  processing, Rook’s cognitive services are designed to meet
                  your unique needs. Embrace the future of business operations
                  with Rook and unlock new levels of productivity and
                  innovation.
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
