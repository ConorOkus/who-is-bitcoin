import React, { useState } from "react";
import {
  Box,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  Link,
  useDisclosure,
  Icon,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { BiFilm } from "react-icons/bi";
import {
  FaDownload,
  FaFaceGrinBeam,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

export function MenuItems() {
  return (
    <VStack spacing={4} alignItems='flex-start'>
      <Box display='flex' alignItems='center'>
        <Icon as={BiFilm} mr={2} color='maroon' />
        <Link href='#home' color='maroon'>
          Watch Film
        </Link>
      </Box>
      <Box display='flex' alignItems='center'>
        <Icon as={FaDownload} mr={2} color='maroon' />
        <Link href='#home' color='maroon'>
          Downloads
        </Link>
      </Box>
      <Box display='flex' alignItems='center'>
        <Icon as={FaFaceGrinBeam} mr={2} color='maroon' />
        <Link href='#home' color='maroon'>
          Showcase
        </Link>
      </Box>
      <Box display='flex' alignItems='center'>
        <Icon as={FaYoutube} mr={2} color='maroon' />
        <Link href='#home' color='maroon'>
          Youtube
        </Link>
      </Box>
      <Box display='flex' alignItems='center'>
        <Icon as={FaTiktok} mr={2} color='maroon' />
        <Link href='#home' color='maroon'>
          Tik Tok
        </Link>
      </Box>
      <Box display='flex' alignItems='center'>
        <Icon as={IoIosMail} mr={2} color='maroon' />
        <Link href='#home' color='maroon'>
          Contact
        </Link>
      </Box>
    </VStack>
  );
}

function HamburgerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box
      display={{
        base: "flex",
        lg: "none",
      }}
      justifyContent='flex-end'
      mb={2}
    >
      <IconButton
        aria-label='Open menu'
        icon={<HamburgerIcon />}
        onClick={onOpen}
        float='right'
        color='maroon'
        background='none'
        fontSize={32}
        mt={2}
        pr={4}
      />
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton color='maroon' fontSize={18} />
            <DrawerHeader w='200px'>
              <Heading
                fontFamily='heading'
                fontWeight={400}
                fontStyle='normal'
                fontSize='42px'
                background='linear-gradient(to bottom, #EFF68F, #DD7D6D)'
                color='transparent'
                backgroundClip='text'
                lineHeight={1}
                sx={{
                  WebkitTextFillColor: "transparent", // Equivalent to setting the text color, but more specific for Webkit
                  WebkitTextStroke: "2px #B93F28",
                }}
                position='relative'
              >
                Here Comes Bitcoin
              </Heading>
            </DrawerHeader>
            <DrawerBody>
              <MenuItems />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
}

export default HamburgerMenu;
