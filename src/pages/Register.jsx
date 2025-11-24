import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/pages/register.scss";
import { setUserData } from "../store/slice/authSlice";
import { sendOtp, verifyOtp } from "../store/thunk/otpThunk";
import { Modal, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();

  const [isOtpPopupOpen, setIsOtpPopupOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.otp);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    setOtp(null);
  }, [isOtpPopupOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    let errors = { ...formErrors };

    if (name === "name") {
      if (!value) errors.name = "Name is required";
      else if (value.length < 3)
        errors.name = "Name must be at least 3 characters";
      else delete errors.name;
    }

    if (name === "email") {
      if (!value) errors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(value))
        errors.email = "Enter a valid email";
      else delete errors.email;
    }

    if (name === "phone") {
      if (!value) errors.phone = "Phone number is required";
      else if (!/^[0-9]{10}$/.test(value))
        errors.phone = "Phone must be 10 digits";
      else delete errors.phone;
    }

    setFormErrors(errors);
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
      if (result?.success) navigate("/set-password");
      else alert(result?.message);
    } catch (err) {
      alert(
        typeof err === "string" ? err : err.message || "OTP verification failed"
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(formErrors).length > 0) return; // prevent continue if form invalid

    await dispatch(setUserData(formData));
    dispatch(
      sendOtp({
        type: "customer-registration",
        identifier: formData.email,
        phone: formData.phone,
      })
    );
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
            />
            {formErrors.name && (
              <span className="input-error">{formErrors.name}</span>
            )}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <span className="input-error">{formErrors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
            {formErrors.phone && (
              <span className="input-error">{formErrors.phone}</span>
            )}
          </div>

          <button
            type="submit"
            className="continue-button"
            disabled={Object.keys(formErrors).length > 0}
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
          centered
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
