import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/pages/newPassword.scss";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/thunk/authThunk";

const NewPassword = () => {
  const dispatch = useDispatch();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
    const { user } = useSelector((state) => state.auth);
    const { otpToken } = useSelector((state) => state.otp);

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!newPassword || !confirmPassword) {
    setError("Please fill all fields");
    return;
  }

  if (newPassword.length < 6) {
    setError("Password must be at least 6 characters");
    return;
  }

  if (newPassword !== confirmPassword) {
    setError("Passwords do not match");
    return;
  }

  try {
    const result = await dispatch(
      registerUser({
        ...user,
        otpToken,
        password: newPassword
      })
    ).unwrap();

    if (result?.success) {
      alert(result.message || "Account created successfully");
      navigate("/home");
      return;
    }

    alert(result?.message || "Failed to create account");

  } catch (err) {
    alert(typeof err === "string" ? err : err.message || "Failed to create account");
  }

};

  return (
    <div className="password-page">
      <div className="password-container">
        <form className="password-form" onSubmit={handleSubmit}>
          <h2>Set New Password</h2>

          {error && <p className="error-text">{error}</p>}
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit">Save Password</button>

        </form>
      </div>
    </div>
  );
};

export default NewPassword;
