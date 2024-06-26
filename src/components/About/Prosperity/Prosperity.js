import React from "react";
import { motion } from "framer-motion";
import "./Prosperity.css";

const Prosperity = () => {
  return (
    <motion.section
      className="prosperity"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="prosperity-section">
            <div className="text-bg-content">
              <div className="content-wrapper">
                <span className="top-right-text">PROSPERITY</span>
                <motion.h1
                  className="main-title-prospertiy"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  DOVEHOUSE CAPITAL
                  <br />
                  PARTNERING FOR
                  <br />
                  <span className="highlight">PROSPERITY</span>
                </motion.h1>
                <motion.p
                  className="description"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Dovehouse Capital was founded with the objective of forging
                  enduring, prosperous partnerships with our investors. Our
                  focus lies in demystifying the hedge fund realm and
                  democratizing access to high returns.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Prosperity;
