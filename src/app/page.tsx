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
import { SiGiphy } from "react-icons/si";
import { FaTelegram } from "react-icons/fa";

const downloadableAssets = [
  {
    src: "./assets/acrobat",
    alt: "bitcoin acrobat",
  },
  {
    src: "./assets/count",
    alt: "bitcoin count",
  },
  {
    src: "./assets/fancy",
    alt: "bitcoin fancy",
  },
  {
    src: "./assets/hungry",
    alt: "bitcoin hungry",
  },
  {
    src: "./assets/mrs",
    alt: "bitcoin mrs",
  },
  {
    src: "./assets/grumpy",
    alt: "bitcoin grumpy",
  },
  {
    src: "./assets/sir",
    alt: "bitcoin sir",
  },
  {
    src: "./assets/super",
    alt: "bitcoin super",
  },
  {
    src: "./assets/surfer",
    alt: "bitcoin surfing",
  },
  {
    src: "./assets/UFO",
    alt: "bitcoin ufo",
  },
  {
    src: "./assets/Astronaut",
    alt: "bitcoin astronaut",
  },
  {
    src: "./assets/Bitcoinbahama",
    alt: "bitcoin bahama",
  },
  {
    src: "./assets/Coder",
    alt: "bitcoin coder",
  },
  {
    src: "./assets/Fairy",
    alt: "bitcoin fairy",
  },
  {
    src: "./assets/Hydra",
    alt: "bitcoin hydra",
  },
  {
    src: "./assets/Nostrich",
    alt: "bitcoin nostrich",
  },
  {
    src: "./assets/Queen",
    alt: "bitcoin queen",
  },
  {
    src: "./assets/Sandwich",
    alt: "bitcoin sandwich",
  },
  {
    src: "./assets/Sorceress",
    alt: "bitcoin sorceress",
  },
  {
    src: "./assets/Triceratops",
    alt: "bitcoin triceratops",
  },
  {
    src: "./assets/Mirror",
    alt: "bitcoin mirror",
  },
  {
    src: "./assets/Goth",
    alt: "bitcoin goth",
  },
  {
    src: "./assets/Anime",
    alt: "bitcoin anime",
  },
  {
    src: "./assets/Astrology",
    alt: "bitcoin astrology",
  },
  {
    src: "./assets/K-Pop",
    alt: "bitcoin k-pop",
  },
  {
    src: "./assets/Skater",
    alt: "bitcoin skater",
  },
  {
    src: "./assets/Construction",
    alt: "bitcoin construction",
  },
  {
    src: "./assets/Satoshi",
    alt: "bitcoin satoshi",
  },
  {
    src: "./assets/Vault",
    alt: "bitcoin vault",
  },
  {
    src: "./assets/Robe",
    alt: "bitcoin robe",
  },
  {
    src: "./assets/halving",
    alt: "bitcoin halving",
  },
  {
    src: "./assets/bedford-football-club",
    alt: "bitcoin football club",
  },
  {
    src: "./assets/bedford-football-club-II",
    alt: "bitcoin football club",
  },
  {
    src: "./assets/Beholder",
    alt: "bitcoin beholder",
  },
  {
    src: "./assets/Cat",
    alt: "bitcoin cat",
  },
  {
    src: "./assets/Dad",
    alt: "bitcoin dad",
  },
  {
    src: "./assets/DJ",
    alt: "bitcoin dj",
  },
  {
    src: "./assets/Drums",
    alt: "bitcoin drums",
  },
  {
    src: "./assets/gator-wrestling",
    alt: "bitcoin gator wrestling",
  },
  {
    src: "./assets/Ghoul",
    alt: "bitcoin ghoul",
  },
  {
    src: "./assets/Graffiti",
    alt: "bitcoin graffiti",
  },
  {
    src: "./assets/Greenpeace",
    alt: "bitcoin greenpeace",
  },
  {
    src: "./assets/Hamlet",
    alt: "bitcoin hamlet",
  },
  {
    src: "./assets/hieronymus-bosch",
    alt: "bitcoin hieronymus bosch",
  },
  {
    src: "./assets/hot-air-balloon",
    alt: "bitcoin hot air balloon",
  },
  {
    src: "./assets/Judge",
    alt: "bitcoin judge",
  },
  {
    src: "./assets/night-out",
    alt: "bitcoin night out",
  },
  {
    src: "./assets/Pubkey",
    alt: "bitcoin pubkey",
  },
  {
    src: "./assets/SHAmory",
    alt: "bitcoin SHAmory",
  },
  {
    src: "./assets/Sushi",
    alt: "bitcoin sushi",
  },
  {
    src: "./assets/Unicorn",
    alt: "bitcoin unicorn",
  },
  {
    src: "./assets/Venus",
    alt: "bitcoin venus",
  },
  {
    src: "./assets/bitcoin-japan",
    alt: "bitcoin japan",
  },
  {
    src: "./assets/black-ops",
    alt: "bitcoin ops",
  },
  {
    src: "./assets/Brink",
    alt: "bitcoin brink",
  },
  {
    src: "./assets/girls-night-out",
    alt: "bitcoin girls night out",
  },
  {
    src: "./assets/HRF",
    alt: "bitcoin hrf",
  },
  {
    src: "./assets/jack-mallers",
    alt: "bitcoin jack mallers",
  },
  {
    src: "./assets/lightning-network",
    alt: "bitcoin lightning network",
  },
  {
    src: "./assets/opensats-arrow",
    alt: "bitcoin opensats arrow",
  },
  {
    src: "./assets/puppet-jack",
    alt: "bitcoin pupppet jack",
  },
  {
    src: "./assets/rockstar-dev",
    alt: "bitcoin rockstar dev",
  },
  {
    src: "./assets/stacker-news",
    alt: "bitcoin stacker news",
  },
  {
    src: "./assets/Miner",
    alt: "bitcoin miner",
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
          justifyContent='center'
          spacing={{
            base: 4,
            lg: 12,
          }}
        >
          <Flex alignItems='center'>
            <Icon
              as={FaDiscord}
              mr={0.5}
              color='maroon'
              fontSize={{
                base: 14,
                lg: 18,
              }}
            />
            <ChakraLink
              as={NextLink}
              color='maroon'
              href='https://discord.gg/QgdmfkWcZK'
              fontSize={{
                base: 14,
                lg: 18,
              }}
              fontFamily='nav'
            >
              Discord
            </ChakraLink>
          </Flex>

          <Flex alignItems='center'>
            <Icon
              as={FaTelegram}
              mr={0.5}
              color='maroon'
              fontSize={{
                base: 14,
                lg: 18,
              }}
            />
            <ChakraLink
              as={NextLink}
              color='maroon'
              href='https://t.me/addstickers/herecomesbitcoin'
              fontSize={{
                base: 14,
                lg: 18,
              }}
              fontFamily='nav'
            >
              Telegram
            </ChakraLink>
          </Flex>

          <Flex alignItems='center'>
            <Icon
              as={BsSignal}
              mr={0.5}
              color='maroon'
              fontSize={{
                base: 14,
                lg: 18,
              }}
            />
            <ChakraLink
              as={NextLink}
              color='maroon'
              href='https://signal.art/addstickers/#pack_id=ca5850baed03af918de78a9435ceb002&pack_key=91318e9dba74c6c0c2f841773628670c664ac6a523cb57142bbf74380aa65a5b'
              fontSize={{
                base: 14,
                lg: 18,
              }}
              fontFamily='nav'
            >
              Stickers
            </ChakraLink>
          </Flex>

          <Flex alignItems='center'>
            <Icon
              as={SiGiphy}
              mr={0.5}
              color='maroon'
              fontSize={{
                base: 14,
                lg: 18,
              }}
            />
            <ChakraLink
              as={NextLink}
              color='maroon'
              href='https://giphy.com/herecomesbitcoin'
              fontSize={{
                base: 14,
                lg: 18,
              }}
              fontFamily='nav'
            >
              Giphy
            </ChakraLink>
          </Flex>

          <Flex
            alignItems='center'
            display={{
              base: "none",
              lg: "flex",
            }}
          >
            <Icon
              as={IoIosMail}
              mr={0.5}
              color='maroon'
              fontSize={{
                base: 16,
                lg: 20,
              }}
            />
            <ChakraLink
              as={NextLink}
              color='maroon'
              href='mailto:hello@herecomesbitcoin.org'
              fontSize={{
                base: 14,
                lg: 18,
              }}
              fontFamily='nav'
            >
              Contact
            </ChakraLink>
          </Flex>
        </HStack>
      </Flex>

      <Flex
        justifyContent='center'
        alignItems='center'
        display={{
          base: "flex",
          lg: "none",
        }}
        pb={{
          base: 4,
          lg: 6,
        }}
      >
        <Icon
          as={IoIosMail}
          mr={0.5}
          color='maroon'
          fontSize={{
            base: 16,
            lg: 20,
          }}
        />
        <ChakraLink
          as={NextLink}
          color='maroon'
          href='mailto:hello@herecomesbitcoin.org'
          fontSize={{
            base: 14,
            lg: 18,
          }}
          fontFamily='nav'
        >
          Contacts
        </ChakraLink>
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
          {`Need a heavily caricatured bitcoin for your open-source project,
          conference keynote, or frightening cardboard cutout that lives in your
          attic? Grab a PNG and have at it. It’s all open-source and
          license-free. Have a new idea? Submit your own.`}
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
