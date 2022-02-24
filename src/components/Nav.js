import React from 'react';
import {Flex, Spacer} from "@chakra-ui/layout";
import {motion} from "framer-motion";
import {IconButton} from "@chakra-ui/button";
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import Logo from "./Logo";

function Nav() {
    return (
        <Flex w="100%">
            <Logo/>
            <Spacer/>
            <motion.div initial={{x: 200, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 1}}>
                <IconButton icon={<FaLinkedin/>} isRound='true'/>
                <IconButton ml={2} icon={<FaInstagram/>} isRound='true'/>
                <IconButton ml={2} icon={<FaGithub/>} isRound='true'/>
            </motion.div>

        </Flex>

    );
}

export default Nav;