// import React from "react";
// import { motion } from "framer-motion"; // Import motion from framer-motion
// import Investmenturlbg from "../../assets/images/leadership-bg.jpg";
// import "./InvestmentPage.css";
// // import { ReactComponent as Trandicon } from "../../assets/images/Trend.svg";
// import Trandicon from "../../assets/images/Trend.svg";

// import Trandicon2 from "../../assets/images/Portfolio.svg";
// import Trandicon3 from "../../assets/images/Risk.svg";
// import Trandicon4 from "../../assets/images/Transparency.svg";
// const InvestmentLeadership = () => {
//   return (
//     <div className="investment-section-main">
//       <div className="container p-0">
//         <motion.h2
//           style={{ paddingBottom: "20px" }}
//           className="section-title"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           INVESTMENT
//         </motion.h2>
//       </div>
//       <div className="container-fuild" style={{ backgroundColor: "#eff9fd" }}>
//         <section
//           className=" bg-light about-us investment-Leadership"
//           style={{ paddingBottom: "0px" }}
//         >
//           <div className="container">
//             <motion.h1
//               className="main-title"
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//             >
//               Expert Strategies, <br />
//               Optimal
//               <span className="highlight about-us-m">Returns</span>
//             </motion.h1>
//             <motion.p
//               className="subtitle"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//             >
//               We combine a high level of expertise and experience across all
//               functions and leverage well-defined and rigorous investment
//               approaches built on key pillars. Across our three core investment
//               strategies we have one singular focus: delivering optimal and
//               accessible risk-adjusted returns for our investors.
//             </motion.p>
//           </div>
//         </section>

//         <div className="container-fuild main-container-section-in p-0">
//           <div
//             className="main-leadership"
//             data-aos="zoom-in"
//             data-aos-duration="1000"
//             // data-aos-easing="ease-in-sine"
//             style={{
//               backgroundImage: `url(${Investmenturlbg})`,
//               height: "500px",
//               backgroundRepeat: "no-repeat",
//               backgroundSize: "cover",
//             }}
//           >
//             <div className="card-counter mt-5">
//               <div
//                 className="card leadership-card"
//                 data-aos="fade-up"
//                 data-aos-delay="300"
//                 data-aos-offset="300"
//               >
//                 <h2 className="leadership-card-heading text-white">6000</h2>
//                 <p className="leadership-card-des">Expertise and Experience</p>
//               </div>

//               <div
//                 className="card leadership-card"
//                 data-aos="fade-up"
//                 data-aos-delay="600"
//                 data-aos-offset="0"
//               >
//                 <h2 className="leadership-card-heading text-white">380</h2>
//                 <p className="leadership-card-des">
//                   Rigorous Investment Approaches
//                 </p>
//               </div>

//               <div
//                 className="card leadership-card"
//                 data-aos="fade-up"
//                 data-aos-delay="800"
//                 data-aos-offset="0"
//               >
//                 <h2 className="leadership-card-heading text-white">235</h2>
//                 <p className="leadership-card-des">
//                   Optimal Risk-Adjusted Returns
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* <img
//           src={Investmenturlbg}
//           alt="Team meeting"
//           className="img-fluid"
//           data-aos="zoom-in"
//           data-aos-duration="3000"
//           data-aos-easing="ease-in-sine"
//         /> */}
//         </div>

//         <section className="container principal-sections">
//           <motion.h2
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 1.2 }}
//           >
//             OUR CORE{" "}
//             <span className="text" style={{ color: "#33B9EA" }}>
//               PRINCIPLES
//             </span>
//           </motion.h2>
//           {/* <Trandicon /> */}
//           <div className="row  ">
//             <PrincipleCard
//               icon={Trandicon}
//               title="TREND FOLLOWING ON SP500"
//               delay={1.4}
//             />
//             <PrincipleCard
//               icon={Trandicon2}
//               title="PORTFOLIO CONSTRUCTION"
//               delay={1.6}
//             />
//             <PrincipleCard
//               icon={Trandicon3}
//               title="RISK MITIGATION"
//               isPrimary={false}
//               delay={1.8}
//             />
//             <PrincipleCard icon={Trandicon4} title="TRANSPARENCY" delay={2} />
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// const PrincipleCard = ({ icon, title, isPrimary = false, delay }) => (
//   <div className="col-md-3 mb-4 card-div-t">
//     <motion.div
//       className={`card principal-card h-100 border-0 shadow ${
//         isPrimary ? "bg-primary text-white" : ""
//       }`}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 2.3, delay: 0.8 }}
//     >
//       <div className="card-body">
//         <img src={icon} alt={title} className="mb-3" />
//         <h5 className={`card-title ${isPrimary ? "" : "text-dark"}`}>
//           {title}
//         </h5>
//       </div>
//     </motion.div>
//   </div>
// );

// export default InvestmentLeadership;
import React, { useState } from "react";
import { motion } from "framer-motion";
import Investmenturlbg from "../../assets/images/leadership-bg.jpg";
import "./InvestmentPage.css";
import Trandicon from "../../assets/images/Trend.svg";
import Trandicon2 from "../../assets/images/Portfolio.svg";
import Trandicon3 from "../../assets/images/Risk.svg";
import Trandicon4 from "../../assets/images/Transparency.svg";

