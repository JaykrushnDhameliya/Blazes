/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import initIsotope from "../../common/initIsotope";

export const Basmatis = () => {
  useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  const Basmati = [{ img: "/assets/img/Basmati.jpg", name: "Basmati" }];

  return (
    <>
      <section className="works filter-img three-col section-padding">
        <div className="auto-type">
          <h1>Basmati</h1>
        </div>

        <div className="container">
          <div className="row gallery">
            {Basmati.map((item) => {
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
                          height: "32vh",
                        }}
                      />
                    </div>
                    <div className="cont">
                      <h5>{item.name}</h5>
                      <span>Basmati</span>
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
                          Basmati description
                        </strong>
                      </h2>
                      <hr className="sep-red" />
                      <ul className="whyus-ul-li whyus">
                        <p>
                          Basmati rice is a long-grain rice variety known for
                          its distinct aroma, fluffy texture, and elongated
                          grains. Primarily grown in the Indian subcontinent,
                          particularly in the Himalayan foothills, and in
                          specific regions of Pakistan, Basmati rice is prized
                          for its fragrant, nutty scent and delicate flavor.
                          This rice type is commonly used in various South Asian
                          and Middle Eastern cuisines, including biryanis,
                          pilafs, and other rice-based dishes. Basmati rice is
                          known for its ability to elongate and separate when
                          cooked, creating light and fluffy grains that
                          contribute to its popularity in a wide range of
                          culinary applications. Is this conversation helpful so
                          far?
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
