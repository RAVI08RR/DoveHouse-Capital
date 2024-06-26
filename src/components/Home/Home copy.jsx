
// import { ReactComponent as Intro } from 'assets/intro_bg.svg';
import { ReactComponent as Logo } from 'assets/logo_original_colored.svg';


import { ReactComponent as Icon_facebook } from 'assets/social/icon_facebook.svg';
import { ReactComponent as Icon_instagram } from 'assets/social/icon_instagram.svg';
import { ReactComponent as Icon_linkedin } from 'assets/social/icon_linkedin.svg';
import { ReactComponent as Icon_X } from 'assets/social/icon_X.svg';
import { ReactComponent as Icon_Menu } from 'assets/menu_icon.svg';

import About from './about/About';
import Investment from './investment/Investment';
import Footer from '../footer/Footer';

import React, { useRef, useState } from "react";
import "./Home.css"
import { motion, useAnimation } from "framer-motion"
import Drawer from 'react-modern-drawer'
import Header from 'components/header/Header';
function Home(props) {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [scale, setScale] = useState(2);
    const [visible, setVisible] = useState(false);
    const controls = useAnimation();
    const homeRef = useRef({
        homeContentDiv: {
            visible: { opacity: 1 },
            hidden: { opacity: 0 }
        },
        menu: {
            visible: { opacity: 1, y: "-40vh" },
            hidden: { opacity: 0, y: "-40vh" }
        }
    })
    return (
        <div className="home-container">
            <div className="group">
                <div className={`${visible ? "blue-rect" : "white-rect"} smooth-change`} onClick={() => {
                    setX(0);
                    setY("-40vh");
                    setScale(1);
                    setVisible(true);
                    controls.start("visible");

                }}>

                    <div className={`image blend`}>
                    </div>

                    <div className={`bg-container smooth-change`} >
                        <div className='bg-container-logo'>


                            <motion.div
                                animate={{ x, y, scale: scale }}
                                initial={{ scale: 2 }}
                                transition={{ ease: [.4, .99, .5, 1], duration: 1.7 }}
                            >

                                <Logo style={{ height: "94px", color: `${visible ? "white" : "#203468"}` }} className={`${visible ? "logo-container" : "#203468"}`}></Logo>

                            </motion.div>
                        </div>

                        <motion.div
                            transition={{ ease: "easeIn", duration: .7, delay: 1.7 }}
                            animate={controls}
                            variants={homeRef.current.homeContentDiv}
                            initial="hidden"


                            className={`wrapper-content ${visible ? "show-front" : ""}`}>
                            <div className='wrapper-block'>

                                <div> <Icon_Menu onClick={() => { props.toggleDrawer() }}></Icon_Menu></div>
                            </div>
                            <div>

                                <p className='title font-primary text-white'>Investment Leader, Diverse <br></br>Strategies Worldwide</p>
                                <p className='font-secondary text-grey subtitle'>
                                    We aim to democratize hedge fund access, offering transparent, <br></br>AI-driven strategies for benchmark-beating returns.
                                </p>
                            </div>
                            <div className='wrapper-block'>
                                <div className='home-icons'>
                                    <Icon_facebook></Icon_facebook>
                                    <Icon_instagram></Icon_instagram>
                                    <Icon_linkedin></Icon_linkedin>
                                    <Icon_X></Icon_X>


                                </div>


                            </div>

                        </motion.div>

                    </div>
                </div>
            </div>
            {visible ? <React.Fragment>
                <Header toggleDrawer={props.toggleDrawer}></Header>
                <About></About>
                <Investment></Investment>
                <Footer></Footer>

            </React.Fragment> : null}

        </div>
    );
}
export default Home