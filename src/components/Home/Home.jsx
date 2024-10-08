// // import { ReactComponent as Intro } from 'assets/intro_bg.svg';
// import { ReactComponent as Logo } from "assets/logo_original_colored.svg";
// import { ReactComponent as WhiteLogo } from "assets/logo_white.svg"; // Assuming you have a white version of the logo

// import { ReactComponent as Icon_facebook } from "assets/social/icon_facebook.svg";
// import { ReactComponent as Icon_instagram } from "assets/social/icon_instagram.svg";
// import { ReactComponent as Icon_linkedin } from "assets/social/icon_linkedin.svg";
// import { ReactComponent as Icon_twitter } from "assets/social/Icon_twitter.svg";
// import { ReactComponent as Icon_Menu } from "assets/menu_icon.svg";

// import About from "./about/About";
// import Investment from "./investment/Investment";
// // import Footer from '../footer/Footer';

// import React, { useEffect, useRef, useState } from "react";
// import "./styles.css";
// import { motion, useSpring } from "framer-motion";
// import Leadership from "./leadership/leadership";
// import Culture from "./culture/culture";
// import useWindowDimensions from "components/utils/useWindowDimensions";

// import img_about_bg from "assets/about_bg.svg";
// import img_homepage_bg from "assets/homepage_bg.png";
// import img_leadership_bg from "assets/leadership_bg.svg";
// import img_investmentapproach_img from "assets/investmentapproach_img.svg";
// import img_logo_original from "assets/logo_original.svg";
// import img_intro_bg from "assets/intro_bg.svg";
// import img_culture_img from "assets/culture_img.svg";
// import img_drawerLogo from "assets/drawerLogo.svg";
// import logoGif from "assets/headerlogo.gif";

// function Home(props) {
//   //   const [x, setX] = useState(0);
//   //   const [y, setY] = useState(0);
//   //   const [scale, setScale] = useState(2);
//   //   const [visible, setVisible] = useState(false);
//   //   const controls = useAnimation();
//   const { height, width } = useWindowDimensions();
//   //   const [scrollProgress, setScrollProgress] = useState(0);
//   const isMobileView = width < 767;

//   const [currentSection, setCurrentSection] = useState(1);
//   const [showGifLogo, setShowGifLogo] = useState(true);
//   const [imagesLoaded, setImagesLoaded] = useState(false);
//   const [showWhiteLogo, setShowWhiteLogo] = useState(false);

//   const spring = useSpring(0, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   const imageUrls = [
//     img_investmentapproach_img,
//     img_about_bg,
//     img_homepage_bg,
//     img_investmentapproach_img,
//     img_leadership_bg,
//     img_investmentapproach_img,
//     img_logo_original,
//     img_intro_bg,
//     img_culture_img,
//     img_drawerLogo,
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         // Adjust this value as needed
//         setShowGifLogo(false);
//         if (currentSection === 2) {
//           setShowWhiteLogo(true);
//         } else {
//           setShowWhiteLogo(false);
//         }
//       } else {
//         setShowGifLogo(true);
//         setShowWhiteLogo(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [currentSection]);

//   useEffect(() => {
//     let images = [];
//     let loadedImages = 0;

//     const onImageLoad = () => {
//       loadedImages++;
//       if (loadedImages === imageUrls.length) {
//         setImagesLoaded(true);
//       }
//     };

//     imageUrls.forEach((url) => {
//       const img = new Image();
//       img.onload = onImageLoad;
//       img.src = url;
//       images.push(img);
//     });

//     return () => {
//       images.forEach((img) => (img.onload = null)); // Cleanup
//     };
//   }, []);

//   useEffect(() => {
//     if (currentSection == 1 || currentSection == 2) {
//       spring.set(0);
//     } else {
//       let progress = (currentSection - 2) / (homeRef.current.MAX_SECTIONS - 2);
//       spring.set(progress * height);
//     }

//     return () => {};
//   }, [currentSection]);

//   const homeRef = useRef({
//     MIN_SECTIONS: 1,
//     MAX_SECTIONS: 6,
//     timeoutInstance: null,

