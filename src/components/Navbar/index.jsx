/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import getSiblings from '../../common/getSiblings'

const Navbar = ({ navbarRef, logoRef, logoClass }) => {
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
    e.target.parentElement.childNodes[1].classList.toggle("show");
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
              <li className="nav-item dropdown" onClick={handleDropdown}>
                <span
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Home
                </span>
                <div className="dropdown-menu">
                  <Link href="/">
                    <a className="dropdown-item">Home Default</a>
                  </Link>
                  {/* <Link href="/home6"> */}
                    <a className="dropdown-item">Interior Agency</a>
                  {/* </Link> */}
                  {/* <Link href="/home5"> */}
                    <a className="dropdown-item">Creative Arch</a>
                  {/* </Link> */}
                  {/* <Link href="/home4"> */}
                    <a className="dropdown-item">Architecture Studio</a>
                  {/* </Link> */}
                  {/* <Link href="/home1"> */}
                    <a className="dropdown-item">Home Light</a>
                  {/* </Link> */}
                  {/* <Link href="/home2"> */}
                    <a className="dropdown-item">Interior Light</a>
                  {/* </Link> */}
                  {/* <Link href="/home3"> */}
                    <a className="dropdown-item">Architecture Light</a>
                  {/* </Link> */}
                </div>
              </li>
              <li className="nav-item">
                {/* <Link href="/about"> */}
                  <a className="nav-link">About</a>
                {/* </Link> */}
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
                  ceramic tiles
                </span>
                <div className="dropdown-menu">
                  {/* <Link href="/wallTiles"> */}
                    <a className="dropdown-item">Wall Tiles</a>
                  {/* </Link> */}
                  {/* <Link href="/work2"> */}
                    <a className="dropdown-item">Floor Tiles</a>
                  {/* </Link> */}
                  {/* <Link href="/work3"> */}
                    <a className="dropdown-item">Parlcing</a>
                   {/* </Link> */}
                  {/* <Link href="/project-details"> */}
                    <a className="dropdown-item">Vitrtical</a>
                   {/* </Link> */}
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
                  Senetiry Wase
                </span>
                <div className="dropdown-menu">
                  {/* <Link href="/work1"> */}
                    <a className="dropdown-item">wash basin</a>
                  {/* </Link> */}
                  {/* <Link href="/work2"> */}
                    <a className="dropdown-item">1 Piec</a>
                  {/* </Link> */}
                  {/* <Link href="/work3"> */}
                    <a className="dropdown-item">Closet</a>
                  {/* </Link> */}
                  {/* <Link href="/project-details"> */}
                    <a className="dropdown-item">2 Piec</a>
                  {/* </Link> */}
                  {/* <Link href="/work1"> */}
                    <a className="dropdown-item">2 Piec Closet</a>
                  {/* </Link> */}
                  {/* <Link href="/work2"> */}
                    <a className="dropdown-item">Wall Hung</a>
                  {/* </Link> */}
                  {/* <Link href="/work3"> */}
                    <a className="dropdown-item">PWC</a>
                 {/* </Link> */}
                  {/* <Link href="/project-details"> */}
                    <a className="dropdown-item">Urinal</a>
                 {/* </Link> */}
                  {/* <Link href="/work1"> */}
                    <a className="dropdown-item">Table Top</a>
                 {/* </Link> */}
                  {/* <Link href="/work2"> */}
                    <a className="dropdown-item">PAN</a>
                 {/* </Link> */}
                  {/* <Link href="/work3"> */}
                    <a className="dropdown-item">Seat Cover</a>
                 {/* </Link> */}
                  {/* <Link href="/project-details"> */}
                    <a className="dropdown-item">Accessories</a>
                 {/* </Link> */}
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
                  Agriculture
                </span>
                <div className="dropdown-menu">
                  {/* <Link href="/blogs"> */}
                    <a className="dropdown-item">Fertitijes</a>
                  {/* </Link> */}
                  {/* <Link href="/blog-details"> */}
                    <a className="dropdown-item">Fruits</a>
                  {/* </Link> */}
                  {/* <Link href="/work1"> */}
                    <a className="dropdown-item">Edible oil</a>
                  {/* </Link> */}
                  {/* <Link href="/work2"> */}
                    <a className="dropdown-item">Pvc Pipes</a>
                  {/* </Link> */}
                  {/* <Link href="/project-details"> */}
                    <a className="dropdown-item">Electrics Pipes</a>
                   {/* </Link> */}
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
                  Food Items
                </span>
                <div className="dropdown-menu">
                  {/* <Link href="/blogs"> */}
                    <a className="dropdown-item">Pasta</a>
                  {/* </Link> */}
                  {/* <Link href="/blog-details"> */}
                    <a className="dropdown-item">Bread</a>
                  {/* </Link> */}
                </div>
              </li>
              <li className="nav-item">
                {/* <Link href="/contact"> */}
                  <a className="nav-link">Contact</a>
                {/* </Link> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
