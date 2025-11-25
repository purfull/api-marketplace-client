import React from "react";
import "../css/pages/navbar.scss";
import Dropdown from "antd/es/dropdown/dropdown";
import { Menu } from "antd";
import { FaSearch, FaUserCircle, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Navbar = () => {

  const navigate = useNavigate();
  
      const handleuserprofile = async(e) =>{
        navigate("/userprofile")

    }

  const items = (
    <Menu
      items={[
        { label: "Profile", key: "1" ,onClick :handleuserprofile },
        { label: "Settings", key: "2" },
        { type: "divider" },
        { label: "Logout", key: "3" },
      ]}
    />
  );


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

        <Dropdown overlay={items} trigger={["click"]}>
          <div className="profile" style={{ cursor: "pointer" }}>
            <FaUserCircle className="profile-icon" />
            <span>Sanjay</span>
          </div>
        </Dropdown>
      </div>
    </nav>
  );
};

export default Navbar;
