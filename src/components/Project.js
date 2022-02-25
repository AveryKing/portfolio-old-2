import {Flex, Text} from "@chakra-ui/layout";
import {AnimatePresence, motion, useAnimation} from "framer-motion";
import {GridItem} from "@chakra-ui/react";
import React, {useEffect} from 'react';
import {Button} from "@chakra-ui/button";

function Project({position, text, font}) {
    const MotionGridItem = motion(GridItem);
    const MotionButton = motion(Button);
    const standardVariants = {visible: {opacity: 1, x: 0, y: 0, transition: {duration: 0.75}}};
    const textTransition = {transition: {duration: position.endsWith("middle") ? 1.3 : 1.2, delay: 0.3}};
    const textVisible = {visible: {opacity: 1, x: 0, y: 0, rotateX: 0, rotate: 0, ...textTransition}}
    const textAnimationControls = useAnimation();
    const textAnimationVariants = {
        init: {y: 0, rotateY: 0, scale: 1, transition: {duration: 1, type: "tween"}},
        anim: {y: -50, rotateY: 360, scale: 0.7, transition: {duration: 1, type: "tween"}}
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

    const descriptionControls = useAnimation();
    const descriptionVariants = {
        hidden: {opacity: 0, y: -50},
        visible: {opacity: 1, y: -60, transition: {duration: 0.75, delay: 0.25}}
    }
    const descriptionText = "This is a super descriptive description about my super cool project xD Click buttons below for more";
    return (
        <AnimatePresence>
            <MotionGridItem borderRadius="8px"
                            variants={variants}
                            onHoverStart={() => {
                                textAnimationControls.start(textAnimationVariants.anim)
                                descriptionControls.start(descriptionVariants.visible)
                            }}
                            onHoverEnd={() => {
                                textAnimationControls.start(textAnimationVariants.init)
                                descriptionControls.start(descriptionVariants.hidden)
                            }}
                            initial="hidden"
                            animate="visible"
                            mt={-10} colStart={colStart} colEnd={colEnd} h='40'  bg="none" mb={20} ml={15} mr={15}>
                <Flex justifyContent="center" mt={10} width="100%">
                    <motion.h1
                        initial={textVariants.hidden}
                        animate={textAnimationControls}
                        style={{fontSize: 45, fontFamily: font}}>
                        {text}
                    </motion.h1>

                </Flex>
                <motion.div style={{fontSize: 13,textAlign:"center"}}
                          variants={descriptionVariants}
                          initial="hidden"
                          animate={descriptionControls}
                ><Text mb={2}>{descriptionText}</Text>
                <MotionButton size="sm">More Info</MotionButton></motion.div>
            </MotionGridItem>
        </AnimatePresence>

    )
}

export default Project;