import React from "react";
import { Box, HStack} from "@chakra-ui/react";

export default function Footer() {
    return (
        <Box>
            <footer>
                <HStack>
                    <a href="https://github.com/ThinkK1ng">Github</a>
                    <a href="https://www.linkedin.com/in/clarence-givens-1491a4b5/">LinkedIn</a>
                </HStack>
            </footer>
        </Box>
    )
}