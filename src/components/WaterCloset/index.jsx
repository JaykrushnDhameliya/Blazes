/* eslint-disable @next/next/no-img-element */
import React,{useEffect } from "react";
import initIsotope from "../../common/initIsotope";

export const WaterCloset = () => {

  useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  const WaterCloset = [
    { img: "/assets/SANITARYWARES/8 - WATER CLOSET/801 CONCEALD.jpeg", name: "CONCEALD" },
    { img: "/assets/SANITARYWARES/8 - WATER CLOSET/802 - SAGA EWC S.jpeg", name: "SAGA EWC S" },
    { img: "/assets/SANITARYWARES/8 - WATER CLOSET/803 - EUROPA.jpeg", name: "EUROPA" },
  ];
  return (
    <>
      <section className="works filter-img three-col section-padding">
      <div className="auto-type">
          <h1>Water Closet</h1>
        </div>
        <div className="container">
          <div className="row gallery">
            {WaterCloset.map((item) => {
              return (
                <div
                  key={item.name}
                  className="col-lg-4 col-md-6 items"
                  style={{ margin: "25px 0",}}
                >
                  <div
                    className="item item-border"
                    style={{
                        borderRadius:'50px' 
                    }}
                  >
                    <div className="img">
                      <img
                        src={item.img}
                        alt=""
                        style={{
                          height: "300px",
                          borderRadius:'50px'
                        }}
                      />
                    </div>
                    <div className="cont">
                      <h5>{item.name}</h5>
                      <span>Water Closet</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <div className="row gallery">
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
                        Water Closet description
                        </strong>
                      </h2>  
                      <hr className="sep-red" />
                      <ul className="whyus-ul-li whyus">
                        <p>
                          Oil is a versatile and essential natural resource that
                          plays a pivotal role in various aspects of modern
                          life. It is a viscous, hydrophobic liquid derived from
                          geological processes deep within the Earth&apos;s crust,
                          typically found in underground reservoirs. Crude oil,
                          as it is commonly referred to, serves as the primary
                          source for the production of various petroleum-based
                          products, including gasoline, diesel fuel, jet fuel,
                          and lubricants, which power our transportation systems
                          and industries.
                        </p>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};
