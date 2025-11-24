import React from "react";
import "../css/pages/navbar.scss";

import { FaSearch, FaUserCircle, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left side - Logo */}
      <div className="logo">
        <h2>API</h2>
      </div>

      {/* Search bar */}
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search..." />
      </div>

      {/* Right menu */}
      <div className="menu">
        <a href="/api-marketplace" className="api-btn">
          API Marketplace
        </a>

        <FaEnvelope className="mail-icon" />

        <div className="profile">
          <FaUserCircle className="profile-icon" />
          <span>Sanjay</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
