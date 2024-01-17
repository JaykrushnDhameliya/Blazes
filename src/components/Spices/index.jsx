/* eslint-disable @next/next/no-img-element */
import React,{useEffect } from "react";
import initIsotope from "../../common/initIsotope";

export const Spices = () => {

  useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  const Spices = [
    { img: "/assets/Spices/tumeric.webp", name: "tumeric" },
    { img: "/assets/Spices/Cloves.jpg", name: "Cloves" },
    { img: "/assets/Spices/Cinna Momum.jpg", name: "Cinna Momum" },
    { img: "/assets/Spices/Green Cardamom.jpg", name: "Green Cardamom" },
  ];
  return (
    <>
      <section className="works filter-img three-col section-padding">
      <div className="auto-type">
          <h1>Spices</h1>
        </div>
        <div className="container">
          <div className="row gallery">
            {Spices.map((item) => {
              return (
                <div
                  className="col-lg-4 col-md-6 items"
                  key={item.name}
                  style={{
                    margin: "40px 0px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="item"
                    style={{
                    //   height: "300px",
                    //   maxWidth: "340px",
                    //   objectFit: "cover",
                    //   width: "100%",
                    //   backgroundColor: "transparent",
                    }}
                  >
                    <div className="img">
                      <img
                        src={item.img}
                        alt=""
                        style={{
                        //   height: "300px",
                        //   maxWidth: "340px",
                        //   objectFit: "cover",
                        //   width: "100%",
                        height:'300px'
                        }}
                      />
                    </div>
                    <div className="cont">
                      <h5>{item.name}</h5>
                      <span>Spices</span>
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
                          Spice description
                        </strong>
                      </h2>
                      <hr className="sep-red" />
                      <ul className="whyus-ul-li whyus">
                        <p>
                          Spices are essential ingredients in cooking, adding
                          depth, flavor, and aroma to dishes from all corners of
                          the world. These tiny, potent treasures are derived
                          from various parts of plants, such as seeds, bark,
                          roots, or leaves, and are known for their ability to
                          transform ordinary ingredients into extraordinary
                          culinary experiences. Whether it&apos;s the warmth of
                          cinnamon, the heat of chili peppers, the earthiness of
                          cumin, or the complex flavors of garam masala, spices
                          have the power to elevate the simplest meals into
                          gourmet delights. With a rich history spanning
                          centuries and a global impact on cuisines, spices
                          continue to play a pivotal role in shaping the diverse
                          and flavorful world of food.
                        </p>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* );
            })} */}
          </div>
        </div>
      </section>
    </>
  );
};
