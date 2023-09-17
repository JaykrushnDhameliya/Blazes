/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

export const CeramicTwoColumn = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  const Floor = [
    { img: "/assets/Floor/FlooringCeramic.jpg", name: "Flooring Ceramic" },
    { img: "/assets/Floor/floors-and-walls-black-grande.jpg", name: "Floors-black-grande" },
    { img: "/assets/Floor/FLOORSANDWALLS.jpg", name: "Floor And Wall" },
    { img: "/assets/Floor/Light Floor.jpg", name: "Light Floor" },
    { img: "/assets/Floor/White and Black Floors.jpg", name: "White and Black Floors" },
    { img: "/assets/Floor/White Floor.jpg", name: "White Floor" },
  ];
  const kitchen = [
    { img: "/assets/kitchen/kitchen-in-teak-wood.jpg", name: "Kitchen in Teak Wood" },
    { img: "/assets/kitchen/kitchen-wall-tile.jpg", name: "Kitchen Wall Tile" },
    { img: "/assets/kitchen/patterned-kitchen-wall-tiles.jpg", name: "Patterned Kitchen Wall" },
    { img: "/assets/kitchen/space-kitchen-wall.jpg", name: "Space Kitchen Wall" },
  ];
  const wall = [
    { img: "/assets/Wall/Gray Wall.png", name: "Gray Wall" },
    { img: "/assets/Wall/Light wall.jpg", name: "Light wall" },
  ];
  const LevingRoom = [
    { img: "/assets/LevingRoom/bedroom-gold.jpg", name: "Bedroom Gold" },
    { img: "/assets/LevingRoom/Leving Light Room.jpg", name: "Leving Light Room" },
    { img: "/assets/LevingRoom/Leving light Yellow Room.jpeg", name: "Leving light Yellow Room" },
    { img: "/assets/LevingRoom/malaga-crema-Room.jpg", name: "malaga-crema-Room" },
  ];
  return (
    <>
      <section className="works filter-img section-padding">
        <div className="container">
          <div className="row gallery">
            <div className="col-lg-6 items mt-0 Floor kitchen wall LevingRoom">
              <div className="section-head mb-0">
                <h3>Ceramic Tiles</h3>

                <div className="filtering mt-30">
                  <div className="filter">
                    <span data-filter="*" className="active">
                      All
                    </span>
                    <span data-filter=".Floor">Floor</span>
                    <span data-filter=".kitchen">kitchen</span>
                    <span data-filter=".wall">Wall</span>
                    <span data-filter=".LevingRoom">Leving Room</span>
                  </div>
                </div>
              </div>
            </div>
            {Floor.map((item) => {
              return (
                <div className="col-lg-6 items Floor"  key={item.name}>
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
                      <span>Floor</span>
                      
                    </div>
                  </div>
                </div>
              );
            })}
            {kitchen.map((item) => {
              return (
                <div className="col-lg-6 items kitchen"  key={item.name}>
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
                      <span>kitchen</span>
                      
                    </div>
                  </div>
                </div>
              );
            })}
            {wall.map((item) => {
              return (
                <div className="col-lg-6 items wall" key={item.name}>
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
                      <span>wall</span>
                      
                    </div>
                  </div>
                </div>
              );
            })}
            {LevingRoom.map((item) => {
              return (
                <div className="col-lg-6 items LevingRoom"  key={item.name}>
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
                      <span>Leving Room</span>
                      
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
