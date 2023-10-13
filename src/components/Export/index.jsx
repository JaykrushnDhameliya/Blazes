/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Export = () => {
   useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  return (
    <>
   <div className="block-frame-sm block-frame-offset block-cover-img">
      <div className="container-full block-full-height-sm">
         <div className="row block-full-height-sm">
              <div className="col-md- block-half-height-sm block-full-height-md bgd-dark-grey">
               <div className="vcenter-outer">
                  <div className="vcenter-inner">
                     <div className="col-lg-12 col-lg-offset-3 text-center d-flex flex-column align-items-center">
                        <h2 className="info-window-title text-white text-uppercase" style={{marginLeft:'30px'}}><strong className="text-weight-700">Global</strong> Market</h2>
                        <p className="section-text-p margin-bottom-25-xs text-white margin-bottom-50-xl global-market" >We deal with 100% export quality checked products that are self verified for exports by our export quality department.While it is true that Blaze International still retains many of the values of a traditional business structure, something that extends to the relationship with its clients, so it is still betting by the same strong and determined exporting vocation that has guided its steps for more than twenty years. At present, In addition, our products are present in more than 100+ countries spread all over the world.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="clearfix"></div> 
      </div>
   </div>
   <div className="block-frame-sm block-frame-offset block-cover-img">
      <div className="container-full block-full-height-sm">
         <div className="row block-full-height-sm" style={{overflow:'hidden'}}>
            <div id="adv_bgd_img_3" className="col-md-6 block-half-height-sm block-full-height-md block-cover-img padding-left-0-xs padding-right-0-xs" data-aos="fade-up-right" data-aos-duration="3000">
               <img className="hidden-sm hidden-md hidden-lg" src="/assets/img/blazeExport.png" alt="img"/>
            </div>
             <div className="col-md-6 block-half-height-sm block-full-height-md bgd-dark-grey">
               <div className="vcenter-outer">
                  <div className="vcenter-inner">
                     <div className="col-lg-11 col-lg-offset-2 expt1" data-aos="fade-up-left" data-aos-duration="3000">
                        <h2 className="info-window-title text-white text-uppercase"><strong className="text-weight-700">Services</strong></h2>
                        <hr className="sep-red"/>
                        <table>
                           <tbody><tr>
                              <th><img src="/assets/img/icon/e1.png" alt="e1"/></th>
                              <th>
                                 <p className="section-text margin-bottom-25-xs text-white margin-bottom-50-xl"><strong>QUALITY INSPECTION</strong><br/>Our team always there to control quality during the Online Prodcution as well pre production and post production to match with standard norms.<br/>we send live photos of production to client</p>
                              </th>
                           </tr>
                           <tr>
                              <th><img src="/assets/img/icon/e2.png" alt="e2"/></th>
                              <th>
                                 <p className="section-text margin-bottom-25-xs text-white margin-bottom-50-xl"><strong>SHIPPING &amp; LOGISTIC</strong><br/>We do accurate documentation according to Import coutry custom guide<br/>Being Self Forwarder ,we have tie up with all shipping line which give us advantage to provide Competitive Ocean Frieght to our client</p>
                              </th>
                           </tr>
                           <tr>
                              <th><img src="/assets/img/icon/e3.png" alt="e3"/></th>
                              <th>
                                 <p className="section-text margin-bottom-25-xs text-white margin-bottom-50-xl"><strong>PRIVATE LABELING</strong><br/>We provide private labeling according to customer requirement which helps customer&apos;s brand to grown in their market<br/>we can do private labeling on sanitary product also</p>
                              </th>
                           </tr>
                           <tr>
                              <th><img src="/assets/img/icon/e4.png" alt="e4"/></th>
                              <th>
                                 <p className="section-text margin-bottom-25-xs text-white margin-bottom-50-xl"><strong>CUSTOMIZED DESIGNS</strong><br/>We provide Exclusive design according to customer demand<br/>We can also develop new customised design for our clients</p>
                              </th>
                           </tr>
                        </tbody></table>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="clearfix"></div>
      </div>
   </div>
   <div className="block-frame-sm block-frame-offset block-cover-img">
      <div className="container-full block-full-height-sm">
         <div className="row block-full-height-sm">
              <div className="col-md-12 block-half-height-sm block-full-height-md bgd-dark-grey">
               <div className="vcenter-outer">
                  <div className="vcenter-inner justify-content-center d-flex">
                     <div className="col-lg-8 col-lg-offset-3 text-center" data-aos="zoom-in-up" data-aos-duration="3000">
                     <img src="/assets/img/Map.png" alt="map"/>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="clearfix"></div>
      </div>
   </div>
    </>
  );
};

export default Export;
