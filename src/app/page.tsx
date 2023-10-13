"use client";

import {
  AspectRatio,
  Box,
  Flex,
  Text,
  Center,
  Image,
  Icon,
  Link as ChakraLink,
  HStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Asset from "../../components/Asset";
import { FaDiscord, FaTiktok } from "react-icons/fa6";
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
  {
    src: "./assets/grumpy.png",
    alt: "bitcoin grumpy",
  },
  {
    src: "./assets/hungry.png",
    alt: "bitcoin hungry",
  },
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
      <Flex justifyContent='center' mb={6}>
        <HStack spacing={4}>
          <Flex alignItems='center'>
            <Icon
              as={FaDiscord}
              mr={0.5}
              color='maroon'
              fontSize={{
                base: 16,
                lg: 18,
              }}
            />
            <ChakraLink
              as={NextLink}
              color='maroon'
              href='#downloads'
              fontSize={{
                base: 16,
                lg: 18,
              }}
              fontFamily='nav'
            >
              Discord
            </ChakraLink>
          </Flex>

          <Flex alignItems='center'>
            <Icon
              as={FaTiktok}
              mr={0.5}
              color='maroon'
              fontSize={{
                base: 16,
                lg: 18,
              }}
            />
            <ChakraLink
              as={NextLink}
              color='maroon'
              href='#downloads'
              fontSize={{
                base: 16,
                lg: 18,
              }}
              fontFamily='nav'
            >
              TikTok
            </ChakraLink>
          </Flex>

          <Flex alignItems='center'>
            <Icon
              as={IoIosMail}
              mr={0.5}
              color='maroon'
              fontSize={{
                base: 16,
                lg: 18,
              }}
            />
            <ChakraLink
              as={NextLink}
              color='maroon'
              href='mailto:hello@herecomesbitcoin.org'
              fontSize={{
                base: 16,
                lg: 18,
              }}
              fontFamily='nav'
            >
              Contact
            </ChakraLink>
          </Flex>
        </HStack>
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
          src='https://www.youtube.com/embed/cGc_NfiTxng?si=1-5yxtE6NkVz3csT'
          allowFullScreen
        />
      </AspectRatio>

      <Flex justifyContent='center'>
        <Image
          src='./assets/who-is-bitcoin-title.png'
          mb={6}
          maxW={{
            base: "100%",
            lg: "600px",
          }}
        />
      </Flex>

      <Center mb={14}>
        <Text color='maroon' textAlign='center'>
          Here Comes Bitcoin is the central resource for all things Bitcoin
          (puppet, not currency), including license-free creative assets that
          you can use to make anything you want. And we hope you will. If what
          you make is great, we’ll add it here.
        </Text>
      </Center>

      <Flex justifyContent='center'>
        <Image
          src='./assets/make-your-own-asset.png'
          mb={2}
          maxW={{
            base: "100%",
            lg: "400px",
          }}
        />
      </Flex>

      <Text color='maroon' textAlign='center' mb={2}>
        Need a heavily caricatured bitcoin for your open-source project,
        conference keynote, or frightening cardboard cutout that lives in your
        attic? Grab a PNG and have at it. It’s all open-source and license-free.
        Have a new idea? Submit your own.
      </Text>
      <Box display='flex' justifyContent='center' mb={14}>
        <Flex wrap='wrap' w='100%'>
          {downloadableAssets.map((asset, key) => (
            <Asset key={key} src={asset.src} alt={asset.alt} />
          ))}
        </Flex>
      </Box>

      <Flex justifyContent='center'>
        <Image
          src='./assets/from-the-film.png'
          mb={2}
          maxW={{
            base: "100%",
            lg: "400px",
          }}
        />
      </Flex>

      <Text color='maroon' textAlign='center' mb={2}>
        Enough people requested these during Who is Bitcoin?’s prerelease that
        we knew they belonged here. While they aren’t as customizable as others
        assets (yet), they make great wallpapers and rebuttals to anyone who
        says bitcoiners don’t have a sense of humor about bitcoin.{" "}
      </Text>
      <Box display='flex' justifyContent='center' mb={4}>
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
      <Flex justifyContent='center'>
        <HStack spacing={4}>
          <Flex alignItems='center'>
            <Icon
              as={FaDiscord}
              mr={0.5}
              color='maroon'
              fontSize={{
                base: 16,
                lg: 18,
              }}
            />
            <ChakraLink
              as={NextLink}
              color='maroon'
              href='#downloads'
              fontSize={{
                base: 16,
                lg: 18,
              }}
              fontFamily='nav'
            >
              Discord
            </ChakraLink>
          </Flex>

          <Flex alignItems='center'>
            <Icon
              as={FaTiktok}
              mr={0.5}
              color='maroon'
              fontSize={{
                base: 16,
                lg: 18,
              }}
            />
            <ChakraLink
              as={NextLink}
              color='maroon'
              href='#downloads'
              fontSize={{
                base: 16,
                lg: 18,
              }}
              fontFamily='nav'
            >
              TikTok
            </ChakraLink>
          </Flex>

          <Flex alignItems='center'>
            <Icon
              as={IoIosMail}
              mr={0.5}
              color='maroon'
              fontSize={{
                base: 16,
                lg: 18,
              }}
            />
            <ChakraLink
              as={NextLink}
              color='maroon'
              href='mailto:hello@herecomesbitcoin.org'
              fontSize={{
                base: 16,
                lg: 18,
              }}
              fontFamily='nav'
            >
              Contact
            </ChakraLink>
          </Flex>
        </HStack>
      </Flex>
    </Box>
  );
}
