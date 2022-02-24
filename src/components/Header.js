import {Button} from '@chakra-ui/button';
import {useColorMode} from '@chakra-ui/color-mode'
import {Image} from '@chakra-ui/image';
import {Stack, Flex, Box, Text} from '@chakra-ui/layout';
import {useMediaQuery} from '@chakra-ui/media-query';
import React from 'react'
import {motion} from 'framer-motion'
import {Link} from "react-router-dom";

function Header() {

    const {colorMode} = useColorMode();
    const isDark = colorMode === "dark";
    const MotionImage = motion(Image);
    const MotionText = motion(Text);
    const exit = {opacity: 0, x: -100, rotateY: -35, transition: {ease: "easeOut", duration: 0.5}}
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    const sentence = {visible: {transition: {delay: 0.5, staggerChildren: 0.08}}, exit: {...exit}}
    const sentence2 = {visible: {transition: {delay: 3, staggerChildren: 0.005}}, exit: {...exit}}
    const letter = {hidden: {opacity: 0, y: 50}, visible: {opacity: 1, y: 0}}
    const MotionButton = motion(Button)
    const line1 = "Hi, I am"
    const line2 = "I'm a 21 year old software engineer specializing in JavaScript. I've been programming for 4 years and my interests include working with React & Node.js."
    return (
        <Stack>
            <Flex direction="ROW" spacing="200px" p="32" alignSelf="flex-start">
                <Box mt={-5} align='flex-start'>
                    <MotionText variants={sentence}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                fontSize="5xl" fontWeight="semibold">
                        {line1.split("").map((char, index) =>
                            <motion.span key={char + "-" + index} variants={letter}>
                                {char}
                            </motion.span>
                        )}
                    </MotionText>
                    <MotionText
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.5, duration: 1}}
                        exit={exit}
                        mt={-6} ml={-3} fontSize="7xl" fontWeight="bold"
                        bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text'>
                        Avery King
                    </MotionText>


                    <MotionText
                        variants={sentence2}
                        initial="hidden"
                        exit="exit"
                        animate="visible"
                    >
                        {line2.split("").map((char, index) => {
                            return (
                                <motion.span key={char + "-" + index}
                                             variants={letter}>
                                    {char}
                                </motion.span>
                            )
                        })}
                    </MotionText>
                    <motion.div
                        exit={{
                            opacity: 0, x: -100, rotateY: -35, transition: {
                                ease: "easeOut",
                                duration: 0.5,
                            }
                        }}
                    >

                        <MotionButton
                            initial={{opacity: 0, y: -30, x: -15}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.5, duration: 0.5}}
                            variant="outline" mt={8} colorScheme="blue"
                        >Hire Me
                        </MotionButton>

                        <Link to="/projects">
                            <MotionButton

                                initial={{opacity: 0, y: 30}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 0.5, duration: 0.5}}
                                mt={8} variant="outline" colorScheme="blue">Projects</MotionButton>
                        </Link>

                        &emsp;
                        <MotionButton

                            initial={{opacity: 0, y: -30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.5, duration: 0.5}}
                            mt={8} variant="outline" colorScheme="blue" >
                            About
                        </MotionButton>
                    </motion.div>
                </Box>
                <MotionImage
                    exit={{opacity: 0, x: 100, rotateX: 30, transition: {ease: "easeOut", duration: 0.5,}}}
                    initial={{opacity: 0}}
                    animate={{opacity: 1, scale: [0, 1]}}
                    transition={{duration: 1}}
                    alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src='image.png'/><br/>

            </Flex>

        </Stack>

    )
}

export default Header
