import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/pages/newPassword.scss";

const NewPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
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

    setError("");

    console.log("Account created successfully!");

    // Redirect to Home page
    navigate("/home");
  };

  return (
    <div className="password-page">
      <div className="password-container">
        <form className="password-form" onSubmit={handleSubmit}>
          <h2>Set New Password</h2>

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

          {error && <p className="error-text">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
