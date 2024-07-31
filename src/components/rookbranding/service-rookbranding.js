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
                  At Rook® Branding, we specialize in crafting distinctive brand
                  identities that resonate with your audience and reflect your
                  business values. Whether launching a new brand or revitalizing
                  an existing one, we start by deeply understanding your
                  objectives and target market through research and analysis.
                  Our tailored strategies enhance visibility and ensure
                  alignment with long-term goals, blending creativity with
                  strategic insights for lasting impact.
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  With a focus on innovation and market relevance, Rook®
                  Branding offers comprehensive services to elevate your brand's
                  presence. From concept development to implementation, we guide
                  you through the branding process with expertise. Our team
                  leverages industry knowledge to unlock your brand's potential
                  and achieve meaningful results.
                </p>
              </div>
            </div>
            <span className="line-break" />
            <span className="line-break" />
            <h3>Key Features</h3>
            <div className="row g-lg-4 gy-3">
              <div className="col-lg-6">
                <p>
                  At Rook® Branding, our approach begins with in-depth market
                  analysis to uncover strategic branding opportunities tailored
                  to your unique business needs. We specialize in developing
                  customized brand strategies that differentiate your brand and
                  drive engagement. From logo design to comprehensive brand
                  guidelines, our creative solutions are crafted to enhance your
                  brand's identity across all touchpoints.
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  Effective branding integrates storytelling, design, and
                  strategic positioning. Rook Branding's holistic approach
                  ensures every aspect of your brand resonates with your
                  audience and supports business goals. Partner with us to
                  transform your brand into a compelling story that captivates
                  and inspires.
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
