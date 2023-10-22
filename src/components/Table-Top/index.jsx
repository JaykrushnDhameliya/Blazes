/* eslint-disable @next/next/no-img-element */
import React,{useEffect } from "react";
import initIsotope from "../../common/initIsotope";

export const TableTop = () => {

  useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  const TableTop = [
    { img: "/assets/SANITARYWARES/3 - TABLE TOP/301 - SIGNUM.jpeg", name: "SIGNUM" },
    { img: "/assets/SANITARYWARES/3 - TABLE TOP/302 - TESTA.jpeg", name: "TESTA" },
    { img: "/assets/SANITARYWARES/3 - TABLE TOP/303 - LOPER.jpeg", name: "LOPER" },
    { img: "/assets/SANITARYWARES/3 - TABLE TOP/304 - OTIMO.jpeg", name: "OTIMO" },
    { img: "/assets/SANITARYWARES/3 - TABLE TOP/305 - PLATZ.jpeg", name: "PLATZ" },
    { img: "/assets/SANITARYWARES/3 - TABLE TOP/306 - DIAMANT.jpeg", name: "DIAMANT" },
    { img: "/assets/SANITARYWARES/3 - TABLE TOP/307 ICONA.jpeg", name: "ONA" },
    { img: "/assets/SANITARYWARES/3 - TABLE TOP/308 - SOLITO.jpeg", name: "SOLITO" },
    { img: "/assets/SANITARYWARES/3 - TABLE TOP/309  CORONA.jpeg", name: "ORONA" },
    { img: "/assets/SANITARYWARES/3 - TABLE TOP/310 - MONTANA.jpeg", name: "MONTANA" },
    { img: "/assets/SANITARYWARES/3 - TABLE TOP/311  -SOMMET T.T.jpeg", name: "SOMMET T.T" },
    { img: "/assets/SANITARYWARES/3 - TABLE TOP/312 - CURVO T.T.jpeg", name: "CURVO T.T" },
    { img: "/assets/SANITARYWARES/3 - TABLE TOP/313 - CUBE.jpeg", name: "CUBE" },
    { img: "/assets/SANITARYWARES/3 - TABLE TOP/314 - ARTE.jpeg", name: "ARTE" },
    { img: "/assets/SANITARYWARES/3 - TABLE TOP/315 - LUNA.jpeg", name: "LUNA" },
    { img: "/assets/SANITARYWARES/3 - TABLE TOP/316  SALTARE.jpeg", name: "ALTARE" },
    { img: "/assets/SANITARYWARES/3 - TABLE TOP/317 - CANTO.jpeg", name: "CANTO" },
    { img: "/assets/SANITARYWARES/3 - TABLE TOP/318 - REGIIS.jpeg", name: "REGIIS" },
    { img: "/assets/SANITARYWARES/3 - TABLE TOP/319 - RADIUS.jpeg", name: "RADIUS" },
    { img: "/assets/SANITARYWARES/3 - TABLE TOP/320 - MES.jpeg", name: "MES" },
    { img: "/assets/SANITARYWARES/3 - TABLE TOP/321 - FINESS.jpeg", name: "FINESS" },
    { img: "/assets/SANITARYWARES/3 - TABLE TOP/322 - SLEEK.jpeg", name: "SLEEK" },
    { img: "/assets/SANITARYWARES/3 - TABLE TOP/323 - CRYSTAL.jpeg", name: "CRYSTAL" },
    { img: "/assets/SANITARYWARES/3 - TABLE TOP/324 - FLOS.jpeg", name: "FLOS" },
  ];
  return (
    <>
      <section className="works filter-img three-col section-padding">
      <div className="auto-type">
          <h1>Table Top</h1>
        </div>
        <div className="container">
          <div className="row gallery">
            {TableTop.map((item) => {
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
                          height: "32vh",
                          borderRadius:'50px'
                        }}
                      />
                    </div>
                    <div className="cont">
                      <h5>{item.name}</h5>
                      <span>Table Top</span>
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
                        Table Top description
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
