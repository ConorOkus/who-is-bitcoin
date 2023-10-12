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
  HStack,
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
    src: "./assets/acrobat.png",
    alt: "bitcoin acrobat",
  },
  {
    src: "./assets/count.png",
    alt: "bitcoin count",
  },
  {
    src: "./assets/fancy.png",
    alt: "bitcoin fancy",
  },
  // {
  //   src: "./Grumpy.png",
  //   alt: "bitcoin grumpy",
  // },
  // {
  //   src: "./Hungry.png",
  //   alt: "bitcoin hungry",
  // },
  {
    src: "./assets/mrs.png",
    alt: "bitcoin mrs",
  },
  {
    src: "./assets/sir.png",
    alt: "bitcoin sir",
  },
  {
    src: "./assets/super.png",
    alt: "bitcoin super",
  },
  {
    src: "./assets/surfer.png",
    alt: "bitcoin surfing",
  },
  {
    src: "./assets/UFO.png",
    alt: "bitcoin ufo",
  },
];

const showcase = [
  {
    src: "./assets/alien.png",
    alt: "bitcoin alien",
  },
  {
    src: "./assets/beach.png",
    alt: "bitcoin beach",
  },
  {
    src: "./assets/cooking.png",
    alt: "bitcoin cooking",
  },
  {
    src: "./assets/dracula.png",
    alt: "bitcoin dracula",
  },
  {
    src: "./assets/farmer.png",
    alt: "bitcoin farmer",
  },
  {
    src: "./assets/safari.png",
    alt: "bitcoin safari",
  },
  {
    src: "./assets/surfing.png",
    alt: "bitcoin surfing",
  },
  // {
  //   src: "./Victory.png",
  //   alt: "bitcoin victory",
  // },
  {
    src: "./assets/woods.png",
    alt: "bitcoin woods",
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
        lg: 8,
      }}
    >
      <Flex justifyContent='center'>
        <HStack spacing={8}>
          <ChakraLink
            as={NextLink}
            color='maroon'
            href='#downloads'
            fontSize={{
              base: 16,
              lg: 24,
            }}
            fontFamily='nav'
          >
            Discord
          </ChakraLink>
          <ChakraLink
            as={NextLink}
            color='maroon'
            href='#downloads'
            fontSize={{
              base: 16,
              lg: 24,
            }}
            fontFamily='nav'
          >
            TikTok
          </ChakraLink>
          <Text
            color='maroon'
            fontFamily='nav'
            fontSize={{
              base: 16,
              lg: 24,
            }}
            display={{
              base: "none",
              lg: "block",
            }}
          >
            hello@herecomesbitcoin.com
          </Text>
        </HStack>
      </Flex>
      <Flex
        justify='center'
        mb={{
          base: 6,
          lg: 10,
        }}
      >
        <Text
          color='maroon'
          fontFamily='nav'
          display={{
            base: "block",
            lg: "none",
          }}
        >
          hello@herecomesbitcoin.com
        </Text>
      </Flex>
      <AspectRatio
        width='100%'
        height={{
          base: "auto",
          lg: "600px",
        }}
        ratio={4 / 3}
        mb={10}
      >
        <iframe
          title='rick'
          src='https://www.youtube.com/embed/QhBnZ6NPOY0'
          allowFullScreen
        />
      </AspectRatio>

      <Image src='./assets/who-is-bitcoin-title.png' mb={8} />

      <Center mb={14}>
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
      <BookmanHeading textAlign='center' mb={6} id='downloads'>
        Downloadable Assets
      </BookmanHeading>
      <Text color='maroon' textAlign='center' px={8} mb={2}>
        Build your own Bitcoin adventure and share it with the world.
      </Text>
      <Box display='flex' justifyContent='center' mb={14}>
        <Flex wrap='wrap' w='100%'>
          {downloadableAssets.map((asset, key) => (
            <Asset key={key} src={asset.src} alt={asset.alt} />
          ))}
        </Flex>
      </Box>
      <BookmanHeading textAlign='center' mb={6} id='showcase'>
        Showcase
      </BookmanHeading>
      <Text color='maroon' textAlign='center' px={8} mb={2}>
        Build your own Bitcoin adventure and share it with the world.
      </Text>
      <Box display='flex' justifyContent='center' mb={6}>
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
      <Flex justify='center'>
        <Text fontWeight='bold' color='maroon'>
          hello@herecomesbitcoin.com
        </Text>
      </Flex>
    </Box>
  );
}
