import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: smparla@wisc.edu",
  },
  {
    icon: faGithub,
    url: "https://github.com/surendra-UW",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/surendra-parla",
  },
  {
    icon: faMedium,
    url: "https://medium.com/@surendramanikumar143", 
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration="1s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
          spacing={18}
        >
          <nav>
          <HStack spacing={8}>
            {
            socials.map((social_media, index) => {
              return (<a key={index} href={social_media.url} target="_blank">
                    <FontAwesomeIcon icon={social_media.icon} size="2x" />
              </a>);
            })}
          </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#aboutme-section" id="aboutme-link" onClick={handleClick('aboutme')}>About</a>
              <a href="#projects-section" id="projects-link" onClick={handleClick('projects')}>Projects</a>
              <a href="#contactme-section" id="contact-link" onClick={handleClick('contactme')}>Contact</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
