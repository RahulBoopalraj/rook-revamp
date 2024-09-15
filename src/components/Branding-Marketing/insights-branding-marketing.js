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
                  At Rook, we help brands connect, engage, and grow through
                  innovative marketing and branding services. Our expert team
                  crafts personalized campaigns, creative strategies, and
                  data-driven insights to elevate your brand’s visibility and
                  impact. From digital marketing and content creation to SEO and
                  social media management, we ensure your brand stands out and
                  thrives in today’s competitive landscape. Let Rook take your
                  brand to new heights.
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  Our solutions are tailored to meet your specific goals,
                  ensuring a unique approach for every brand. By combining
                  creativity with advanced marketing techniques, we drive
                  measurable results that boost engagement and foster brand
                  loyalty.
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