//     homeContentDiv: {
//       visible: { opacity: 1 },
//       hidden: { opacity: 0 },
//     },
//     menu: {
//       visible: { opacity: 1, y: "-40vh" },
//       hidden: { opacity: 0, y: "-40vh" },
//     },
//   });

//   const handleNavigation = (direction) => {
//     if (direction > 0) {
//       setCurrentSection(currentSection + 1);
//     } else {
//       setCurrentSection(currentSection - 1);
//     }
//   };

//   const handleWheelChange = (event) => {
//     if (currentSection == 4) {
//       return;
//     }

//     if (currentSection == 6) {
//       return;
//     }

//     if (homeRef.current.timeoutInstance) {
//       clearTimeout(homeRef.current.timeoutInstance);
//     }
//     homeRef.current.timeoutInstance = setTimeout(() => {
//       if (event.deltaY < 0) {
//         if (currentSection > homeRef.current.MIN_SECTIONS) {
//           setCurrentSection(currentSection - 1);
//         }
//       } else if (event.deltaY > 0) {
//         if (currentSection < homeRef.current.MAX_SECTIONS) {
//           setCurrentSection(currentSection + 1);
//         }
//       }
//     }, 500);
//   };

//   const handleTouchEnd = (e) => {
//     console.log("touched", e);

//     let deltaX;
//     let deltaY;

//     // Compute the change in X and Y coordinates.
//     // The first touch point in the changedTouches
//     // list is the touch point that was just removed from the surface.
//     deltaX = e.changedTouches[0].clientX - homeRef.current.clientX;
//     deltaY = e.changedTouches[0].clientY - homeRef.current.clientY;
//     handleWheelChange({ deltaY: -deltaY, deltaX: -deltaX });
//   };
//   const handleTouchStart = (e) => {
//     console.log("touched", e);
//     homeRef.current.clientX = e.touches[0].clientX;
//     homeRef.current.clientY = e.touches[0].clientY;
//   };
//   if (!imagesLoaded) {
//     return (
//       <div className="flex justify-center w-full h-lvh items-center">
//         <div
//           style={{ color: "#3B3B3B" }}
//           class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] "
//           role="status"
//         >
//           <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
//             Loading...
//           </span>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <motion.div
//         className="progress-bar"
//         transition={{ ease: "easeOut", duration: 2 }}
//         style={{ height: spring }}
//       />
//       <div
//         onTouchStart={handleTouchStart}
//         onTouchEnd={handleTouchEnd}
//         onWheel={handleWheelChange}
//         className={`home-container section-${currentSection}`}
//       >
//         <header class="header">
//           <div class="inner-content">
//             <svg
//               onClick={() => {
//                 props.toggleDrawer();
//               }}
//               xmlns="http://www.w3.org/2000/svg"
//               width="57"
//               height="21"
//               viewBox="0 0 57 21"
//               fill="none"
//             >
//               <rect width="57" height="1.09524" fill="#203468"></rect>
//               <rect
//                 y="9.95312"
//                 width="57"
//                 height="1.09524"
//                 fill="#203468"
//               ></rect>
//               <rect
//                 y="19.9043"
//                 width="57"
//                 height="1.09524"
//                 fill="#203468"
//               ></rect>
//             </svg>
//           </div>
//         </header>
//         <main>
//           <section id="home">
//             <div class="bg-container-logo">
//               <div>
//                 <div class="background">
//                   <div class="image blend"></div>
//                 </div>

//                 {showGifLogo && (
//                   <img
//                     src={logoGif}
//                     alt="Dovehouse Capital Logo"
//                     className="logo-gif"
//                     style={{
//                       cursor: "pointer",
//                     }}
//                     id="logo"
//                     onClick={() =>
//                       setCurrentSection(currentSection === 2 ? 1 : 2)
//                     }
//                   />
//                 )}
//                 {!showGifLogo && !showWhiteLogo && (
//                   <Logo
//                     onClick={() =>
//                       setCurrentSection(currentSection === 2 ? 1 : 2)
//                     }
//                     id="logo"
//                     style={{
//                       cursor: "pointer",
//                     }}
//                   />
//                 )}
//                 {!showGifLogo && showWhiteLogo && (
//                   <WhiteLogo
//                     onClick={() =>
//                       setCurrentSection(currentSection === 2 ? 1 : 2)
//                     }
//                     id="logo"
//                     style={{
//                       cursor: "pointer",
//                     }}
//                   />
//                 )}

