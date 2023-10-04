import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const WhyUs = () => {
   useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  return (
    <div className="block-frame-sm block-frame-offset block-cover-img">
    <div className="container-full block-full-height-sm">
       <div className="row block-full-height-sm" style={{justifyContent:'center',margin:'30px  0 0 0'}}>
          <div id="adv_bgd_img_3" className="col-lg-5 block-half-height-sm block-full-height-md block-cover-img padding-left-0-xs padding-right-0-xs" style={{textAlign:'center'}} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
             <img className="hidden-sm hidden-md hidden-lg bgwhyus" src="/assets/img/whyUs1.jpg" alt="img"/>
          </div>
           <div className="col-lg-6 block-half-height-sm block-full-height-md bgd-dark-grey">
             <div className="vcenter-outer">
                <div className="vcenter-inner">
                   <div className="col-lg-12 col-lg-offset-2 expt1 whyus" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
                      <h2 className="info-window-title text-white text-uppercase"><strong className="text-weight-700">Blaze International</strong></h2>
                      <hr className="sep-red"/>
                     <p>BLAZE INTERNATIONAL & GROUP OF COMPANIES has been in tiles business since last 21 years and successfully pain
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
       <div className="row block-full-height-sm" style={{justifyContent:'center',margin:'50px  0 0 0'}}>
             <div className="vcenter-outer">
                <div className="vcenter-inner">
                   <div className="col-lg-12 col-lg-offset-2 expt1" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
                      <h2 className="info-window-title text-white text-uppercase"><strong className="text-weight-700">Why Choose BLAZE INTERNATIONAL LLP?</strong></h2>
                      <hr className="sep-red"/>
                        <ul className="whyus-ul-li whyus">
                            <li>Quality Assurance</li>
                            <p>Our commitment to excellence means that you receive all our products of the highest quality, ensuring durability and long-lasting beauty for your spaces.</p>
                            <li>Design Diversity</li>
                            <p>Discover a wide array of designs, colours, sizes, and finishes that enable you to achieve your vision, from contemporary chic to timeless classics.</p>
                            <li>Expert Guidance</li>
                            <p>Our team of experienced professionals is ready to provide expert guidance and assist you in making the right choices for your specific project.</p>
                            <li>Competitive Pricing</li>
                            <p>We offer competitive pricing without compromising on quality, making exceptional ceramic tiles, sanitary wares, pvc pipes accessible to a wider audience.</p>
                            <li>Timely Delivery</li>
                            <p>We understand the importance of project deadlines. Count on us for prompt and reliable delivery services.</p>
                        </ul>
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
