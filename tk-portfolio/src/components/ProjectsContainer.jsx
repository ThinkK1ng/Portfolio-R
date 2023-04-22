import { Card, CardBody, CardHeader, CardFooter, Heading, Button, Img } from "@chakra-ui/react";
import React from "react";

export default function ProjectsContainer(props) {
    return (
       <div>
        {props.portfolio.map((item) => {
            return (
                <Card key={item.id}>
                    <CardHeader>
                        <Img src={item.image} alt={item.alt} />
                    </CardHeader>
                    <CardBody>
                        <Heading>{item.name}</Heading>
                    </CardBody>
                    <CardFooter>
                        <Button><a href={item.repo}>Repository</a></Button>
                        <Button><a href={item.link}>Deployed</a></Button>
                    </CardFooter>
                </Card>
            )}
        )}
       </div> 
    )
}