//                 <div>
//                   {currentSection == 2 && (
//                     <motion.div
//                       transition={{ ease: "easeIn", duration: 0.7, delay: 1.7 }}
//                       whileInView={{ opacity: 1 }}
//                       initial={{ opacity: 0 }}
//                       class="wrapper-content"
//                     >
//                       <motion.div
//                         transition={{
//                           ease: "easeIn",
//                           duration: 0.7,
//                           delay: 1.7,
//                         }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         initial={{ opacity: 0, x: -20 }}
//                         class="wrapper-block"
//                       >
//                         <div class="menu">
//                           <Icon_Menu
//                             onClick={() => {
//                               props.toggleDrawer();
//                             }}
//                           ></Icon_Menu>
//                         </div>
//                       </motion.div>
//                       <div class="inner-content">
//                         <motion.p
//                           transition={{
//                             ease: "easeIn",
//                             duration: 0.7,
//                             delay: 1.7,
//                           }}
//                           whileInView={{ opacity: 1, y: 0 }}
//                           initial={{ opacity: 0, y: -50 }}
//                           class="title font-primary text-white"
//                         >
//                           Investment Leader, Diverse <br />
//                           Strategies Worldwide
//                         </motion.p>
//                         <motion.p
//                           transition={{
//                             ease: "easeIn",
//                             duration: 0.7,
//                             delay: 1.7,
//                           }}
//                           whileInView={{ opacity: 1, y: 0 }}
//                           initial={{ opacity: 0, y: 50 }}
//                           class="font-secondary text-grey subtitle"
//                         >
//                           We aim to democratize hedge fund access, offering
//                           transparent, <br />
//                           AI-driven strategies for benchmark-beating returns.
//                         </motion.p>
//                       </div>

//                       <motion.div
//                         transition={{
//                           ease: "easeIn",
//                           duration: 0.7,
//                           delay: 1.7,
//                         }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         initial={{ opacity: 0, x: 20 }}
//                         className="wrapper-block"
//                       >
//                         <div className="home-icons">
//                           <Icon_facebook></Icon_facebook>
//                           <Icon_instagram></Icon_instagram>
//                           <Icon_linkedin></Icon_linkedin>
//                           <Icon_twitter></Icon_twitter>
//                         </div>
//                       </motion.div>
//                     </motion.div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </section>

//           {isMobileView && currentSection >= 3 && (
//             <section
//               id="section-3"
//               className={`sec-content ${
//                 currentSection >= 3 ? "active-section" : ""
//               }`}
//             >
//               <div className="mobile-view-div">
//                 <About></About>
//                 <Investment navigate={() => {}}></Investment>
//                 <Leadership></Leadership>
//                 <Culture navigate={() => {}}></Culture>
//               </div>
//             </section>
//           )}

//           {!isMobileView && currentSection == 3 && (
//             <section
//               id="section-3"
//               className={`sec-content ${
//                 currentSection == 3 ? "active-section" : ""
//               }`}
//             >
//               <About></About>
//             </section>
//           )}

//           {!isMobileView && currentSection == 4 && (
//             <section
//               id="section-4"
//               className={`sec-content ${
//                 currentSection == 4 ? "active-section" : ""
//               }`}
//             >
//               <Investment navigate={handleNavigation}></Investment>
//             </section>
//           )}
//           {!isMobileView && currentSection == 5 && (
//             <section
//               id="section-5"
//               className={`sec-content ${
//                 currentSection == 5 ? "active-section" : ""
//               }`}
//             >
//               <Leadership></Leadership>
//             </section>
//           )}
//           {!isMobileView && currentSection == 6 && (
//             <section
//               id="section-6"
//               className={`sec-content ${
//                 currentSection == 6 ? "active-section" : ""
//               }`}
//             >
//               <Culture navigate={handleNavigation}></Culture>
//             </section>
//           )}
//         </main>
//       </div>
//     </>
//   );
// }
// export default Home;

