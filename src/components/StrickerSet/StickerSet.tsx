import React from 'react';
import { Box, Heading, Text, Flex, Image, VStack, Stack } from '@chakra-ui/react';
import CustomButton from '../CustomButton/CustomButton';
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';

const StickerSet = () => {
  return (
    <Box bg="#FFF1E5" w="full" overflow="hidden" px={{
      base: 6,
      lg: "100px",
    }}
    >
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
          align="left"
          spacing={4}
          p={6}
          mb={{ base: 8, md: 0 }}
          w={{ base: 'full', md: '55%' }}
        >
          <Heading
            fontSize={{ base: "3xl", md: "3xl", lg: "6xl" }}
            fontWeight="medium"
            textAlign={{ base: 'center', md: 'left' }}
          >
            Make Chats Stickier
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW={"500px"}>
            Orange up your Signal and Telegram chats with our Here Comes Bitcoin sticker set bundles, featuring all your favorite HCB Bitcoins.
          </Text>

          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 8, md: 6 }}
            mt={6}
            w={{ base: 'full', md: 'full' }}
            justifyContent="left"
          >
            <CustomButton
              bg="#FFEFA6"
              href="https://t.me/addstickers/herecomesbitcoin"
              color="#0C5156"
              fontSize="24px"
              padding="1.7rem 1.6rem"
              w="full"
            >
              Telegram Stickers
            </CustomButton>
            <CustomButton
              bg="#FFEFA6"
              href="https://signal.art/addstickers/#pack_id=8fa42aa13ec8f0efebe4b038f41afbd1&pack_key=ef7c64b27126e1fed904c2ccaacf78d312a3f8dd846cd2e146c749fe2e51f335"
              color="#0C5156"
              fontSize="24px"
              padding="1.7rem 1.6rem"
              w="full"
            >
              Signal Stickers
            </CustomButton>
          </Stack>
        </VStack>

        <Flex
          w={{ base: 'full', md: '40%' }}
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
            maxW={{ base: '300px', md: '300px' }}
            mr={{ base: 0, md: '3%' }}
            mt={{ base: 0, md: '180px' }}
            mb={{ base: "-60px", md: '-10px' }}
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
            maxW={{ base: '200px', md: '300px' }}
            ml={{ base: 0, md: '10%' }}
            mt={{ base: 0, md: '-170px' }}
            display={{ base: 'none', md: 'block' }} // Hide on mobile, show on larger screens
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
    </Box >
  );
};

export default StickerSet;
