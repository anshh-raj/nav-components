import React, { useState } from "react";
import "./NavBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <h3 className="logo">ChemCard</h3>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#learnnew">LearnNew</a>
        </li>
        <li>
          <a href="#cards">Cards</a>
        </li>
        <li>
          <a href="#aboutus">About us</a>
        </li>
      </ul>
      <h3 className="loginbutton">
        <button className="login-btn">
          <FontAwesomeIcon icon={faSignInAlt} /> Login
        </button>
      </h3>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
};

export default NavBar;
