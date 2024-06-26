
// import { ReactComponent as Intro } from 'assets/intro_bg.svg';
import { ReactComponent as Logo } from 'assets/logo_white.svg';

import CountUp from 'react-countup';





import React, { useState } from "react";
import "./footer.css"
function Footer() {

    return <div className='footer-container'>
        <div className='footer-body'>
            <div className='footer-logo'><Logo id="footer-logo-id"></Logo></div>
            <div className='footer-actions'>

                <a href="#"> About Us</a>
                <a href="#"> Investment</a>
                <a href="#"> Leadership</a>
                <a href="#"> Contact</a>
            </div>
        </div>

        <div className='line-seperator'></div>
        <div className='footer-subactions'>
            <a href="#"> Privacy Policy</a>
            <a href="#"> © 2024 DoveHouse Capital Inc. All Rights Reserved.</a>
            <a href="#"> Terms and Conditions</a>
        </div>


    </div>
}


export default Footer
