import React from 'react';
import { Box, Heading, Text, Button, Image, Container, Center, useBreakpointValue } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import CustomButton from '../CustomButton/CustomButton';

interface Product {
  id: string;
  name: string;
  price: string | 'Coming Soon';
  imageUrl: string;
  url: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'The 21M Faces of Bitcoin Mug',
    price: '$15.00',
    imageUrl: '/assets/ProductImages/HCB-mug.png',
    url: "https://www.spiralswag.xyz/product/the-21m-faces-of-bitcoin-mug/4?cp=true&sa=true&sbp=false&q=false",
  },
  {
    id: '2',
    name: 'Here Comes Bitcoin Plushi',
    price: '$39.99',
    imageUrl: '/assets/ProductImages/HCb-plushie.png',
    url: "https://www.uncute.com/collections/all/products/here-comes-bitcoin"
  },
  {
    id: '3',
    name: 'Here Comes Bitcoin Satscard',
    price: '$8.99',
    imageUrl: '/assets/ProductImages/HCB-satscard.png',
    url: "https://store.coinkite.com/store/sc-hcb-1"
  },
  // Add more products if needed
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const imageSize = useBreakpointValue({ base: '200px', md: '250px' });
  const containerHeight = useBreakpointValue({ base: '400px', md: '450px' });

  return (
    <Box
      borderWidth="1px"
      borderRadius="sm"
      overflow="hidden"
      bg="white"
      p={4}
      height={containerHeight} // Increased height for larger card size
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Center flex="1"> {/* Ensuring the image is centered vertically */}
        <Image
          src={product.imageUrl}
          alt={product.name}
          w={imageSize}
          h={imageSize}
          objectFit="cover" // Ensure all images maintain same size
          mb={4}
        />
      </Center>
      <Box>
        <Heading size="md" mb={2} textAlign="center">{product.name}</Heading>
        <Center>
          <CustomButton
            bg="#FFEFA6"
            color="#12334C"
            fontSize="28px"
            padding="1.7rem 1.9rem"
            width="fit-content"
            mb={4}
            mt={4}
            href={product.url}
            isDisabled={product.price === 'Coming Soon'}
          >
            {product.price === 'Coming Soon' ? 'Coming Soon' : product.price}
          </CustomButton>
        </Center>
      </Box>
    </Box>
  );
};

const ProductShowcase: React.FC = () => {
  return (
    <Container maxW="container.2xl" py={10} px={4} mb={24} bg="#FFF4EC">
      <Heading
        color="#14253d"
        textAlign="center"
        mb={6}
        mt={20}
        fontSize="48px"
        fontWeight="500"
        lineHeight="1.2"
      >
        Here Comes Your Bitcoin
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
          It&rsquo;s only a matter of time until everything becomes a Plushi, but in our case, it took even longer because Bitcoin kept eating our concepts. Grab your hungry guy today.
        </Text>
      </Center>
      <Box
        px={{
          base: 6,
          lg: '120px',
        }}
        mb={20}
      >
        <Swiper
          slidesPerView="auto"
          spaceBetween={20}
          centeredSlides={false}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 1.2, spaceBetween: 10 },
            768: { slidesPerView: 2.5, spaceBetween: 20 },
            1024: { slidesPerView: 2.5, spaceBetween: 40 },
          }}
          style={{
            overflow: 'visible', // Allow slides to not be cut off
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} style={{ overflow: 'visible' }}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
};

export default ProductShowcase;
