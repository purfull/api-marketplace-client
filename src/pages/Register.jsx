import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/pages/register.scss";
import { setUserData } from "../store/slice/authSlice";
import { sendOtp, verifyOtp } from "../store/thunk/otpThunk";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Modal, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();

  const [isOtpPopupOpen, setIsOtpPopupOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const { loading, error } = useSelector((state) => state.otp);
  
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    // password: ""
  });
  useEffect(() => {
    setOtp(null)
  }, [isOtpPopupOpen])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleContinue = () => {
    setIsOtpPopupOpen(true);
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    if (otp.length !== 6) {
      alert("Please enter valid 6 digit OTP");
      return;
    }

    try {
      const result = await dispatch(
        verifyOtp({
          type: "customer-registration",
          identifier: formData.email,
          otp,
        })
      ).unwrap();
      if (result?.success) {
        navigate("/set-password");
      } else {
        alert(result?.message);
      }
    } catch (err) {
      // console.error("OTP Error:", err);
      alert(
        typeof err === "string" ? err : err.message || "OTP verification failed"
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(setUserData(formData));
    dispatch(
      sendOtp({
        type: "customer-registration",
        identifier: formData.email,
        phone: formData.phone,
      })
    );
    // if (loginUser.fulfilled.match(result)) navigate("/");
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
