import {Flex} from "@chakra-ui/layout";
import {AnimatePresence, motion, useAnimation} from "framer-motion";
import {GridItem} from "@chakra-ui/react";
import React, {useState} from 'react';
import AnimatedCardText from "./AnimatedCardText";

function Project({position, text, font}) {
    const MotionGridItem = motion(GridItem);
    const standardVariants = {visible: {opacity: 1, x: 0, y: 0, transition: {duration: 0.75}}};
    const textTransition = {transition: {duration: position.endsWith("middle") ? 0.9 : 1, delay: 0.3}};
    const textVisible = {visible: {opacity: 1, x: 0, y: 0, rotateX: 0, rotate: 0, ...textTransition}}
    const textAnimationControls = useAnimation();
    const textHover = {
        hover: {
            scale: 0.8,
            rotateY: 360,
            y: -30,
            transition: {ease: "easeInOut", duration: 1, type: "tween"}
        }
    }
    const colStart = position.endsWith("Left") ? 2 : position.endsWith("Middle") ? 3 : position.endsWith("Right") ? 4 : null;
    const colEnd = colStart + 1;
    let variants;
    let textVariants;

    const setupVariants = (initialCardValues, initialTextValues) => {
        const standardHidden = {opacity: 0};
        variants = {...standardVariants, hidden: {...standardHidden, ...initialCardValues}}
        textVariants = {...textHover, ...textVisible, hidden: {...standardHidden, ...initialTextValues}}
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
    const divAnimationControls = useAnimation();
    const divAnimationVariants = {
        init: {
            y: 0, rotateY: 0, scale: 1,
            transition: {
                duration: 1,
                type: "tween"
            }
        },
        anim: {
            y: -40, rotateY: 360, scale: 0.7,
            transition: {
                duration: 1,
                type: "tween"
            }
        }
    }
    return (
        <AnimatePresence>
            <MotionGridItem borderRadius="8px"
                            variants={variants}
                            onHoverStart={() => {


                                divAnimationControls.start(divAnimationVariants.anim)
                            }
                            }
                            onHoverEnd={() => {

                                divAnimationControls.start(divAnimationVariants.init)
                            }}
                            initial="hidden"
                            animate="visible"
                            mt={-10} colStart={colStart} colEnd={colEnd} h='40' bg="teal" mb={20} ml={15} mr={15}>
                <Flex justifyContent="center" mt={10}>
                    <AnimatedCardText
                        variants={textVariants}
                        controls={divAnimationControls}
                        font={font}
                        text={text}/>
                </Flex>
            </MotionGridItem>
        </AnimatePresence>

    )
}

export default Project;