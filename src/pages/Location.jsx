import React, { useState } from "react";
import { DOCS_CONTENT } from "../pages/Apidocs/DocsData.js";
import "../css/pages/verification.scss";

const Location = () => {
  const [active, setActive] = useState("by-pincode");

  const current = DOCS_CONTENT.location[active];

  return (
    <div className="verification-docs">
      {/* SIDEBAR */}
      <div className="sidebar">
        <h2>Location APIs</h2>
        <nav>
          <button
            className={`endpoint-btn ${
              active === "by-pincode" ? "active" : ""
            }`}
            onClick={() => setActive("by-pincode")}
          >
            Get Location by Pincode
          </button>

          <button
            className={`endpoint-btn ${active === "by-city" ? "active" : ""}`}
            onClick={() => setActive("by-city")}
          >
            Get Location by City
          </button>

          <button
            className={`endpoint-btn ${active === "states" ? "active" : ""}`}
            onClick={() => setActive("states")}
          >
            Get All States
          </button>
        </nav>
      </div>

      {/* MAIN CONTENT */}
      <div className="content">
        {current && (
          <div className="endpoint-section">
            <h3>{current.title}</h3>
            <p className="description">{current.description}</p>

            {/* CODE SECTION */}
            {current.code && <pre>{current.code}</pre>}

            {/* DETAILS (if present) */}
            {current.details && (
              <div className="details-block">
                <h4>Usage</h4>
                <p>{current.details.usage}</p>

                {current.details.params &&
                  current.details.params.length > 0 && (
                    <>
                      <h4>Parameters</h4>
                      <ul className="params-list">
                        {current.details.params.map((p) => (
                          <li key={p.name}>
                            <strong>{p.name}</strong>: {p.description}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                {current.details.response && (
                  <>
                    <h4>Response</h4>
                    <pre>{current.details.response}</pre>
                  </>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Location;
