/* eslint-disable @next/next/no-img-element */
import thumparallaxUp from "../../common/thumparallaxUp";
import React from "react";

const Catalouge = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.simpleParallax) thumparallaxUp();
    }, 1000);
  }, []);

  const Ceramic=[
    {name:'300x600mm (Matt Finish)',src:'/assets/Ceramic/1.jpg',pdf:"https://firebasestorage.googleapis.com/v0/b/blaze-f3c9e.appspot.com/o/MATT.pdf?alt=media&token=d04e344d-de00-456f-b17b-5195a7745442",pdfName:'MATT.pdf'},
    {name:'300x600mm (Glossy Finish)',src:'/assets/Ceramic/2.jpg',pdf:'https://firebasestorage.googleapis.com/v0/b/blaze-f3c9e.appspot.com/o/GLOSSYFinish.pdf?alt=media&token=b3c00f2e-9329-4419-a6e7-13720eb2d380',pdfName:'GLOSSYFinish.pdf'},
    {name:'300x600mm (Elevation Series)',src:'/assets/Ceramic/3.jpg',pdf:'https://firebasestorage.googleapis.com/v0/b/blaze-f3c9e.appspot.com/o/GLOSSYELEVATION.pdf?alt=media&token=f120a993-dd47-44ae-98ac-b114742d9ec1',pdfName:'GLOSSYELEVATION.pdf'},
    {name:'300x600mm Digital Wall Tiles (Elevation Series)',src:'/assets/Ceramic/4.jpg',pdf:'https://firebasestorage.googleapis.com/v0/b/blaze-f3c9e.appspot.com/o/ELEVATION.pdf?alt=media&token=07da97ee-443b-4d98-9c56-d5700b905ce7',pdfName:'ELEVATION.pdf'},
    {name:'300x600mm Digital Wall Tiles(Glossy Finish)',src:'/assets/Ceramic/5.jpg',pdf:'https://console.firebase.google.com/project/blaze-f3c9e/storage/blaze-f3c9e.appspot.com/files',pdfName:'DigitalGlossyFinish.pdf'},
    {name:'300x600mm Digital Wall Tiles(Matt Elevation)',src:'/assets/Ceramic/6.jpg',pdf:'https://firebasestorage.googleapis.com/v0/b/blaze-f3c9e.appspot.com/o/MATTELEVATION.pdf?alt=media&token=d673446e-c6dc-4ae2-83e1-d2be44b4d1b5',pdfName:'MATTELEVATION.pdf'},
  ]
  const Senaric=[
    {name:'300x600mm (GLOSSY(1001-1300))',src:'/assets/Sanitary/1.jpg',pdf:"https://firebasestorage.googleapis.com/v0/b/blaze-f3c9e.appspot.com/o/GLOSSY(1001-1300).pdf?alt=media&token=b4ca0d9b-1f65-4b8e-887a-8f134b2c2a1d",pdfName:'GLOSSY(1001-1300).pdf'},
    {name:'300x600mm (GLOSSY ELEGANTE SERIES)',src:'/assets/Sanitary/2.jpg',pdf:'https://firebasestorage.googleapis.com/v0/b/blaze-f3c9e.appspot.com/o/GLOSSYELEGANTESERIES.pdf?alt=media&token=ab6e78ee-e13c-4e2c-a257-b1bc6b2a9866',pdfName:'GLOSSYELEGANTESERIES.pdf'},
    {name:'300x600mm (LATEST COLLECTION)',src:'/assets/Sanitary/3.jpg',pdf:'https://firebasestorage.googleapis.com/v0/b/blaze-f3c9e.appspot.com/o/LATESTCOLLECTION.pdf?alt=media&token=c2a0aec3-bab2-4558-a8f7-16070d5e6df2',pdfName:'LATESTCOLLECTION.pdf'},
    {name:'300x600mm Digital Wall Tiles (MTCON)',src:'/assets/Sanitary/4.jpg',pdf:'https://firebasestorage.googleapis.com/v0/b/blaze-f3c9e.appspot.com/o/MTCON.pdf?alt=media&token=90d94ca1-0f13-4973-9d57-e69f735bc6ce',pdfName:'MTCON.pdf'},
    {name:'300x600mm Digital Wall Tiles(ORDINARY)',src:'/assets/Sanitary/5.jpg',pdf:'https://firebasestorage.googleapis.com/v0/b/blaze-f3c9e.appspot.com/o/ORDINARY.pdf?alt=media&token=a8acf0d9-fa2a-44bb-a75a-59f3229f09db',pdfName:'ORDINARY.pdf'},
    {name:'300x600mm Digital Wall Tiles(Prism Collection)',src:'/assets/Sanitary/6.jpg',pdf:'https://firebasestorage.googleapis.com/v0/b/blaze-f3c9e.appspot.com/o/PrismCollection.pdf?alt=media&token=0a172167-9783-433e-8bc1-45ab68a2bdcb',pdfName:'PrismCollection.pdf'},
  ]
  const Agriculture=[
    {name:'300x600mm FISH',src:'/assets/Agriculture/1.jpg',pdf:"https://firebasestorage.googleapis.com/v0/b/blaze-f3c9e.appspot.com/o/FISH.pdf?alt=media&token=bc852496-63e4-4a83-ac6e-abec2b843a26",pdfName:'FISH.pdf'},
    {name:'300x600mm (GLELE)',src:'/assets/Agriculture/2.jpg',pdf:'https://firebasestorage.googleapis.com/v0/b/blaze-f3c9e.appspot.com/o/GLELE.pdf?alt=media&token=0c337c0a-8c6e-4239-bce0-159f4df507e0',pdfName:'GLELE.pdf'},
    {name:'300x600mm (ELEGANTE)',src:'/assets/Agriculture/3.jpg',pdf:'https://firebasestorage.googleapis.com/v0/b/blaze-f3c9e.appspot.com/o/GLOSSYELEGANTE.pdf?alt=media&token=02f13530-659d-4ea6-b41e-60bab899e26d',pdfName:'GLOSSYELEGANTE.pdf'},
    {name:'300x600mm Digital Wall Tiles (KITCHEN)',src:'/assets/Agriculture/4.jpg',pdf:'https://firebasestorage.googleapis.com/v0/b/blaze-f3c9e.appspot.com/o/KITCHEN.pdf?alt=media&token=459aabed-4d81-4753-9cb2-69f823d40db8',pdfName:'KITCHEN.pdf'},
    {name:'300x600mm Digital Wall Tiles(MATT1)',src:'/assets/Agriculture/5.jpg',pdf:'https://firebasestorage.googleapis.com/v0/b/blaze-f3c9e.appspot.com/o/MATT1.pdf?alt=media&token=54151c08-3271-4e79-bda6-26e32fcdf6df',pdfName:'MATT1.pdf'},
    {name:'300x600mm Digital Wall Tiles(MATTGVT)',src:'/assets/Agriculture/6.jpg',pdf:'https://firebasestorage.googleapis.com/v0/b/blaze-f3c9e.appspot.com/o/MATTGVT.pdf?alt=media&token=0cad61ee-a141-468e-b730-807884ce3e25',pdfName:'MATTGVT.pdf'},
  ]
  const Food=[
    {name:'300x600mm CONCEPT',src:'/assets/Food/1.jpg',pdf:"https://firebasestorage.googleapis.com/v0/b/blaze-f3c9e.appspot.com/o/CONCEPT.pdf?alt=media&token=8ccc3124-5026-4298-ac90-12d45fbcca0d",pdfName:'CONCEPT.pdf'},
    {name:'300x600mm (Digital Finish)',src:'/assets/Food/2.jpg',pdf:'https://firebasestorage.googleapis.com/v0/b/blaze-f3c9e.appspot.com/o/DigitalGlossyFinish.pdf?alt=media&token=b9f97098-b86a-4f7e-ae52-88e93235dbb5',pdfName:'DigitalGlossyFinish.pdf'},
    {name:'300x600mm (GLCON)',src:'/assets/Food/3.jpg',pdf:'https://firebasestorage.googleapis.com/v0/b/blaze-f3c9e.appspot.com/o/GLCON.pdf?alt=media&token=7dbe108a-b6f5-48a2-8098-1cccf56f9860',pdfName:'GLCON.pdf'},
    {name:'300x600mm Digital Wall Tiles (GLELE)',src:'/assets/Food/4.jpg',pdf:'https://firebasestorage.googleapis.com/v0/b/blaze-f3c9e.appspot.com/o/GLELE.pdf?alt=media&token=73591502-1f1c-422e-97eb-0fbaeb426554',pdfName:'GLELE.pdf'},
    {name:'300x600mm Digital Wall Tiles(GLOSSY)',src:'/assets/Food/5.jpg',pdf:'https://firebasestorage.googleapis.com/v0/b/blaze-f3c9e.appspot.com/o/GLOSSY.pdf?alt=media&token=4dd9079b-4b46-4fec-9e61-08afdeb6903e',pdfName:'GLOSSY.pdf'},
    {name:'300x600mm Digital Wall Tiles(GLOSSY MARVE SERIES)',src:'/assets/Food/6.jpg',pdf:'https://firebasestorage.googleapis.com/v0/b/blaze-f3c9e.appspot.com/o/GLOSSYMARVESERIES.pdf?alt=media&token=1520e8ef-48cd-4e5d-9025-810a2d05b995',pdfName:'GLOSSYMARVESERIES.pdf'},
  ]
  return (
    <>
      <section className="ttm-row portfolio-section clearfix ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title style1 text-center sal-animate" data-sal="slide-up">
                <div className="title-header sal-animate" data-sal="slide-up">
                  <h2 className="title-catalouge">Ceramic Tiles</h2>
                </div>
              </div>
            </div>
          </div>
         
          <div className="row row-equal-height justify-content-center d-flex">
          {Ceramic.map(( item, i) => {
            return(
              <>
               <div className="col-md-4 col-sm-12 sal-animate" data-sal="slide-up">
              <div className="featured-imagebox featured-imagebox-post style1">
                <div className="featured-thumbnail">
                  <img className="img-fluid" src={item.src} alt="" height="100%" width="100%" />
                </div>
                <div className="featured-content">
                  <a download={item.pdfName} href={item.pdf} target="_blank"></a>
                  <div className="post-header">
                    <a download={item.pdfName} href={item.pdf} target="_blank">
                      <div className="ttm-box-post-date">
                        <span className="ttm-entry-date">
                          <time className="entry-date">
                            <i className="fa fa-download"></i>
                          </time>
                        </span>
                      </div>
                    </a>
                    <div className="post-meta">
                      <a download={item.pdfName} href={item.pdf} target="_blank" rel="noopener noreferrer">
                        {" "}
                        <span className="ttm-meta-line comments-link">Download</span>
                      </a>
                    </div>
                  </div>
                  <div className="post-title featured-title">
                    <h3>
                      <a href={item.pdf} target="_blank" rel="noopener noreferrer">{item.name}</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
              </>
            )
           })}
           
          </div>
        </div>
      </section>
      <section className="ttm-row portfolio-section clearfix ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title style1 text-center sal-animate" data-sal="slide-up">
                <div className="title-header sal-animate" data-sal="slide-up">
                  <h2 className="title-catalouge">Sanitary Tiles</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-equal-height justify-content-center d-flex">
          {Senaric.map(( item, i) => {
            return(
              <>
               <div className="col-md-4 col-sm-12 sal-animate" data-sal="slide-up">
              <div className="featured-imagebox featured-imagebox-post style1">
                <div className="featured-thumbnail">
                  <img className="img-fluid" src={item.src} alt="" height="100%" width="100%" />
                </div>
                <div className="featured-content">
                  <a download={item.pdfName} href={item.pdf} target="_blank"></a>
                  <div className="post-header">
                    <a download={item.pdfName} href={item.pdf} target="_blank">
                      <div className="ttm-box-post-date">
                        <span className="ttm-entry-date">
                          <time className="entry-date">
                            <i className="fa fa-download"></i>
                          </time>
                        </span>
                      </div>
                    </a>
                    <div className="post-meta">
                      <a download={item.pdfName} href={item.pdf} target="_blank" rel="noopener noreferrer">
                        {" "}
                        <span className="ttm-meta-line comments-link">Download</span>
                      </a>
                    </div>
                  </div>
                  <div className="post-title featured-title">
                    <h3>
                      <a href={item.pdf} target="_blank" rel="noopener noreferrer">{item.name}</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
              </>
            )
           })}
          </div>
        </div>
      </section>
      <section className="ttm-row portfolio-section clearfix ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title style1 text-center sal-animate" data-sal="slide-up">
                <div className="title-header sal-animate" data-sal="slide-up">
                  <h2 className="title-catalouge">Agriculture</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-equal-height justify-content-center d-flex">
          {Agriculture.map(( item, i) => {
            return(
              <>
               <div className="col-md-4 col-sm-12 sal-animate" data-sal="slide-up">
              <div className="featured-imagebox featured-imagebox-post style1">
                <div className="featured-thumbnail">
                  <img className="img-fluid" src={item.src} alt="" height="100%" width="100%" />
                </div>
                <div className="featured-content">
                  <a download={item.pdfName} href={item.pdf} target="_blank"></a>
                  <div className="post-header">
                    <a download={item.pdfName} href={item.pdf} target="_blank">
                      <div className="ttm-box-post-date">
                        <span className="ttm-entry-date">
                          <time className="entry-date">
                            <i className="fa fa-download"></i>
                          </time>
                        </span>
                      </div>
                    </a>
                    <div className="post-meta">
                      <a download={item.pdfName} href={item.pdf} target="_blank" rel="noopener noreferrer">
                        {" "}
                        <span className="ttm-meta-line comments-link">Download</span>
                      </a>
                    </div>
                  </div>
                  <div className="post-title featured-title">
                    <h3>
                      <a href={item.pdf} target="_blank" rel="noopener noreferrer">{item.name}</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
              </>
            )
           })}
          </div>
        </div>
      </section>
      <section className="ttm-row portfolio-section clearfix ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title style1 text-center sal-animate" data-sal="slide-up">
                <div className="title-header sal-animate" data-sal="slide-up">
                  <h2 className="title-catalouge">Food Items</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-equal-height justify-content-center d-flex">
          {Food.map(( item, i) => {
            return(
              <>
               <div className="col-md-4 col-sm-12 sal-animate" data-sal="slide-up">
              <div className="featured-imagebox featured-imagebox-post style1">
                <div className="featured-thumbnail">
                  <img className="img-fluid" src={item.src} alt="" height="100%" width="100%" />
                </div>
                <div className="featured-content">
                  <a download={item.pdfName} href={item.pdf} target="_blank"></a>
                  <div className="post-header">
                    <a download={item.pdfName} href={item.pdf} target="_blank">
                      <div className="ttm-box-post-date">
                        <span className="ttm-entry-date">
                          <time className="entry-date">
                            <i className="fa fa-download"></i>
                          </time>
                        </span>
                      </div>
                    </a>
                    <div className="post-meta">
                      <a download={item.pdfName} href={item.pdf} target="_blank" rel="noopener noreferrer">
                        {" "}
                        <span className="ttm-meta-line comments-link">Download</span>
                      </a>
                    </div>
                  </div>
                  <div className="post-title featured-title">
                    <h3>
                      <a href={item.pdf} target="_blank" rel="noopener noreferrer">{item.name}</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
              </>
            )
           })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Catalouge;
