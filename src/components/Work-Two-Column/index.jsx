/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

export const WorkTwoColumn = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  const data = [
    { img: "/assets/img/twoPiece/Irani-S.jpg", name: "Irani-S" },
    { img: "/assets/img/twoPiece/Matrix-S.jpg", name: "Matrix-S" },
    { img: "/assets/img/twoPiece/Mirage-S.jpg", name: "Mirage-S" },
    { img: "/assets/img/twoPiece/Perry-S.jpg", name: "Perry-S" },
    { img: "/assets/img/twoPiece/Spanish-P.jpg", name: "Spanish-P" },
    { img: "/assets/img/twoPiece/Spanish-S.jpg", name: "Spanish-S" },
  ];
  const data1 = [
    { img: "/assets/img/wallHung/Jennet.jpg", name: "Jennet" },
    { img: "/assets/img/wallHung/Marvel.jpg", name: "Marvel" },
    { img: "/assets/img/wallHung/Mozart Floor.jpg", name: "Mozart Floor" },
  ];
  const data2 = [
    { img: "/assets/img/waterCloset/Anglo-P-trap.jpg", name: "Anglo-P-trap" },
    { img: "/assets/img/waterCloset/Anglo-S-trap.jpg", name: "Anglo-S-trap" },
    { img: "/assets/img/waterCloset/Baby-P-trap.jpg", name: "Baby-P-trap" },
    { img: "/assets/img/waterCloset/Dyna E.W.C. -S-trap.jpg", name: "Dyna E.W.C. -S-trap" },
    { img: "/assets/img/waterCloset/EWC-P-trap.jpg", name: "EWC-P-trap" },
    { img: "/assets/img/waterCloset/EWC-S-trap.jpg", name: "EWC-S-trap" },
  ];
  return (
    <>
      <section className="works filter-img section-padding">
        <div className="container">
          <div className="row gallery">
            <div className="col-lg-6 items mt-0 theaters residential OnePiece twoPiece WallHung WaterCloset">
              <div className="section-head mb-0">
                <h3>Sanitary Tiles</h3>

                <div className="filtering mt-30">
                  <div className="filter">
                    <span data-filter="*" className="active">
                      All
                    </span>
                    <span data-filter=".OnePiece">One Piece</span>
                    <span data-filter=".twoPiece">Two Piece</span>
                    <span data-filter=".WallHung">Wall Hung</span>
                    <span data-filter=".WaterCloset">Water Closet</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 items OnePiece">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/onePiece/Apple One Pice.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">Apple One Pice</Link>
                  </h5>
                  <span>Sanitary</span>
                  
                </div>
              </div>
            </div>
            <div className="col-lg-6 items OnePiece">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/onePiece/Moon One Pice.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">Moon One Pice</Link>
                  </h5>
                  <span>Sanitary</span>
                  
                </div>
              </div>
            </div>
            <div className="col-lg-6 items OnePiece">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/onePiece/Santo One Pice.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">Santo One Pice</Link>
                  </h5>
                  <span>Sanitary</span>
                  
                </div>
              </div>
            </div>
            <div className="col-lg-6 items OnePiece">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/onePiece/Sapal One Pice.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">Sapal One Pice</Link>
                  </h5>
                  <span>Sanitary</span>
                  
                </div>
              </div>
            </div>
            {data.map((item) => {
              return (
                <div className="col-lg-6 items twoPiece">
                  <div className="item">
                    <div className="img">
                      <img
                        src={item.img}
                        alt=""
                      />
                    </div>
                    <div className="cont vis">
                      <h5>
                        <Link href="/project-details">{item.name}</Link>
                      </h5>
                      <span>Sanitary</span>
                      
                    </div>
                  </div>
                </div>
              );
            })}
            {data1.map((item) => {
              return (
                <div className="col-lg-6 items WallHung">
                  <div className="item">
                    <div className="img">
                      <img
                        src={item.img}
                        alt=""
                      />
                    </div>
                    <div className="cont vis">
                      <h5>
                        <Link href="/project-details">{item.name}</Link>
                      </h5>
                      <span>Sanitary</span>
                      
                    </div>
                  </div>
                </div>
              );
            })}
            {data2.map((item) => {
              return (
                <div className="col-lg-6 items WaterCloset">
                  <div className="item">
                    <div className="img">
                      <img
                        src={item.img}
                        alt=""
                      />
                    </div>
                    <div className="cont vis">
                      <h5>
                        <Link href="/project-details">{item.name}</Link>
                      </h5>
                      <span>Sanitary</span>
                      
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div className="col-lg-6 items theaters">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/2.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Sanitary</span>
                  
                </div>
              </div>
            </div>
            <div className="col-lg-6 items residential interior">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/1.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Sanitary</span>
                  
                </div>
              </div>
            </div>
            <div className="col-lg-6 items interior">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/5.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Sanitary</span>
                  
                </div>
              </div>
            </div>
            <div className="col-lg-6 items residential">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/3.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Sanitary</span>
                  
                </div>
              </div>
            </div>
            <div className="col-lg-6 items theaters">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/4.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Sanitary</span>
                  
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};
