/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import initIsotope from "../../common/initIsotope";

export const Pulses = () => {
  const [text, setText] = useState("");
  const [isAdding, setIsAdding] = useState(true);

  useEffect(() => {
    let timer;

    const addText = () => {
      if (isAdding) {
        setText((prevText) => {
          if (prevText.length < message.length) {
            return message.slice(0, prevText.length + 1);
          } else {
            setIsAdding(false);
            return prevText;
          }
        });
      } else {
        setText((prevText) => {
          if (prevText.length > 0) {
            return prevText.slice(0, prevText.length - 1);
          } else {
            setIsAdding(true);
            return prevText;
          }
        });
      }
    };

    const message = "Pulses";
    const interval = 200;

    timer = setInterval(addText, interval);

    return () => {
      clearInterval(timer);
    };
  }, [isAdding]);

  useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  const Pulses = [
    { img: "/assets/Pulses/toordal.jpg", name: "Toor Dal" },
    { img: "/assets/Pulses/kala chana.jpg", name: "kala Chana" },
    { img: "/assets/Pulses/Moong Dal.jpg", name: "Moong Dal" },
    { img: "/assets/Pulses/chana-dal.jpg", name: "Chana Dal" },
  ];

  return (
    <>
      <section className="works filter-img three-col section-padding">
        <div className="auto-type">
          <span>{text}</span>
        </div>

        <div className="container">
          <div className="row gallery">
            {Pulses.map((item) => {
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
                      <span>Pulses</span>
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
                          Pulses description
                        </strong>
                      </h2>
                      <hr className="sep-red" />
                      <ul className="whyus-ul-li whyus">
                        <p>
                          Pulses are a diverse group of crops that includes
                          beans, lentils, chickpeas, and peas. These edible
                          seeds of leguminous plants are not only a staple in
                          many diets around the world but also offer a rich
                          source of plant-based protein, dietary fiber,
                          vitamins, and minerals. Pulses are known for their
                          nutritional value and sustainable agricultural
                          practices, making them a vital component of global
                          food security and a key player in promoting healthy
                          diets and environmental sustainability.
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
