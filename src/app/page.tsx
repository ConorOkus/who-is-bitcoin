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
    src: "./Acrobat.png",
    alt: "bitcoin acrobat",
  },
  {
    src: "./Count.png",
    alt: "bitcoin count",
  },
  {
    src: "./Fancy.png",
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
    src: "./Mrs.png",
    alt: "bitcoin mrs",
  },
  {
    src: "./Sir.png",
    alt: "bitcoin sir",
  },
  {
    src: "./Super.png",
    alt: "bitcoin super",
  },
  {
    src: "./surfer.png",
    alt: "bitcoin surfing",
  },
  {
    src: "./UFO.png",
    alt: "bitcoin ufo",
  },
];

const showcase = [
  {
    src: "./Alien.png",
    alt: "bitcoin alien",
  },
  {
    src: "./beach.png",
    alt: "bitcoin beach",
  },
  {
    src: "./cooking.png",
    alt: "bitcoin cooking",
  },
  {
    src: "./Dracula.png",
    alt: "bitcoin dracula",
  },
  {
    src: "./Farmer.png",
    alt: "bitcoin farmer",
  },
  {
    src: "./Safari.png",
    alt: "bitcoin safari",
  },
  {
    src: "./Surfing.png",
    alt: "bitcoin surfing",
  },
  // {
  //   src: "./Victory.png",
  //   alt: "bitcoin victory",
  // },
  {
    src: "./Woods.png",
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
        base: 8,
        lg: 12,
      }}
    >
      <Flex
        justifyContent='center'
        mb={{
          base: 8,
          lg: 12,
        }}
      >
        <HStack spacing={8}>
          <ChakraLink
            as={NextLink}
            color='maroon'
            fontWeight='bold'
            href='#downloads'
            fontSize={{
              base: 16,
              lg: 24,
            }}
          >
            Discord
          </ChakraLink>
          <ChakraLink
            as={NextLink}
            color='maroon'
            fontWeight='bold'
            href='#downloads'
            fontSize={{
              base: 16,
              lg: 24,
            }}
          >
            Tik Tok
          </ChakraLink>
        </HStack>
      </Flex>
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
      <BookmanHeading textAlign='center' mb={6} id='downloads'>
        Downloadable Assets
      </BookmanHeading>
      <Text color='maroon' textAlign='center' px={8} mb={2}>
        Build your own Bitcoin adventure and share it with the world.
      </Text>
      <Box display='flex' justifyContent='center' mb={12}>
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
        <HStack spacing={4}>
          <Icon as={IoIosMail} w={8} h={8} color='maroon' />
          <Text fontWeight='bold' color='maroon'>
            hello@whoisbitcoin.org
          </Text>
        </HStack>
      </Flex>
    </Box>
  );
}
