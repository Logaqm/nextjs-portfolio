import { Flex, Button, Spacer, Box } from "@chakra-ui/react";
import Link from "next/link";
import ThemeToggle from "./themeToggle";

const Navbar = () => {
    return (
        <Flex w="100%" my={8}>
            <Link href="/about">
                <Button
                    fontSize="2xl"
                    variant="unstyled"
                    size="lg"
                >About</Button>
            </Link>
            <Box w="5" />
            <Link href="/projects">
                <Button
                    fontSize="2xl"
                    variant="unstyled"
                    size="lg"
                >Projects</Button>
            </Link>
            <Spacer />
            <ThemeToggle />
        </Flex>

    )
}

export default Navbar;