import React from "react";
import "../css/pages/home.scss";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div className="home-wrapper">
      <Navbar />

      <div className="bottom-layout">
        <Sidebar />
        <div className="home-container">home</div>
      </div>
    </div>
  );
};

export default Home;
