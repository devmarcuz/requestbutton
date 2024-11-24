import React from "react";
import "../css/Home.css";
import "../css/JoinWaitlist.css";
import ActionNavs from "../components/ActionNavs";
import { motion } from "framer-motion";

const JoinWaitlist = () => {
  return (
    <div className="home join-waitlist">
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
              <span>Direct Feedback Opportunity</span>: Help shape the future of
              the platform with your input.
            </div>
          </div>
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
          <input type="email" placeholder="name@gmail.com" />
          <div className="text">Your information is safe with us. </div>
        </div>
        i
      </div>
      <ActionNavs />
    </div>
  );
};

export default JoinWaitlist;
