// import { ReactComponent as Intro } from 'assets/intro_bg.svg';
import { ReactComponent as Logo } from "assets/icon_bird.svg";

import CountUp from "react-countup";
import img_investmentapproach_img from "assets/investmentapproach_img.svg";

import React, { useRef, useState } from "react";
import "./investment.css";
import { motion, useAnimation } from "framer-motion";
import { useDebounce } from "components/utils/debounce";
function Investment(props) {
  const scrollDivRef = useRef();
  const investmentRef = useRef({
    snapPosition: 0,
    collabDiv: {
      visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
      hidden: { opacity: 0, x: -40 },
    },
    collabDescDiv: {
      visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
      hidden: { opacity: 0, x: 40 },
    },
    learnMoreLink: {
      visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
      hidden: { opacity: 0, y: 40 },
    },
  });
  const controls = useAnimation();

  const handleEndScroll = () => {
    if (scrollDivRef.current) {
      if (
        scrollDivRef.current.scrollTop == 0 &&
        investmentRef.current.snapPosition == 0
      ) {
        props.navigate(-1);
      }
      if (
        scrollDivRef.current.scrollTop > 0 &&
        investmentRef.current.snapPosition == 1
      ) {
        props.navigate(1);
      }

      if (
        scrollDivRef.current.scrollTop > 0 &&
        investmentRef.current.snapPosition == 0
      ) {
        investmentRef.current.snapPosition = 1;
      }

      if (
        scrollDivRef.current.scrollTop == 0 &&
        investmentRef.current.snapPosition == 1
      ) {
        investmentRef.current.snapPosition = 0;
      }
    }
  };
  const debouncedScrollEvent = useDebounce(handleEndScroll, 1000); //

  const handleScrollEvent = (e) => {
    debouncedScrollEvent();
  };
  const handleScrollEnd = () => {
    if (scrollDivRef.current.scrollTop > 200) {
      controls.start("visible");
    }

    if (scrollDivRef.current.scrollTop < 10) {
      controls.start("hidden");
    }
  };
  return (
    <div
      className="investment-wrapper"
      ref={scrollDivRef}
      onTouchEnd={handleScrollEvent}
      onWheel={handleScrollEvent}
      onScroll={handleScrollEnd}
    >
      <div className="investment-container">
        <motion.div
          transition={{ ease: "easeOut", duration: 0.7 }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: "all" }}
          className="investment-image-div "
        >
          <div
            className="investment-bg flex justify-center items-center"
            style={{ backgroundImage: `url(${img_investmentapproach_img})` }}
          >
            <p className="bg-text">
              Investment <br></br>Approach
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={controls}
        variants={investmentRef.current.collabDiv}
        initial="hidden"
        className="investment-title paragraph-gap"
      >
        OUR three core investment <span className="bg-cyan">strategies</span>
      </motion.div>
      <motion.div
        animate={controls}
        variants={investmentRef.current.collabDescDiv}
        initial="hidden"
        className="investment-desc paragraph-gap"
      >
        <p className="paragraph-gap">
          We combine a high level of expertise and experience across all
          functions and leverage well-defined and rigorous investment approaches
          built on key pillars.
        </p>
        <p className="paragraph-gap">
          Across our three core investment strategies we have one singular
          focus: delivering optimal and accessible risk-adjusted returns for our
          investors.
        </p>
        <motion.div
          animate={controls}
          variants={investmentRef.current.learnMoreLink}
          initial="hidden"
        >
          <a href="/investment" className="investment-learn-more">
            {" "}
            Learn more
          </a>
        </motion.div>
        <div className="snap-point-end"></div>
      </motion.div>
    </div>
  );
}

export default Investment;