"use client";

import { ReactComponent as Logo } from "assets/logo_original_colored.svg";
import { ReactComponent as WhiteLogo } from "assets/logo_white.svg";
import { ReactComponent as BlueLogo } from "assets/logo_original_dark.svg";

import { ReactComponent as Icon_facebook } from "assets/social/icon_facebook.svg";
import { ReactComponent as Icon_instagram } from "assets/social/icon_instagram.svg";
import { ReactComponent as Icon_linkedin } from "assets/social/icon_linkedin.svg";
import { ReactComponent as Icon_twitter } from "assets/social/Icon_twitter.svg";
import { ReactComponent as Icon_Menu } from "assets/menu_icon.svg";

import About from "./about/About";
import Investment from "./investment/Investment";
import Leadership from "./leadership/leadership";
import Culture from "./culture/culture";

import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { motion, useSpring } from "framer-motion";
import useWindowDimensions from "components/utils/useWindowDimensions";

import img_about_bg from "assets/about_bg.svg";
import img_homepage_bg from "assets/homepage_bg.png";
import img_leadership_bg from "assets/leadership_bg.svg";
import img_investmentapproach_img from "assets/investmentapproach_img.svg";
import img_logo_original from "assets/logo_original.svg";
import img_intro_bg from "assets/intro_bg.svg";
import img_culture_img from "assets/culture_img.svg";
import img_drawerLogo from "assets/drawerLogo.svg";
import logoGif from "assets/headerlogo.gif";

