import { Button, Image } from "@chakra-ui/react";
import Badge from "../types/Badge";

const badge = (props: Badge) => {
    
    const {image, url} = props

    return (
        <Button onClick={() => window.open(url)} variant="link">
            <Image src={image} boxSize="120px" alt="Badge image" />
        </Button>  
    )
}

export default badge