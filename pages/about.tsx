import { CopyIcon, EmailIcon } from "@chakra-ui/icons"
import { Box, Flex, IconButton, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, SlideFade, useToast } from "@chakra-ui/react"
import { BsLinkedin } from "react-icons/bs"
import GithubLink from "../components/githubLink"
import Badge from "../components/badge"
import fs from "fs"
import { NextPageContext } from "next/types"
import AboutConfig from "../types/AboutConfig"


export async function getStaticProps(context: NextPageContext) {
    // sets props to the config file data
    let config: AboutConfig = JSON.parse(fs.readFileSync(`./aboutConfig.json`, "utf-8"))
    
    return {
        props: {
            config
        },
    }
}

const About = (props: any) => {
    const toast = useToast()

    const config: AboutConfig = props.config

    const {linkedinURL, githubURL, email, about, badges} = config

    const renderBadges = badges ? badges.map(({image, url}) => {
        return (
            <Badge image={image} url={url} key={url}/>
        )
    }) : null

    return (
        <SlideFade in>
            <Flex direction="column" align="center" textAlign="center">
                <Box maxW={"80%"}>
                    {about}
                </Box>
                
                <Flex direction="row" justify="center" p={5}>
                    {githubURL ? <GithubLink url={githubURL} /> : <></> }
                    {linkedinURL ? <IconButton aria-label="Linkedin" icon={<BsLinkedin />} variant="link" onClick={() => window.open(linkedinURL)} /> : <></>}
                    {email ? <Popover>
                        <PopoverTrigger>
                            <IconButton aria-label="Send Email" icon={<EmailIcon />} variant="link" />
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverBody>
                                <Flex direction="row" justify="space-between">
                                    {email}
                                    <IconButton aria-label="Send Email" icon={<CopyIcon />} variant="link" onClick={() => {
                                        navigator.clipboard.writeText(email)
                                        toast({
                                            title: 'Copied to clipboard',
                                            duration: 2000,
                                        })
                                    }} />
                                </Flex>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                    : <></>}    
                </Flex>
                {renderBadges}
            </Flex>
        </SlideFade>
    )
}

export default About;