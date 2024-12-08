import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../css/Home.css";
import "../css/ContactUs.css";
import ActionNavs from "../components/ActionNavs";

const ContactUs = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);
  const [step, setStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const [selectedSubject, setSelectedSubject] = useState("Select 1 subject"); // To store the selected subject

  const subjects = ["Inquiry", "Feedback", "Partnership Request"]; // List of subjects

  const handleSelect = (subject) => {
    setSelectedSubject(subject); // Update the selected subject
    setIsModalOpen(false); // Close the modal
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (isSubmit) {
      setStep(0);
    }
  }, [isSubmit]);

  // Simulate step changes for testing
  useEffect(() => {
    if (isSubmit) {
      const timer = setTimeout(() => setStep(1), 2000);
      const timer2 = setTimeout(() => setStep(2), 3000);
      const timer3 = setTimeout(() => setStep(3), 5000);
      const timer4 = setTimeout(() => setIsSubmit(false), 7000);
      return () => {
        clearTimeout(timer);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
      };
    }
  }, [isSubmit]);

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

  const submitContact = (e) => {
    e.preventDefault();

    setIsSubmit(true);
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 100,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="home contact-us">
      <AnimatePresence>
        {isSubmit && (
          <div className="modal">
            <motion.div
              className="modal-container"
              initial={{ y: "-100px", opacity: 0 }}
              animate={{ y: "40px", opacity: 1 }}
              exit={{ y: "-100px", opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div
                    className="content"
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src="/svgs/loadingIcon.svg" alt="Loading Icon" />
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div
                    className="content"
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src="/svgs/check.svg" alt="Check Icon" />
                    <p>Thank You for Reaching Out! 🙌</p>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    className="content thank"
                    key="thankyou"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2>
                      We’ve received your message and <br /> will get back to
                      you shortly.
                    </h2>
                    <div className="txt">
                      Our team is here to assist and ensure you have the best
                      experience with <br /> RequestButton.
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    className="content email"
                    key="checkemail"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2>
                      📬 Check your email for a confirmation of your inquiry.
                      For urgent <br />
                      matters, feel free to call us directly.
                    </h2>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <img src="/svgs/AI_4.svg" alt="" className="ai_3" />
      <img src="/svgs/ai_3_repo.svg" alt="" className="ai_3_repo" />
      <div className="main">
        <div className="left-main">
          <img className="lg-repo" src="/svgs/request_lg.svg" alt="" />

          <h1>
            We would <br /> love to hear <br /> from you
          </h1>
          <div className="contain">
            <img className="lg" src="/svgs/request_lg.svg" alt="" />
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
          <form onSubmit={submitContact} className="form">
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
              <label htmlFor="subject">Subject *</label>
              <div
                className="select"
                onClick={() => setIsModalOpen(!isModalOpen)}
              >
                <p>{selectedSubject}</p>
                <img src="/svgs/angle-small-down.svg" alt="Dropdown Icon" />
              </div>

              <AnimatePresence>
                {isModalOpen && (
                  <motion.div
                    className="select-modal"
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    ref={modalRef}
                  >
                    {subjects.map((subject) => (
                      <motion.div
                        key={subject}
                        className="modal-item"
                        onClick={() => handleSelect(subject)}
                      >
                        <div>{subject}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="label">
              <label htmlFor="">Your message *</label>
              <textarea placeholder="Write your message here…" />
            </div>
            <div className="btn">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <ActionNavs />
    </div>
  );
};

export default ContactUs;
