import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";

function AnimatedCardText({variants, controls, font, text}) {
    const [firstRender, setFirstRender] = useState(true)
    useEffect(() => {
        controls.start(variants.visible)
    }, [])

    return (
        <motion.h1
            initial={variants.hidden}
            animate={controls}
            style={{fontSize: 45, fontFamily: font}}>
            {text}
        </motion.h1>
    );
}

export default AnimatedCardText;