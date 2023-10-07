/* eslint-disable @next/next/no-img-element */
import React,{useState,useEffect } from "react";
import initIsotope from "../../common/initIsotope";

export const Spices = () => {
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
  
      const message = 'Spices'; 
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
          <span>{text}</span>
        </div>
        <div className="container">
          <div className="row gallery">
            {Spices.map((item) => {
              return (
                <div
                  className="col-lg-4 col-md-6 items"
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
                        height:'32vh'
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
                          culinary experiences. Whether it's the warmth of
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
