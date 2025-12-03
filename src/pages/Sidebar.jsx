import React, { useState, useEffect } from "react";
import "../css/pages/sidebar.scss";
import { FiCompass, FiFolder, FiLayers, FiMoon } from "react-icons/fi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="rapid-sidebar">
      <div className="sidebar-top">
        <div className="menu-item active">
          <FiCompass />
          <span>Discovery</span>
        </div>
        <div className="menu-item">
          <FiFolder />
          <span>Workspace</span>
        </div>
        <div className="menu-item">
          <FiLayers />
          <span>Collections</span>
        </div>
      </div>

      <div className="category-title">Categories</div>

      <div className="sidebar-scroll">
        <div className="menu-item">
          <Link to="/verification">Verification</Link>
        </div>
        <div className="menu-item">
          <Link to="/location">Location</Link>
        </div>
        <div className="menu-item">
          <Link to="/form">Form</Link>
        </div>

        <div className="menu-item view-all">
          <span>View All Categories</span>
        </div>
      </div>

      <div className="sidebar-bottom">
        <div className="menu-item dark-toggle">
          <FiMoon />
          <span>Switch to Dark View</span>
          <label className="switch">
            <input
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked) {
                  document.body.classList.add("dark-mode");
                } else {
                  document.body.classList.remove("dark-mode");
                }
              }}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      <div className="category-title">
        <Link to="/support">Contact Support?</Link>
      </div>
    </div>
  );
};

export default Sidebar;
