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
                  Our Go-to-Market (GTM) Consultation service is designed to
                  help businesses successfully launch and position their
                  products in the market. By leveraging our extensive industry
                  experience and strategic insights, we guide you through the
                  complex process of market entry, ensuring your product reaches
                  its full potential.
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  We understand that a successful GTM strategy requires
                  meticulous planning, in-depth market research, and a clear
                  understanding of your target audience. Our team of experts
                  collaborates with you to develop a customized GTM plan that
                  aligns with your business goals and market dynamics.
                </p>
              </div>
            </div>
            <span className="line-break" />
            <span className="line-break" />
            <h3>Key Features</h3>
            <div className="row g-lg-4 gy-3">
              <div className="col-lg-6">
                <p>
                  Rook Go-to-Market (GTM) service provides comprehensive market
                  analysis and target audience identification. We help you gain
                  valuable insights into market trends, customer behavior, and
                  the competitive landscape, enabling you to make informed
                  decisions.
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  Additionally, we offer a competitive landscape assessment and
                  a detailed go-to-market roadmap. Our experts analyze your
                  competitors to identify opportunities and differentiate your
                  product in the market. The roadmap outlines the steps needed
                  to launch and promote your product successfully.
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
