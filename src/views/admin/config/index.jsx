/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Box,
  SimpleGrid,
  useColorModeValue,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Badge
} from "@chakra-ui/react";
import React from "react";
import { Button } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons'
import { SearchBar } from 'components/navbar/searchBar/SearchBar';

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const { isOpen, onOpen, onClose } = useDisclosure()
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    title: "Name",
  }
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <div style={{ marginBottom: "20px" }} >
        <SearchBar mb={{ base: '10px', md: 'unset' }} me="10px" borderRadius="30px" />

      </div>
      <SimpleGrid columns={{ base: 3, sm: 3, md: 6 }} gap='20px'>
        <Box maxW="sm" p="4" borderRadius="xl" overflow="hidden" boxShadow="lg" background="white">
          <Image src={property.imageUrl} />
          <Box p="3">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {property.title}
            </Box>
            <Box>
            <Badge colorScheme="green">Visible</Badge>
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            modal body
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="brand" onClick={onClose}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
