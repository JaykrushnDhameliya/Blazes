/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import thumparallaxUp from "../../common/thumparallaxUp";

const PackingDetails = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.simpleParallax) thumparallaxUp();
    }, 1000);
  }, []);
  useEffect(() => {
   AOS.init();
   AOS.refresh();
 }, []);
  return (
    <>
      <div className="fp-tableCell" style={{padding:'30px 60px'}}>
   <div className="block-frame-offset-relative">
      <div className="text-center padding-top-30-xs padding-bottom-30-sm">
         <h2 className="info-window-title text-uppercase"><strong className="text-weight-700">Packing</strong> Details</h2>
         <hr className="sep-red-short hidden-xs"/>
      </div>
      <div>
         <div className="row">
            <div className="col-md-12 pack1">
               <h3>Ceramic Wall Tiles</h3>
               <div className="table-responsive" data-aos="zoom-out" data-aos-duration="2000">
                  <table className="table table-hover table-bordered">
                     <tbody>
                        <tr>
                           <th style={{"width":"5%"}}>Tile Size mm</th>
                           <th style={{"width":"5%"}}>Tile Thickness (Approx) mm</th>
                           <th style={{"width":"5%"}}>No. of Tiles Per Box</th>
                           <th style={{"width":"5%"}}>Sq. Mtr.Per Box</th>
                           <th style={{"width":"5%"}}>Weight Per Box (Approx)</th>
                           <th style={{"width":"5%"}}>No. of Boxes per pallet(box x pallet)</th>
                           <th style={{"width":"5%"}}>Combination of Pallets per Container</th>
                           <th style={{"width":"5%"}}>No. of Boxes per Container</th>
                           <th style={{"width":"5%"}}>Total Sq. Mtrs Per Container</th>
                           <th style={{"width":"5%"}}>Net Weight per Container (kgs)</th>
                        </tr>
                        <tr>
                           <td>200 x 600</td>
                           <td>9&nbsp;</td>
                           <td>6</td>
                           <td>0.72&nbsp;</td>
                           <td>10.30</td>
                           <td>128</td>
                           <td>20</td>
                           <td>2560</td>
                           <td>1843.20</td>
                           <td>26368</td>
                        </tr>
                        <tr>
                           <td>250 x 375</td>
                           <td>6.80</td>
                           <td>8</td>
                           <td>
                              <p>0.75&nbsp; &nbsp;</p>
                           </td>
                           <td>9&nbsp;</td>
                           <td>126&nbsp; &nbsp;</td>
                           <td>24</td>
                           <td>3024</td>
                           <td>2268</td>
                           <td>27216</td>
                        </tr>
                        <tr>
                           <td>250 x 400</td>
                           <td>7&nbsp;</td>
                           <td>10</td>
                           <td>1.00&nbsp;</td>
                           <td>12&nbsp;</td>
                           <td>112</td>
                           <td>20</td>
                           <td>2240&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</td>
                           <td>2240</td>
                           <td>26880</td>
                        </tr>
                        <tr>
                           <td>250 x 750</td>
                           <td>9&nbsp;</td>
                           <td>5</td>
                           <td>0.94</td>
                           <td>15&nbsp;</td>
                           <td>84</td>
                           <td>21</td>
                           <td>1764</td>
                           <td>1658.16</td>
                           <td>26460</td>
                        </tr>
                        <tr>
                           <td>300 x 450</td>
                           <td>8&nbsp;</td>
                           <td>6</td>
                           <td>0.81&nbsp;</td>
                           <td>11&nbsp;</td>
                           <td>108</td>
                           <td>23</td>
                           <td>2484</td>
                           <td>2012.04</td>
                           <td>27324</td>
                        </tr>
                        <tr>
                           <td>300 x 600</td>
                           <td>9.50</td>
                           <td>5</td>
                           <td>0.90&nbsp;</td>
                           <td>14.90&nbsp;</td>
                           <td>90</td>
                           <td>22</td>
                           <td>1980</td>
                           <td>1782.00</td>
                           <td>26552</td>
                        </tr>
                        <tr>
                           <td>300 x 900</td>
                           <td>11.20</td>
                           <td>4</td>
                           <td>1.08</td>
                           <td>19.50</td>
                           <td>60</td>
                           <td>23</td>
                           <td>1380</td>
                           <td>1490.40</td>
                           <td>26910</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
               <h3>Ceramic Floor Tiles</h3>
               <div className="table-responsive" data-aos="zoom-out" data-aos-duration="2000">
                  <table className="table table-hover table-bordered">
                     <tbody>
                        <tr>
                           <th style={{"width":"5%"}}>Tile Size mm</th>
                           <th style={{"width":"5%"}}>Tile Thickness (Approx) mm</th>
                           <th style={{"width":"5%"}}>No. of Tiles Per Box</th>
                           <th style={{"width":"5%"}}>Sq. Mtr.Per Box</th>
                           <th style={{"width":"5%"}}>Weight Per Box (Approx)</th>
                           <th style={{"width":"5%"}}>No. of Boxes per pallet(box x pallet)</th>
                           <th style={{"width":"5%"}}>Combination of Pallets per Container</th>
                           <th style={{"width":"5%"}}>No. of Boxes per Container</th>
                           <th style={{"width":"5%"}}>Total Sq. Mtrs Per Container</th>
                           <th style={{"width":"5%"}}>Net Weight per Container (kgs)</th>
                        </tr>
                        <tr>
                           <td>300 x 300</td>
                           <td>8</td>
                           <td>9</td>
                           <td>0.81</td>
                           <td>12.5</td>
                           <td>117</td>
                           <td>19</td>
                           <td>2223</td>
                           <td>1800.63</td>
                           <td>27787</td>
                        </tr>
                        <tr>
                           <td>396 x 396</td>
                           <td>8.5</td>
                           <td>6</td>
                           <td>0.94</td>
                           <td>15.5</td>
                           <td>84</td>
                           <td>21</td>
                           <td>1764</td>
                           <td>1658.16</td>
                           <td>27342</td>
                        </tr>
                        <tr>
                           <td>600 x 600</td>
                           <td>9</td>
                           <td>4</td>
                           <td>1.44</td>
                           <td>28</td>
                           <td>40</td>
                           <td>24</td>
                           <td>960</td>
                           <td>1382.40</td>
                           <td>26880</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
               <h3>Full Body Vitrified Tiles</h3>
               <div className="table-responsive" data-aos="zoom-out" data-aos-duration="2000">
                  <table className="table table-hover table-bordered">
                     <tbody>
                        <tr>
                           <th style={{"width":"5%"}}>Tile Size mm</th>
                           <th style={{"width":"5%"}}>Tile Thickness (Approx) mm</th>
                           <th style={{"width":"5%"}}>No. of Tiles Per Box</th>
                           <th style={{"width":"5%"}}>Sq. Mtr.Per Box</th>
                           <th style={{"width":"5%"}}>Weight Per Box (Approx)</th>
                           <th style={{"width":"5%"}}>No. of Boxes per pallet(box x pallet)</th>
                           <th style={{"width":"5%"}}>Combination of Pallets per Container</th>
                           <th style={{"width":"5%"}}>No. of Boxes per Container</th>
                           <th style={{"width":"5%"}}>Total Sq. Mtrs Per Container</th>
                           <th style={{"width":"5%"}}>Net Weight per Container (kgs)</th>
                        </tr>
                        <tr>
                           <td>600 x 1200</td>
                           <td>12</td>
                           <td>2</td>
                           <td>1.44</td>
                           <td>32</td>
                           <td>68 X 11&nbsp; &nbsp;25X 4</td>
                           <td>15</td>
                           <td>848</td>
                           <td>1221.12</td>
                           <td>27136</td>
                        </tr>
                        <tr>
                           <td>600 x 600</td>
                           <td>9.5</td>
                           <td>4</td>
                           <td>1.44</td>
                           <td>28</td>
                           <td>40</td>
                           <td>24</td>
                           <td>960</td>
                           <td>1382.40</td>
                           <td>26880</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
               <h3>Porcelain Tiles ( GVT / PGVT )</h3>
               <div className="table-responsive" data-aos="zoom-out" data-aos-duration="2000">
                  <table className="table table-hover table-bordered">
                     <tbody>
                        <tr>
                           <th style={{"width":"5%"}}>Tile Size mm</th>
                           <th style={{"width":"5%"}}>Tile Thickness (Approx) mm</th>
                           <th style={{"width":"5%"}}>No. of Tiles Per Box</th>
                           <th style={{"width":"5%"}}>Sq. Mtr.Per Box</th>
                           <th style={{"width":"5%"}}>Weight Per Box (Approx)</th>
                           <th style={{"width":"5%"}}>No. of Boxes per pallet(box x pallet)</th>
                           <th style={{"width":"5%"}}>Combination of Pallets per Container</th>
                           <th style={{"width":"5%"}}>No. of Boxes per Container</th>
                           <th style={{"width":"5%"}}>Total Sq. Mtrs Per Container</th>
                           <th style={{"width":"5%"}}>Net Weight per Container (kgs)</th>
                        </tr>
                        <tr>
                           <td>400 x 400</td>
                           <td>10</td>
                           <td>5</td>
                           <td>0.80</td>
                           <td>17</td>
                           <td>84</td>
                           <td>19</td>
                           <td>1596</td>
                           <td>1276.80</td>
                           <td>27132</td>
                        </tr>
                        <tr>
                           <td>600 x 600</td>
                           <td>9</td>
                           <td>4</td>
                           <td>1.44&nbsp;</td>
                           <td>28</td>
                           <td>40&nbsp;</td>
                           <td>24</td>
                           <td>960</td>
                           <td>1382.40</td>
                           <td>26880</td>
                        </tr>
                        <tr>
                           <td>800 x 800</td>
                           <td>11&nbsp;</td>
                           <td>3</td>
                           <td>1.92&nbsp;</td>
                           <td>49&nbsp;</td>
                           <td>26 X 20</td>
                           <td>20</td>
                           <td>520</td>
                           <td>998.40</td>
                           <td>25480</td>
                        </tr>
                        <tr>
                           <td>600 x 1200</td>
                           <td>9&nbsp;</td>
                           <td>2</td>
                           <td>1.44&nbsp;</td>
                           <td>31&nbsp;</td>
                           <td>68 X 10, 20 x 10</td>
                           <td>20</td>
                           <td>880</td>
                           <td>1267.20</td>
                           <td>27280</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
               <h3>Double Charged Vitrified Tiles</h3>
               <div className="table-responsive" data-aos="zoom-out" data-aos-duration="2000">
                  <table className="table table-hover table-bordered">
                     <tbody>
                        <tr>
                           <th style={{"width":"5%"}}>Tile Size mm</th>
                           <th style={{"width":"5%"}}>
                              <p>Tile Thickness (Approx)</p>
                              <p>mm</p>
                           </th>
                           <th style={{"width":"5%"}}>No. of Tiles Per Box</th>
                           <th style={{"width":"5%"}}>Sq. Mtr.Per Box</th>
                           <th style={{"width":"5%"}}>Weight Per Box (Approx)</th>
                           <th style={{"width":"5%"}}>No. of Boxes per pallet(box x pallet)</th>
                           <th style={{"width":"5%"}}>Combination of Pallets per Container</th>
                           <th style={{"width":"5%"}}>No. of Boxes per Container</th>
                           <th style={{"width":"5%"}}>Total Sq. Mtrs Per Container</th>
                           <th style={{"width":"5%"}}>Net Weight per Container (kgs)</th>
                        </tr>
                        <tr>
                           <td>600 x 600</td>
                           <td>8.5&nbsp;</td>
                           <td>4</td>
                           <td>1.44&nbsp;</td>
                           <td>28.5</td>
                           <td>40</td>
                           <td>24</td>
                           <td>960</td>
                           <td>1382.40</td>
                           <td>27360-</td>
                        </tr>
                        <tr>
                           <td>600 x 1200</td>
                           <td>8.5</td>
                           <td>2</td>
                           <td>1.44</td>
                           <td>30</td>
                           <td>42</td>
                           <td>21</td>
                           <td>882</td>
                           <td>1270.08</td>
                           <td>26460</td>
                        </tr>
                        <tr>
                           <td>800 x 800</td>
                           <td>9.8</td>
                           <td>3</td>
                           <td>1.92&nbsp;</td>
                           <td>40</td>
                           <td>32</td>
                           <td>20</td>
                           <td>640</td>
                           <td>1228.80</td>
                           <td>25600-</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
               <h3>Porcelain Slab</h3>
               <div className="table-responsive" data-aos="zoom-out" data-aos-duration="2000">
                  <table className="table table-hover table-bordered">
                     <tbody>
                        <tr>
                           <th style={{"width":"5%"}}>Tile Size mm</th>
                           <th style={{"width":"5%"}}>
                              <p>Tile Thickness (Approx)</p>
                              <p>mm</p>
                           </th>
                           <th style={{"width":"5%"}}>No. of Tiles Per Box</th>
                           <th style={{"width":"5%"}}>Sq. Mtr.Per Box</th>
                           <th style={{"width":"5%"}}>Weight Per Box (Approx)</th>
                           <th style={{"width":"5%"}}>No. of Boxes per pallet(box x pallet)</th>
                           <th style={{"width":"5%"}}>Combination of Pallets per Container</th>
                           <th style={{"width":"5%"}}>No. of Boxes per Container</th>
                           <th style={{"width":"5%"}}>Total Sq. Mtrs Per Container</th>
                           <th style={{"width":"5%"}}>Net Weight per Container (kgs)</th>
                        </tr>
                        <tr>
                           <td>800 x 1600</td>
                           <td>9</td>
                           <td>2</td>
                           <td>2.56</td>
                           <td>53</td>
                           <td>28</td>
                           <td>18</td>
                           <td>504</td>
                           <td>1290.24</td>
                           <td>26712</td>
                        </tr>
                        <tr>
                           <td>1200 x 2400</td>
                           <td>9</td>
                           <td>1</td>
                           <td>2.88</td>
                           <td>61</td>
                           <td>15</td>
                           <td>14</td>
                           <td>210</td>
                           <td>604.80</td>
                           <td>14910</td>
                        </tr>
                        <tr>
                           <td>900 x 1800</td>
                           <td>9</td>
                           <td>2</td>
                           <td>3.24</td>
                           <td>65</td>
                           <td>32 X10&nbsp; &nbsp; &nbsp; &nbsp;8 X 5&nbsp; &nbsp; &nbsp;&nbsp;</td>
                           <td>15</td>
                           <td>360</td>
                           <td>1166.40</td>
                           <td>23400</td>
                        </tr>
                        <tr>
                           <td>1200 x 1200</td>
                           <td>9</td>
                           <td>2</td>
                           <td>2.88</td>
                           <td>61</td>
                           <td>28 X 12&nbsp; &nbsp; &nbsp; 15 X 4</td>
                           <td>16</td>
                           <td>396</td>
                           <td>1140.48</td>
                           <td>24156</td>
                        </tr>
                     </tbody>
                  </table>
               </div>            </div>
         </div>
      </div>
   </div>
   <span className="rqs-quadraslab_icon_font_angledown section-arrow bouncing scroll-section-anchor text-red hidden-xs"></span>
</div>
    </>
  );
};

export default PackingDetails;