export default function Home(props) {
  const { height, width } = useWindowDimensions();
  const isMobileView = width < 767;

  const [currentSection, setCurrentSection] = useState(1);
  const [showGifLogo, setShowGifLogo] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [showWhiteLogo, setShowWhiteLogo] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showBlueLogo, setShowBlueLogo] = useState(false);

  const spring = useSpring(0, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const imageUrls = [
    img_investmentapproach_img,
    img_about_bg,
    img_homepage_bg,
    img_investmentapproach_img,
    img_leadership_bg,
    img_investmentapproach_img,
    img_logo_original,
    img_intro_bg,
    img_culture_img,
    img_drawerLogo,
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let images = [];
    let loadedImages = 0;

    const onImageLoad = () => {
      loadedImages++;
      if (loadedImages === imageUrls.length) {
        setImagesLoaded(true);
      }
    };

    imageUrls.forEach((url) => {
      const img = new Image();
      img.onload = onImageLoad;
      img.src = url;
      images.push(img);
    });

    return () => {
      images.forEach((img) => (img.onload = null)); // Cleanup
    };
  }, []);

  useEffect(() => {
    if (currentSection === 1 || currentSection === 2) {
      spring.set(0);
    } else {
      let progress = (currentSection - 2) / (homeRef.current.MAX_SECTIONS - 2);
      spring.set(progress * height);
    }
  }, [currentSection, height, spring]);

  const homeRef = useRef({
    MIN_SECTIONS: 1,
    MAX_SECTIONS: 6,
    timeoutInstance: null,
    homeContentDiv: {
      visible: { opacity: 1 },
      hidden: { opacity: 0 },
    },
    menu: {
      visible: { opacity: 1, y: "-40vh" },
      hidden: { opacity: 0, y: "-40vh" },
    },
  });
  useEffect(() => {
    // Logic to show GIF, white, or blue logo based on scroll and section
    if (scrollY > 100) {
      setShowGifLogo(true);
      if (currentSection === 2) {
        // Show white logo for section 2
        setShowWhiteLogo(true);
        setShowGifLogo(false); // Hide GIF when white logo is shown
      } else if (currentSection > 2) {
        // Show blue logo for sections 3, 4, 6, and 7
        setShowBlueLogo(true);
        setShowGifLogo(false); // Hide GIF when blue logo is shown
        setShowWhiteLogo(false); // Hide white logo when blue logo is shown
      } else {
        setShowWhiteLogo(false); // Show GIF logo for other sections
        setShowBlueLogo(false); // Hide blue logo for other sections
      }
    } else {
      // When scrollY is <= 100
      if (currentSection === 2) {
        setShowWhiteLogo(true); // Show white logo for section 2
        setShowGifLogo(false);
        setShowBlueLogo(false);
      } else if (currentSection > 2) {
        // Show blue logo for sections 3, 4, 6, and 7
        setShowBlueLogo(true);
        setShowGifLogo(false); // Hide GIF logo when blue logo is shown
        setShowWhiteLogo(false); // Hide white logo when blue logo is shown
      } else {
        setShowGifLogo(true); // For other sections, show GIF
        setShowWhiteLogo(false);
        setShowBlueLogo(false); // Hide blue logo
      }
    }
  }, [scrollY, currentSection]);

  const handleNavigation = (direction) => {
    setCurrentSection((prev) => {
      const newSection =
        direction > 0
          ? Math.min(prev + 1, homeRef.current.MAX_SECTIONS)
          : Math.max(prev - 1, homeRef.current.MIN_SECTIONS);

      console.log("New Section:", newSection);

      // Handle section-specific logic here
      if (newSection === 2) {
        setShowWhiteLogo(true); // Show white logo for section 2
        setShowGifLogo(false);
        setShowBlueLogo(false); // Hide blue logo
        console.log("White logo shown for section 2");
      } else if (newSection > 2 && newSection == 5) {
        setShowBlueLogo(true); // Show blue logo for sections 3, 4, 6, and 7
        setShowWhiteLogo(false); // Hide white logo
        setShowGifLogo(false); // Hide GIF logo
        console.log("Blue logo shown for sections 3, 4,,5, 6, and 7");
      }

      return newSection;
    });
  };

  const handleWheelChange = (event) => {
    if (currentSection === 4 || currentSection === 6) {
      return;
    }

    if (homeRef.current.timeoutInstance) {
      clearTimeout(homeRef.current.timeoutInstance);
    }
    homeRef.current.timeoutInstance = setTimeout(() => {
      handleNavigation(event.deltaY > 0 ? 1 : -1);
    }, 500);
  };

  const handleTouchEnd = (e) => {
    let deltaY = e.changedTouches[0].clientY - homeRef.current.clientY;
    handleWheelChange({ deltaY: -deltaY });
  };

  const handleTouchStart = (e) => {
    homeRef.current.clientY = e.touches[0].clientY;
  };

  const LogoComponent = () => {
    if (showGifLogo) {
      return (
        <img
          src={logoGif}
          alt="Dovehouse Capital Logo"
          className="logo-gif"
          style={{ cursor: "pointer" }}
          id="logo"
          onClick={() => setCurrentSection(currentSection === 2 ? 1 : 2)}
        />
      );
    } else if (showWhiteLogo) {
      console.log("White logo shown");
      return (
        <WhiteLogo
          onClick={() => setCurrentSection(currentSection === 2 ? 1 : 2)}
          id="logo"
          style={{ cursor: "pointer" }}
        />
      );
    } else if (showBlueLogo) {
      console.log("Blue logo shown");
      return (
        <BlueLogo
          onClick={() => setCurrentSection(currentSection === 2 ? 1 : 2)}
          id="logo"
          style={{ cursor: "pointer" }}
        />
      );
    } else {
      return (
        <Logo
          onClick={() => setCurrentSection(currentSection === 2 ? 1 : 2)}
          id="logo"
          style={{ cursor: "pointer" }}
        />
      );
    }
  };

  if (!imagesLoaded) {
    return (
      <div className="flex justify-center w-full h-lvh items-center">
        <div
          style={{ color: "#3B3B3B" }}
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      <motion.div
        className="progress-bar"
        transition={{ ease: "easeOut", duration: 2 }}
        style={{ height: spring }}
      />
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheelChange}
        className={`home-container section-${currentSection}`}
      >
        <header className="header">
          <div className="inner-content">
            <svg
              onClick={() => {
                props.toggleDrawer();
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="57"
              height="21"
              viewBox="0 0 57 21"
              fill="none"
            >
              <rect width="57" height="1.09524" fill="#203468"></rect>
              <rect
                y="9.95312"
                width="57"
                height="1.09524"
                fill="#203468"
              ></rect>
              <rect
                y="19.9043"
                width="57"
                height="1.09524"
                fill="#203468"
              ></rect>
            </svg>
          </div>
        </header>
        <main>
          <section id="home">
            <div className="bg-container-logo">
              <div>
                <div className="background">
                  <div className="image blend"></div>
                </div>

                <LogoComponent />

                <div>
                  {currentSection === 2 && (
                    <motion.div
                      transition={{ ease: "easeIn", duration: 0.7, delay: 1.7 }}
                      whileInView={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      className="wrapper-content"
                    >
                      <motion.div
                        transition={{
                          ease: "easeIn",
                          duration: 0.7,
                          delay: 1.7,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -20 }}
                        className="wrapper-block"
                      >
                        <div className="menu">
                          <Icon_Menu
                            onClick={() => {
                              props.toggleDrawer();
                            }}
                          ></Icon_Menu>
                        </div>
                      </motion.div>
                      <div className="inner-content">
                        <motion.p
                          transition={{
                            ease: "easeIn",
                            duration: 0.7,
                            delay: 1.7,
                          }}
                          whileInView={{ opacity: 1, y: 0 }}
                          initial={{ opacity: 0, y: -50 }}
                          className="title font-primary text-white"
                        >
                          Investment Leader, Diverse <br />
                          Strategies Worldwide
                        </motion.p>
                        <motion.p
                          transition={{
                            ease: "easeIn",
                            duration: 0.7,
                            delay: 1.7,
                          }}
                          whileInView={{ opacity: 1, y: 0 }}
                          initial={{ opacity: 0, y: 50 }}
                          className="font-secondary text-grey subtitle"
                        >
                          We aim to democratize hedge fund access, offering
                          transparent, <br />
                          AI-driven strategies for benchmark-beating returns.
                        </motion.p>
                      </div>

                      <motion.div
                        transition={{
                          ease: "easeIn",
                          duration: 0.6,
                          delay: 1.6,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 20 }}
                        className="wrapper-block"
                      >
                        <div className="home-icons">
                          <Icon_facebook></Icon_facebook>
                          <Icon_instagram></Icon_instagram>
                          <Icon_linkedin></Icon_linkedin>
                          <Icon_twitter></Icon_twitter>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {isMobileView && currentSection >= 3 && (
            <section
              id="section-3"
              className={`sec-content ${
                currentSection >= 3 ? "active-section" : ""
              }`}
            >
              <div className="mobile-view-div">
                <About></About>
                <Investment navigate={() => {}}></Investment>
                <Leadership></Leadership>
                <Culture navigate={() => {}}></Culture>
              </div>
            </section>
          )}

          {!isMobileView && currentSection === 3 && (
            <section
              id="section-3"
              className={`sec-content ${
                currentSection === 3 ? "active-section" : ""
              }`}
            >
              <About></About>
            </section>
          )}

          {!isMobileView && currentSection === 4 && (
            <section
              id="section-4"
              className={`sec-content ${
                currentSection === 4 ? "active-section" : ""
              }`}
            >
              <Investment navigate={handleNavigation}></Investment>
            </section>
          )}
          {!isMobileView && currentSection === 5 && (
            <section
              id="section-5"
              className={`sec-content ${
                currentSection === 5 ? "active-section" : ""
              }`}
            >
              <Leadership></Leadership>
            </section>
          )}
          {!isMobileView && currentSection === 6 && (
            <section
              id="section-6"
              className={`sec-content ${
                currentSection === 6 ? "active-section" : ""
              }`}
            >
              <Culture navigate={handleNavigation}></Culture>
            </section>
          )}
        </main>
      </div>
    </>
  );
}
