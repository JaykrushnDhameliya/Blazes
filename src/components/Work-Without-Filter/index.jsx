/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorkWithoutFilter = ({ vis }) => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <section className="works section-padding">
        <div className="container">
          <div className="row gallery">
            <div className="col-md-6 items mt-0">
              <div className="main-header mb-0">
                <h3>Works.</h3>
              </div>
            </div>
            <div className="col-md-6 items">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/Preview-1.jpg" alt="" />
                </div>
                <div className={`cont ${vis ? "vis" : ""}`}>
                  <span>Architecture</span>
                  <span>1</span>
                  <h5>
                    <h6>Preview-1</h6>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 items">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/Preview-2.jpg" alt="" />
                </div>
                <div className={`cont ${vis ? "vis" : ""}`}>
                  <span>Architecture</span>
                  <span>2</span>
                  <h5>
                    <h6>Preview-2</h6>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 items">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/Preview-3.jpg" alt="" />
                </div>
                <div className={`cont ${vis ? "vis" : ""}`}>
                  <span>Architecture</span>
                  <span>3</span>
                  <h5>
                    <h6>Preview-3</h6>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 items">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/Preview-4.jpg" alt="" />
                </div>
                <div className={`cont ${vis ? "vis" : ""}`}>
                  <span>Architecture</span>
                  <span>4</span>
                  <h5>
                    <h6>Preview-4</h6>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 items">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/Preview-5.jpg" alt="" />
                </div>
                <div className={`cont ${vis ? "vis" : ""}`}>
                  <span>Architecture</span>
                  <span>5</span>
                  <h5>
                    <h6>Preview-5</h6>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkWithoutFilter;
