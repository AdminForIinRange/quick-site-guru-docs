"use client";

import {
  Box,
  VStack,
  HStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BreadCrumbs from "@/components/breadCrumbs/breadCrumbs";
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";
import Link from "next/link";
import quicksite_guru_logo from "../../../img/quicksite_guru_logo.jpeg";
import { FaDiscord, FaLinkedinIn, FaLongArrowAltRight } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
const CommunitySupport = ({ titlepath, subpath }) => {
  //fix no emjoi issues by if else or some other methosds like laocl store on click save variable
  return (
    <>
      <Box transition={"all 0.3s ease-in-out"}
        boxShadow={"rgba(0, 0, 0, 0.25) 0px 0px 8px"}
        w={["95%", "95%", "95%", "70%", "62.5%"]}
        //DONT AJUST THIS NOW, DO IT WHEN ITS DONE
        h={"140%"} //DONT AJUST THIS NOW, DO IT WHEN ITS DONE
        bg={"rgb(255, 255, 255,0.05)"}
        border={"1px solid rgb(255, 255, 255,0.05)"}
        rounded={"15px"}
        pl={["18px", "25px", "25px", "15px", "35px"]}
        pr={["18px", "25px", "25px", "15px", "10px"]}
        py={"15px"}
        pb={"120px"}
      >
        <BreadCrumbs titlePath={titlepath} subPath={subpath} />

        <VStack
          justify={"start"}
          align={"left"}
          h={"100%"}
          w={["100%", "100%", "100%", "100%", "90%"]}
          mt={"15px"}
          gap={"30px"}
        >
          <Box>
            <Text
              color={["white", "blue", "green", "yellow", "orange", "white"]}
              fontWeight={"600"}
              fontSize={["38px", "38px", "38px", "38px", "48px"]}
            >
              🌐 Community & Support
            </Text>
          </Box>

          <Box>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
              At QuickSite.guru, we prioritize effective communication and
              community support to ensure our team and users are always
              connected and informed. Join our community and stay updated
              through our primary communication channels.
            </Text>
          </Box>

          <Box>
            <Text
              mb={"15px"}
              color={"white"}
              fontWeight={"600"}
              fontSize={["18px", "18px", "20px", "20px", "28px"]}
            >
              Connect
            </Text>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
              Discord serves as our primary communication platform, facilitating
              80% of our community engagements. Joining our Discord server
              ensures continuous connection, active participation in
              discussions, and immediate support from both our team and
              community members. Furthermore, on LinkedIn, you can stay updated
              with professional insights, industry news, and networking
              opportunities. While Discord serves as our primary hub for
              interaction, LinkedIn remains a crucial component of our online
              presence, albeit with less frequent utilization.
            </Text>
            <HStack
              mt={"30px"}
              gap={"30px"}
              justify={"left"}
              align={"start"}
              w={"100%"}
              h={"100%"}
            >
              <Box
                transition={"all 0.3s ease-in-out"}
                _hover={{
                  cursor: "pointer",
                  color: "teal.500",
                  transform: "scale(1.05)",
                }}
                h={"65px"}
                w={"300px"}
                borderRadius={"10px"}
                bg={"#424549"}
              >
                <HStack
                  p={"10px"}
                  w={"100%"}
                  h={"100%"}
                  justify={"space-between"}
                  align={"center"}
                  px={"15px"}
                >
                  <FaDiscord as={"span"} fontSize={"45px"} color="#7289DA" />
                  <Box>
                    <VStack gap={"0px"}>
                      <Text
                        color={"white"}
                        fontSize={"20px"}
                        fontWeight={"500"}
                        w={"100%"}
                      >
                        QuickSite Guru
                      </Text>
                      <Text
                        color={"white"}
                        fontSize={"12px"}
                        w={"100%"}
                        textAlign={"left"}
                        pr={"40px"}
                      >
                        Join Our Community
                      </Text>
                    </VStack>
                  </Box>
                  <HiArrowLongRight fontSize={"50px"} color="white" />
                </HStack>
              </Box>
              <Box  mb={"15px"}
                transition={"all 0.3s ease-in-out"}
                _hover={{
         boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 8px",
                  cursor: "pointer",
                  color: "teal.500",
                  transform: "scale(1.05)",
                }}
                h={"65px"}
                w={"300px"}
                borderRadius={"10px"}
                bg={"#0078c7"}
              >
                {" "}
                <HStack
                  p={"10px"}
                  w={"100%"}
                  h={"100%"}
                  justify={"space-between"}
                  align={"center"}
                  px={"15px"}
                >
                  <FaLinkedinIn as={"span"} fontSize={"45px"} color="white" />
                  <Box>
                    <VStack gap={"0px"}>
                      <Text
                        color={"white"}
                        href="https://discord.gg/bPtbBVAw"
                        isExternal
                        fontSize={"20px"}
                        fontWeight={"500"}
                        w={"100%"}
                      >
                        QuickSite Guru
                      </Text>
                      <Text
                        color={"white"}
                        fontSize={"12px"}
                        w={"100%"}
                        textAlign={"left"}
                        pr={"40px"}
                      >
                        Web Startup
                      </Text>
                    </VStack>
                  </Box>
                  <HiArrowLongRight fontSize={"50px"} color="white" />
                </HStack>
              </Box>
            </HStack>
          </Box>
          <Box textColor={"white"}>
            <Text
              mb={["10px", "10px", "15px", "15px", "15px"]}
              color={"white"}
              fontWeight={"600"}
              fontSize={["20px", "20px", "24px", "24px", "32px"]}
              lineHeight={"1.2"}
            >
              Google Meet Schedule
            </Text>
       
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
              All meetings are conducted via Google Meet. Please ensure
              punctuality for all scheduled meetings. <Text color={"teal.300"} as={"span"}> To Accesss the google meet link ...................  </Text>
                 
            </Text>
            <Box
              px={["10px", "10px", "15px", "15px", "20px"]}
              py={["10px", "10px", "15px", "15px", "20px"]}
              bg={"rgb(255, 255, 255,0.05)"}
              border={"1px solid rgb(255, 255, 255,0.05)"}
              mt={["10px", "10px", "15px", "15px", "20px"]}
              rounded={"10px"}
            >
              <Table
                variant="simple"
                borderColor={"rgb(255, 255, 255,0.05)"}
                fontSize={["14px", "14px", "14px", "14px", "16px"]}
              >
                <Thead >
                  <Tr >
                    <Th
                      borderColor={"rgb(255, 255, 255,0.5)"}
                      fontSize={["24px", "24px", "24px", "24px", "24px"," 24px"]}
                      color={"white"}
                      pb={"20px"}
                     
                    >
                      Day
                    </Th>
                    <Th
                    pb={"20px"}
                      borderColor={"rgb(255, 255, 255,0.5)"}
                      color={"white"}
                      fontSize={["24px", "24px", "24", "24px", "24px", "24px"]}
              
                    >
                      Time
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td borderColor={"rgb(255, 255, 255,0.5)"} fontSize={["18px", "18px", "18px", "18px", "18px"]} fontWeight={"600"} >Monday</Td>
                    <Td borderColor={"rgb(255, 255, 255,0.5)"}>
                      {" "}
                      <Text
                        p={"10px"}
                        textAlign={"center"}
                        rounded={"10px"}
                        bg={"rgb(255, 255, 255,0.05)"}
                        border={"1px solid rgb(255, 255, 255,0.05)"}
                        w={"100px"}
                        fontWeight={"300"}
                      >
                        {" "}
                        7:30 AM{" "}
                      </Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td borderColor={"rgb(255, 255, 255,0.5)"}  fontWeight={"600"} fontSize={["18px", "18px", "18px", "18px", "18px"]}>Thursday</Td>
                    <Td borderColor={"rgb(255, 255, 255,0.5)"}>
                      <Text
                        p={"10px"}
                        textAlign={"center"}
                        rounded={"10px"}
                        bg={"rgb(255, 255, 255,0.05)"}
                        border={"1px solid rgb(255, 255, 255,0.05)"}
                        w={"100px"}
                        fontWeight={"300"}
                      >
                        {" "}
                        8:00 AM{" "}
                      </Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td borderColor={"rgb(255, 255, 255,0)"} fontWeight={"600"} fontSize={["18px", "18px", "18px", "18px", "18px"]}  >Saturday</Td>
                    <Td borderColor={"rgb(255, 255, 255,0)"}>
                      {" "}
                      <HStack>
                        {" "}
                        <Text
                          p={"10px"}
                          textAlign={"center"}
                          rounded={"10px"}
                          bg={"rgb(255, 255, 255,0.05)"}
                          border={"1px solid rgb(255, 255, 255,0.05)"}
                          w={"100px"}
                          fontWeight={"300"}
                        >
                          {" "}
                          9:30 AM{" "}
                        </Text>{" "}
                        <Text
                          p={"10px"}
                          textAlign={"center"}
                          rounded={"10px"}
                          bg={"rgb(255, 255, 255,0.05)"}
                          border={"1px solid rgb(255, 255, 255,0.05)"}
                          w={"100px"}
                          fontWeight={"300"}
                        >
                          {" "}
                          10:00 AM{" "}
                        </Text>{" "}
                      </HStack>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default CommunitySupport;
