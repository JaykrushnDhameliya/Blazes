/* eslint-disable @next/next/no-img-element */
import React from "react";

 const AboutUs8 = () => {
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 exp">
            <div className="mb-50">
              <h6 className="fw-100 text-u ls10 main-color mb-10">Welcome To</h6>
              <h5 className="fw-400 text-u ls4">The Innovative & Excellence</h5>
            </div>
            <div className="box">
              <h4 className="fz-40 fw-600 ls1 mb-20">
                Blaze International
              </h4>
              <p style={{lineHeight:'1.4'}}>
                Nestled at the crossroads of innovation and quality, Blaze International champions the export of a diverse portfolio. From the exquisite craftsmanship of ceramic tiles to the organic richness of agricultural products, we bridge continents. Our PVC products, synonymous with durability, and the freshest of fruits, curated for global palettes, underscore our commitment to excellence. Blaze International where the world meets our standards
              </p>
            </div>
          </div>
          <div className="col-lg-7 img">
            <img src="/assets/img/about01.jpg" alt="" />

            <div className="feat mt-30">
              <div className="item">
                <div>
                  <h5>01</h5>
                  <h6>Architecture</h6>
                </div>
              </div>
              <div className="item">
                <div>
                  <h5>02</h5>
                  <h6>Interior Design</h6>
                </div>
              </div>
              <div className="item">
                <div>
                  <h5>03</h5>
                  <h6>3D Modeling</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs8;