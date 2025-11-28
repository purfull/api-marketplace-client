import React from "react";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";
import "../css/pages/credits.scss";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Credits = () => {
  const transactions = [
    {
      date: "Nov 3, 2025",
      description: "API Request - Email Verification",
      type: "deduct",
      credits: 50,
      balance: 3550,
    },
    {
      date: "Nov 2, 2025",
      description: "Credits Purchase",
      type: "add",
      credits: 1000,
      balance: 3600,
    },
    {
      date: "Oct 30, 2025",
      description: "Referral Bonus",
      type: "add",
      credits: 200,
      balance: 2600,
    },
    {
      date: "Oct 29, 2025",
      description: "API Request - SMS Gateway",
      type: "deduct",
      credits: 100,
      balance: 2400,
    },
  ];

  return (
    <section className="credits-section">
      <Navbar />

      <div className="layout">
        <Sidebar />

        <div className="container">
          <div className="header">
            <h2>
              Credits <span>History</span>
            </h2>
            <p>
              Monitor your credit usage, purchases, and rewards in real time.
              Transparency made simple.
            </p>
          </div>

          <div className="summary">
            <div className="box">
              <h3>Total Credits</h3>
              <p className="primary">10,000</p>
            </div>
            <div className="box">
              <h3>Used Credits</h3>
              <p className="red">6,450</p>
            </div>
            <div className="box">
              <h3>Remaining</h3>
              <p className="green">3,550</p>
            </div>
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th className="center">Type</th>
                  <th className="center">Credits</th>
                  <th className="center">Balance</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((t, i) => (
                  <tr key={i}>
                    <td>{t.date}</td>
                    <td>{t.description}</td>
                    <td className="center">
                      {t.type === "add" ? (
                        <span className="add">
                          <ArrowUpRight /> Add
                        </span>
                      ) : (
                        <span className="deduct">
                          <ArrowDownLeft /> Deduct
                        </span>
                      )}
                    </td>
                    <td
                      className={`center ${t.type === "add" ? "green" : "red"}`}
                    >
                      {t.type === "add" ? "+" : "-"}
                      {t.credits}
                    </td>
                    <td className="center balance">{t.balance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA */}
          <div className="cta">
            <h3>Running low on credits?</h3>
            <button className="buy-btn">
              Buy More Credits <ArrowUpRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credits;
