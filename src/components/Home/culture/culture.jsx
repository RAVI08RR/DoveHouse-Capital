import React, { useRef, useState } from "react";
import { motion, useAnimate, useAnimation } from "framer-motion";
import "./culture.css";
import { useDebounce } from "components/utils/debounce";
import Footer from "components/footer/Footer";
import img_culture_img from "assets/culture_img.svg";
import useWindowDimensions from "components/utils/useWindowDimensions";

const Culture = (props) => {
  const scrollDivRef = useRef();
  const { height, width } = useWindowDimensions();
  const isMobileView = width < 767;

  const cultureRef = useRef({
    snapPosition: 0,
    collabDiv: {
      visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.25 } },
      hidden: { opacity: 0, x: -40 },
    },
    collabDescDiv: {
      visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.25 } },
      hidden: { opacity: 0, x: 40 },
    },
    learnMoreLink: {
      visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.25 } },
      hidden: { opacity: 0, y: 40 },
    },
  });
  const controls = useAnimation();

  const handleEndScroll = () => {
    if (scrollDivRef.current) {
      if (
        scrollDivRef.current.scrollTop == 0 &&
        cultureRef.current.snapPosition == 0
      ) {
        props.navigate(-1);
      }

      if (
        scrollDivRef.current.scrollTop > 0 &&
        cultureRef.current.snapPosition == 0
      ) {
        cultureRef.current.snapPosition = 1;
      }

      if (
        scrollDivRef.current.scrollTop == 0 &&
        cultureRef.current.snapPosition == 1
      ) {
        cultureRef.current.snapPosition = 0;
      }
    }
  };
  const handleScrollEvent = (e) => {
    if (isMobileView) return;
    if (scrollDivRef.current.scrollTop > 0) {
      controls.start("visible");
    }

    if (scrollDivRef.current.scrollTop == 0) {
      controls.start("hidden");
    }

    debouncedScrollEvent();
  };
  const debouncedScrollEvent = useDebounce(handleEndScroll, 1000); //
  return (
    <div
      className="culture-container-snap-wrapper"
      ref={scrollDivRef}
      onTouchEnd={handleScrollEvent}
      onWheel={handleScrollEvent}
    >
      <div className="culture-container-wrapper">
        <div className="culture-container">
          <motion.div
            transition={{ ease: "easeOut", duration: 0.7 }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: "all" }}
            className="culture-image-div"
          >
            <div
              className="culture-bg flex justify-center items-center"
              style={{ backgroundImage: `url(${img_culture_img})` }}
            >
              <p className="bg-text">Culture</p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="culture-container-content">
        <motion.div
          animate={controls}
          variants={cultureRef.current.collabDiv}
          initial={isMobileView ? "visible" : "hidden"}
          // transition={{ ease: "easeOut", duration: .7 }}
          // initial={{ opacity: 0, x: -40 }}
          // whileInView={{ opacity: 1, x: 0 }}
          className="culture-title"
        >
          COLLAB <br></br>
          <span className="bg-cyan"> LEARNING</span>
        </motion.div>

        <div className="culture-desc md:col-span-2">
          <motion.div
            animate={controls}
            variants={cultureRef.current.collabDescDiv}
            initial={isMobileView ? "visible" : "hidden"}
          >
            <p className="paragraph-gap">
              At Dovehouse Capital, fostering the personal and professional
              development of our team is paramount to our success. We cultivate
              a culture of collaboration, continuous learning, and integrity.
            </p>
            <p className="paragraph-gap">
              Our results-driven environment encourages turning ideas into
              tangible achievements, fostering a collegial atmosphere where
              success is celebrated.
            </p>
          </motion.div>
          <motion.div
            animate={controls}
            variants={cultureRef.current.learnMoreLink}
            initial={isMobileView ? "visible" : "hidden"}
          >
            <a href="/about-us" className="culture-learn-more">
              {" "}
              Learn more
            </a>
          </motion.div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Culture;
