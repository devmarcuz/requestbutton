import React, { useEffect, useState } from "react";
import "../css/Home.css";
import "../css/JoinWaitlist.css";
import ActionNavs from "../components/ActionNavs";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const JoinWaitlist = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [step, setStep] = useState(0);

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
      const timer4 = setTimeout(() => setIsSubmit(false), 6000);
      return () => {
        clearTimeout(timer);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
      };
    }
  }, [isSubmit]);

  // useEffect(() => {
  //   setStep(0);

  //   if (isSubmit) {
  //     setStep(0); // Reset the step when the modal opens

  //     // API call for transitioning from step 0 to step 1
  //     axios
  //       .get("https://api.example.com/status") // Replace with your API URL
  //       .then((response) => {
  //         if (response.status === 200) {
  //           setStep(1); // Proceed to the next step on successful API response

  //           // Schedule subsequent steps after API call is successful
  //           const timer2 = setTimeout(() => setStep(2), 2000); // Transition to step 2
  //           const timer3 = setTimeout(() => setStep(3), 4000); // Transition to step 3
  //           const timer4 = setTimeout(() => setIsSubmit(false), 6000); // Close the modal
  //           return () => {
  //             clearTimeout(timer2);
  //             clearTimeout(timer3);
  //             clearTimeout(timer4);
  //           };
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching API data:", error);
  //         setStep(1);

  //         const timer2 = setTimeout(() => setStep(2), 2000); // Transition to step 2
  //         const timer3 = setTimeout(() => setStep(3), 4000); // Transition to step 3
  //         const timer4 = setTimeout(() => setIsSubmit(false), 6000); // Close the modal
  //         return () => {
  //           clearTimeout(timer2);
  //           clearTimeout(timer3);
  //           clearTimeout(timer4);
  //         };
  //       });
  //   }
  // }, [isSubmit]);

  const submitEmail = (e) => {
    e.preventDefault();

    setIsSubmit(true);
  };

  return (
    <div className=" join-waitlist">
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
                    <p>You're In! 🎉</p>
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
                    style={{}}
                  >
                    <h2>
                      Thank you for joining the <br /> RequestButton waitlist!
                    </h2>
                    <div className="txt">
                      We’re thrilled to have you on board as we revolutionize
                      dining, hospitality, and reservations. Stay tuned for
                      exclusive updates, sneak peeks, and your early access to
                      the future of seamless service management.
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
                    style={{}}
                  >
                    <h2>Check your email for confirmation.</h2>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <img src="/svgs/AI_2.svg" alt="" className="ai_2" />
      <div className="container">
        <h1>
          Be the First to <br /> Experience <br />
          RequestButton!
        </h1>
        <p>
          Experience the ultimate platform for managing reservations, orders,
          and promotions with cutting-edge features like AI recommendations, 3D
          views, and real-time engagement tools. Sign up for our waitlist to be
          the first to access RequestButton when we launch!
        </p>
        <div className="features">
          <div className="feature">
            <img src="/svgs/star.svg" alt="" />
            <div className="txt">
              <span>Exclusive Early Access</span>: Be among the first to try our
              groundbreaking features.
            </div>
          </div>
          <div className="feature">
            <img src="/svgs/star.svg" alt="" />
            <div className="txt">
              <span>Insider Perks</span>: Enjoy special benefits like discounts
              or extended free trials.
            </div>
          </div>
          <div className="feature">
            <img src="/svgs/star.svg" alt="" />
            <div className="txt">
              <span>
                <img src="/svgs/star.svg" alt="" />
              </span>
              <span>Direct Feedback Opportunity</span>: Help shape the future of
              the platform with your input.
            </div>
          </div>
        </div>
        <div className="features-repo">
          <div className="feature">
            <img src="/svgs/star.svg" alt="" />
            <div className="txt">
              <span>Exclusive Early Access</span>: Be among the first to try our
              groundbreaking features.
            </div>
          </div>
          <div className="feature">
            <img src="/svgs/star.svg" alt="" />
            <div className="txt">
              <span>Insider Perks</span>: Enjoy special benefits like discounts
              or extended free trials.
            </div>
          </div>
          <span className="feature">
            <img src="/svgs/star.svg" alt="" />
            <span className="txt">
              <span>Direct Feedback Opportunity</span>: Help shape the future of
              the platform with your input.
            </span>
          </span>
        </div>
        <div className="label">
          <motion.img
            src="/svgs/curved_arrow.svg"
            alt="Curved Arrow"
            className="arrow"
            animate={{
              x: [-30, 30, -30], // Moves side-to-side
              rotate: [10, -10, 10], // Tilts slightly at the edges
            }}
            transition={{
              duration: 2, // Time for one complete cycle
              repeat: Infinity, // Loop the animation forever
              ease: "easeInOut", // Smooth movement
            }}
          />

          <form action="" onSubmit={submitEmail}>
            <div className="text-field">
              <input type="email" placeholder="name@gmail.com" />
            </div>
            <div className="btn">
              <button type="submit">Submit</button>
            </div>
          </form>
          <div className="text">Your information is safe with us. </div>
        </div>
      </div>
      <ActionNavs />
    </div>
  );
};

export default JoinWaitlist;
