import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const Brand = () => {
  return (
    <>
     
      <div className="partner-area three pt-130">
        <div className="container-lg container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-and-logo">
                <div className="partner-title">
                  <h6>Brands that trust us</h6>
                </div>
                <div className="partner-wrap">
                  <div className="marquee light">
                    <div className="marquee__group">
                      <Marquee>
                      <a href="#"><img src="assets/img/Partners/ICM-light.jpg" alt="" style={{height:"50px" , width:"150px"}} /></a>
                <a href="#"><img src="assets/img/Partners/DSP-light.png" alt="" style={{height:"50px" , width:"150px"}} /></a>
                <a href="#"><img src="assets/img/Partners/Finequs-light.png" alt=""/></a>
                <a href="#"><img src="assets/img/Partners/CEC-light.png" alt="" /></a>
                <a href="#"><img src="assets/img/Partners/Townhall.png" alt=""style={{height:"100px" , width:"180px"}} /></a>
                      </Marquee>
                    </div>
                 
                  </div>
                  <div className="marquee dark">
                    <div className="marquee__group">
                      <Marquee>
                      <a href="#"><img src="assets/img/Partners/ICM-light.jpg" alt="" style={{height:"50px" , width:"150px"}} /></a>
                <a href="#"><img src="assets/img/Partners/DSP-light.png" alt="" style={{height:"50px" , width:"150px"}} /></a>
                <a href="#"><img src="assets/img/Partners/Finequs-light.png" alt="" /></a>
                <a href="#"><img src="assets/img/Partners/CEC-light.png" alt="" /></a>
                <a href="#"><img src="assets/img/Partners/Townhall.png" alt=""style={{height:"100px" , width:"180px"}} /></a>
                      </Marquee>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
