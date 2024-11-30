import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../css/Home.css";
import "../css/ContactUs.css";
import ActionNavs from "../components/ActionNavs";

const ContactUs = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1000);
    });
  };

  const items = [
    { text: "withyou@requestbutton.com" },
    { text: "+234 906 010 0257" },
    { text: "+234 803 591 5522" },
  ];

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
              {items.map((item, index) => (
                <div
                  className="wrap"
                  style={{ position: "relative" }}
                  key={index}
                >
                  <p>{item.text}</p>
                  <img
                    src="/svgs/copy.svg"
                    alt="Copy Icon"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleCopy(item.text, index)}
                  />
                  <AnimatePresence>
                    {copiedIndex === index && (
                      <motion.div
                        className="copied-message"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          position: "absolute",
                          top: "-25px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          background: "black",
                          color: "white",
                          padding: "5px 10px",
                          borderRadius: "5px",
                          fontSize: "12px",
                        }}
                      >
                        Copied!
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
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
