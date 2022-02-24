import React from 'react';
import {motion} from "framer-motion";

function Logo() {
    const variants = {
        hidden: { x: -100 , opacity:0},
        visible: {x: 0, opacity: 1, transition: {duration: 1}}
    }
    return (
        <motion.svg
            variants={variants}
            initial="hidden"
            animate="visible"
            style={{fill:'#0BC5EA'}} width="85" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89.43 21.75">
                    <polygon className="cls-1" points="0 13.38 13.92 20.55 13.92 18.48 2.19 12.6 2.19 12.54 13.92 6.66 13.92 4.59 0 11.76 0 13.38"/>
                    <path className="cls-1" d="M29.88.33,23,20.55h2.7l2.1-6.36H35l2.16,6.36h2.79L33,.33ZM28.35,12.15l2-5.85c.39-1.23.72-2.46,1-3.66h.06c.3,1.17.6,2.37,1.05,3.69l2,5.82Z"/>
                    <path className="cls-1" d="M56.61.33H53.37L47.19,7.92c-.51.66-1,1.38-1.59,2.16h-.09V.33H42.9V20.55h2.61V12.84l1.92-2.22,6.66,9.93h3.09L49.29,8.91Z"/>
                    <polygon className="cls-1" points="63.21 21.75 65.22 21.75 73.62 0 71.58 0 63.21 21.75"/>
                    <polygon className="cls-1" points="75.51 4.59 75.51 6.66 87.33 12.54 87.33 12.6 75.51 18.48 75.51 20.55 89.43 13.41 89.43 11.73 75.51 4.59"/>
        </motion.svg>
    );
}

export default Logo;