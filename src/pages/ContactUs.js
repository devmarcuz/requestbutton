import React from "react";
import "../css/Home.css";
import "../css/ContactUs.css";
import ActionNavs from "../components/ActionNavs";

const ContactUs = () => {
  return (
    <div className="home contact-us">
      <img src="/svgs/AI_4.svg" alt="" className="ai_3" />
      <main>
        <div className="left-main">
          <h1>
            We would <br /> love to hear <br /> from you
          </h1>
          <div className="contain">
            <img src="/svgs/request_lg.svg" alt="" />
            <div className="wrapper">
              <div className="wrap">
                <p>withyou@requestbutton.com</p>
                <img src="/svgs/copy.svg" alt="" />
              </div>
              <div className="wrap">
                <p> +234 906 010 0257</p>
                <img src="/svgs/copy.svg" alt="" />
              </div>
              <div className="wrap">
                <p> +234 803 591 5522</p>
                <img src="/svgs/copy.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="right-main">
          <h1>
            Have questions, feedback, or need assistance? We’re here to help
          </h1>
          <div className="form">
            <div className="label">
              <label htmlFor="">Full name *</label>
              <input type="text" placeholder="Enter your full name" required />
            </div>
            <div className="label">
              <label htmlFor="">Your Phone Number (optional) </label>
              <input type="number" placeholder="Enter your phone number" />
            </div>
            <div className="label">
              <label htmlFor="">Your Email Address * </label>
              <input
                type="email"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="label">
              <label htmlFor="">Subject *</label>
              <div className="select">
                <p> Select 1 subject</p>
                <img src="/svgs/angle-small-down.svg" alt="" />
              </div>
            </div>
            <div className="label">
              <label htmlFor="">Your message *</label>
              <textarea placeholder="Write your message here…" />
            </div>
          </div>
        </div>
      </main>
      <ActionNavs />
    </div>
  );
};

export default ContactUs;
