import {IconButton} from "@chakra-ui/button";
import {useColorMode} from "@chakra-ui/color-mode";
import {Flex, VStack, Heading, Spacer} from "@chakra-ui/layout";
import {FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa'
import Header from "./components/Header";
import React, {useEffect} from "react";
import "./css/App.css"
import Projects from "./components/Projects";
import Nav from "./components/Nav";
import {AnimatePresence} from "framer-motion";
import {Route, Routes, useLocation} from "react-router-dom";

function App() {

    const location = useLocation();

    return (
        <>
            <VStack p={5}>
                <Nav/>
            </VStack>
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.key}>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/" element={<Header/>}/>
                </Routes>
            </AnimatePresence>
        </>

    )
        ;
}

export default App;
