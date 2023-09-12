/* eslint-disable @next/next/no-img-element */
import React from "react";
import Blog1Data from "../../data/blog1.json";
import Link from "next/link";
import thumparallaxUp from "../../common/thumparallaxUp";

const TilesCalculator = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.simpleParallax) thumparallaxUp();
    }, 1000);
  }, []);
  return (
    <>
      <section className="section seo image-items" style={{padding:'30px 60px'}}>
                <div className="container">
                    <div className="row items">
                        <div className="col-md-2_3 offset-md-1_3">
                            <div className="section-heading">
                                <h2>Tiles Calculator</h2>
                                <div className="sh-line" style={{transformOrigin: '458.394px 0.5px', transform: "translate(0px, 0px)"}}></div>
                            </div>
                        </div>
                   
                        <div className="col-sm-1_2 seo-anim col-lg-1_3 item" style={{opacity: 1, transform: "translate(0px, 0px)"}}>
                            <div>
								<h4 style={{color: '#dd5826 !important',textAlign: "left"}}>CALCULATE YOUR AREA</h4>	
								<form className="contact-form contact-form-m0">														
									<div className="form-field form-field-small">	
										<span className="wpcf7-form-control-wrap first-name">
											<label>Length</label>
											<input type="text" id="SLength" name="SLength" className="form-control b-r-0 input-md" placeholder="Enter Length in Feet"/>																				
										</span>	
									</div>
									<div className="form-field form-field-small">	
										<span className="wpcf7-form-control-wrap first-name">
											<label>Width</label>	
											<input type="text" id="SWidth" name="SWidth" className="form-control b-r-0 input-md" placeholder="Enter Width in Feet"/>																	
										</span>	
									</div>
									<div className="form-field form-field-small">		
										<span className="wpcf7-form-control-wrap first-name">
											<label>Tiles Size</label>
											<select id="sizes" name="sizes" className="form-control b-r-0 input-md" style={{height:'50px'}}>											
												<option value="800 x 1600" data-picperbox="2">800 x 1600mm</option>
											</select>																																				
										</span>	
									</div>
									<div className="btn-default seo-anim btn-small cus-btn" style={{opacity: 1, transform: "translate(0px, 0px)"}}>
										<span name="Button1" id="Button1" onclick="calculate()"><a><span>Calculate</span></a></span>
									</div>						
								</form>
							</div>
                        </div>
						<div className="col-sm-1_2 seo-anim col-lg-1_3 item result-of-calc" style={{opacity: 1, transform: "translate(0px, 0px)"}}>
                            <div>
								<h4 style={{color: '#dd5826 !important',textAlign: "left"}}>RESULT OF CALCULATION</h4>	
								<form className="contact-form contact-form-m0">														
									<div className="form-field form-field-small">	
										<span className="wpcf7-form-control-wrap first-name">
											<label>Sq.M</label>
											<input type="text" className="form-control b-r-0 input-md" name="ar_mtr" id="ar_mtr" placeholder="Sq.M" disabled=""/>																				
										</span>	
									</div>
									<div className="form-field form-field-small">	
										<span className="wpcf7-form-control-wrap first-name">
											<label>Sq.Ft</label>
											<input type="text" className="form-control b-r-0 input-md" name="ar_feet" id="ar_feet" placeholder="Sq.Ft" disabled=""/>																
										</span>	
									</div>
									<div className="form-field form-field-small">	
										<span className="wpcf7-form-control-wrap first-name">
											<label>Total Tiles</label>
											<input type="text" className="form-control b-r-0 input-md" name="TotalTiles" id="TotalTiles" placeholder="Required Tiles" disabled=""/>																				
										</span>	
									</div>
									<div className="form-field form-field-small">	
										<span className="wpcf7-form-control-wrap first-name">
											<label>Total Boxes</label>
											<input type="text" className="form-control b-r-0 input-md" name="TotalBoxes" id="TotalBoxes" placeholder="Total Boxes" disabled=""/>																
										</span>	
									</div>
									<div className="">	
										<span className="wpcf7-form-control-wrap first-name">
											This is Only Approx Calculation																
										</span>	
									</div>
									
								</form>
							</div>
                        </div>
						<div className="col-sm-1_2 seo-anim col-lg-1_3 item" style={{opacity: 1, transform: "translate(0px, 0px)"}}>
                            <div>
								<div className="tilestips">
									<div style={{height: '58.2%', width: "80.4%"}}>
										<p className="tileFt horzFt"><span id="xlength">X ft</span></p>
										<p className="tileFt vertFt"><span id="ylength">Y ft</span></p>
									</div>
								</div>
								<h4 style={{color: '#dd5826 !important', margin: '20px 0px 0px 0px',padding: '0px 0px 0px',textAlign: 'left'}}>TIPS</h4>									
								<ul style={{margin: '0px 0px 5px 0px',padding: "10px 20px"}}>
									<li>Length and Width Dimensions are in feet.</li>
									<li>1 Feet = 0.3048 Meter</li>
									<li>1 Meter = 3.28084 Feet</li>
									<li>1 Meter = 100 Centimeters</li>
									<li>1 Centimeters = 0.01 Meter</li>
								</ul>
							</div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  );
};

export default TilesCalculator;
