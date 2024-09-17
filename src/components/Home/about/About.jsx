// import { ReactComponent as Intro } from 'assets/intro_bg.svg';
import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Logo } from "assets/icon_bird.svg";
import { motion } from "framer-motion";

import img_about_bg from "assets/about_bg.svg";
import "./about.css";
import Counter from "components/counter/Counter";
function About() {
  const [counter1Visible, setCounter1Visible] = useState(false);
  const [counter2Visible, setCounter2Visible] = useState(false);
  const [counter3Visible, setCounter3Visible] = useState(false);
  return (
    <motion.div
      transition={{ ease: "easeIn", duration: 0.7 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      //  viewport={{ once: true }}
      className="about-container  "
    >
      <motion.div
        transition={{ ease: [0.4, 0, 0.2, 1], duration: 1 }}
        onAnimationComplete={() =>
          setTimeout(() => {
            setCounter1Visible(true);
          }, 1000)
        }
        initial={{ opacity: 0, x: 100, y: 100 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        className="about-bg"
        style={{ backgroundImage: `url(${img_about_bg})` }}
      ></motion.div>
      <div className="about-content-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-3 about-content">
          <div className="col-span-2">
            <Logo></Logo>
          </div>
          <div className="col-span-2">
            <motion.div
              transition={{ ease: "easeIn", duration: 1 }}
              onAnimationComplete={() =>
                setTimeout(() => {
                  setCounter1Visible(true);
                }, 1000)
              }
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              //  viewport={{ once: true }}
            >
              <p className="about-title paragraph-gap">About</p>
              <p className="about-subtitle  paragraph-gap">
                Dovehouse Capital, a premier global investment management firm,
                operates from Abu Dhabi, Milan & Copenhagen. Founded in 2024 by
                Martin Rasmussen & Claus Rosenberg Gotthard, leveraging over two
                decades of experience in capital trading & investment.
              </p>
              <p className="about-subtitle  paragraph-gap">
                We aim to democratize hedge fund access, offering transparent,
                AI-driven strategies for benchmark-beating returns.
              </p>
            </motion.div>
            <motion.div
              transition={{ ease: "easeIn", duration: 1 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <a href="/about-us" className="about-learn-more mb-20">
                {" "}
                Learn more
              </a>
            </motion.div>
          </div>

          <div className="col-span-2 md:col-span-1 md:col-start-2 default-counter-size">
            {counter1Visible && (
              <Counter
                label="Established"
                duration={0.5}
                onAnimationComplete={() => setCounter2Visible(true)}
                countupProps={{ end: 2024 }}
              ></Counter>
            )}
          </div>
          <div className="col-span-2 md:col-span-1 default-counter-size">
            {counter2Visible && (
              <Counter
                className="md:border-l border-dark"
                duration={0.5}
                onAnimationComplete={() => setCounter3Visible(true)}
                label="Personnel"
                countupProps={{ end: 300 }}
              ></Counter>
            )}
          </div>
          <div className="col-span-2 md:col-span-1 default-counter-size">
            {counter3Visible && (
              <Counter
                className="md:border-l border-dark"
                duration={0.5}
                label="Office"
                countupProps={{ end: 10 }}
              ></Counter>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
