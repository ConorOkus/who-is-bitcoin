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
  Heading,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Asset from "../../components/Asset";
import { FaDiscord, FaTiktok } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { BsSignal } from "react-icons/bs";

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
    src: "./assets/hungry.png",
    alt: "bitcoin hungry",
  },
  {
    src: "./assets/mrs.png",
    alt: "bitcoin mrs",
  },
  {
    src: "./assets/grumpy.png",
    alt: "bitcoin grumpy",
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

const gifs = [
  {
    src: "./assets/bitcoin-eats-pigeon.gif",
    alt: "bitcoin eats pigeon",
  },
  {
    src: "./assets/bitcoin-hands-on-head.gif",
    alt: "bitcoin hands on head",
  },
  {
    src: "./assets/bitcoin-hugs.gif",
    alt: "bitcoin hugs",
  },
  {
    src: "./assets/bitcoin-waving-pointing.gif",
    alt: "bitcoin waving and pointing",
  },
  {
    src: "./assets/bitcoin-pointing-mocoo.gif",
    alt: "bitcoin pointing with mocoo dogs",
  },
  {
    src: "./assets/bitcoin-dancing.gif",
    alt: "bitcoin dancing",
  },
  {
    src: "./assets/bitcoin-fan-selfie.gif",
    alt: "bitcoin fan selfie",
  },
  {
    src: "./assets/bitcoin-drinking-milk.gif",
    alt: "bitcoin drinking milk",
  },
  {
    src: "./assets/bitcoin-scratching-head.gif",
    alt: "bitcoin scratching head",
  },
  {
    src: "./assets/bitcoin-pointing.gif",
    alt: "bitcoin pointing",
  },
  {
    src: "./assets/bitcoin-dips-moocoo.gif",
    alt: "bitcoin dips moocoo",
  },
  {
    src: "./assets/bitcoin-dancing-pubkey.gif",
    alt: "bitcoin dancing pubkey",
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
    >
      <Flex
        justifyContent='center'
        py={{
          base: 4,
          lg: 6,
        }}
      >
        <HStack
          spacing={{
            base: 10,
            lg: 12,
          }}
        >
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
              href='https://discord.gg/QgdmfkWcZK'
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
              href='https://www.tiktok.com/@herecomesbitcoin'
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
              as={BsSignal}
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
              href='https://signal.art/addstickers/#pack_id=b765a06df1323b20db48ae8017d0eef7&pack_key=379672c407f0cfe2f563dd7f90b24e0bee50f3b17a60421cd657fb9c2c9c47c1'
              fontSize={{
                base: 16,
                lg: 18,
              }}
              fontFamily='nav'
            >
              Stickers
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
        sx={{
          "&::before": {
            paddingBottom: ["75%", "75%", 0],
          },
        }}
      >
        <iframe
          title='rick'
          src='https://www.youtube.com/embed/DvHUOr8ruMw?si=eiuX2BQW0kk0r7TF'
          allowFullScreen
        />
      </AspectRatio>

      <Center mb={14}>
        <Text
          color='maroon'
          textAlign='center'
          maxW={{
            base: 600,
            lg: 800,
          }}
        >
          Here Comes Bitcoin is the central resource for all things Bitcoin
          (puppet, not currency), including license-free creative assets that
          you can use to make anything you want. And we hope you will. If what
          you make is great, we’ll add it here.
        </Text>
      </Center>

      <Heading fontFamily='body' color='maroon' textAlign='center' mb={4}>
        Make Your Own Asset
      </Heading>

      <Center>
        <Text
          color='maroon'
          textAlign='center'
          maxW={{
            base: 600,
            lg: 800,
          }}
          mb={4}
        >
          Need a heavily caricatured bitcoin for your open-source project,
          conference keynote, or frightening cardboard cutout that lives in your
          attic? Grab a PNG and have at it. It’s all open-source and
          license-free. Have a new idea? Submit your own.
        </Text>
      </Center>

      <Box display='flex' justifyContent='center' mb={14}>
        <Flex wrap='wrap' w='100%'>
          {downloadableAssets.map((asset, key) => (
            <Asset key={key} src={asset.src} alt={asset.alt} />
          ))}
        </Flex>
      </Box>

      <Heading fontFamily='body' color='maroon' textAlign='center' mb={4}>
        Gif Station
      </Heading>

      <Center>
        <Text
          color='maroon'
          textAlign='center'
          maxW={{
            base: 600,
            lg: 800,
          }}
          mb={4}
        >
          {`Many no longer have the attention span necessary to watch a 10-minute
          video about the toll that being money's future takes on the mind. Our
          team certainly didn't. So we made a bunch of gifs that people like you
          and us could watch instead.`}
        </Text>
      </Center>

      <Box display='flex' justifyContent='center' mb={14}>
        <Flex wrap='wrap' w='100%'>
          {gifs.map((asset, index) => (
            <Image
              src={asset.src}
              alt={asset.alt}
              key={index}
              w={["100%", "50%"]}
              p={3}
            />
          ))}
        </Flex>
      </Box>

      <Heading fontFamily='body' color='maroon' textAlign='center' mb={4}>
        From The Film
      </Heading>

      <Center>
        <Text
          color='maroon'
          textAlign='center'
          mb={4}
          maxW={{
            base: 600,
            lg: 800,
          }}
        >
          Enough people requested these during Who is Bitcoin?’s prerelease that
          we knew they belonged here. While they aren’t as customizable as
          others assets (yet), they make great wallpapers and rebuttals to
          anyone who says bitcoiners don’t have a sense of humor about bitcoin.
        </Text>
      </Center>

      <Box display='flex' justifyContent='center'>
        <Flex wrap='wrap' w='100%'>
          {showcase.map((asset, index) => (
            <Image
              src={asset.src}
              alt={asset.alt}
              key={index}
              w={["100%", "50%"]}
              p={3}
            />
          ))}
        </Flex>
      </Box>
      <Flex justifyContent='center' pt={3} pb={6}>
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
      </Flex>
    </Box>
  );
}
