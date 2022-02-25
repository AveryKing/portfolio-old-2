import {Flex} from "@chakra-ui/layout";
import {AnimatePresence, motion, useAnimation} from "framer-motion";
import {GridItem} from "@chakra-ui/react";
import React, {useEffect} from 'react';

function Project({position, text, font}) {
    const MotionGridItem = motion(GridItem);
    const standardVariants = {visible: {opacity: 1, x: 0, y: 0, transition: {duration: 0.75}}};
    const textTransition = {transition: {duration: position.endsWith("middle") ? 0.9 : 1, delay: 0.3}};
    const textVisible = {visible: {opacity: 1, x: 0, y: 0, rotateX: 0, rotate: 0, ...textTransition}}
    const textAnimationControls = useAnimation();
    const textAnimationVariants = {
        init: {y: 0, rotateY: 0, scale: 1, transition: {duration: 1, type: "tween"}},
        anim: {y: -40, rotateY: 360, scale: 0.7, transition: {duration: 1, type: "tween"}}
    }
    const colStart = position.endsWith("Left") ? 2 : position.endsWith("Middle") ? 3 : position.endsWith("Right") ? 4 : null;
    const colEnd = colStart + 1;
    let variants;
    let textVariants;
    const setupVariants = (initialCardValues, initialTextValues) => {
        const standardHidden = {opacity: 0};
        variants = {...standardVariants, hidden: {...standardHidden, ...initialCardValues}}
        textVariants = {...textVisible, hidden: {...standardHidden, ...initialTextValues}}
    }

    // eslint-disable-next-line default-case
    switch (position) {
        case "topLeft":
            setupVariants({x: -100, y: -100}, {x: -30, rotate: -30});
            break;
        case "topMiddle":
            setupVariants({y: -100}, {rotateX: 180});
            break;
        case "topRight":
            setupVariants({x: 100, y: -100}, {x: 30, rotate: 30});
            break;
        case "bottomLeft":
            setupVariants({x: -10, y: 100}, {x: -30, rotate: 30});
            break;
        case "bottomMiddle":
            setupVariants({y: -50}, {x: 30, rotate: 30});
            break;
        case "bottomRight":
            setupVariants({x: 100, y: 100}, {x: 30, rotate: -30});
            break;
    }

    useEffect(() => {
        textAnimationControls.start(textVariants.visible)
    }, [textAnimationControls, textVariants.visible])

    return (
        <AnimatePresence>
            <MotionGridItem borderRadius="8px"
                            variants={variants}
                            onHoverStart={() => textAnimationControls.start(textAnimationVariants.anim)}
                            onHoverEnd={() => {
                                textAnimationControls.start(textAnimationVariants.init)
                            }}
                            initial="hidden"
                            animate="visible"
                            mt={-10} colStart={colStart} colEnd={colEnd} h='40' bg="teal" mb={20} ml={15} mr={15}>
                <Flex justifyContent="center" mt={10}>
                    <motion.h1
                        initial={textVariants.hidden}
                        animate={textAnimationControls}
                        style={{fontSize: 45, fontFamily: font}}>
                        {text}
                    </motion.h1>
                </Flex>
            </MotionGridItem>
        </AnimatePresence>

    )
}

export default Project;