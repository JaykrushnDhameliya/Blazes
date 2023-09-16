/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import getSiblings from '../../common/getSiblings'

const Navbar = ({ navbarRef, logoRef, logoClass }) => {
  const scriptLoaded = React.useRef(false);
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
    getSiblings(e.target.parentElement)
      .filter((item) => item.classList.contains("show"))
      .map((item) => {
        item.classList.remove("show");
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
          {/* <Link href="/demos"> */}
            <a className={`logo ${logoClass && logoClass}`}>
              <img src={appData.lightLogo} alt="logo" ref={logoRef} />
            </a>
          {/* </Link> */}

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
              <li className="nav-item dropdown" onClick={handleDropdown}>
                <span
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Company
                </span>
                <div className="dropdown-menu">
                  <Link href="/about">
                    <a className="dropdown-item">About</a>
                  </Link>
                  <Link href="/whyUs">
                    <a className="dropdown-item">Why Us</a>
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown" onClick={handleDropdown}>
                <span
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Collection
                </span>
                <div className="dropdown-menu">
                  {/* <Link href="/work1"> */}
                    <a className="dropdown-item">Ceramic Tiles</a>
                  {/* </Link> */}
                  <Link href="/SanitaryTiles">
                    <a className="dropdown-item">Sanitary Tiles</a>
                  </Link>
                  {/* <Link href="/work3"> */}
                    <a className="dropdown-item">Agriculture</a>
                   {/* </Link> */}
                  {/* <Link href="/project-details"> */}
                    <a className="dropdown-item">Food Items</a>
                   {/* </Link> */}
                </div>
              </li>
              <li className="nav-item">
                {/* <Link href="/wallTiles"> */}
                <Link href="/Catalouges">
                  <a className="nav-link">Catalogue</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/Exports">
                  <a className="nav-link">Export</a>
                </Link>
              </li>
              <li className="nav-item dropdown" onClick={handleDropdown}>
                <span
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                 Utilies
                </span>
                <div className="dropdown-menu">
                  <Link href="/tilesCalculator">
                    <a className="dropdown-item">Tiles calculator</a>
                  </Link>
                  <Link href="/packing-details">
                    <a className="dropdown-item">Packing Details</a>
                  </Link>
                </div>
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
