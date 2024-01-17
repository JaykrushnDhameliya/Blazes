/* eslint-disable @next/next/no-img-element */
import React,{useEffect } from "react";
import initIsotope from "../../common/initIsotope";

export const WallHung = () => {

  useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);

  const WallHungs = [
    { img: "/assets/SANITARYWARES/2 - WALL HUNG/201 - TESTA.jpeg", name:"TESTA" },
    { img: "/assets/SANITARYWARES/2 - WALL HUNG/202 - CREADOR.jpeg", name:"CREADOR" },
    { img: "/assets/SANITARYWARES/2 - WALL HUNG/203 AVION.jpeg", name:"ION" },
    { img: "/assets/SANITARYWARES/2 - WALL HUNG/204 - EDGE.jpeg", name:"EDGE" },
    { img: "/assets/SANITARYWARES/2 - WALL HUNG/205 - ALBUS.jpeg", name:"ALBUS" },
    { img: "/assets/SANITARYWARES/2 - WALL HUNG/206 - MIRUS.jpeg", name:"MIRUS" },
    { img: "/assets/SANITARYWARES/2 - WALL HUNG/207  -RATT.jpeg", name:"RATT" },
    { img: "/assets/SANITARYWARES/2 - WALL HUNG/208 - DURA.jpeg", name:"DURA" },
  ];
  return (
    <>
      <section className="works filter-img three-col section-padding">
      <div className="auto-type">
          <h1>Wall Hung</h1>
        </div>
        <div className="container">
          <div className="row gallery">
            {WallHungs.map((item) => {
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
                      <span>Wall Hung</span>
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
                        Wall Hung description
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
