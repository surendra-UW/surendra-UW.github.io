import { Box, Heading, HStack, VStack, Text, Image} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection"



const AboutMeSection = () => {
    return (
        <FullScreenSection
          marginTop='30px'
          isDarkBackground={false}
          backgroundColor="white"
          py={16}
          spacing={8}
        >
            <HStack justifyContent='space-evenly' alignItems={"center"} minHeight='60vh'>
                <VStack width='40%' spacing='5' alignItems='start'>
                <Heading fontSize='5xl' id="aboutme-section">
                    About Me
                </Heading>
                <Text fontSize='2xl'>
                    I am Surendra. I have 3 years of experience as a Full Stack Developer.
                    My Interests range from distributed big data Systems to Machine Learning and Data Science.
                    I like understanding systems from basics and build things from scratch.
                </Text>
                
                </VStack>
                <Box width='40%' bgGradient={"linear(to-tr, #aeeaff, #ffb6c1)"}>
                <Box width='90%' maxHeight='10%' overflow='hidden'>
                    <Image src={require("../images/photo2.jpg")} >

                    </Image>
                </Box>
                </Box>
            </HStack>
        </FullScreenSection>
        );
}


export default AboutMeSection;