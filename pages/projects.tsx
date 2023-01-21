import { Box, Flex } from "@chakra-ui/react";
import fs from "fs";
import { NextPageContext } from "next";

import ProjectItem from "../components/projectItem";
import ProjectData from "../types/ProjectData";

export async function getStaticProps(context: NextPageContext) {
    // sets props to an array containing an object of each projects .json file found under /projectdata 
    let projectFiles = fs.readdirSync("./projectdata", "utf-8")
    projectFiles = projectFiles.filter((fileName) => fileName.slice(-5) == ".json")
    const projectsData = projectFiles.map((fileName) => {
        const fileData = fs.readFileSync(`./projectdata/${fileName}`, "utf-8")
        return JSON.parse(fileData)
    })
    return {
        props: {
            projectsData
        },
    }
}

const Projects = (props: any) => {

    const RenderProjects = props.projectsData.map((data: ProjectData) => {
        return <ProjectItem data={data} key={data.projectID} />
    })

    return (
        <Box >
            <Flex flexWrap="wrap" justifyContent="space-evenly">
                {RenderProjects}
            </Flex>
        </Box>
    )
}

export default Projects;
