import { IconButton } from "@chakra-ui/react"
import { BsGithub }  from "react-icons/bs"

const GithubLink = (props: any) => {
    
    const url:string = props.url 
    const size:string = props.size
    
    return (
        <IconButton size={size} aria-label="Github link" icon={<BsGithub/>} onClick={() => window.open(url)} variant="link" />
    )
} 

export default GithubLink