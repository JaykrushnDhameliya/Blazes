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
  const FastFood = [
    { img: "/assets/FastFood/veg aloo tikki.jpg", name: "veg aloo tikki" },
    { img: "/assets/FastFood/aloo tikki burger.jpg", name: "aloo tikki burger" },
    { img: "/assets/FastFood/Chips and burger.jpg", name: "Chips and burger" },
    { img: "/assets/FastFood/Mix Fastfood.jpg", name: "Mix Fast food" },
    { img: "/assets/FastFood/salad with burger.jpg", name: "salad with burger" },
  ];
  const IndianFood = [
    { img: "/assets/IndianFood/paneer naan with gravy.jpg", name: "paneer naan with gravy" },
    { img: "/assets/IndianFood/samosa pizza roti.jpg", name: "samosa pizza roti" },
    { img: "/assets/IndianFood/north-indian-food.jpg", name: "north-indian-food" },
    { img: "/assets/IndianFood/dal fry.jpg", name: "dal fry" },
    { img: "/assets/IndianFood/All Item.jpg", name: "All Item" },
  ];
  const Pizza = [
    { img: "/assets/Pizza/Veggie Pizza.jpg", name: "Veggie Pizza" },
    { img: "/assets/Pizza/pizza-cheese.jpg", name: "pizza-cheese" },
    { img: "/assets/Pizza/Aussie Pizza.jpeg", name: "Aussie Pizza" },
  ];
  const southFood = [
    { img: "/assets/southFood/idli with Dosa.jpg", name: "idli with Dosa" },
    { img: "/assets/southFood/Masala Dosa.jpg", name: "Masala Dosa" },
    { img: "/assets/southFood/south-indian-food.jpeg", name: "south-indian-food" },
  ];
  return (
    <>
      <section className="works filter-img section-padding">
        <div className="container">
          <div className="row gallery">
            <div className="col-lg-6 items mt-0 FastFood IndianFood Pizza southFood">
              <div className="section-head mb-0">
                <h3>Food Items</h3>

                <div className="filtering mt-30">
                  <div className="filter">
                    <span data-filter="*" className="active">
                      All
                    </span>
                    <span data-filter=".FastFood">Fast Food</span>
                    <span data-filter=".IndianFood">Indian Food</span>
                    <span data-filter=".Pizza">Pizza</span>
                    <span data-filter=".southFood">south Food</span>
                  </div>
                </div>
              </div>
            </div>
            {FastFood.map((item) => {
              return (
                <div className="col-lg-6 items FastFood"  key={item.name}>
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
                      <span>Fast Food</span>
                      
                    </div>
                  </div>
                </div>
              );
            })}
            {IndianFood.map((item) => {
              return (
                <div className="col-lg-6 items IndianFood"  key={item.name}>
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
                      <span>Indian Food</span>
                      
                    </div>
                  </div>
                </div>
              );
            })}
            {Pizza.map((item) => {
              return (
                <div className="col-lg-6 items Pizza" key={item.name}>
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
                      <span>Pizza</span>
                      
                    </div>
                  </div>
                </div>
              );
            })}
            {southFood.map((item) => {
              return (
                <div className="col-lg-6 items southFood"  key={item.name}>
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
                      <span>south Food</span>
                      
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
