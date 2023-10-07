/* eslint-disable @next/next/no-img-element */
import React,{useState,useEffect } from "react";
import initIsotope from "../../common/initIsotope";

export const Oil = () => {
  const [text, setText] = useState('');
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

    const message = 'Edible Oil'; 
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
  const Oil = [
    {
      img: "/assets/Oil/fruit-and-scaledVI.webp",
      name: "fruit-and-scaledVI Oil",
    },
    { img: "/assets/Oil/CASTOR-OIL.jpg", name: "Castor Oil" },
    { img: "/assets/Oil/soybean-oil.jpeg", name: "soybean Oil" },
  ];
  return (
    <>
      <section className="works filter-img three-col section-padding">
      <div className="auto-type">
          <span>{text}</span>
        </div>
        <div className="container">
          <div className="row gallery">
            {Oil.map((item) => {
              return (
                <div
                  className="col-lg-4 col-md-6 items"
                  style={{ margin: "25px 0" }}
                >
                  <div
                    className="item"
                    style={{
                      // height: "300px",
                      // minWidth: "350px",
                      // objectFit: "cover",
                      // width: "100%",
                      // backgroundColor: "transparent",
                    }}
                  >
                    <div className="img">
                      <img
                        src={item.img}
                        alt=""
                        style={{
                          height: "32vh",

                          // height: "300px",
                          // minWidth: "350px",
                          // objectFit: "cover",
                          // width: "100%",
                        }}
                      />
                    </div>
                    <div className="cont">
                      <h5>{item.name}</h5>
                      <span>Edible Oil</span>
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
                        Oil description
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
          </div>
        </div>
      </section>
    </>
  );
};
