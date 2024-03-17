import React from "react";
import { Avatar, Box, Heading, HStack, VStack, Text} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Surendra!";
const bio = "A Full-Stack Developer";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground={false}
    backgroundColor="white"
    bgGradient={"linear(to-tr, #aeeaff, #ffb6c1)"}
  >

  <VStack>
  <Heading size="4xl">
    <HStack spacing={2}>
    <img width="75" height="75" viewBox="0 0 24 24" src={require("../images/hello.jpg")}></img>
    <Text>{greeting}</Text>
    </HStack>
    <div>{bio}</div>
  </Heading>
  <Avatar src={require("../images/photo1.jpg")} alt="Surendra Profile Picture" size="2xl"/> 
  </VStack>
  </FullScreenSection>
);

export default LandingSection;
