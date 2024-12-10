import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../css/Home.css";
import ActionNavs from "../components/ActionNavs";

const Home = () => {
  const [desktopBottomValues, setDesktopBottomValues] = useState([
    "-550px",
    "-50px",
  ]);
  const [screenBottomValues, setScreenBottomValues] = useState([
    "-50px",
    "-550px",
  ]);

  useEffect(() => {
    const updateAnimationValues = () => {
      if (
        window.matchMedia("(min-width: 992px) and (max-width: 1024px)").matches
      ) {
        setDesktopBottomValues(["-800px", "-130px"]);
        setScreenBottomValues(["-130px", "-800px"]);
      } else {
        setDesktopBottomValues(["-550px", "-50px"]);
        setScreenBottomValues(["-50px", "-550px"]);
      }
    };

    // Check on initial load
    updateAnimationValues();

    // Listen for window resize events
    window.addEventListener("resize", updateAnimationValues);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", updateAnimationValues);
    };
  }, []);

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
            animate={{ bottom: desktopBottomValues }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <motion.img
            className="mobile"
            src="/images/request_screen.png"
            alt=""
            animate={{ bottom: screenBottomValues }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="imgs-repo">
          <motion.img
            className="desktop"
            src="/images/repo_deskstop.png"
            alt=""
            animate={{ bottom: ["150px", "-30px"] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <motion.img
            className="mobile"
            src="/images/repo_mobile.png"
            alt=""
            animate={{ bottom: ["-130px", "50px"] }}
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
