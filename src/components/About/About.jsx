import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import "./AboutUs.css";
import Aboutimgurl from "../../assets/about-1.png";
import InvestmentMastery from "./inventorymaster/InvestmentMastery";
import Prosperity from "./Prosperity/Prosperity";
import StrategicFlexibility from "./StrategicFlexibility/StrategicFlexibility";

const About = () => {
  return (
    <>
      <section className="about-us">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ABOUT US
          </motion.h2>
          <motion.h1
            className="main-title"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            DOVEHOUSE CAPITAL IS A<br />
            GLOBAL INVESTMENT
            <br />
            <span className="highlight about-us-m">MANAGEMENT</span>
          </motion.h1>
          <p className="subtitle">
            Firm With Offices in Abu Dhabi, Milan & Copenhagen. We Were
            Established
            <br />
            in 2024, By Martin Rasmussen & Claus Rosenberg Gotthard.
          </p>
        </div>
      </section>

      <div className="image-container">
        <img
          src={Aboutimgurl}
          alt="Team meeting"
          className="img-fluid"
          data-aos="zoom-in"
          data-aos-duration="3000"
          data-aos-easing="ease-in-sine"
        />
      </div>

      <InvestmentMastery />
      <Prosperity />
      <StrategicFlexibility />
    </>
  );
};

export default About;
