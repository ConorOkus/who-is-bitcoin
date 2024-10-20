import React, { useContext } from 'react';
import { Box, Flex, Heading, Text, Image, Container } from '@chakra-ui/react';
import { ColorContext } from '../../providers/ColorProvider';
import CustomButton from '../CustomButton/CustomButton';
import WaveBorderBottom from '../Waveborder/WaveBorderbottom';

const Hero = () => {
    const { bgColor, heroImage } = useContext(ColorContext); // Ensure bgColor is reactive

    return (
        <Box position="relative" overflow="hidden">
            {/* Main Hero Section */}
            <Box bg={bgColor} pt={10} pb={24} px={{ base: 6, lg: "30px" }}>
                <Container maxW="container.2xl">
                    <Flex
                        align="center"
                        justify="space-between"
                        wrap="wrap"
                        padding="2rem"
                        position="relative"
                    >
                        {/* Hero Text Section */}
                        <Box maxW={{ base: "100%", md: "50%" }} zIndex={1}>
                            <Heading mb={6}
                                fontSize={{ base: "4xl", md: "5xl", lg: "7xl" }}
                                lineHeight={1.2}
                                color="#13294b"
                                fontWeight="medium">
                                Bitcoin Stuff For <br />
                                Your Bitcoin Stuff
                            </Heading>
                            <Text mb={10} fontSize="3xl" lineHeight={1.2} color="#13294b" fontWeight="500">
                                Here Comes Bitcoin is the central resource <br />for all things Bitcoin (mascot, not <br /> currency), including license-free creative <br />assets that
                                you can use to make whatever <br />
                                you want.
                            </Text>
                            <CustomButton
                                bg="#F7931A"
                                color="white"
                                fontSize='30px'
                                padding='1.9rem 1.5rem'
                                borderRadius="full"
                            >
                                Shop Now
                            </CustomButton>
                        </Box>

                        {/* Hero Image Section */}
                        <Box
                            position="absolute"
                            right="-6"
                            bottom="-240px"
                            width="60%"
                            height="840px"
                            zIndex={2}
                        >
                            <Image
                                src={heroImage}
                                alt="Hero image"
                                objectFit="contain"
                                width="100%"
                                height="100%"
                            />
                        </Box>
                    </Flex>
                </Container>
            </Box>
            <Box position="relative" height="100px" zIndex={1}>
                <WaveBorderBottom color={bgColor} />
            </Box>
        </Box>
    );
};

export default Hero;
