import React from "react";
import { Box, Flex, Icon, Image, Link } from "@chakra-ui/react";
import { GiDiamonds } from "react-icons/gi";

type Props = {
  src: string;
  alt: string;
};

function Asset({ src, alt }: Props) {
  return (
    <Box
      display='flex'
      justifyContent='center'
      flexDirection='column'
      w={["50%", "25%"]}
      p={3}
    >
      <Flex mb={4}>
        <Image src={`${src}.png`} alt={alt} />
      </Flex>
      <Flex justifyContent='center' alignItems='center'>
        <Link
          fontFamily='nav'
          color='maroon'
          download={true}
          href={`${src}.svg`}
          textTransform='uppercase'
          fontSize='2xl'
        >
          svg
        </Link>
        <Icon as={GiDiamonds} fontSize='2xl' mx={6} color='#CCCCCC' />
        <Link
          fontFamily='nav'
          color='maroon'
          download={true}
          href={`${src}.png`}
          textTransform='uppercase'
          fontSize='2xl'
        >
          png
        </Link>
      </Flex>
    </Box>
  );
}

export default Asset;
