import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Investmenturlbg from "../../assets/images/leadership-bg.jpg";
import "./InvestmentPage.css";
// import { ReactComponent as Trandicon } from "../../assets/images/Trend.svg";
import Trandicon from "../../assets/images/Trend.svg";

import Trandicon2 from "../../assets/images/Portfolio.svg";
import Trandicon3 from "../../assets/images/Risk.svg";
import Trandicon4 from "../../assets/images/Transparency.svg";
const InvestmentLeadership = () => {
  return (
    <div className="investment-section-main">
      <div className="container p-0">
        <motion.h2
          style={{ paddingBottom: "20px" }}
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          INVESTMENT
        </motion.h2>
      </div>
      <div className="container-fuild" style={{ backgroundColor: "#eff9fd" }}>
        <section
          className=" bg-light about-us investment-Leadership"
          style={{ paddingBottom: "0px" }}
        >
          <div className="container">
            <motion.h1
              className="main-title"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Expert Strategies, <br />
              Optimal
              <span className="highlight about-us-m">Returns</span>
            </motion.h1>
            <motion.p
              className="subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              We combine a high level of expertise and experience across all
              functions and leverage well-defined and rigorous investment
              approaches built on key pillars. Across our three core investment
              strategies we have one singular focus: delivering optimal and
              accessible risk-adjusted returns for our investors.
            </motion.p>
          </div>
        </section>

        <div className="container-fuild main-container-section-in p-0">
          <div
            className="main-leadership"
            data-aos="zoom-in"
            data-aos-duration="1000"
            // data-aos-easing="ease-in-sine"
            style={{
              backgroundImage: `url(${Investmenturlbg})`,
              height: "500px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="card-counter mt-5">
              <div
                className="card leadership-card"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-offset="300"
              >
                <h2 className="leadership-card-heading text-white">6000</h2>
                <p className="leadership-card-des">Expertise and Experience</p>
              </div>

              <div
                className="card leadership-card"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-offset="0"
              >
                <h2 className="leadership-card-heading text-white">380</h2>
                <p className="leadership-card-des">
                  Rigorous Investment Approaches
                </p>
              </div>

              <div
                className="card leadership-card"
                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-offset="0"
              >
                <h2 className="leadership-card-heading text-white">235</h2>
                <p className="leadership-card-des">
                  Optimal Risk-Adjusted Returns
                </p>
              </div>
            </div>
          </div>

          {/* <img
          src={Investmenturlbg}
          alt="Team meeting"
          className="img-fluid"
          data-aos="zoom-in"
          data-aos-duration="3000"
          data-aos-easing="ease-in-sine"
        /> */}
        </div>

        <section className="container principal-sections">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            OUR CORE{" "}
            <span className="text" style={{ color: "#33B9EA" }}>
              PRINCIPLES
            </span>
          </motion.h2>
          {/* <Trandicon /> */}
          <div className="row  ">
            <PrincipleCard
              icon={Trandicon}
              title="TREND FOLLOWING ON SP500"
              delay={1.4}
            />
            <PrincipleCard
              icon={Trandicon2}
              title="PORTFOLIO CONSTRUCTION"
              delay={1.6}
            />
            <PrincipleCard
              icon={Trandicon3}
              title="RISK MITIGATION"
              isPrimary={false}
              delay={1.8}
            />
            <PrincipleCard icon={Trandicon4} title="TRANSPARENCY" delay={2} />
          </div>
        </section>
      </div>
    </div>
  );
};

const PrincipleCard = ({ icon, title, isPrimary = false, delay }) => (
  <div className="col-md-3 mb-4 card-div-t">
    <motion.div
      className={`card principal-card h-100 border-0 shadow ${
        isPrimary ? "bg-primary text-white" : ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2.3, delay: 0.8 }}
    >
      <div className="card-body">
        <img src={icon} alt={title} className="mb-3" />
        <h5 className={`card-title ${isPrimary ? "" : "text-dark"}`}>
          {title}
        </h5>
      </div>
    </motion.div>
  </div>
);

export default InvestmentLeadership;
