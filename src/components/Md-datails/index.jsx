/* eslint-disable @next/next/no-img-element */
import React from "react";

const MdDetails = () => {
  return (
    <div className="block-frame-sm block-frame-offset block-cover-img">
      <div className="container-full block-full-height-sm">
         <div className="row block-full-height-sm" style={{display:'flex',justifyContent:'end'}}>
            <div id="adv_bgd_img_3" className="col-lg-4 block-half-height-sm block-full-height-md block-cover-img padding-left-0-xs padding-right-0-xs mdImage">
            <div id="adv_bgd_img_3" className="col-lg-12">
               <img className="hidden-sm hidden-md hidden-lg" src="/assets/img/md.png" alt="img" style={{height:'40vh'}}/>
            </div>
            </div>
             <div className="col-lg-6 block-half-height-sm block-full-height-md bgd-dark-grey">
               <div className="vcenter-outer">
                  <div className="vcenter-inner">
                     <div className="col-lg-9 col-lg-offset-2 expt1">
                        <h2 className="info-window-title text-white text-uppercase mddetails"><strong className="text-weight-700">MD’s Message</strong></h2>
                        <p>It gives me extreme pleasure to introduce our organization that we hope you will find innovative but also aesthetically 
                        pleasing with social presence. With less possibility to meet face-to-face, however we realize the time and inevitable move 
                        these days to do all things is ‘Digital’ and we have made every effort to make our social presence communicative and meaningful.
                        The organization core values lie in the satisfaction of employees and customers through Win-Win Strategy.
                        We look forward to serve you the better in innovative ways.</p>
                        <h2 className="info-window-title text-white text-uppercase mddetails"><strong className="text-weight-700">Mr. Luv Varmora</strong></h2>
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

export default MdDetails;
