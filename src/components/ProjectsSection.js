import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "SQL Query Generation",
    description:
      "A pipeline for Text to SQL translation using RAG on GPT 4, and by fine-tuning foundation LLM models",
    getImageSrc: () => require("../images/LLM.png"),
  },
  {
    title: "Database Parameter Tuning",
    description:
      "An efficient way to fine tune database or key-value store performace using machine learning techniques like Bayesian Optimization and reinforcement learning",
    getImageSrc: () => require("../images/redis.png"),
  },
  {
    title: "External Mergesort",
    description:
      "An efficient mergesort implementation which can sort data of order 200GB using techniques like graceful degradation, tournament trees and offset value codes mimicing 4 level memory hierarchy Cache, Dram, SSD and HDD.",
    getImageSrc: () => require("../images/photo3.jpg"),
    projectLink: "https://github.com/surendra-UW/CS764"
  },
  {
    title: "Machine Learning",
    description:
      "building machine learning models like logistic regression, Decision trees, Random Forest, Naive Bayes and KNN from scratch and compare all the models on titanic dataset.",
    getImageSrc: () => require("../images/photo4.jpg"),
    projectLink: 'https://github.com/surendra-UW/Decision-Tree'
  },
  {
    title: "Camp Diaries",
    description:
      "A worklife management tool for the NGO to manage Volunteers communication and assign Students to their interests and talent.",
    getImageSrc: () => require("../images/campDiaries.jpeg"),
    projectLink: 'https://campdiaries.org/lander'
  },
  
  {
    title: "Transcription App",
    description:
      "A transcription using AWS services like AWS S3, AWS Lambda, AWS Transcribe to transcribe voice to text. Deployments to AWS are doen through terraform.",
    getImageSrc: () => require("../images/AwsTranscribe.png"),
  },
];

const ProjectsSection = () => {
  return (  
    <FullScreenSection
      backgroundColor="white"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
      bgGradient={"linear(to-tr, #aeeaff, #E07E93)"}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            projectLink={project.projectLink}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
