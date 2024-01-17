/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import initIsotope from "../../common/initIsotope";

export const ToorDal = () => {
  useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  const ToorDal = [{ img: "/assets/Pulses/toordal.jpg", name: "Toor Dal" }];

  return (
    <>
      <section className="works filter-img three-col section-padding">
        <div className="auto-type">
          <h1>Toor Dal</h1>
        </div>

        <div className="container">
          <div className="row gallery">
            {ToorDal.map((item) => {
              return (
                <div
                  key={item.name}
                  className="col-lg-4 col-md-6 items"
                  style={{ margin: "25px 0" }}
                >
                  <div
                    className="item"
                    style={
                      {
                        // height: "300px",
                        // minWidth: "350px",
                        // objectFit: "cover",
                        // width: "100%",
                        // backgroundColor: "transparent",
                      }
                    }
                  >
                    <div className="img">
                      <img
                        src={item.img}
                        alt=""
                        style={{
                          // height: "300px",
                          // minWidth: "350px",
                          // objectFit: "cover",
                          // width: "100%",
                          height: "300px",
                        }}
                      />
                    </div>
                    <div className="cont">
                      <h5>{item.name}</h5>
                      <span>Toor Dal</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row gallery">
            <div
              className="col-lg-12 col-md-12 items"
              style={{
                margin: "40px 0px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                className="row block-full-height-sm"
                style={{ justifyContent: "center", margin: "50px  0 0 0" }}
              >
                <div className="vcenter-outer">
                  <div className="vcenter-inner">
                    <div
                      className="col-lg-12 col-lg-offset-2 expt1"
                      data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="1000"
                    >
                      <h2 className="info-window-title text-white text-uppercase">
                        <strong className="text-weight-700">
                          Toor Dal description
                        </strong>
                      </h2>
                      <hr className="sep-red" />
                      <ul className="whyus-ul-li whyus">
                        <p>
                          Toor dal, also known as split pigeon peas, is a
                          popular legume in Indian cuisine. These yellow, split
                          lentils are known for their mild, nutty flavor and are
                          commonly used in various dishes such as dal (lentil
                          curry), sambar (a South Indian lentil-based vegetable
                          stew), and rasam (a tangy soup). Toor dal is rich in
                          protein, dietary fiber, and essential nutrients,
                          making it a staple in vegetarian and vegan diets. It
                          is often cooked with spices and herbs to enhance its
                          taste and nutritional value.
                        </p>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
