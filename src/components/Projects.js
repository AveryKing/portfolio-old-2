import {Box, Flex, Stack, Text} from "@chakra-ui/layout";
import {Grid} from "@chakra-ui/react";
import {motion} from "framer-motion";
import Project from "./Project";

const MotionText = motion(Text)

function Projects() {

    const textVariants = {
        hidden: {opacity: 0, y: -100},
        visible: {opacity: 1, y: 0, transition: {duration: 0.75}}
    }
    const projects = [
        {name: "MyLife", position: "topLeft", font: "minya"},
        {name: "WeDraw", position: "topMiddle", font: "Pacifico"},
        {name: "PIXI Studio", position: "topRight", font: "monice"},
        {name: "DivinityUI", position: "bottomLeft", font: "Sage"},
        {name: "TBA", position: "bottomMiddle", font: "Arial"},
        {name: "TBA", position: "bottomRight", font: "Arial"}
    ]
    return (
        <Stack mt={-100} width="100%">
            <Flex direction="row" p="32" justifyContent="center">
                <Box mb={-20} mt={-5} align='middle'>
                    <MotionText variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                fontSize="5xl" fontWeight="semibold">
                        Projects
                    </MotionText>
                    <MotionText variants={textVariants}
                                initial="hidden"
                                animate="visible">
                        Below are some of my projects. Click one for more info.
                    </MotionText>
                </Box>
            </Flex>
            <Grid templateColumns='repeat(5, 1fr)' mt={-20}>
                {projects.map(({name, position, font},index) =>
                    <Project key={index} text={name} position={position} font={font}/>)}
            </Grid>
        </Stack>
    );
}

export default Projects;