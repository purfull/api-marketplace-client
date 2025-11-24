import React from "react";
import "../css/pages/Forgetpassword.scss";
import { Link } from "react-router-dom";

const Forgetpassword = () => {
  return (
    <div className="forget-container">
      <div className="password-form">
        <h2 className="pass-header">Forget Password</h2>
        <div className="label-container">
          <input className="login-labels" placeholder="Enter Your Email" />
        </div>

        <p className="forget-info">
          We’ll send a verification code to the corresponding email.
        </p>
        <button className="next">Next</button>
        <Link to="/login" className="back">
          Back
        </Link>
      </div>
    </div>
  );
};

export default Forgetpassword;
