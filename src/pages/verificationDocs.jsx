import React, { useState } from "react";
import "../css/pages/verificationDocs.scss";

const VerificationDocs = () => {
  const [active, setActive] = useState("sendEmail");

  return (
    <div className="verification-docs">
      {/* SIDEBAR */}
      <div className="sidebar">
        <h2>Verification</h2>
        <nav>
          <button
            className={`endpoint-btn ${active === "sendEmail" ? "active" : ""}`}
            onClick={() => setActive("sendEmail")}
          >
            Send Verification Email
          </button>
          <button
            className={`endpoint-btn ${active === "verifyOtp" ? "active" : ""}`}
            onClick={() => setActive("verifyOtp")}
          >
            Verify OTP
          </button>
          <button
            className={`endpoint-btn ${
              active === "verifyOtpToken" ? "active" : ""
            }`}
            onClick={() => setActive("verifyOtpToken")}
          >
            Verify OTP Token
          </button>
        </nav>
      </div>

      {/* MAIN CONTENT */}
      <div className="content">
        {active === "sendEmail" && (
          <div className="endpoint-section">
            <h3>Send Verification Email</h3>
            <p className="description">
              Send verification mail to a user’s registered email.
            </p>
            <pre>
              {`curl -X POST https://api.example.com/verify/email/send-otp \\
  -H "Content-Type: application/json" \\
  -d '{"identifier":"user@example.com"}'`}
            </pre>
          </div>
        )}

        {active === "verifyOtp" && (
          <div className="endpoint-section">
            <h3>Verify OTP</h3>
            <p className="description">
              Verify OTP sent to the user's email or mobile.
            </p>
            <pre>
              {`curl -X POST https://api.example.com/verify/email/verify-otp \\
  -H "Content-Type: application/json" \\
  -d '{"identifier":"user@example.com", "otp":"123456"}'`}
            </pre>
          </div>
        )}

        {active === "verifyOtpToken" && (
          <div className="endpoint-section">
            <h3>Verify OTP Token</h3>
            <p className="description">
              Verify OTP token received after OTP validation.
            </p>
            <pre>
              {`curl -X POST https://api.example.com/verify/email/verify-token \\
  -H "Content-Type: application/json" \\
  -d '{"identifier":"user@example.com", "token": "abcxyz"}'`}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerificationDocs;
