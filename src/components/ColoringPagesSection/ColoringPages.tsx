import React, { useRef } from 'react';
import { Box, Image, Flex, Button, useBreakpointValue, Heading, Text, Center } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import CustomButton from '../CustomButton/CustomButton';
import WaveBorderTop from '../Waveborder/WaveBorderTop';
import WaveBorderBottom from '../Waveborder/WaveBorderbottom';

interface ColoringPage {
  id: string;
  title: string;
  imageUrl: string;
}

const coloringPages: ColoringPage[] = [
  { id: '1', title: 'Up Top, Bitcoin!', imageUrl: '/assets/ColoringCardsImages/coloringCard2.png' },
  { id: '2', title: 'Super Strong Amazing Very Muscles Bitcoin', imageUrl: '/assets/ColoringCardsImages/coloringCard3.png' },
  { id: '3', title: 'Hungry Hungry Bitcoin', imageUrl: '/assets/ColoringCardsImages/coloringCard4.png' },
  { id: '4', title: 'Oh, Bitcoin! Not Again!', imageUrl: '/assets/ColoringCardsImages/coloringCard5.png' },
  { id: '5', title: 'Bitcoin Adventures', imageUrl: '/assets/ColoringCardsImages/coloringCard2.png' },
  { id: '6', title: 'Crypto Comics', imageUrl: '/assets/ColoringCardsImages/coloringCard3.png' },
];

const ColoringPages: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardWidth = useBreakpointValue({ base: 250, md: 300 }) ?? 250; // Provide a default value

  const handleSeeMore = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft + cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleDownload = (id: string) => {
    console.log(`Downloading coloring page ${id}`);
    // Implement actual download logic here
  };

  return (

    <Box>
      <Box position="relative" height="100px" zIndex={1}>
        <WaveBorderTop color='#C1E8F3' />
      </Box>

      <Box bg="#C1E8F3" p={4} px={{
        base: 6,
        lg: "140px",
      }}>

<Heading
        color="#14253d"
        textAlign="center"
        mb={6}
        mt={20}
        fontSize="48px"
        fontWeight="500"
        lineHeight="1.2"
      >
       Farts and crafts
      </Heading>

      <Center>
        <Text
          color="#4a5568"
          textAlign="center"
          maxW="700px"
          mb={20}
          fontSize="16px"
          fontWeight="400"
          lineHeight="1.5"
        >
         Rainy day at home? Kids looking For something other than yelling to do? Fire up the printer and sharpen the crayons. Then share their flatulent creations with @spiralbtc so that we can share them too.
        </Text>
      </Center>
        <Box bg="white" overflow="hidden" mb={10} >
          <Image src="/assets/ColoringCardsImages/ColoringCardOne.png" alt="Coloring Pages" w="100%" />
        </Box>
        <Flex
          ref={scrollRef}
          overflowX="auto"
          css={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            'scrollbarWidth': 'none',
            'msOverflowStyle': 'none',
          }}
        >
          {coloringPages.map((page) => (
            <Box
              key={page.id}
              minW={`${cardWidth}px`}
              h="400px"
              mr={4}
              borderWidth={1}
              overflow="hidden"
              position="relative"
              bg="white"
              flexShrink={0}
            >
              <Image src={page.imageUrl} alt={page.title} objectFit="cover" w="100%" h="100%" />
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bg="blackAlpha.600"
                opacity="0"
                transition="opacity 0.2s"
                _hover={{ opacity: 1 }}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Button
                  leftIcon={<DownloadIcon />}
                  onClick={() => handleDownload(page.id)}
                  colorScheme="blue"
                >
                  Download
                </Button>
              </Box>
            </Box>
          ))}
        </Flex>
        <Center>
          <Box mt={20} mb={10}>
        <CustomButton onClick={handleSeeMore} bg="#FFEFA6" color="#0C5156" fontSize='32px' padding='1.7rem 1.5rem'>
          See more
        </CustomButton>
        </Box>
</Center>
      </Box>
      <Box position="relative" height="100px" zIndex={1}>
        <WaveBorderBottom color='#C1E8F3' />
      </Box>

    </Box>
  );
};

export default ColoringPages;