import React from 'react';
import { Box, Flex, Stack, Text, Heading, Link, Container, Grid, GridItem, Icon } from "@chakra-ui/react";
import Image from 'next/image';
import NextLink from "next/link";
import { FaYoutube, FaDiscord } from 'react-icons/fa';
import WaveBorderTop from '../Waveborder/WaveBorderTop';
import CustomButton from '../CustomButton/CustomButton';

const Footer = () => {
  return (
    <Box>
      <Box position="relative" height="100px" zIndex={1}>
        <WaveBorderTop color='#12334C' />
      </Box>
      <Box as="footer" position="relative" bg="#12334C" color="#A6B5C5" pt="40px">
        <Container maxW="container.2xl" px={{ base: 6, lg: "100px" }} py={0}>
          <Grid templateColumns={{ base: "1fr", lg: "1fr 2fr" }} mt={10}>
            <GridItem>
              <Stack spacing={6} width={{ base: "100%", lg: "auto" }}>
                <Heading fontSize="6xl" fontWeight="medium" color="#8ED7E8">
                  Get In Touch
                </Heading>
                <Text fontSize="20px" maxW="300px" lineHeight="1.5" color="white">
                  For shop support, business, and licensing enquiries, please click below to get in touch!
                </Text>
                <CustomButton
                  bg="#FFD24C"
                  href="mailto:hello@herecomesbitcoin.org"
                  color="#12334C"
                  fontSize="28px"
                  padding="1.7rem 1.5rem"
                  width="fit-content"
                  mb={8}
                  mt={6}
                >
                  Contact Us
                </CustomButton>
              </Stack>

              <Stack spacing={6} width={{ base: "100%", lg: "auto" }} mt={8} display={{ base: "none", lg: "block" }}>
                <Heading fontSize="6xl" fontWeight="medium" color="#8ED7E8" mb={6}>
                  Follow Us
                </Heading>
                <Flex mb={4}>
                  <Link href="https://www.youtube.com/@herecomesbitcoin" isExternal mr={6}>
                    <Icon as={FaYoutube} boxSize="40px" color="white" />
                  </Link>
                  <Link href="https://discord.gg/BChUGPzS5U" isExternal>
                    <Icon as={FaDiscord} boxSize="40px" color="white" />
                  </Link>
                </Flex>
              </Stack>

              <Text mt={20} fontSize="16px" color="#A6B5C5" display={{ base: "none", lg: "block" }}>
                Copyright @ HereComesBitcoin Ltd.
              </Text>
            </GridItem>

            <GridItem>
              <Flex
                direction={{ base: "column", lg: "row" }}
                justifyContent="space-between"
                alignItems={{ base: "flex-start", lg: "flex-start" }}
              >
                <Stack spacing={4} width={{ base: "100%", lg: "auto" }} display={{ base: "none", lg: "block" }}>
                  <Heading fontSize="6xl" fontWeight="medium" color="#8ED7E8" mb={6}>
                    Explore
                  </Heading>
                  <Stack spacing={2}>
                    <NextLink href="https://x.com/spiralbtc/status/1788239963626123600/" passHref>
                      <Link fontSize="20px" color="white">Usage Guidelines</Link>
                    </NextLink>
                    <NextLink href="/built-with-hcb" passHref>
                      <Link fontSize="20px" color="white">Built With HCB</Link>
                    </NextLink>
                    <NextLink href="mailto:hello@herecomesbitcoin.org" passHref>
                      <Link fontSize="20px" color="white">Want To Collab?</Link>
                    </NextLink>
                  </Stack>
                </Stack>

                <Box display={{ base: "none", lg: "block" }} mt={60} mb={8}>
                  <Image
                    src="/assets/FooterImages/CatFooter.png"
                    alt="Bitcoin Cat"
                    layout="responsive"
                    width={680}
                    height={450}
                  />
                </Box>
              </Flex>
            </GridItem>

            {/* Mobile view adjustments */}
            <Box display={{ base: "block", lg: "none" }} position="relative" width="100%" height="auto" my={8}>
              <Stack spacing={6} mt={8}>
                <Heading fontSize="6xl" fontWeight="medium" color="#8ED7E8">
                  Explore
                </Heading>
                <Stack spacing={2}>
                  <NextLink href="https://x.com/spiralbtc/status/1788239963626123600/" passHref>
                    <Link fontSize="20px" color="white">Usage Guidelines</Link>
                  </NextLink>
                  <NextLink href="/built-with-hcb" passHref>
                    <Link fontSize="20px" color="white">Built With HCB</Link>
                  </NextLink>
                  <NextLink href="mailto:hello@herecomesbitcoin.org" passHref>
                    <Link fontSize="20px" color="white">Want To Collab?</Link>
                  </NextLink>
                </Stack>
              </Stack>

              <Stack spacing={6} mt={8}>
                <Heading fontSize="6xl" fontWeight="medium" color="#8ED7E8">
                  Follow Us
                </Heading>
                <Flex mb={4}>
                  <Link href="https://www.youtube.com/@herecomesbitcoin" isExternal mr={6}>
                    <Icon as={FaYoutube} boxSize="40px" color="white" />
                  </Link>
                  <Link href="https://discord.gg/BChUGPzS5U" isExternal>
                    <Icon as={FaDiscord} boxSize="40px" color="white" />
                  </Link>
                </Flex>
              </Stack>

              <Image
                src="/assets/FooterImages/CatFooter.png"
                alt="Bitcoin Cat"
                layout="responsive"
                width={300}
                height={200}
                objectFit="contain"
                style={{ marginTop: '2rem' }}
              />
              <Text fontSize="16px" color="#A6B5C5" textAlign="center" mt={4}>
                Copyright @ HereComesBitcoin Ltd.
              </Text>
            </Box>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
