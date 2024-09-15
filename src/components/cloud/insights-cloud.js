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
                  At Rook, we empower businesses with cutting-edge cloud
                  solutions, driving innovation, resilience, and growth. Our
                  expert team builds, migrates, and manages cloud environments
                  tailored to your needs, ensuring a secure and cost-effective
                  experience. With Rook, you can innovate at speed, maintain security, and optimize cloud costs
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  From Cloud Migration and API Integration to DevOps and
                  Disaster Recovery, we help businesses innovate quickly,
                  maintain security, and optimize cloud costs, future-proofing
                  your business for today and tomorrow.Join the cloud revolution and future-proof your business with our comprehensive cloud solutions.
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
