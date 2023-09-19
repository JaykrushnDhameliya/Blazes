/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurCompany = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
   <section className="ttm-row services-section ttm-bgcolor-grey mt-5 clearfix">
            <div className="container">
               
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title title-style-center_text">
                            <div className="title-header">
                                <h3>Our Company</h3>
                                <h2 className="title">Vision,mission and Value</h2>
                            </div>
                           
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                       
                        <div className="row no-gutters">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="featured-icon-box style7" style={{overflow:'hidden'}}>
                                    <div className="featured-icon" data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-duration="3000">
                                        <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-size-lg ttm-icon_element-color-skincolor ttm-icon_element-style-rounded">
                                            <i className="flaticon-home7"></i>
                                        </div>
                                    </div>
                                    <div className="sep_line ttm-bgcolor-skincolor"></div>
                                    <div className="featured-content sal-animate" data-sal="slide-up" data-aos="zoom-out-down" data-aos-duration="2000">
                                        <div className="featured-title">
                                            <h3>Our Vision</h3>
                                        </div>
                                        <div className="featured-desc">
                                            <p>Making residential and commercial places excellent by providing high quality tiles solution to the world. Our endeavour is to be the largest producer and exporter of quality tiles in the industry.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="featured-icon-box style7" style={{overflow:'hidden'}}>
                                    <div className="featured-content sal-animate" data-sal="slide-up" style={{margin: '-40px 0 40px 0'}} data-aos="zoom-out-down" data-aos-duration="2000">
                                        <div className="featured-title">
                                            <h3> Our Value </h3>
                                        </div>
                                        <div className="featured-desc">
                                            <p>We exceed expectations through our innovation, designs and best quality product to enlighten customer&apos;s satisfaction. We have worked hard to create our own mark in the ceramic industry.</p>
                                        </div>
                                    </div>
                                    <div className="sep_line ttm-bgcolor-darkgrey"></div>
                                    <div className="featured-icon" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="3000">
                                        <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-size-lg ttm-icon_element-color-darkgrey ttm-icon_element-style-rounded">
                                            <i className="flaticon-home7"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="featured-icon-box style7" style={{overflow:'hidden'}}>
                                    <div className="featured-icon" data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-duration="3000">
                                        <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-size-lg ttm-icon_element-color-skincolor ttm-icon_element-style-rounded">
                                            <i className="flaticon-home7"></i>
                                        </div>
                                    </div>
                                    <div className="sep_line ttm-bgcolor-skincolor"></div>
                                    <div className="featured-content sal-animate" data-sal="slide-up" data-aos="zoom-out-down" data-aos-duration="2000">
                                        <div className="featured-title">
                                            <h3>Our Mission</h3>
                                        </div>
                                        <div className="featured-desc">
                                            <p>Proceeding business with the best management, responsibilityand relationship with the people. We dream big as a team by develop their abilities especially technology.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default OurCompany;
