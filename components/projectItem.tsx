import { Box, Image , Text, Flex, Heading, Tag, Wrap, Button, SlideFade, Spacer } from "@chakra-ui/react";
import ProjectData from "../types/ProjectData";
import Link from "next/link";
import ExternalLink from "./externalLink";
import GithubLink from "./githubLink";

const ProjectItem = (props: any) => {

    const data: ProjectData = props.data;

    const pad: number = 3;

    const renderTags = () => {
        return data.tags.map((tag: string) => {
          return (
            <Tag key={tag}>{tag}</Tag>
          )  
        })
    }

    // if a markdown file was provided, render only the link to the project page,
    // otherwise try to render the github link button and/or external link button  
    const renderButtons = () => {
        if(data.markdown != undefined){
            return(  
                <Box  alignSelf="flex-end" justifyItems="center">
                    {data.deployedLink != undefined ? <ExternalLink tooltip="Open demo" size="lg" url={data.deployedLink}/> : null}
                    <Link href={`/projects/${encodeURIComponent(data.projectID)}`}>
                        <Button  alignSelf="flex-end" >Read More</Button>
                    </Link>
                </Box>
            )
        } else {
            return (
                <Box alignSelf="flex-end" >
                {data.deployedLink != undefined ? <ExternalLink tooltip="Open demo" size="lg" url={data.deployedLink}/> : null}
                {data.githubLink != undefined ? <GithubLink size="lg" url={data.githubLink}/> : null}
                </Box>
            )
        }
    }

    return (
        <SlideFade in>
           <Flex maxW="350" h="100%" padding={2}  direction="column" margin={5} >
                <Box>
                    <Image  fit="contain" src={data.imageURL} alt="Project Thumbnail"/>
                </Box>
                <Heading my={pad}>{data.title}</Heading>
                <Wrap spacing={pad}>
                    {renderTags()}
                </Wrap>
                <Text my={pad}>
                    {data.description}
                </Text>
                <Spacer/>
                {renderButtons()} 
           </Flex>
         </SlideFade>
    )
}

export default ProjectItem;