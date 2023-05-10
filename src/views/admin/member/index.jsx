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
  Td,
  Tr,
  Th,
  Thead,
  Text,
  Flex,
  Tbody,
  Table,
  Badge,
  Input,
  FormLabel,
  useDisclosure
} from "@chakra-ui/react";
import Card from "components/card/Card"
import React from "react";
import { Button } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons'
import { SearchBar } from 'components/navbar/searchBar/SearchBar';

export default function UserReports() {
  // Chakra Color Mode
  const { isOpen, onOpen, onClose } = useDisclosure()
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");


  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <div style={{ textAlign: "right",marginBottom:"20px" }} >
        <Button leftIcon={<AddIcon />} variant="brand" size="lg" onClick={onOpen}>
          เพิ่มสมาชิก
        </Button>
      </div>
      <div style={{ marginBottom: "20px" }} >
        <SearchBar mb={{ base: '10px', md: 'unset' }} me="10px" borderRadius="30px" />
      </div>
      <Card
        direction='column'
        w='100%'
        px='0px'
        overflowX={{ sm: "scroll", lg: "hidden" }}>
        <Flex px='25px' justify='space-between' mb='20px' align='center'>
          <Text
            color={textColor}
            fontSize='22px'
            fontWeight='700'
            lineHeight='100%'>
            Sign in history
        </Text>
        </Flex>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Username</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>9/5/2566 - 02:51:17	</Td>
              <Td>admin</Td>
              <Td><Badge colorScheme="green">Success</Badge></Td>
            </Tr>
            <Tr>
              <Td>9/5/2566 - 02:51:17	</Td>
              <Td>admin</Td>
              <Td><Badge colorScheme="red">Failed</Badge></Td>
            </Tr>
            <Tr>
              <Td>9/5/2566 - 02:51:17	</Td>
              <Td>admin</Td>
              <Td><Badge colorScheme="red">Failed</Badge></Td>
            </Tr>
          </Tbody>
        </Table>
      </Card>
    </Box>
  );
}
