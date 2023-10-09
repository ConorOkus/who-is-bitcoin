import React from "react";
import { Box, Flex, Icon, Image, Link } from "@chakra-ui/react";

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
      <Flex justifyContent='space-around' alignItems='center' mb={4}>
        <Image src={src} alt={alt} />
      </Flex>
      <Flex justifyContent='center' alignItems='center'>
        <Link
          fontSize={18}
          fontFamily='body'
          color='maroon'
          fontWeight='bold'
          download={true}
          href={src}
        >
          Download
        </Link>
      </Flex>
    </Box>
  );
}

export default Asset;
