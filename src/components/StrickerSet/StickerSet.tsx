import React from 'react';
import { Box, Heading, Text, Flex, Image, VStack, Stack } from '@chakra-ui/react';
import CustomButton from '../CustomButton/CustomButton';

const StickerSet = () => {
  return (
    <Box bg="#FFF1E5" w="full" overflow="hidden" px={{
      base: 6,
      lg: "100px",
    }}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        mx="auto"
        align="center"
        justify="center" 
        overflow="hidden"
        textAlign={{ base: 'center', md: 'left' }} 
        py={{ base: 8, md: 0 }} 
      >
        <VStack
          align="center" 
          spacing={4}
          p={8}
          mb={{ base: 8, md: 0 }}
          w={{ base: 'full', md: '40%' }}
        >
          <Heading
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="medium"
            textAlign="center"
          >
            Make Chats Stickier
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Orange up your Signal and Telegram chats with our Here Comes Bitcoin sticker set bundles, featuring all your favorite HCB Bitcoins
          </Text>

          <Stack
            direction={{ base: 'column', md: 'row' }} 
            spacing={{ base: 8, md: 6 }} 
            mt={6} 
            w={{ base: 'full', md: 'full' }}
            justifyContent="center"
          >
            <CustomButton
              bg="#FFEFA6"
              href="https://t.me/addstickers/herecomesbitcoin"
              color="#0C5156"
              fontSize="24px"
              padding="1.7rem 2rem"
              w="full" 
            >
              Telegram Stickers
            </CustomButton>
            <CustomButton
              bg="#FFEFA6"
              href="https://signal.art/addstickers/#pack_id=961a70b4646d38f98ebca674c2792262&pack_key=f6a446830125c12ba25bfe4e6138288b0babe1d54f3990465338cdd5a80fd7e9"
              color="#0C5156"
              fontSize="24px"
              padding="1.7rem 2rem"
              w="full" 
            >
              Signal Stickers
            </CustomButton>
          </Stack>
        </VStack>

        <Flex
          w={{ base: 'full', md: '55%' }}
          position="relative"
          justify="center" 
          align="center"
          mt={{ base: 4, md: 0 }}
          mb={{ base: 4, md: 0 }}
          px={{ base: 0, md: 4 }}
        >
          <Box
            position="relative"
            w={{ base: 'full', md: 'auto' }}
            maxW={{ base: '200px', md: '250px' }}
            mr={{ base: 0, md: '5%' }}
            mt={{ base: 0, md: '100px' }}
          >
            <Image
              src="/assets/StrickerSetImages/Mobile-preview-One.png"
              alt="Telegram chat preview"
              w="100%"
              h="auto"
              objectFit="contain"
              borderRadius="xl"
              border="2px solid transparent"
            />
          </Box>
          <Box
            position="relative"
            w={{ base: 'full', md: 'auto' }}
            maxW={{ base: '200px', md: '250px' }}
            ml={{ base: 0, md: '10%' }}
            mt={{ base: 0, md: '-100px' }}
          >
            <Image
              src="/assets/StrickerSetImages/Mobile-preview-Two.png"
              alt="Signal chat preview"
              w="100%"
              h="auto"
              objectFit="contain"
              borderRadius="xl"
              border="2px solid transparent"
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default StickerSet;
