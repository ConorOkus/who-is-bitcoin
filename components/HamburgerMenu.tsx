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
      />
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton color='maroon' fontSize={18} />
            <DrawerHeader>Here Comes Bitcoin</DrawerHeader>
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
