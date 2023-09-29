/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

export const FoodTwoColumn = () => {
  React.useEffect(() => {
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
  const Spices = [
    { img: "/assets/Spices/Red-Chilli.jpg", name: "Red Chilli" },
    { img: "/assets/Spices/Cloves.jpg", name: "Cloves" },
    { img: "/assets/Spices/Cinna Momum.jpg", name: "Cinna Momum" },
    { img: "/assets/Spices/Green Cardamom.jpg", name: "Green Cardamom" },
  ];
  const Flour = [
    { img: "/assets/Flour/Wheat Flour.jpg", name: "Wheat Flour" },
    { img: "/assets/Flour/Bajra-Flour.jpg", name: "Bajra Flour" },
  ];
  const Oil = [
    { img: "/assets/Oil/CASTOR-OIL.jpg", name: "Castor Oil" },
    { img: "/assets/Oil/soybean-oil.jpeg", name: "soybean Oil" },
  ];
  return (
    <>
      <section className="works filter-img section-padding">
        <div className="container">
          <div className="row gallery">
            <div className="col-lg-6 items mt-0 Flour Pulses Spices Oil">
              <div className="section-head mb-0">
                <h3>Food Items</h3>

                <div className="filtering mt-30">
                  <div className="filter">
                    <span data-filter="*" className="active">
                      All
                    </span>
                    <span data-filter=".Pulses">Pulses</span>
                    <span data-filter=".Spices">Spices</span>
                    <span data-filter=".Flour">Flour</span>
                    <span data-filter=".Oil">Oil</span>
                  </div>
                </div>
              </div>
            </div>
            {Pulses.map((item) => {
              return (
                <div className="col-lg-6 items Pulses"  key={item.name}>
                  <div className="item">
                    <div className="img">
                      <img
                        src={item.img}
                        alt=""
                      />
                    </div>
                    <div className="cont vis">
                      <h5>
                        <h5>{item.name}</h5>
                      </h5>
                      <span>Pulses</span>
                      
                    </div>
                  </div>
                </div>
              );
            })}
            {Spices.map((item) => {
              return (
                <div className="col-lg-6 items Spices"  key={item.name}>
                  <div className="item">
                    <div className="img">
                      <img
                        src={item.img}
                        alt=""
                      />
                    </div>
                    <div className="cont vis">
                      <h5>
                        <h5>{item.name}</h5>
                      </h5>
                      <span>Spices</span>
                      
                    </div>
                  </div>
                </div>
              );
            })}
            {Flour.map((item) => {
              return (
                <div className="col-lg-6 items Flour" key={item.name}>
                  <div className="item">
                    <div className="img">
                      <img
                        src={item.img}
                        alt=""
                      />
                    </div>
                    <div className="cont vis">
                      <h5>
                        <h5>{item.name}</h5>
                      </h5>
                      <span>Flour</span>
                      
                    </div>
                  </div>
                </div>
              );
            })}
             {Oil.map((item) => {
              return (
                <div className="col-lg-6 items Oil" key={item.name}>
                  <div className="item">
                    <div className="img">
                      <img
                        src={item.img}
                        alt=""
                      />
                    </div>
                    <div className="cont vis">
                      <h5>
                        <h5>{item.name}</h5>
                      </h5>
                      <span>Oil</span>
                      
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
