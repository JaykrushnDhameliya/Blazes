/* eslint-disable @next/next/no-img-element */
import React,{useEffect } from "react";
import initIsotope from "../../common/initIsotope";

export const Flour = () => {
  useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  const Flour = [
    { img: "/assets/Flour/Wheat Flour.jpg", name: "Wheat Flour" },
    { img: "/assets/Flour/Bajra-Flour.jpg", name: "Bajra Flour" },
    { img: "/assets/Flour/flour-wheat atta.webp", name: "wheat Flour" },
  ];
  return (
    <>
      <section className="works filter-img three-col section-padding">
      <div className="auto-type">
        <h1>Flour</h1>
        </div>
        <div className="container">
          <div className="row gallery">
            {Flour.map((item) => {
              return (
                <div
                  className="col-lg-4 col-md-6  col-lg-offset-2 items"
                  style={{ margin: "25px 0" }}
                  key={item.name}
                >
                  <div
                    className="item"
                    style={{
                      backgroundColor: "transparent",
                    }}
                  >
                    <div className="img">
                      <img
                        src={item.img}
                        alt=""
                        style={{
                          height: "32vh",
                        }}
                      />
                    </div>
                    <div className="cont">
                      <h5>{item.name}</h5>
                      <span>Flour</span>
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
                        Flour description
                        </strong>
                      </h2>
                      <hr className="sep-red" />
                      <ul className="whyus-ul-li whyus">
                        <p>
                          Flour is a versatile and essential ingredient in
                          cooking and baking, renowned for its ability to
                          transform simple ingredients into a wide array of
                          delicious dishes. Derived from grinding grains such as
                          wheat, rice, corn, or oats, flour serves as the
                          fundamental building block for a myriad of culinary
                          creations. From crafting delicate pastries and fluffy
                          bread to thickening sauces and batters, its fine
                          powdery texture and neutral flavor make it a culinary
                          cornerstone. Whether you&apos;re a seasoned chef or a
                          novice home cook, flour&apos;s universal presence in
                          kitchens worldwide ensures it plays an indispensable
                          role in satisfying our appetites and culinary
                          ambitions.
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
