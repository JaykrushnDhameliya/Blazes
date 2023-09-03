import React from "react";
import Link from "next/link";

const Blogs3 = ({ smallTitle }) => {
  return (
    // <section className="blog-grid section-padding">
    //   <div className="container">
    //     {!smallTitle ? (
    //       <div className="main-header text-center">
    //         <h3>Latest News.</h3>
    //         <div className="tex-bg">Blog</div>
    //       </div>
    //     ) : (
    //       <div className="section-head">
    //         <h3>News</h3>
    //       </div>
    //     )}
    //     <div className="row">
    //       <div className="col-lg-4">
    //         <div
    //           className="item bg-img md-mb50 wow fadeInUp"
    //           data-wow-delay=".3s"
    //           style={{ backgroundImage: "url(/assets/img/blog/news2.jpg)" }}
    //         >
    //           <div className="cont">
    //             <Link href="/blog-details">
    //               <a className="date">
    //                 <span>
    //                   <i>06</i> August
    //                 </span>
    //               </a>
    //             </Link>
    //             <div className="info">
    //               <Link href="#">
    //                 <a className="author">
    //                   <span>Admin</span>
    //                 </a>
    //               </Link>
    //               <Link href="/blog-details">
    //                 <a className="tag">
    //                   <span>WordPress</span>
    //                 </a>
    //               </Link>
    //             </div>
    //             <h6>
    //               <Link href="/blog-details">
    //                 Double rectangle houses from old containers.
    //               </Link>
    //             </h6>
    //             <div className="btn-more">
    //               <Link href="/blog-details">
    //                 <a className="simple-btn">Read More</a>
    //               </Link>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-lg-4">
    //         <div
    //           className="item active bg-img md-mb50 wow fadeInUp"
    //           data-wow-delay=".5s"
    //           style={{ backgroundImage: "url(/assets/img/blog/news1.jpg)" }}
    //         >
    //           <div className="cont">
    //             <Link href="/blog-details">
    //               <a className="date">
    //                 <span>
    //                   <i>06</i> August
    //                 </span>
    //               </a>
    //             </Link>
    //             <div className="info">
    //               <Link href="#">
    //                 <a className="author">
    //                   <span>Admin</span>
    //                 </a>
    //               </Link>
    //               <Link href="/blog-details">
    //                 <a className="tag">
    //                   <span>WordPress</span>
    //                 </a>
    //               </Link>
    //             </div>
    //             <h6>
    //               <Link href="/blog-details">
    //                 How to use solid color combine with simple furnitures.
    //               </Link>
    //             </h6>
    //             <div className="btn-more">
    //               <Link href="/blog-details" className="simple-btn">
    //                 Read More
    //               </Link>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-lg-4">
    //         <div
    //           className="item bg-img wow fadeInUp"
    //           data-wow-delay=".8s"
    //           style={{ backgroundImage: "url(/assets/img/blog/news3.jpg)" }}
    //         >
    //           <div className="cont">
    //             <Link href="/blog-details">
    //               <a className="date">
    //                 <span>
    //                   <i>06</i> August
    //                 </span>
    //               </a>
    //             </Link>
    //             <div className="info">
    //               <Link href="#">
    //                 <a className="author">
    //                   <span>Admin</span>
    //                 </a>
    //               </Link>
    //               <Link href="/blog-details">
    //                 <a className="tag">
    //                   <span>WordPress</span>
    //                 </a>
    //               </Link>
    //             </div>
    //             <h6>
    //               <Link href="/blog-details">
    //                 How to use solid color combine with simple furnitures.
    //               </Link>
    //             </h6>
    //             <div className="btn-more">
    //               <Link href="/blog-details" className="simple-btn">
    //                 Read More
    //               </Link>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
     <section className="services section-padding pb-0">
      <div className="container" style={{backgroundColor:'#f7f7f7',padding:'30px'}}>
        {/* <div className="section-head"  style={{margin:'0px auto 10px'}}>
          <h3>Global Network</h3>
        </div> */}
        <div className="row" style={{textAlign:'center'}}>
          <div className="col-lg-4">
            <div className="item md-mb50 " style={{textAlign:'start'}}>
              <div style={{display:'flex'}}>
                <hr style={{width:'35px',borderWidth:'2px',color:'black'}}/>
                <p style={{color:'black',margin:'0 0 0 10px',fontWeight:500}}>Export</p>
              </div>
              <h2 style={{color:'black'}}>
               Global Network
              </h2>
              <p>Lexus Granito's presence is avalable in more
                than 18 countries.
             </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50 card1">
              <span className="icon flaticon-furniture"></span>
              <p>
              Total Size of Export 7500 Container Per Year
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item card1">
              <span className="icon flaticon-home7-1"></span>
              <p>
              Hienest Exporter Since Last 8 Year
              </p>
            </div>
          </div>
        </div>
        <div className="row" style={{textAlign:'center',marginTop:'15px'}}>
          <div className="col-lg-4">
            <div className="item md-mb50 card1">
              <span className="icon flaticon-sketch"></span>
              <p>
              Exporting to More than 35+ Countries
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50 card1">
              <span className="icon flaticon-furniture"></span>
              <p>
              Lexus Granito is ISO Certified Company
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item card1">
              <span className="icon flaticon-home7-1"></span>
              <p>
              Lexus Granito is Provide Best Quality
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs3;
