"use client";

import React from "react";
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
  Link as ChakraLink,
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
import NextLink from "next/link";
import { BookmanHeading } from "./BookmanHeading";

export function MenuItems() {
  return (
    <VStack spacing={4} alignItems='flex-start'>
      <Box display='flex' alignItems='center'>
        <Icon as={BiFilm} mr={2} color='maroon' />
        <ChakraLink
          as={NextLink}
          color='maroon'
          fontWeight='bold'
          href='#downloads'
        >
          Watch Film
        </ChakraLink>
      </Box>
      <Box display='flex' alignItems='center'>
        <Icon as={FaDownload} mr={2} color='maroon' />
        <ChakraLink
          as={NextLink}
          color='maroon'
          fontWeight='bold'
          scrollBehavior='smooth'
          scroll={true}
          href='#downloads'
        >
          Downloads
        </ChakraLink>
      </Box>
      <Box display='flex' alignItems='center'>
        <Icon as={FaFaceGrinBeam} mr={2} color='maroon' />
        <ChakraLink
          as={NextLink}
          color='maroon'
          fontWeight='bold'
          scrollBehavior='smooth'
          href='#showcase'
        >
          Showcase
        </ChakraLink>
      </Box>
      <Box display='flex' alignItems='center'>
        <Icon as={FaYoutube} mr={2} color='maroon' />
        <ChakraLink
          as={NextLink}
          color='maroon'
          fontWeight='bold'
          href='#downloads'
        >
          Youtube
        </ChakraLink>
      </Box>
      <Box display='flex' alignItems='center'>
        <Icon as={FaTiktok} mr={2} color='maroon' />
        <ChakraLink
          as={NextLink}
          color='maroon'
          fontWeight='bold'
          href='#downloads'
        >
          Tik Tok
        </ChakraLink>
      </Box>
      <Box display='flex' alignItems='center'>
        <Icon as={IoIosMail} mr={2} color='maroon' />
        <ChakraLink
          as={NextLink}
          color='maroon'
          fontWeight='bold'
          href='#downloads'
        >
          Contact
        </ChakraLink>
      </Box>
    </VStack>
  );
}

function HamburgerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        _hover={{ background: "none" }}
        fontSize={32}
        mt={2}
        pr={4}
      />
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton color='maroon' fontSize={18} />
            <DrawerHeader w='200px'>
              <BookmanHeading>Here Comes Bitcoin</BookmanHeading>
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
