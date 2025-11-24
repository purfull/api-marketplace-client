import React from "react";
import "../css/pages/sidebar.scss";
import { FiCompass, FiFolder, FiLayers, FiGrid, FiMoon } from "react-icons/fi";
import { Link } from "react-router-dom";
const Sidebar = () => {
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
        {/* <div className="menu-item">Verification</div> */}
        <div className="menu-item">
          <Link to="/verification">Verification</Link>
        </div>
        <div className="menu-item">Location</div>
        <div className="menu-item">Form</div>

        <div className="menu-item view-all">
          <span>View All Categories</span>
        </div>
      </div>

      <div className="sidebar-bottom">
        <div className="menu-item dark-toggle">
          <FiMoon />
          <span>Switch to Dark View</span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
