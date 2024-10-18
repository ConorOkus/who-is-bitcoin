"use client";

import { Box, Flex, Text, Center, Heading } from "@chakra-ui/react";
import Asset from "./Asset";

interface AssetItem {
  src: string;
  alt: string;
}

const downloadableAssets = [
  {
    src: "./assets/HereComesBitcoinAssets/acrobat",
    alt: "bitcoin acrobat",
  },
  {
    src: "./assets/HereComesBitcoinAssets/count",
    alt: "bitcoin count",
  },
  {
    src: "./assets/HereComesBitcoinAssets/fancy",
    alt: "bitcoin fancy",
  },
  {
    src: "./assets/HereComesBitcoinAssets/hungry",
    alt: "bitcoin hungry",
  },
  {
    src: "./assets/HereComesBitcoinAssets/mrs",
    alt: "bitcoin mrs",
  },
  {
    src: "./assets/HereComesBitcoinAssets/grumpy",
    alt: "bitcoin grumpy",
  },
  {
    src: "./assets/HereComesBitcoinAssets/sir",
    alt: "bitcoin sir",
  },
  {
    src: "./assets/HereComesBitcoinAssets/super",
    alt: "bitcoin super",
  },
  {
    src: "./assets/HereComesBitcoinAssets/surfer",
    alt: "bitcoin surfing",
  },
  {
    src: "./assets/HereComesBitcoinAssets/UFO",
    alt: "bitcoin ufo",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Astronaut",
    alt: "bitcoin astronaut",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Bitcoinbahama",
    alt: "bitcoin bahama",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Coder",
    alt: "bitcoin coder",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Fairy",
    alt: "bitcoin fairy",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Hydra",
    alt: "bitcoin hydra",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Nostrich",
    alt: "bitcoin nostrich",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Queen",
    alt: "bitcoin queen",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Sandwich",
    alt: "bitcoin sandwich",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Sorceress",
    alt: "bitcoin sorceress",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Triceratops",
    alt: "bitcoin triceratops",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Mirror",
    alt: "bitcoin mirror",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Goth",
    alt: "bitcoin goth",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Anime",
    alt: "bitcoin anime",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Astrology",
    alt: "bitcoin astrology",
  },
  {
    src: "./assets/HereComesBitcoinAssets/K-Pop",
    alt: "bitcoin k-pop",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Skater",
    alt: "bitcoin skater",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Construction",
    alt: "bitcoin construction",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Satoshi",
    alt: "bitcoin satoshi",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Vault",
    alt: "bitcoin vault",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Robe",
    alt: "bitcoin robe",
  },
  {
    src: "./assets/HereComesBitcoinAssets/halving",
    alt: "bitcoin halving",
  },
  {
    src: "./assets/HereComesBitcoinAssets/bedford-football-club",
    alt: "bitcoin football club",
  },
  {
    src: "./assets/HereComesBitcoinAssets/bedford-football-club-II",
    alt: "bitcoin football club",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Beholder",
    alt: "bitcoin beholder",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Cat",
    alt: "bitcoin cat",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Dad",
    alt: "bitcoin dad",
  },
  {
    src: "./assets/HereComesBitcoinAssets/DJ",
    alt: "bitcoin dj",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Drums",
    alt: "bitcoin drums",
  },
  {
    src: "./assets/HereComesBitcoinAssets/gator-wrestling",
    alt: "bitcoin gator wrestling",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Ghoul",
    alt: "bitcoin ghoul",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Graffiti",
    alt: "bitcoin graffiti",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Greenpeace",
    alt: "bitcoin greenpeace",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Hamlet",
    alt: "bitcoin hamlet",
  },
  {
    src: "./assets/HereComesBitcoinAssets/hieronymus-bosch",
    alt: "bitcoin hieronymus bosch",
  },
  {
    src: "./assets/HereComesBitcoinAssets/hot-air-balloon",
    alt: "bitcoin hot air balloon",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Judge",
    alt: "bitcoin judge",
  },
  {
    src: "./assets/HereComesBitcoinAssets/night-out",
    alt: "bitcoin night out",
  },
  {
    src: "./assets/HereComesBitcoinAssets/girls-night-out",
    alt: "bitcoin girls night out",
  },
  {
    src: "./assets/HereComesBitcoinAssets/SHAmory",
    alt: "bitcoin SHAmory",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Sushi",
    alt: "bitcoin sushi",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Unicorn",
    alt: "bitcoin unicorn",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Venus",
    alt: "bitcoin venus",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Pubkey",
    alt: "bitcoin pubkey",
  },
  {
    src: "./assets/HereComesBitcoinAssets/bitcoin-japan",
    alt: "bitcoin japan",
  },
  {
    src: "./assets/HereComesBitcoinAssets/black-ops",
    alt: "bitcoin black ops",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Brink",
    alt: "bitcoin brink",
  },
  {
    src: "./assets/HereComesBitcoinAssets/HRF",
    alt: "bitcoin hrf",
  },
  {
    src: "./assets/HereComesBitcoinAssets/jack-mallers",
    alt: "bitcoin jack mallers",
  },
  {
    src: "./assets/HereComesBitcoinAssets/lightning-network",
    alt: "bitcoin lightning network",
  },
  {
    src: "./assets/HereComesBitcoinAssets/opensats-arrow",
    alt: "bitcoin opensats arrow",
  },
  {
    src: "./assets/HereComesBitcoinAssets/puppet-jack",
    alt: "bitcoin pupppet jack",
  },
  {
    src: "./assets/HereComesBitcoinAssets/rockstar-dev",
    alt: "bitcoin rockstar dev",
  },
  {
    src: "./assets/HereComesBitcoinAssets/stacker-news",
    alt: "bitcoin stacker news",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Miner",
    alt: "bitcoin miner",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Flower-god",
    alt: "bitcoin flower god",
  },
  {
    src: "./assets/HereComesBitcoinAssets/THNDR-games",
    alt: "bitcoin THNDR games",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Banjo-bitcoin",
    alt: "bitcoin Banjo",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Volcano-miner",
    alt: "bitcoin volcano",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Forest-god",
    alt: "bitcoin forest",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Bad-doctor",
    alt: "bitcoin bad doctor",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Student-network",
    alt: "bitcoin student network",
  },
  {
    src: "./assets/HereComesBitcoinAssets/girls-night-out-prison",
    alt: "bitcoin girls night out part prison",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Pyro",
    alt: "bitcoin pyro",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Cold-card",
    alt: "bitcoin coldcard",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Consensus-cleanup",
    alt: "bitcoin consensus cleanup",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Bitcoin-unit-01",
    alt: "bitcoin unit",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Bust-bitcoin",
    alt: "bitcoin bust",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Pet-adoption",
    alt: "bitcoin pet adoption",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Bitcoin-island",
    alt: "bitcoin island",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Headless-bitcoin",
    alt: "bitcoin headless",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Zeus-bitcoin",
    alt: "bitcoin zeus",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Bitcoin-Alby",
    alt: "bitcoin alby",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Bird-feeder-bitcoin",
    alt: "bitcoin alby",
  },
  {
    src: "./assets/HereComesBitcoinAssets/Lyn-Alden",
    alt: "bitcoin lyn alden",
  },
];

const AssetsSection: React.FC = () => {
  return (
    <>
      <Heading
        color="#14253d"
        textAlign="center"
        mb={8}
        mt={20}
        fontSize="48px"
        fontWeight="500"
        lineHeight="1.2"
      >
        Your Project, Our Assets
      </Heading>

      <Center>
        <Text
          color="#4a5568"
          textAlign="center"
          maxW="700px"
          mb={10}
          fontSize="16px"
          fontWeight="400"
          lineHeight="1.5"
        >
          Need a heavily caricatured bitcoin for your open-source project, conference keynote, or frightening cardboard cutout that lives in your attic? Grab a PNG and have at it. It’s all open-source and license-free. Have An idea for a Bitcoin you’d like to see here? We’re listening... and so is he.
        </Text>
      </Center>

      <Box display="flex" justifyContent="center" mb={14}>
        <Flex wrap="wrap" w="100%">
          {downloadableAssets.map((asset, key) => (
            <Asset key={key} src={asset.src} alt={asset.alt} />
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default AssetsSection;