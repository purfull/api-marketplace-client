import React from "react";
import "../css/pages/home.scss";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Home = () => {

  const cardsitems = [
    {
      heading: "Verification ",
      subheading: "Cybersecurity APIs offer tools for developers to bolster the security of their applications and systems, ",
      tag: "verify"
    },
    {
      heading: "Location",
      subheading: "Cybersecurity APIs offer tools for developers to bolster the security of their applications and systems,  that those the package to the all ",
      tag: "verify"
    },
    {
      heading: "Form ",
      subheading: "verifvation chhose to to nothing have the things betwween  that those the package to the all ",
      tag: "verify"
    }
  ]


  return (
    <div className="home-wrapper">
      <Navbar />

      <div className="bottom-layout">
        <Sidebar />

        {/* //topic heading  tool bar  */}
        <div className="home-container">
          <div className="">
            <h1>Top Categories</h1>
          </div>

          <div className="card-main">

            <div className="cards">
              {cardsitems.map((item, index) => (
                <div className="cards" key={index}>
                  <h2>{item.heading}</h2>
                  <p>{item.subheading}</p>
                  <a>{item.tag}</a>
                </div>
              ))}

            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Home;
