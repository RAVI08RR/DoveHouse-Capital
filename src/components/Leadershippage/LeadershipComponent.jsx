import React from "react";
import imgprovenleadership from "../../assets/images/Proven-leadership.png";
import { motion } from "framer-motion"; // Import motion from framer-motion

const LeadershipComponent = () => {
  return (
    <>
      <div className="container p-0">
        <motion.h2
          style={{ paddingBottom: "20px" }}
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          LEADERSHIP
        </motion.h2>
      </div>
      <div className="leadership-component bg-light">
        <div className="container">
          <div className="row proven-leadership">
            <div className="col-md-6">
              <img
                data-aos="zoom-in-right"
                data-aos-offset="300"
                data-aos-duration="2000"
                data-aos-easing="ease-in-sine"
                src={imgprovenleadership}
                alt="Leadership Team"
                className="img-fluid w-100 h-100"
              />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div
                className="discription-proven-leadership"
                data-aos="zoom-in-left"
                data-aos-offset="300"
                data-aos-duration="2000"
                data-aos-easing="ease-in-sine"
              >
                <h2 className="mb-4 dfs-70 dv-md-fs-25">PROVEN LEADERSHIP</h2>
                <p>
                  Our leadership team brings unique expertise and insightful
                  track records from globally recognized companies across
                  multiple industries.
                </p>
                <p>
                  They have worked together for over three decades, including
                  the formative years to build DoveHouse Capital into an
                  industry-leading investment firm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid mt-5 bg-white py-5"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-duration="1000"
      >
        <div className="container">
          <h2
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-delay="200"
            data-aos-duration="2000"
            data-aos-easing="ease-in-sine"
            className="mb-4 dv-fs-55 dss-fw-400 dv-md-fs-25"
          >
            BUILDING EXCELLENCE:
            <br />
            <span className="dv-text-primary mb-4">DOVEHOUSE CAPITAL </span>
            TEAM
          </h2>

          <div className="flex justify-end">
            <div className="card-top-dss">
              {" "}
              <p
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-delay="400"
                data-aos-duration="2000"
                data-aos-easing="ease-in-sine"
                className="mb-5 ml-96"
              >
                The Team is Deeply Experienced in Managing, Mentoring And
                Retaining Exceptional Talent, Designing And Implementing
                Institutional Scale Technology And Analytics Platforms, And
                Building Strong Relationships With Investment Partners.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div
                className="card team-leadership"
                data-aos="zoom-in-right"
                data-aos-delay="600"
                data-aos-duration="500"
              >
                <div className="card-overlay">
                  <h4>CLAUS ROSENBERG GOTTHARD</h4>
                  <p>Danish, 1967</p>
                  <p className="dv-text-primary">Co-Founder & CEO</p>
                  <p>
                    The team is deeply experienced in attracting, mentoring, and
                    retaining exceptional talent, designing and implementing
                    institutional-scale technology and analytics platforms, and
                    building strong relationships with investment partners.
                  </p>
                  <img src="/images/instagram-icon.svg" alt="Instagram" />
                </div>
                <img
                  src="/images/tl-1.png"
                  alt="Claus Rosenberg Gotthard"
                  className="img-fluid mb-3"
                />
                <h4 className="dss-fw-400 dv-fs-30 dv-md-fs-25">
                  CLAUS ROSENBERG GOTTHARD
                  <img
                    src="/images/arrow-team.svg"
                    className="team-arrow"
                    style={{ float: "inline-end" }}
                  />
                </h4>
                <p className="dv-text-primary dss-fw-400">Founder & CEO</p>

                <img
                  src="/images/insta-primary.svg"
                  className="social-team-icon w-100 h-100"
                />
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div
                className="card team-leadership"
                data-aos="zoom-in-left"
                data-aos-delay="800"
                data-aos-duration="500"
              >
                <div className="card-overlay">
                  <h4>MARTIN RASMUSSEN</h4>
                  <p className="dv-text-primary">Co-Founder & COO</p>
                  <p>
                    The team is deeply experienced in attracting, mentoring, and
                    retaining exceptional talent, designing and implementing
                    institutional-scale technology and analytics platforms, and
                    building strong relationships with investment partners.
                  </p>
                  <img src="/images/instagram-icon.svg" alt="Instagram" />
                </div>
                <img
                  src="/images/tl-2.png"
                  alt="Martin Rasmussen"
                  className="img-fluid mb-3"
                />
                <h4 className="dss-fw-400 dv-fs-30 dv-md-fs-25">
                  MARTIN RASMUSSEN
                  <img
                    src="/images/arrow-team.svg"
                    className="team-arrow"
                    style={{ float: "inline-end" }}
                  />
                </h4>
                <p className="dv-text-primary dss-fw-400">Co-Founder & COO</p>

                <img
                  src="/images/insta-primary.svg"
                  className="social-team-icon w-100 h-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadershipComponent;
