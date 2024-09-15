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
                  At Rook, we streamline your online presence with our Corporate
                  Domain Name Services. From domain registration and management
                  to DNS services, we provide tailored solutions to enhance your
                  brand’s digital identity. Ensure a secure, efficient, and
                  reliable domain experience with Rook, and stay ahead in the
                  digital landscape.
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  Empower your brand with Rook’s Corporate Domain Name Services
                  and establish a commanding presence in the digital landscape.
                  Our commitment is to provide you with a robust, secure, and
                  efficient domain management experience that supports your
                  business growth and online success.
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
