import React from "react";
// import twitchPop from '../images/Gaming App Project.png';
// import cassetteTape from '../images/The Cassette Tape.png';
// import Rappor from '../images/Rappor.png';
import Project from '../components/ProjectsContainer';
import { Heading } from "@chakra-ui/react";

const portfolio = [
    {
        id: 1,
        image: "../images/Gaming App Project.png",
        name: "Twitch Popularity Tracker",
        alt: "Twitch Popularity Tracker",
        description: "",
        repo: "https://github.com/ThinkK1ng/Gaming-APP-Project",
        link: "https://thinkk1ng.github.io/Gaming-APP-Project/",
      },
      {
        id: 2,
        image: '../images/The Cassette Tape.png',
        name: "The Cassette Tape",
        alt: "The Cassette Tape",
        description: "",
        repo: "https://github.com/hmustain/The-Cassette-Tape",
        link: "https://the-cassette-tape.herokuapp.com",
      },
      {
        id: 3,
        image: '../images/Rappor.png',
        name: "Rappor",
        alt: "Rappor",
        description: "",
        repo: "https://github.com/Carter-Schmitz/Rappor",
        link: "https://rappor-social-media.herokuapp.com/",
      },
];

export default function Portfolio() {
    return (
        <div>
            <Heading>Portfolio</Heading>
            <Project portfolio={portfolio} />
        </div>
    );
}