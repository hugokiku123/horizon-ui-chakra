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
  FormLabel
} from "@chakra-ui/react";
import Card from "components/card/Card"
import React from "react";
import { Button } from "@chakra-ui/react";


export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");


  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 3, sm: 3, md: 2 }} gap='20px'>
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

        <Card
          direction='column'
          w='100%'
          px='25px'
          overflowX={{ sm: "scroll", lg: "hidden" }}>
          <Text
            color={textColor}
            fontSize='22px'
            fontWeight='700'
            lineHeight='100%'>
            Account Info
        </Text>

          <FormLabel style={{ marginTop: "15px" }}>Username</FormLabel>
          <Input placeholder="large size" size="lg" borderRadius="16px" isDisabled="true"/>
          <FormLabel style={{ marginTop: "15px" }}>Role</FormLabel>
          <Input placeholder="large size" size="lg" borderRadius="16px" isDisabled="true"/>
          <FormLabel style={{ marginTop: "15px" }}>Display Name</FormLabel>
          <Input placeholder="large size" size="lg" borderRadius="16px" isDisabled="true"/>
          <FormLabel style={{ marginTop: "15px" }}>Current Password</FormLabel>
          <Input placeholder="large size" size="lg" borderRadius="16px"/>
          <FormLabel style={{ marginTop: "15px" }}>New Password</FormLabel>
          <Input placeholder="large size" size="lg" borderRadius="16px"/>
          <div style={{textAlign:"right"}}>
          <Button style={{ marginTop: "15px",width:"150px" }} variant="brand" size="lg" >
            Submit
        </Button>
          </div>
        </Card>
      </SimpleGrid>
    </Box>
  );
}
