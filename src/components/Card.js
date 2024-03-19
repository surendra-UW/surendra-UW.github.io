import { Box, Button, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, projectLink }) => {
  
  function openProjectLink() {
      window.open(projectLink, '_blank');
  };

  return (
    <Box borderWidth='1px' 
    borderRadius='lg'
    overflow='hidden'
    bg={'white'}
    alignItems='baseline'>
      <VStack color='black'>
        {imageSrc} && <Image objectFit='cover' maxHeight={'300px'} src={imageSrc}></Image>
        <VStack height='30%' pl='4' spacing='2' align='start'pb={2}>
          <Heading as="h6" size='md'>{title}</Heading>
          <Text color='gray.600' fontSize={'md'}>{description}</Text>
          <Button onClick={openProjectLink}>
            <HStack spacing={2}>
              <Text >showmore </Text>
              <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </HStack>
          </Button>
        </VStack>
    </VStack>
    </Box>
  );
};

export default Card;
