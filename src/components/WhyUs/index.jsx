import React from "react";
const WhyUs = () => {
  return (
    <div className="block-frame-sm block-frame-offset block-cover-img">
    <div className="container-full block-full-height-sm">
       <div className="row block-full-height-sm" style={{justifyContent:'center'}}>
          <div id="adv_bgd_img_3" className="col-lg-5 block-half-height-sm block-full-height-md block-cover-img padding-left-0-xs padding-right-0-xs" style={{textAlign:'center'}}>
             <img className="hidden-sm hidden-md hidden-lg bgwhyus" src="/assets/img/whyUs1.jpg" alt="img"/>
          </div>
           <div className="col-lg-6 block-half-height-sm block-full-height-md bgd-dark-grey">
             <div className="vcenter-outer">
                <div className="vcenter-inner">
                   <div className="col-lg-12 col-lg-offset-2 expt1">
                      <h2 className="info-window-title text-white text-uppercase"><strong className="text-weight-700">Blaze International</strong></h2>
                      <hr className="sep-red"/>
                     <p>MOZILLA GRANITO & GROUP OF COMPANIES has been in tiles business since last 21 years and successfully pain
                        the trust of every customer and dealers. The quality of our product makes it more durable than any other Our
                        authenticity, curiosity and our incredible empathy are the main pillars behind our preat relationship with our
                        customers.</p>
                        <ul className="whyus-ul">
                            <li>Morbi&apos;s first factory has been running constantly for manufacturing of 800×1600.</li>
                            <li>We offer one of the most extensive collections in the category.</li>
                            <li>Plant for one size, only to serve you the best.</li>
                            <li>We provide consistency and prompt delivery.</li>
                        </ul>
                        <h3 className="whyus-fast">We are fast, flexible & friendly</h3>
                   </div>
                </div>
             </div>
          </div>
       </div>
       <div className="clearfix"></div>
    </div>
 </div>
  );
};

export default WhyUs;
