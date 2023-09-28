"use client";

import {
  AspectRatio,
  Box,
  Heading,
  Menu,
  Flex,
  Text,
  Button,
  Center,
  Grid,
  Image,
} from "@chakra-ui/react";
import HamburgerMenu, { MenuItems } from "../../components/HamburgerMenu";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Asset from "../../components/Asset";
import { BookmanHeading } from "../../components/BookmanHeading";

const downloadableAssets = [
  {
    src: "./knight.svg",
    alt: "bitcoin knight",
    svgLink: "./knight.svg",
    pngLink: "./knight.png",
  },
  {
    src: "./dracula.svg",
    alt: "bitcoin dracula",
    svgLink: "./dracula.svg",
    pngLink: "./dracula.png",
  },
  {
    src: "./flying.svg",
    alt: "bitcoin flying",
    svgLink: "./flying.svg",
    pngLink: "./flying.png",
  },
  {
    src: "./girl.svg",
    alt: "bitcoin girl",
    svgLink: "./girl.svg",
    pngLink: "./girl.png",
  },
];

const showcase = [
  {
    src: "./gm.png",
    alt: "bitcoin gm",
  },
  {
    src: "./victory.png",
    alt: "bitcoin gm",
  },
];

export default function Home() {
  return (
    <Box>
      <HamburgerMenu />

      <Flex
        pl={{
          base: 0,
          lg: 10,
        }}
        pr={{
          base: 0,
          lg: 24,
        }}
      >
        <Box
          mr={{
            base: 0,
            lg: 100,
          }}
          mt={100}
          display={{
            base: "none",
            lg: "block",
          }}
        >
          <Box w='200px' mb={8}>
            <Heading
              fontFamily='heading'
              fontWeight={400}
              fontStyle='normal'
              fontSize='42px'
              background='linear-gradient(to bottom, #EFF68F, #DD7D6D)'
              color='transparent'
              backgroundClip='text'
              lineHeight={1}
              sx={{
                WebkitTextFillColor: "transparent", // Equivalent to setting the text color, but more specific for Webkit
                WebkitTextStroke: "2px #B93F28",
              }}
              position='relative'
            >
              Here Comes Bitcoin
            </Heading>
          </Box>
          <MenuItems />
        </Box>
        <Box
          position={{
            base: "absolute",
            lg: "relative",
          }}
          w='100%'
          flex={1}
          mb={8}
        >
          <Box pb='56.25%' position='relative' height='0' mb={8}>
            <iframe
              title='A sample video'
              src='https://www.youtube.com/embed/dQw4w9WgXcQ'
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
            />
          </Box>
          <Center mb={8}>
            <Text
              color='maroon'
              maxW={600}
              px={{
                base: 4,
                lg: 0,
              }}
              textAlign='center'
            >
              Bitcoin...you heard somebody on the news saying it’s for
              criminals. Your friend’s friend made some money off it. But have
              you ever met Bitcoin? Who is bitcoin really?
            </Text>
          </Center>
          <Center mb={12}>
            <Button
              rightIcon={<ArrowForwardIcon fontSize={32} />}
              color='maroon'
              fontFamily='heading'
              variant='outline'
              borderColor='maroon'
              size='lg'
              w={300}
              p={6}
              borderWidth={4}
              fontSize={16}
            >
              Learn More About Bitcoin
            </Button>
          </Center>
          <BookmanHeading textAlign='center' mb={6} id='downloads'>
            Downloadable Assets
          </BookmanHeading>
          <Text color='maroon' textAlign='center' px={8} mb={8}>
            Build your own Bitcoin adventure and share it with the world.
          </Text>
          <Center mb={8}>
            <Grid
              w='100%'
              templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
              gap={4}
            >
              {downloadableAssets.map((asset, key) => (
                <Asset
                  key={key}
                  src={asset.src}
                  alt={asset.alt}
                  svgLink={asset.svgLink}
                  pngLink={asset.pngLink}
                />
              ))}
            </Grid>
          </Center>
          <BookmanHeading textAlign='center' mb={6} id='showcase'>
            Showcase
          </BookmanHeading>
          <Text color='maroon' textAlign='center' px={8} mb={8}>
            Build your own Bitcoin adventure and share it with the world.{" "}
          </Text>
          <Center mb={8}>
            <Grid
              w='100%'
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
              gap={4}
            >
              {showcase.map((asset, key) => (
                <Image src={asset.src} alt={asset.alt} px={4} key={key} />
              ))}
            </Grid>
          </Center>
        </Box>
      </Flex>
    </Box>
  );
}
