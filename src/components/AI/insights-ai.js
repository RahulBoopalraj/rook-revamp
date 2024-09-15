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
                  At Rook, we are dedicated to harnessing the power of
                  artificial intelligence to revolutionize the way businesses
                  operate. Our AI solutions are crafted to drive innovation,
                  enhance decision-making, and propel growth. Whether you're
                  just beginning your AI journey or looking to elevate your
                  current strategies, Rook’s AI services are designed to
                  transform your business operations for today and the future.
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  Our team of AI specialists excels in delivering a range of
                  services, from developing intelligent algorithms and
                  implementing machine learning models to integrating AI-driven
                  solutions and ensuring ethical AI practices. We focus on
                  creating solutions that are not only innovative but also
                  practical and tailored to your unique business needs. Embrace
                  the future with Rook’s AI services and drive your business
                  forward with intelligence and insight.
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
