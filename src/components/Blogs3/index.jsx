import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Blogs3 = ({ smallTitle }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
     <section className="services section-padding pb-0">
      <div className="container" style={{padding:'30px', borderBottom:'0px'}}>
        <div className="row" style={{textAlign:'center'}}>
          <div className="col-lg-4 cardBox">
            <div className="item md-mb50 " style={{textAlign:'start'}}>
              <div style={{display:'flex'}}>
                <hr style={{width:'35px',borderWidth:'2px',borderColor:'white'}}/>
                <p style={{color:'white',margin:'0 0 0 10px',fontWeight:500}}>Export</p>
              </div>
              <h2 style={{color:'white'}}>
               Global Network
              </h2>
              <p style={{color:'white'}}>Blaze Granito&apos;s presence is avalable in more
                than 18 countries.
             </p>
            </div>
          </div>
          <div className="col-lg-4 cardBox">
            <div className="item md-mb50 card1" data-aos="zoom-in-left" data-aos-duration="3000">
            <img src="/assets/img/calendar.png" alt="1" style={{width:'25%',margin:'23px 0',padding:'10px'}}/>
              <p>
              Total Size of Export 7500 Container Per Year
              </p>
            </div>
          </div>
          <div className="col-lg-4 cardBox">
            <div className="item card1" data-aos="zoom-in-left" data-aos-duration="3000">
            <img src="/assets/img/cargo-ship.png" alt="1" style={{width:'27%',margin:'23px 0',padding:'10px'}}/>
              <p>
              Hienest Exporter Since Last 8 Year
              </p>
            </div>
          </div>
        </div>
        <div className="row" style={{textAlign:'center',marginTop:'15px'}}>
          <div className="col-lg-4 cardBox">
            <div className="item md-mb50 card1" data-aos="zoom-in-left" data-aos-duration="3000">
            <img src="/assets/img/global-shipping.png" alt="1" style={{width:'25%',margin:'23px 0',padding:'10px'}}/>
              <p>
              Exporting to More than 35+ Countries
              </p>
            </div>
          </div>
          <div className="col-lg-4 cardBox">
            <div className="item md-mb50 card1" data-aos="zoom-in-left" data-aos-duration="3000">
            <img src="/assets/img/iso.png" alt="1" style={{width:'25%',margin:'23px 0',padding:'10px'}}/>
              <p>
              Blaze international is ISO Certified Company
              </p>
            </div>
          </div>
          <div className="col-lg-4 cardBox">
            <div className="item card1" data-aos="zoom-in-left" data-aos-duration="3000">
            <img src="/assets/img/bestQuality.png" alt="1" style={{width:'25%',margin:'23px 0',padding:'10px'}}/>
              <p>
              Blaze international is Provide Best Quality
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs3;
