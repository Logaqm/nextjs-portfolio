import { IconButton } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"

const ExternalLink = (props: any) => {
    
    const url:string = props.url 
    const tooltip:string = props.tooltip 
    const size: string = props.size
    
    return (
            <IconButton title={tooltip} size={size} aria-label="Project Link" icon={<ExternalLinkIcon />} onClick={() => window.open(url)} variant="link" />
    )
} 

export default ExternalLink