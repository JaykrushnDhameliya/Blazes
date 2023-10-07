/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import getSiblings from '../../common/getSiblings'

const Navbar = ({ navbarRef, logoRef, logoClass }) => {
  const scriptLoaded = React.useRef(false);
  const[open,setOpen]=useState(false)
  const[sanaitary,setSanatary]=useState(false)
  const [isHovered, setIsHovered] = useState(false);
  const [isCompany, setIsCompany] = useState(false);

  const handleHover = (e) => {
    setIsHovered(true);
  };

  const handleRemove = (e) => {
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  const handleSanitaryEnter = () => {
    setSanatary(true);
  };

  const handleSanitaryLeave = () => {
    setSanatary(false);
  };

  const handleCompanyHover = (e) => {
    setIsCompany(true);
  };
  const handleCompanyRemove = (e) => {
    setIsCompany(false);
  };
  const handleUtliesHover = (e) => {
    setIsCompany(true);
  };
  const handleUtliesRemove = (e) => {
    setIsCompany(false);
  };
  React.useEffect(() => {
    if (!scriptLoaded.current) {
      var addScript = document.createElement("script");
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
      document.body.appendChild(addScript);
      window.googleTranslateElementInit = googleTranslateElementInit;
      scriptLoaded.current = true;
    }
    googleTranslateElementInit();
    document.querySelector("body").classList.add("index3");
  }, []);

  const googleTranslateElementInit = () => {
    if (window.google && window.google.translate) {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false
        },
        "google_translate_element"
      );
    } else {
      console.error("Google Translate API is not available.");
    }
  };

  const handleDropdown = (e) => {
    handleHover(e)
    handleCompanyHover(e)
    handleUtliesHover(e)
    getSiblings(e.target.parentElement)
      .filter((item) => item.classList.contains("show"))
      .map((item) => {
        item.classList.remove("show");
        item.childNodes[0].setAttribute("aria-expanded", false);

        if (item.childNodes[0]) {
          item.childNodes[0].setAttribute("aria-expanded", false);
        }
        if (item.childNodes[1]) {
          item.childNodes[1].classList.remove("show");
        }
      });
    e.target.parentElement.classList.toggle("show");
    e.target.setAttribute("aria-expanded", true);
    if (e.target.parentElement.childNodes[1]) {
    e.target.parentElement.childNodes[1].classList.toggle("show");
  };
};
  const handleMobileDropdown = (e) => {
    document
      .getElementById("navbarSupportedContent")
      .classList.toggle("show-with-trans");
  };

  return (
    <>
      <nav className="navbar change navbar-expand-lg" ref={navbarRef}>
        <div className="container">
            <a className={`logo ${logoClass && logoClass}`}>
              <img src={appData.lightLogo} alt="logo" ref={logoRef} />
            </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            onClick={handleMobileDropdown}
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar">
              <i className="fas fa-bars"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item dropdown" onMouseEnter={handleDropdown} onMouseLeave={handleCompanyRemove}>
                <span
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onMouseEnter={(e)=>handleDropdown(e)} 
                >
                  Company
                </span>
                {isCompany&&
                <div className="dropdown-menu" onMouseLeave={handleCompanyRemove}>
                  <Link href="/about">
                    <a className="dropdown-item">About</a>
                  </Link>
                  <Link href="/whyUs">
                    <a className="dropdown-item">Why Us</a>
                  </Link>
                </div>}
              </li>

              <li className="nav-item dropdown" onMouseEnter={(e)=>handleDropdown(e)} onMouseLeave={handleRemove} >
              <span
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onMouseEnter={(e)=>handleDropdown(e)} 
                >
                  Collection
                </span>
                {isHovered&&<>
                <div className="dropdown-menu" onMouseLeave={handleMouseLeave}>
                <span
                  className="dropdown-item"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onMouseEnter={handleMouseEnter} 
                  onMouseLeave={(e)=>handleMouseLeave(e)}
                >
                  Ceramic Tiles
                </span>
                {open&&
                <div className="dropdown-menu1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <Link href="/wallTiles" >
                    <a className="dropdown-item">Wall Tiles</a>
                  </Link>
                  <Link href="/floorTiles">
                    <a className="dropdown-item">Floor Tiles</a>
                  </Link>
                  <Link href="/kitchen-Living Tiles">
                    <a className="dropdown-item">Kitchen & Living Tiles</a>
                   </Link>
                   <Link href="/parkingTiles">
                    <a className="dropdown-item">Parking Tiles</a>
                   </Link>
                   <Link href="/subwayTiles">
                    <a className="dropdown-item">Subway Tiles</a>
                   </Link>
                   <Link href="/nanoTiles">
                    <a className="dropdown-item">Nano Tiles</a>
                   </Link>
                </div>}
                  <span
                  className="dropdown-item"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onMouseEnter={handleSanitaryEnter} 
                  onMouseLeave={(e)=>handleSanitaryLeave(e)}
                >
                  Sanitary Ware
                </span>
                {sanaitary &&
                <div className="dropdown-menu1" onMouseEnter={handleSanitaryEnter} onMouseLeave={handleSanitaryLeave}>
                  <Link href="/washBasin">
                    <a className="dropdown-item">Wash Basin</a>
                  </Link>
                  <Link href="/0nePiece">
                    <a className="dropdown-item">One Piece</a>
                  </Link>
                  <Link href="/twoPiece">
                    <a className="dropdown-item">Two Piece / Close Couple</a>
                   </Link>
                   <Link href="/panUrinal">
                    <a className="dropdown-item">Pan & Urinal</a>
                   </Link>
                   <Link href="/water-closet">
                    <a className="dropdown-item">Water Closet</a>
                   </Link>
                   <Link href="/accessories">
                    <a className="dropdown-item">accessories</a>
                   </Link>
                </div>}
                  <Link href="/spices">
                    <a className="dropdown-item">Spices</a>
                   </Link>
                  <Link href="/pulses">
                    <a className="dropdown-item">Pulses</a>
                   </Link>
                   <Link href="/flour">
                    <a className="dropdown-item">Flour</a>
                   </Link>
                   <Link href="/edible-oil">
                    <a className="dropdown-item">Edible Oil</a>
                   </Link>
                   <Link href="/pvc-pipes">
                    <a className="dropdown-item">PVC & Unsolicited pipes</a>
                   </Link>
                </div>
                </>}
              </li>
              
              <li className="nav-item">
                <Link href="/catalouges">
                  <a className="nav-link">Catalogue</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/exports">
                  <a className="nav-link">Export</a>
                </Link>
              </li>
              <li className="nav-item dropdown" onMouseEnter={handleDropdown} onMouseLeave={handleUtliesRemove}>
                <span
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onMouseEnter={(e)=>handleDropdown(e)} 
                >
                 Utilies
                </span>
                {isCompany&&
                <div className="dropdown-menu" onMouseLeave={handleUtliesRemove}>
                  <Link href="/tilesCalculator">
                    <a className="dropdown-item">Tiles calculator</a>
                  </Link>
                  <Link href="/packing-details">
                    <a className="dropdown-item">Packing Details</a>
                  </Link>
                </div>}
              </li>
              <li className="nav-item">
                <Link href="/contact">
                  <a className="nav-link">Contact</a>
                </Link>
              </li>
              <li className="nav-item">
              <a className="nav-link">
                <div id="google_translate_element"></div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
