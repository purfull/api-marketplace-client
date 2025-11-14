import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/pages/register.scss";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Modal, Input, Button } from "antd";

const Register = () => {
  const [isOtpPopupOpen, setIsOtpPopupOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleContinue = () => {
    setIsOtpPopupOpen(true);
  };

  const handleVerifyOtp = () => {
    if (otp.length !== 6) {
      alert("Please enter valid 6 digit OTP");
      return;
    }

    console.log("OTP Submitted: ", otp);

    setIsOtpPopupOpen(false);

    navigate("/set-password");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register submitted:", formData);
    // alert("Account created successfully!");
  };

  return (
    <div className="register-wrapper">
      <div className="register-card">
        <h2 className="register-title">Create your account</h2>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="continue-button"
            onClick={handleContinue}
          >
            Continue
          </button>
        </form>

        {/* OTP POPUP */}
        <Modal
          title="OTP Verification"
          open={isOtpPopupOpen}
          onCancel={() => setIsOtpPopupOpen(false)}
          footer={false}
          centered // <<< THIS CENTERS THE POPUP ON SCREEN
        >
          <div style={{ textAlign: "center" }}>
            <p>Enter the 6-digit OTP sent to your email</p>
            <Input
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              style={{
                textAlign: "center",
                fontSize: "18px",
                letterSpacing: "8px",
              }}
            />
            <Button
              block
              type="primary"
              style={{ marginTop: 20 }}
              onClick={handleVerifyOtp}
            >
              Verify OTP
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Register;
