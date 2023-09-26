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
} from "@chakra-ui/react";
import HamburgerMenu, { MenuItems } from "../../components/HamburgerMenu";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Home() {
  return (
    <Box>
      <HamburgerMenu />

      <Flex
        pl={{
          base: 0,
          lg: 10,
        }}
        pr={{
          base: 0,
          lg: 24,
        }}
      >
        <Box
          mr={{
            base: 0,
            lg: 100,
          }}
          mt={100}
          display={{
            base: "none",
            lg: "block",
          }}
        >
          <MenuItems />
        </Box>
        <Box
          position={{
            base: "absolute",
            lg: "relative",
          }}
          w='100%'
          flex={1}
        >
          <Box pb='56.25%' position='relative' height='0' mb={8}>
            <iframe
              title='A sample video'
              src='https://www.youtube.com/embed/dQw4w9WgXcQ'
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
            />
          </Box>
          <Center mb={8}>
            <Text
              color='maroon'
              maxW={600}
              px={{
                base: 4,
                lg: 0,
              }}
              textAlign='center'
            >
              Bitcoin...you heard somebody on the news saying it’s for
              criminals. Your friend’s friend made some money off it. But have
              you ever met Bitcoin? Who is bitcoin really?
            </Text>
          </Center>
          <Center>
            <Button
              rightIcon={<ArrowForwardIcon fontSize={32} />}
              color='maroon'
              variant='outline'
              borderColor='maroon'
              size='lg'
              w={300}
              p={6}
              borderWidth={4}
            >
              Learn More about Bitcoin
            </Button>
          </Center>
        </Box>
      </Flex>
    </Box>
  );
}
