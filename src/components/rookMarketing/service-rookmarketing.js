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
                  Rook® Marketing specializes in delivering tailored marketing
                  solutions that elevate your brand's visibility and impact. We
                  begin with thorough market analysis and audience research to
                  understand your business's strengths and challenges. Our
                  strategies are crafted to align with your goals, whether it's
                  increasing brand awareness, driving conversions, or enhancing
                  customer engagement.
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  Our expertise spans strategic planning, creative campaign
                  development, and precise execution across digital channels. We
                  excel in creating compelling content that resonates with your
                  audience and managing effective advertising campaigns to
                  maximize ROI. Expect proactive guidance and measurable results
                  with Rook Marketing, empowering your business in the dynamic
                  digital landscape.
                </p>
              </div>
            </div>
            <span className="line-break" />
            <span className="line-break" />
            <h3>Key Features</h3>
            <div className="row g-lg-4 gy-3">
              <div className="col-lg-6">
                <p>
                  At Rook® Marketing, we specialize in providing customized
                  solutions to amplify your brand's presence and drive
                  meaningful growth. Our services begin with detailed market
                  analysis and audience insights, allowing us to craft tailored
                  strategies that align with your business goals. Whether you
                  need to increase brand awareness, boost conversions, or engage
                  your audience effectively, our team is equipped to deliver
                  results.
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  Our expertise extends to strategic planning, where we develop
                  cohesive marketing plans that integrate creative campaigns and
                  targeted advertising across various digital channels. We focus
                  on creating compelling content that resonates with your target
                  audience and managing campaigns that optimize performance and
                  maximize ROI. With Rook® Marketing, expect proactive guidance
                  and measurable outcomes that propel your business forward in
                  the competitive digital landscape.
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
