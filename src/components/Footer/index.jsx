/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Footer = ({ classText }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <footer className={`${classText ? classText : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title" data-aos="flip-right"  data-aos-duration="3000">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker" data-aos="fade-up"></span>
                  <div className="cont" data-aos="fade-up">
                    <h6>official Address</h6>
                    <p>Office No. 1020, RK WORLD TOWER, Near Shital Park, Rajkot(Guj.)-360006 INDIA.</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail" data-aos="fade-up"></span>
                  <div className="cont" data-aos="fade-up">
                    <h6>Email Us</h6>
                    <p>export@blazeinternational.in</p>
                    <p>www.blazeinternational.in</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call" data-aos="fade-up"></span>
                  <div className="cont" data-aos="fade-up">
                    <h6>Call Us</h6>
                    <p>+91 99098 44111 | +91 90990 47677</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title" data-aos="flip-right"  data-aos-duration="3000">
                <h5>Recent News</h5>
              </div>
              <ul>
                <li>
                  <div className="img" data-aos="fade-up">
                    <Link href="/packing-details">
                      <a>
                        <img src="/assets/img/blog/news1.jpg" alt="" />
                      </a>
                    </Link>
                  </div>

                  <div className="sm-post" data-aos="fade-up">
                    <Link href="/packing-details">
                      <a>
                        <p>
                          The Start-Up Ultimate Guide to Make Your WordPress
                          Journal.
                        </p>
                      </a>
                    </Link>
                    <span className="date">14 Jan 2022</span>
                  </div>
                </li>
                <li>
                  <div className="img" data-aos="fade-up">
                    <Link href="/packing-details">
                      <a>
                        <img src="/assets/img/blog/news2.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post" data-aos="fade-up">
                    <Link href="/packing-details">
                      <a>
                        <p>
                          The Start-Up Ultimate Guide to Make Your WordPress
                          Journal.
                        </p>
                      </a>
                    </Link>
                    <span className="date">14 Jan 2022</span>
                  </div>
                </li>
                <li>
                  <div className="subscribe" data-aos="fade-up">
                    <input type="text" placeholder="Type Your Email" />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item" >
              <div className="logo" data-aos="flip-right"  data-aos-duration="3000">
                <img src="/assets/img/logo-light.png" alt="" />
              </div>
              <div className="social" data-aos="fade-up">
                <Link href="#">
                  <a>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <i className="fab fa-twitter"></i>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                  <i className="fab fa-linkedin-in"></i>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <i className="fab fa-instagram"></i>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <i className="fab fa-youtube"></i>
                  </a>
                </Link>
              </div>
              <div className="copy-right" data-aos="fade-up">
                <p>
                  © 2023, Blaze Template. Made with passion by
                  <Link href="#">Octopus Technology</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
