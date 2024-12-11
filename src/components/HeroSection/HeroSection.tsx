import React, { useContext } from 'react';
import { Box, Flex, Heading, Text, Container } from '@chakra-ui/react';
import { ColorContext } from '../../providers/ColorProvider';
import Image from "next/image";
import CustomButton from '../CustomButton/CustomButton';
import WaveBorderBottom from '../Waveborder/WaveBorderbottom';

interface HeroProps {
    productRef: React.RefObject<HTMLDivElement>;
}

const Hero: React.FC<HeroProps> = ({ productRef }) => {
    const { bgColor, heroImage } = useContext(ColorContext);

    const scrollToProducts = () => {
        if (productRef.current) {
            productRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Box position="relative" overflow="hidden">
            {/* Main Hero Section */}
            <Box bg={bgColor} pt={10} pb={{ base: 36, md: 24, lg: 24 }} px={{ base: 6, md: 10, lg: "30px" }}>
                <Container maxW="container.2xl">
                    <Flex
                        direction={{ base: "column", md: "row" }}
                        align="center"
                        justify="space-between"
                        wrap="wrap"
                        padding={{ base: 0, md: "1rem", lg: "2rem" }}
                        position="relative"
                        paddingBottom={{ base: "7rem", md: "10rem" }}
                    >
                        {/* Hero Text Section */}
                        <Box width={{ base: "100%", md: "50%" }} zIndex={1} textAlign={{ base: "left", md: "left" }}>
                            <Heading
                                mb={6}
                                fontSize={{ base: "4xl", md: "5xl", lg: "7xl" }}
                                lineHeight={1.2}
                                color="#13294b"
                                fontWeight="medium"
                            >
                                Bitcoin Stuff for <br />
                                Your Bitcoin Stuff
                            </Heading>
                            <Box width={{ base: "100%", md: "600px" }} maxWidth="100%" margin={{ base: 0, md: "0 auto 0 0" }}>
                                <Text
                                    mb={10}
                                    fontSize={{ base: "md", md: "xl", lg: "3xl" }}
                                    lineHeight="1.5"
                                    color="#13294b"
                                    fontWeight="500"
                                    whiteSpace="normal"
                                    wordBreak="break-word"
                                >
                                    HereComesBitcoin is the central resource for all things Bitcoin (puppet, not currency), including license-free creative assets that you can use to make whatever you want.
                                </Text>
                            </Box>

                            <CustomButton
                                bg="#F7931A"
                                color="white"
                                fontSize="30px"
                                padding="1.9rem 1.5rem"
                                borderRadius="full"
                                onClick={scrollToProducts}
                            >
                                Shop Now
                            </CustomButton>
                        </Box>

                        {/* Hero Image Section for Mobile */}
                        <Box
                            display={{ base: "block", md: "none" }}
                            position="absolute"
                            left="50%"
                            bottom="-200px"
                            transform="translateX(-50%)"
                            width="100%"
                            zIndex={2}
                        >
                            <Image
                                src={heroImage}
                                alt="Hero image"
                                objectFit="contain"
                                layout="responsive"
                                width={700}
                                height={700}
                                priority
                            />
                        </Box>

                        {/* Hero Image Section for Desktop and Tablet */}
                        <Box
                            display={{ base: "none", md: "block" }}
                            position="absolute"
                            right={{ md: "-10%", lg: "-6%" }}
                            bottom={{ md: "-180px", lg: "-240px" }}
                            width={{ md: "65%", lg: "840px" }}
                            height={{ md: "700px", lg: "840px" }}
                            zIndex={2}
                        >
                            <Image
                                src={heroImage}
                                alt="Hero image"
                                objectFit="contain"
                                layout="responsive"
                                width={1200}
                                height={840}
                                priority
                            />
                        </Box>
                    </Flex>
                </Container>
            </Box>
            <Box position="relative" height={{ base: "50px", md: "100px" }} zIndex={1} mb={{ base: 7, md: 14 }}>
                <WaveBorderBottom color={bgColor} />
            </Box>
        </Box>
    );
};

export default Hero;

