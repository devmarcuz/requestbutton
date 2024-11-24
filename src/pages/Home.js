import React from "react";
import { motion } from "framer-motion";
import "../css/Home.css";
import ActionNavs from "../components/ActionNavs";

const Home = () => {
  return (
    <div className="home">
      <img src="/svgs/AI.svg" alt="" className="ai" />
      <div className="container">
        <p>
          Revolutionizing Reservations & Experiences: Your Ultimate Hospitality
          Solution.
        </p>
        <h1>
          Request <br /> Button
        </h1>
        <div className="imgs">
          <motion.img
            className="desktop"
            src="/images/request_desktop.png"
            alt=""
            animate={{ bottom: ["-550px", "-50px"] }}
            transition={{
              duration: 2, // Duration of one cycle
              repeat: Infinity, // Infinite repetition
              repeatType: "reverse", // Alternates back and forth
              ease: "easeInOut", // Smooth transition
            }}
          />
          <motion.img
            src="/images/request_screen.png"
            alt=""
            animate={{ bottom: ["-50px", "-550px"] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
      <div className="blured-effect"></div>
      <ActionNavs />
    </div>
  );
};

export default Home;
