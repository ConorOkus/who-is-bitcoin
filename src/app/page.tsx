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
  Icon,
  Link as ChakraLink,
  VStack,
} from "@chakra-ui/react";
import HamburgerMenu, { MenuItems } from "../../components/HamburgerMenu";
import NextLink from "next/link";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Asset from "../../components/Asset";
import { BookmanHeading } from "../../components/BookmanHeading";
import { FaTiktok } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

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
    <Box
      px={{
        base: 6,
        lg: "192px",
      }}
      py={{
        base: 6,
        lg: 12,
      }}
    >
      <AspectRatio
        width='100%'
        height={{
          base: "auto",
          lg: "600px",
        }}
        ratio={4 / 3}
        mb={8}
      >
        <iframe
          title='rick'
          src='https://www.youtube.com/embed/QhBnZ6NPOY0'
          allowFullScreen
        />
      </AspectRatio>

      <BookmanHeading textAlign='center' mb={6}>
        Here Comes Bitcoin
      </BookmanHeading>

      <Center mb={6}>
        <Text
          color='maroon'
          maxW={600}
          px={{
            base: 4,
            lg: 0,
          }}
          textAlign='center'
        >
          Bitcoin...you heard somebody on the news saying it’s for criminals.
          Your friend’s friend made some money off it. But have you ever met
          Bitcoin? Who is bitcoin really?
        </Text>
      </Center>
      <Box display='flex' justifyContent='center' mb={12}>
        <ChakraLink
          as={NextLink}
          color='maroon'
          fontWeight='bold'
          href='#downloads'
        >
          <Icon
            as={FaTiktok}
            mr={2}
            color='maroon'
            fontSize={{
              base: 24,
              lg: 32,
            }}
          />
        </ChakraLink>
        <ChakraLink
          as={NextLink}
          color='maroon'
          fontWeight='bold'
          href='#downloads'
        >
          <Icon
            as={IoIosMail}
            mr={2}
            color='maroon'
            fontSize={{
              base: 24,
              lg: 32,
            }}
          />
        </ChakraLink>
      </Box>
      {/* <Center mb={12}>
        <Button
          rightIcon={<ArrowForwardIcon fontSize={32} />}
          color='maroon'
          fontFamily='heading'
          variant='outline'
          borderColor='maroon'
          size='lg'
          py={8}
          borderWidth={4}
          fontSize={16}
        >
          Learn More About Bitcoin
        </Button>
      </Center> */}
      <BookmanHeading textAlign='center' mb={6} id='downloads'>
        Downloadable Assets
      </BookmanHeading>
      <Text color='maroon' textAlign='center' px={8} mb={2}>
        Build your own Bitcoin adventure and share it with the world.
      </Text>
      <Box display='flex' justifyContent='center' mb={12}>
        <Flex wrap='wrap' w='100%'>
          {downloadableAssets.map((asset, key) => (
            <Asset
              key={key}
              src={asset.src}
              alt={asset.alt}
              svgLink={asset.svgLink}
              pngLink={asset.pngLink}
            />
          ))}
        </Flex>
      </Box>
      <BookmanHeading textAlign='center' mb={6} id='showcase'>
        Showcase
      </BookmanHeading>
      <Text color='maroon' textAlign='center' px={8} mb={2}>
        Build your own Bitcoin adventure and share it with the world.
      </Text>
      <Box display='flex' justifyContent='center'>
        <Flex wrap='wrap' w='100%'>
          {showcase.map((asset, key) => (
            <Image
              src={asset.src}
              alt={asset.alt}
              key={key}
              w={["100%", "50%"]}
              p={3}
            />
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
