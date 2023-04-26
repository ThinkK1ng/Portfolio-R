import React from "react";
import { Box, HStack, Link} from "@chakra-ui/react";
import {FaGithub, FaLinkedin} from "react-icons/fa";

export default function Footer() {
    return (
        <Box mt={100}>
            <footer>
                <HStack justifyContent="space-evenly">
                    <Link href="https://github.com/ThinkK1ng"><FaGithub /></Link>
                    <Link href="https://www.linkedin.com/in/clarence-givens-1491a4b5/"><FaLinkedin /></Link>
                </HStack>
            </footer>
        </Box>
    )
}