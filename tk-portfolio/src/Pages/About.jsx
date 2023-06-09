import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import pfp from "../images/Thinking-final1.png";

export default function About() {
    return (
        <Box>
            <Image src={pfp} alt="Avatar" mx={500} boxSize={200}/>
            <Heading align="center" mb={10}>About Me</Heading>
            <Text mx={10}>Hello! My name is <strong>Clarence Givens</strong> and I'm an aspiring Full Stack web developer. I first thought to get into coding when I was in
          high school. I'd rewatched Gundam Seed and thought it was kinda cool
          how the main character wrote the entire OS for a huge robot. Now, I
          was well aware we didn't have any Gundam's laying around for the
          programming, but the concept was so cool that it caught my attention.
          I was discouraged from it because I was so bad at math. I didn't think
          I could do it. But here I am years later and I gotta say, while the
          work is hard it is certainly rewarding. I
        specialize in HTML, CSS, JavaScript, and React. I am currently
        attending the UTSA Coding Bootcamp.</Text>
        </Box>
    );
}