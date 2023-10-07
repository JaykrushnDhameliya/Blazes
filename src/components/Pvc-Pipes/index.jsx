/* eslint-disable @next/next/no-img-element */
import React,{useState,useEffect } from "react";
import initIsotope from "../../common/initIsotope";

export const PvcPipe = () => {
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

    const message = 'PVC & Unsolicited pipes'; 
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
  const PvcPipe = [
    { img: "/assets/PvcPipe/white-pipes.webp", name: "white-pipes" },
    { img: "/assets/PvcPipe/black-pipes.jpg", name: "black-pipes" },
    { img: "/assets/PvcPipe/blue-pipes.jpg", name: "blue-pipes" },
  ];
  return (
    <>
      <section className="works filter-img three-col section-padding">
      <div className="auto-type">
          <span>{text}</span>
        </div>
        <div className="container">
          <div className="row gallery">
            {PvcPipe.map((item) => {
              return (
                <div
                  className="col-lg-4 col-md-6 items"
                  style={{ margin: "25px 0" }}
                  key={item.name}
                >
                  <div
                    className="item"
                  >
                    <div className="img">
                      <img
                        src={item.img}
                        alt=""
                        style={{
                          height: "32vh",
                        }}
                      />
                    </div>
                    <div className="cont">
                      <h5>{item.name}</h5>
                      <span>PVC & Unsolicited pipes</span>
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
                        PVC & Unsolicited pipes description
                        </strong>
                      </h2>
                      <hr className="sep-red" />
                      <ul className="whyus-ul-li whyus">
                        <p>
                          PVC pipes, also known as polyvinyl chloride pipes, are
                          a type of plastic pipe commonly used in various
                          applications, including water supply, drainage,
                          irrigation, and sewer systems. These pipes are known
                          for their durability, corrosion resistance, and
                          affordability. PVC pipes are lightweight and easy to
                          install, making them a popular choice in the
                          construction industry. However, it&apos;s important to note
                          that PVC pipes can have environmental concerns, as
                          they are made from non-renewable resources and can
                          release toxic chemicals when exposed to high
                          temperatures. Unsolicited pipes, on the other hand,
                          typically refer to pipes that have been provided or
                          delivered without prior request or agreement, often
                          leading to unexpected or unwanted deliveries that may
                          need to be addressed appropriately.
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
