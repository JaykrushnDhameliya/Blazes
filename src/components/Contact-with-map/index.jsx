import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import appData from '../../data/app.json'

const ContactWithMap = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 map-box px-5" data-aos="fade-right" data-aos-duration="2000">
          <iframe src={appData.mapIframe}></iframe>
        </div>
        <div className="col-lg-6 form">
          <form id="contact-form" method="post">
            <div className="messages"></div>

            <div className="controls">
              <div className="form-group" data-aos="fade-up" data-aos-duration="2000">
                <input
                  id="form_name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required="required"
                />
              </div>

              <div className="form-group" data-aos="fade-up" data-aos-duration="2000">
                <input
                  id="form_email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required="required"
                />
              </div>

              <div className="form-group" data-aos="fade-up" data-aos-duration="2000">
                <textarea
                  id="form_message"
                  name="message"
                  placeholder="Message"
                  rows="4"
                  required="required"
                ></textarea>
              </div>

              <button type="submit" className="btn-curve btn-color" data-aos="fade-down" data-aos-duration="2000">
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactWithMap;
