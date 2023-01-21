import { Box, IconButton, useColorMode } from "@chakra-ui/react"

import {MoonIcon, SunIcon} from '@chakra-ui/icons'


const ThemeToggle = () => {

    const { colorMode, toggleColorMode } = useColorMode()

    let darkMode = (colorMode == "light") ? false : true

    const selectIcon = () => {
        if(darkMode){
            return <SunIcon/> 
        } else return (
              <MoonIcon/> 
        )
    }
    
    return (
        <Box>
            <IconButton onClick={toggleColorMode} icon={selectIcon()} aria-label={"Toggle Light/Dark"} />
        </Box>
    )
}

export default ThemeToggle