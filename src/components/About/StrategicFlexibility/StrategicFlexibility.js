import React from "react";
import "./StrategicFlexibility.css";

const StrategicFlexibility = () => {
  return (
    <div className="stragic-section-bg">
      <div className="container text-center my-5">
        <h2 className="mb-3 fs-30 ">STRATEGIC FLEXIBILITY</h2>
        <h1
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="display-4 mb-5 strategic-heading"
        >
          DOVEHOUSE CAPITAL:<br></br> DYNAMIC AI-DRIVEN INVESTING
        </h1>
        <div className="row justify-content-center mb-5">
          <div className="col-lg-6">
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="div-box-container"
            >
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-offset="0"
                className="box stragicFlex-box"
              >
                <p>Driven by AI</p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="1000"
                className="box stragicFlex-box"
              >
                <p>Machine Learning</p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-duration="1000"
                className="box stragicFlex-box"
              >
                <p>Heuristics</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <p
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="lead"
            >
              Driven by AI, machine learning and Heuristics, but always guided
              by the human touch. We strive for transparency for our investors.
            </p>
            <p
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="1000"
              className="lead"
            >
              As a foundational principle for the establishment of Dovehouse
              Capital, which is a three strategy platform, we seek to generate
              attractive, uncorrelated benchmark beating returns through
              dynamically allocating capital on a timely and flexible basis
              across specific asset classes, strategies, geographies and market
              sectors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategicFlexibility;
