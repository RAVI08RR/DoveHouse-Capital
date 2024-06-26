
import "./counter.css"
import { useInView, motion, useAnimation } from "framer-motion"
import React, { useState, useEffect, useRef } from "react";
import CountUp from 'react-countup';

function Counter(props) {
    const ref = useRef();


    const counterRef = useRef({
        counterDiv: {
            visible: { opacity: 1, transition: { duration: props.duration } },
            hidden: { opacity: 0 }
        }
    })
    const inView = useInView(ref, { once: true })
    const [isVisible, setIsVisible] = useState(false)
    const controls = useAnimation();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
            setIsVisible(true);

        }
    }, [controls, inView]);

    return <motion.div
        ref={ref}
        animate={controls}
        onAnimationComplete={() => { props?.onAnimationComplete?.() }}
        initial="hidden"
        //  viewport={{ once: true }}
        variants={counterRef.current.counterDiv}
        className={`counter-div ${props?.className ?? ""}`}
    >
        <p className='counter-title'>{props.label}</p>
        <p className='counter-value'>{isVisible && props.countupProps.end} </p>
    </motion.div>
}

export default Counter