import React from "react";
import "../css/pages/support.scss";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Support = () => {
  return (
    <div className="support-page">
      <Sidebar />

      <div className="right-section">
        <Navbar />

        <div className="support-container">
          <h2 className="support-title">Contact Support</h2>
          <p className="support-subtitle">
            Have an issue or question? Fill out the form below and our team will
            get back to you shortly.
          </p>

          <form className="support-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Enter the subject" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Describe your issue or query..."
              ></textarea>
            </div>

            <button type="submit" className="support-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Support;
