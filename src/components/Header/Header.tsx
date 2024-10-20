import React, { useContext } from 'react';
import { Box, Flex, Button, Image, IconButton, VStack, useDisclosure, HStack } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ColorContext } from '../../providers/ColorProvider';
import CustomButton from '../CustomButton/CustomButton';

const Header = () => {
    const { bgColor } = useContext(ColorContext);
    const { isOpen, onToggle, onClose } = useDisclosure();

    return (
        <Box bg={bgColor} px={{
            base: 4,
            lg: "35px",
        }}>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                padding={{ base: "1rem", md: "1.5rem", lg: "2.9rem" }}
                color="gray.800"
            >
                <Flex align="center" mr={5}>
                    <Image 
                        src="assets/HeaderImages/logo.svg" 
                        alt="HereComesBitcoin Logo" 
                        h={{ base: "30px", md: "40px", lg: "50px" }} 
                    />
                </Flex>

                <Flex align="center">
                    <Box display={{ base: "block", md: "none" }}>
                        <IconButton
                            onClick={onToggle}
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            variant="outline"
                            aria-label="Toggle Navigation"
                        />
                    </Box>

                    <Box display={{ base: "none", md: "block" }}>
                        <HStack spacing={16}>
                            <CustomButton bg="#F7931A" color="white" fontSize='32px' padding='1.7rem 1.5rem'>
                                Collaborate
                            </CustomButton>
                            <CustomButton bg="#F7931A" color="white" fontSize='32px' padding='1.7rem 1.5rem'>
                                Join Discord
                            </CustomButton>
                        </HStack>
                    </Box>
                </Flex>
            </Flex>

            {isOpen && (
                <Box pb={4} display={{ md: "none" }}>
                    <VStack spacing={4} align="stretch">
                        <CustomButton bg="#F7931A" color="white" fontSize='20px'>
                            Collaborate
                        </CustomButton>
                        <CustomButton bg="#F7931A" color="white" fontSize='20px' >
                            Join Discord
                        </CustomButton>
                    </VStack>
                </Box>
            )}
        </Box>
    );
};

export default Header;