/* eslint-disable @next/next/no-img-element */
import React,{useEffect } from "react";
import initIsotope from "../../common/initIsotope";

export const OnePcs = () => {

  useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  const OnePiece = [
    { img: "/assets/SANITARYWARES/1 - ONE PCS/101 - SWE ALMA.jpeg", name:"SWE ALMA" },
    { img: "/assets/SANITARYWARES/1 - ONE PCS/102 - SWE RATON.jpeg", name:"SWE RATON" },
    { img: "/assets/SANITARYWARES/1 - ONE PCS/103 - SWE ORO.jpeg", name:"SWE ORO" },
    { img: "/assets/SANITARYWARES/1 - ONE PCS/104 - SWE MARCO.jpeg", name:"SWE MARCO" },
    { img: "/assets/SANITARYWARES/1 - ONE PCS/105 - SWE PATRAT.jpeg", name:"SWE PATRAT" },
    { img: "/assets/SANITARYWARES/1 - ONE PCS/106 - SWE SECO.jpeg", name:"SWE SECO" },
    { img: "/assets/SANITARYWARES/1 - ONE PCS/107 - SWE UNICO.jpeg", name:"SWE UNICO" },
    { img: "/assets/SANITARYWARES/1 - ONE PCS/108 - SWE BAGNO.jpeg", name:"SWE BAGNO" },
    { img: "/assets/SANITARYWARES/1 - ONE PCS/109 - SWE MAGNUS.jpeg", name:"SWE MAGNUS" },
    { img: "/assets/SANITARYWARES/1 - ONE PCS/110 SWE PRIMER.jpeg", name:"E PRIMER" },
    { img: "/assets/SANITARYWARES/1 - ONE PCS/111 - SWE PATRATE 1 PCS 9 & 12.jpeg", name:"SWE PATRATE 1 PCS 9 & 12" },
    { img: "/assets/SANITARYWARES/1 - ONE PCS/112 - SWE RICH.jpeg", name:"SWE RICH" },
    { img: "/assets/SANITARYWARES/1 - ONE PCS/113 - SWE KRON.jpeg", name:"SWE KRON" },
    { img: "/assets/SANITARYWARES/1 - ONE PCS/114 - SWE DURA.jpeg", name:"SWE DURA" },
    { img: "/assets/SANITARYWARES/1 - ONE PCS/115 - SWE PIANO.jpeg", name:"SWE PIANO" },
    { img: "/assets/SANITARYWARES/1 - ONE PCS/116 - SWE RATT.jpeg", name:"SWE RATT" },
    { img: "/assets/SANITARYWARES/1 - ONE PCS/117 - SWE CENNY.jpeg", name:"SWE CENNY" },
    { img: "/assets/SANITARYWARES/1 - ONE PCS/118 - SWE RADIUS.jpeg", name:"SWE RADIUS" },
    { img: "/assets/SANITARYWARES/1 - ONE PCS/119 - SWE FIZZY.jpeg", name:"SWE FIZZY" },
    { img: "/assets/SANITARYWARES/1 - ONE PCS/120 - SWE CUBE.jpeg", name:"SWE CUBE" },
  ];
  return (
    <>
      <section className="works filter-img three-col section-padding">
      <div className="auto-type">
          <h1>One Piece</h1>
        </div>
        <div className="container">
          <div className="row gallery">
            {OnePiece.map((item) => {
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
                      <span>One Piece</span>
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
                        One Piece description
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
