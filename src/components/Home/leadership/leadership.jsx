import React, { useState } from "react";
import { motion } from "framer-motion";
import img_leadership_bg from "assets/leadership_bg.svg";
import "./leadership.css";
import useWindowDimensions from "components/utils/useWindowDimensions";
const LeaderShip = () => {
  const { height, width } = useWindowDimensions();
  const isMobileView = width < 767;

  return (
    <>
      <div className="leadership-container">
        <div className="leadership-image-div">
          <motion.div
            transition={{ ease: "easeOut", duration: 0.7 }}
            initial={{ opacity: 0, scale: isMobileView ? 0 : 5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="leadership-bg flex items-center sm:bg-cover lg:bg-contain"
            style={{
              background: `url(${img_leadership_bg}) lightgray 50% / cover no-repeat`,
            }}
          >
            <div className="md:ml-20">
              <motion.div
                transition={{ ease: "easeOut", duration: 0.7, delay: 1 }}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <p className="leadership-heading">LEADERSHIP</p>
                <p className="leadership-title paragraph-gap">
                  leading <br></br>{" "}
                  <span className="text-white">investment</span> firm.
                </p>
              </motion.div>
              <motion.p
                transition={{ ease: "easeOut", duration: 0.7, delay: 2 }}
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="leadership-desc paragraph-gap"
              >
                Our leadership team brings unique expertise and successful track
                records from globally recognised financial institutions
                companies. They have worked together for over three decades,
                providing the foundation from which to build Dovehouse Capital
                into an industry-leading investment firm.
              </motion.p>
              <motion.div
                transition={{ ease: "easeOut", duration: 0.7, delay: 2 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <a href="/leadership" className="investment-learn-more mb-20">
                  {" "}
                  Learn more
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LeaderShip;
