import React, { useState } from "react";
import { DOCS_CONTENT } from "../pages/Apidocs/DocsData.js";
import "../css/pages/verification.scss";

const FormDocs = () => {
  const [active, setActive] = useState("submit");

  const data = DOCS_CONTENT?.form?.[active];

  return (
    <div className="verification-docs">
      <div className="sidebar">
        <h2>Form APIs</h2>
        <nav>
          {Object.keys(DOCS_CONTENT.form).map((key) => (
            <button
              key={key}
              className={`endpoint-btn ${active === key ? "active" : ""}`}
              onClick={() => setActive(key)}
            >
              {DOCS_CONTENT.form[key].title}
            </button>
          ))}
        </nav>
      </div>

      <div className="content">
        {data && (
          <div className="endpoint-section">
            <h3>{data.title}</h3>
            <p className="description">{data.description}</p>

            <pre>{data.code}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormDocs;
