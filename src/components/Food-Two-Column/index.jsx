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
  const BeansItems = [
    { img: "/assets/BeansItems/butter-beans-feature.jpeg", name: "butter beans- eature" },
    { img: "/assets/BeansItems/dry-beans-stock.jpg", name: "dry beans" },
    { img: "/assets/BeansItems/GettyImages.jpg", name: "Getty Beans" },
    { img: "/assets/BeansItems/Kraft-Heinz-plays-with-bean.jpg", name: "Kraft Heinz" },
    { img: "/assets/BeansItems/UK farmers.jpg", name: "UK farmers" },
  ];
  const GreenItems = [
    { img: "/assets/green/easy-green-bean-saute.jpg", name: "easy green bean" },
    { img: "/assets/green/green-beans-with-bacon-square.jpg", name: "green beans with bacon square" },
    { img: "/assets/green/GreenBeansPotatoes.jpg", name: "Green Beans Potatoes" },
    { img: "/assets/green/maxresdefault.jpg", name: "maxres default" },
  ];
  const CoffeeItems = [
    { img: "/assets/ghana/arabica-coffee-beans.jpg", name: "arabica coffee beans" },
    { img: "/assets/ghana/Arabica-Coffee.jpg", name: "Arabica Coffee" },
    { img: "/assets/ghana/Green Arabica beans.jpg", name: "Green Arabica beans" },
  ];
  return (
    <>
      <section className="works filter-img section-padding">
        <div className="container">
          <div className="row gallery">
            <div className="col-lg-6 items mt-0 Coffee Beans Green">
              <div className="section-head mb-0">
                <h3>Food Items</h3>

                <div className="filtering mt-30">
                  <div className="filter">
                    <span data-filter="*" className="active">
                      All
                    </span>
                    <span data-filter=".Beans">Dry Beans</span>
                    <span data-filter=".Green">Green Beans</span>
                    <span data-filter=".Coffee">Coffee Beans</span>
                  </div>
                </div>
              </div>
            </div>
            {BeansItems.map((item) => {
              return (
                <div className="col-lg-6 items Beans"  key={item.name}>
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
                      <span>Beans Items</span>
                      
                    </div>
                  </div>
                </div>
              );
            })}
            {GreenItems.map((item) => {
              return (
                <div className="col-lg-6 items Green"  key={item.name}>
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
                      <span>Green Items</span>
                      
                    </div>
                  </div>
                </div>
              );
            })}
            {CoffeeItems.map((item) => {
              return (
                <div className="col-lg-6 items Coffee" key={item.name}>
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
                      <span>Coffee Items</span>
                      
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