const InvestmentLeadership = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const principleCards = [
    {
      icon: Trandicon,
      title: "Trend Following on SP500",
      description:
        "We engage in momentum following strategies, applying AI, artificial- and actual human intelligence. We emphasize heuristics and common sense. We deploy years of market experience in extracting real value and generating alpha. The markets are driven by formidable human minds overseeing evolving digital minds - we deploy 2nd to none skills and resources to navigate this.",
      delay: 1.4,
    },
    {
      icon: Trandicon2,
      title: "Portfolio Construction",
      description:
        "Our phenomenal inhouse DMP (Dovehouse Model Portfolio) is constantly proving its worth and is generating returns well above that of peers. We constantly monitor, adjust and replace exposures as and when it is necessary. We select and allocate differently to the herd, perhaps this is why our performance is outstanding",
      delay: 1.6,
    },
    {
      icon: Trandicon3,
      title: "Risk Mitigation",
      description:
        "We engage cutting edge risk management systems and have them overseen by the most seasoned high caliber people in the industry. We have our own skin in the game and wouldn't let ourselves down, hence why we won't let our client's down either.",
      delay: 1.8,
    },
    {
      icon: Trandicon4,
      title: "Transparency",
      description:
        "At any given moment will our investors be able to establish a valuation of their exposure and with short notice, you'd be able to withdraw your capital, should you need to. We engage in no illiquid, esoteric or hard to liquidate assets. We simply do not believe you have to rely on cheap excessive funding to secure high returns (as in real estate or private equity). We have market intelligence, leadership experience, cutting edge systems and brilliant people to secure that transparency, risk and returns are optimized to your benefit.",
      delay: 2,
    },
  ];

  return (
    <div className="investment-section-main">
      <div className="container p-0">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ paddingBottom: "20px" }}
          className="section-title"
        >
          INVESTMENT PRINCIPLES
        </motion.h2>
      </div>
      <div className="container-fuild" style={{ backgroundColor: "#eff9fd" }}>
        <section
          className=" bg-light about-us investment-Leadership"
          style={{ paddingBottom: "0px" }}
        >
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ letterSpacing: "-4.8px" }}
              className="main-title heading-title-invesment"
            >
              Expert Strategies, <br />
              Optimal
              <span
                className="highlight about-us-m"
                style={{ paddingLeft: "16px" }}
              >
                Returns
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="subtitle dss-p-fs-14"
            >
              We combine a high level of expertise and experience across all
              functions and leverage well-defined and rigorous investment
              approaches built on core principles. Across our three core
              investment strategies we have one singular focus: delivering
              optimal and accessible risk-adjusted returns for our investors.
            </motion.p>
          </div>
        </section>

        <div className="container-fuild main-container-section-in p-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="main-leadership"
            style={{
              backgroundImage: `url(${Investmenturlbg})`,
              height: "500px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="card-counter mt-5"
            >
              <div className="card leadership-card">
                <h2 className="leadership-card-heading text-white">6000</h2>
                <p className="leadership-card-des">Expertise and Experience</p>
              </div>

              <div className="card leadership-card">
                <h2 className="leadership-card-heading text-white">380</h2>
                <p className="leadership-card-des">
                  Rigorous Investment Approaches
                </p>
              </div>

              <div className="card leadership-card">
                <h2 className="leadership-card-heading text-white">235</h2>
                <p className="leadership-card-des">
                  Optimal Risk-Adjusted Returns
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <section className="container principal-sections">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            OUR CORE{" "}
            <span className="text" style={{ color: "#33B9EA" }}>
              PRINCIPLES
            </span>
          </motion.h2>
          <div className="row">
            {principleCards.map((card, index) => (
              <PrincipleCard
                key={index}
                index={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                delay={card.delay}
                isExpanded={expandedCard === index}
                toggleExpand={toggleExpand}
                expandedCard={expandedCard}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const PrincipleCard = ({
  index,
  icon,
  title,
  description,
  isExpanded,
  toggleExpand,
  delay,
}) => {
  const cardStyle = isExpanded ? { background: "#203468", color: "white" } : {};
  const iconStyle = isExpanded ? { color: "white" } : { color: "#323131" };
  const iconStyleimg = isExpanded
    ? { filter: "brightness(0) invert(1)" }
    : { filter: "none" };

  return (
    <motion.div
      className="col-md-3 mb-4 card-div-t"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <motion.div
        className={`card principal-card h-100 border-0 shadow`}
        onClick={() => toggleExpand(index)}
        style={{
          cursor: "pointer",
          ...cardStyle,
          width: "100%",
          overflow: "hidden",
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="card-body">
          <img src={icon} alt={title} className="mb-3" style={iconStyleimg} />
          <h5 className="card-title" style={iconStyle}>
            {title}
          </h5>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="card-title dss-p-fs-14"
              style={{ textTransform: "none", lineHeight: "20px" }}
            >
              {description}
            </p>
          </motion.div>
          <div className="toggle-icon" style={iconStyle}>
            {isExpanded ? "-" : "+"}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InvestmentLeadership;
