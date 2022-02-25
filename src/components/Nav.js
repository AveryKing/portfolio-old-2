import React from 'react';
import {Flex, Spacer} from "@chakra-ui/layout";
import {motion} from "framer-motion";
import {IconButton} from "@chakra-ui/button";
import {
    FaGithub, FaGithubAlt,
    FaGithubSquare, FaGitlab,
    FaInstagram,
    FaLinkedin,
    FaLinkedinIn,
    FaMediumM,
    FaMoon,
    FaSun
} from "react-icons/fa";
import Logo from "./Logo";
import {useColorMode} from "@chakra-ui/color-mode";


function Nav() {
    const { colorMode, toggleColorMode } = useColorMode();

    const isDark = colorMode === "dark";
    return (
        <Flex w="100%">
            <Logo/>
            <Spacer/>
            <motion.div initial={{x: 200, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 1}}>
                <IconButton fontSize={20} icon={<FaGithub/>} isRound='true'
                onClick={()=> window.open("https://github.com/AveryKing")}/>
                <IconButton ml={2} icon={<FaLinkedinIn/>} isRound='true'
                            onClick={()=> window.open("https://linkedin.com/in/averyking1")}/>
                <IconButton ml={2} icon={<FaMediumM/>} isRound='true'
                            onClick={()=> window.open("https://avery-king.medium.com")}
                />
                <IconButton ml={8} icon={isDark ? <FaSun/> : <FaMoon/>} isRound='true' onClick={toggleColorMode}/>
            </motion.div>

        </Flex>

    );
}

export default Nav;