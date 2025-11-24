import React from "react";
import "../css/pages/secondarysidebar.scss";

const Secondarysidebar = ({ active, setActive }) => {
  const menu = [
    { id: "send-email", label: "Send Verification Email" },
    { id: "verify-otp", label: "Verify OTP" },
    { id: "verify-token", label: "Verify OTP Token" },
  ];

  return (
    <div className="verification-sidebar">
      <h3>Verification APIs</h3>
      <ul>
        {menu.map((item) => (
          <li
            key={item.id}
            className={active === item.id ? "active" : ""}
            onClick={() => setActive(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Secondarysidebar;
