/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import initIsotope from "../../common/initIsotope";

export const NonBasmatis = () => {
  useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  const NonBasmati = [
    { img: "/assets/img/non-basmati.jpg", name: "Non Basmati" },
  ];

  return (
    <>
      <section className="works filter-img three-col section-padding">
        <div className="auto-type">
          <h1>Non Basmati</h1>
        </div>

        <div className="container">
          <div className="row gallery">
            {NonBasmati.map((item) => {
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
                      <span>Non Basmati</span>
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
                          Non Basmati description
                        </strong>
                      </h2>
                      <hr className="sep-red" />
                      <ul className="whyus-ul-li whyus">
                        <p>
                        &quot;Non-Basmati&quot; refers to a category of rice that does
                          not belong to the Basmati variety. Basmati rice is a
                          specific type of long-grain aromatic rice known for
                          its distinct fragrance, elongated grains, and fluffy
                          texture when cooked. Non-Basmati rice, on the other
                          hand, encompasses various varieties of rice that don&apos;t
                          meet the criteria to be classified as Basmati.
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
