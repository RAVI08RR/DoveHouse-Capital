import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./InvestmentMastery.css";
import Investmentimgurl from "../../../assets/ir-1.png";
import { useInView } from "react-intersection-observer";

const InvestmentMastery = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.section
      className="investment-mastery"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      <div className="container-fluid">
        <div className="row" style={{ alignItems: "center" }}>
          <div className="col-md-5 image-container-section">
            <div className="image-wrapper">
              <img
                src={Investmentimgurl}
                alt="Investment Discussion"
                className="img-fluid"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
              />
              <div className="image-overlay">
                <h2
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-sine"
                >
                  INVESTMENT
                  <br />
                  MASTERY
                </h2>
              </div>
            </div>
          </div>
          <div className="col-md-7 text-container">
            <div className="text-wrapper">
              <p
                className="invest-mastery-description"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
              >
                For over two decades, Mr Rasmussen worked in trading and
                investing the capital and enhancing the returns of several large
                reputable businesses and balance sheets within the EU, having
                grown and managed trading, treasury, venture and investment
                businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default InvestmentMastery;
