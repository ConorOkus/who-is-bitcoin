import React from "react";
import { Box, Flex, Icon, Image, Link } from "@chakra-ui/react";
import { GiDiamonds } from "react-icons/gi";

type Props = {
  src: string;
  alt: string;
  svgLink: string;
  pngLink: string;
};

export const downloadableAssets = [
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

function Asset({ src, alt, svgLink, pngLink }: Props) {
  return (
    <Box w='100%' display='flex' justifyContent='center' flexDirection='column'>
      <Flex justifyContent='space-around' alignItems='center'>
        <Image src={src} alt={alt} />
      </Flex>
      <Flex justifyContent='center' alignItems='center'>
        <Link
          fontSize={18}
          fontFamily='heading'
          color='maroon'
          download={true}
          href={svgLink}
        >
          SVG
        </Link>
        <Icon as={GiDiamonds} fontSize={18} color='#CCCCCC' mx={4} />
        <Link
          fontSize={18}
          fontFamily='heading'
          color='maroon'
          download={true}
          href={pngLink}
        >
          PNG
        </Link>
      </Flex>
    </Box>
  );
}

export default Asset;
