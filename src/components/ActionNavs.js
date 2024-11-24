import React from "react";
import "../css/ActionNav.css";
import { Link, useLocation } from "react-router-dom";

const ActionNavs = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="action-navs">
      <Link to="/" className={`nav ${location.pathname === "/" && "active"}`}>
        <img src="/svgs/home.svg" alt="" />
      </Link>
      {location.pathname !== "/join-waitlist" ? (
        <Link to="/join-waitlist" className="nav">
          Join Waitlist
        </Link>
      ) : (
        <div to="/join-waitlist" className="nav nav-btn">
          Join Waitlist Now
        </div>
      )}
      {location.pathname !== "/try-requestai" ? (
        <Link to="/try-requestai" className="nav">
          Try RequestAI
        </Link>
      ) : (
        <div to="/try-requestai" className="nav nav-btn">
          Try RequestAI
        </div>
      )}
      {location.pathname !== "/contact-us" ? (
        <Link to="/contact-us" className="nav">
          Contact Us
        </Link>
      ) : (
        <div to="/contact-us" className="nav nav-btn contact">
          Submit Contact Info
        </div>
      )}
    </div>
  );
};

export default ActionNavs;
