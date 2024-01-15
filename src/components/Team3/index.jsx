/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Team3 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="team section-padding">
      <div className="container">
        <div className="section-head" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
          <h3>Our Products</h3>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="item cir md-mb50">
            <Link href="/wash-basin">
              <div className="img" data-aos="zoom-in" data-aos-duration="2000">
                <img src="/assets/img/team/Tiles.jpg" alt="" className="productImg" />
                <div id="circle">
                  <svg
                    version="1.1"
                    x="0px"
                    y="0px"
                    width="300px"
                    height="300px"
                    viewBox="0 0 300 300"
                    enableBackground="new 0 0 300 300"
                    xmlSpace="preserve"
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                      />
                    </defs>
                    <circle cx="150" cy="100" r="75" fill="none" />
                    <g>
                      <use xlinkHref="#circlePath" fill="none" />
                      <text fill="#dd5826">
                        <textPath xlinkHref="#circlePath">
                          BLAZE International BLAZE International
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <div className="info">
                  <h6>Ceramic Tiles</h6>
                  <span>Product Manager</span>
                </div>
              </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item cir md-mb50">
            <Link href="/wash-basin">
              <div className="img" data-aos="zoom-in" data-aos-duration="2000">
                <img src="/assets/img/team/Sanitaryware.jpg" alt="" className="productImg"/>
                <div id="circle">
                  <svg
                    version="1.1"
                    x="0px"
                    y="0px"
                    width="300px"
                    height="300px"
                    viewBox="0 0 300 300"
                    enableBackground="new 0 0 300 300"
                    xmlSpace="preserve"
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                      />
                    </defs>
                    <circle cx="150" cy="100" r="75" fill="none" />
                    <g>
                      <use xlinkHref="#circlePath" fill="none" />
                      <text fill="#dd5826">
                        <textPath xlinkHref="#circlePath">
                        BLAZE International BLAZE International
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <div className="info">
                  <h6>Sanitaryware</h6>
                  <span>Product Manager</span>
                </div>
              </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item cir sm-mb50">
            <Link href="/pulses">
              <div className="img" data-aos="zoom-in" data-aos-duration="2000">
                <img src="/assets/img/team/Pulses.jpg" alt="" className="productImg"/>
                <div id="circle">
                  <svg
                    version="1.1"
                    x="0px"
                    y="0px"
                    width="300px"
                    height="300px"
                    viewBox="0 0 300 300"
                    enableBackground="new 0 0 300 300"
                    xmlSpace="preserve"
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                      />
                    </defs>
                    <circle cx="150" cy="100" r="75" fill="none" />
                    <g>
                      <use xlinkHref="#circlePath" fill="none" />
                      <text fill="#dd5826">
                        <textPath xlinkHref="#circlePath">
                        BLAZE International BLAZE International
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <div className="info">
                  <h6>Pulses</h6>
                  <span>Product Manager</span>
                </div>
              </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item cir">
            <Link href="/pulses">
              <div className="img" data-aos="zoom-in" data-aos-duration="2000">
                <img src="/assets/img/team/Rice.jpg" alt="" className="productImg"/>
                <div id="circle">
                  <svg
                    version="1.1"
                    x="0px"
                    y="0px"
                    width="300px"
                    height="300px"
                    viewBox="0 0 300 300"
                    enableBackground="new 0 0 300 300"
                    xmlSpace="preserve"
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                      />
                    </defs>
                    <circle cx="150" cy="100" r="75" fill="none" />
                    <g>
                      <use xlinkHref="#circlePath" fill="none" />
                      <text fill="#dd5826">
                        <textPath xlinkHref="#circlePath">
                         BLAZE International BLAZE International
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <div className="info">
                  <h6>Rice</h6>
                  <span>Product Manager</span>
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Team3;
