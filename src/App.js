import {VStack} from "@chakra-ui/layout";
import Header from "./components/Header";
import React from "react";
import Projects from "./components/Projects";
import {AnimatePresence} from 'framer-motion';
import Nav from "./components/Nav";
import {Route, Routes, useLocation} from "react-router-dom";
import "./css/App.css"
import Test from "./components/Test";

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
                    <Route path="/test" element={<Test />}/>
                </Routes>
            </AnimatePresence>
        </>

    )

}

export default App;
