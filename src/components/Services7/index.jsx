import React from "react";
const Services7 = () => {
  return (
    <section className="services section-padding pb-0 coreValues">
      <div className="container" style={{borderBottom:'0px'}}>
        <div className="section-head" >
          <h3>Core Values</h3>
          </div>
        <div className="row" style={{textAlign:'center'}}>
          <div className="col-lg-4">
            <div className="item md-mb50 borderBox">
              {/* <span className="icon flaticon-sketch"></span> */}
              <img src="/assets/img/dimand.png" alt="" style={{width:'25%',background:'white',margin:'23px 0',padding:'10px'}}/>
              <h6>ELEGANT COLLECTIONS</h6>
              <p>
                our priority is to understand our client&apos;s unique
                needs, goals, and challenges to ensure this, we
                offer a wide range of collections of tiles. We
                understand that each project is unique.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50 borderBox">
              {/* <span className="icon flaticon-furniture"></span> */}
              <img src="/assets/img/ourValue.png" alt="" style={{width:'25%',background:'white',margin:'23px 0',padding:'10px'}}/>
              <h6>TRUE TO OUR VALUES</h6>
              <p>
                  We try our best for sustainable practices across
                our entire value chain by reducing west and using
                the best quality materials to contribute to a
                greener planet, making an example in the tiles
                industry.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item borderBox">
              {/* <span className="icon flaticon-home7-1"></span> */}
              <img src="/assets/img/research.png" alt="" style={{width:'25%',background:'white',margin:'23px 0',padding:'10px'}}/>
              <h6>RESEARCH & DEVELOPMENT</h6>
              <p>
                  We are continuously researching and developing
                cutting-edge ceramic materials and manufacturing
                techniques. we like to introduce the best quality
                products that provide a competitive edge to our
                clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services7;
