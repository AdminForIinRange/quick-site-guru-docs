"use client";

import { Box, VStack, Text, HStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BreadCrumbs from "@/components/breadCrumbs/breadCrumbs";
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";
import Link from "next/link";
import quicksite_guru_logo from "../../../img/quicksite_guru_logo.jpeg";
import { FaDiscord, FaLongArrowAltRight } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
const CommunitySupport = ({ titlepath, subpath }) => {
  //fix no emjoi issues by if else or some other methosds like laocl store on click save variable
  return (
    <>
      <Box
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
              Discord serves as our primary communication platform, where we
              engage with our community 80% of the time. Joining our Discord
              server ensures you stay connected, participate in discussions, and
              receive instant support from our team and community members.
              Additionally, connect with us on LinkedIn for professional
              updates, news, and networking opportunities. While Discord is our
              main hub for interaction, LinkedIn remains integral to our online
              presence, albeit with less frequent use.
              <br />
            </Text>
            <HStack
              mt={"30px"}
              gap={"30px"}
              justify={"left"}
              align={"start"}>
              w={"100%"}
              h={"100%"}
            >
              <Box h={"65px"} w={"300px"} borderRadius={"10px"} bg={"#424549"}>
                <HStack
                  p={"10px"}
                  w={"100%"}
                  h={"100%"}
                  justify={"space-between"}
                  align={"center"}
                  px={"15px"}
                >
                  <FaDiscord as={"span"} fontSize={"45px"} color="#7289DA" />
                  <Box
                    transition={"all 0.3s ease-in-out"}
                    _hover={{
                      cursor: "pointer",
                      color: "teal.500",
                      transform: "scale(1.08)",
                    }}
                  >
                    <VStack gap={"0px"}>
                      <Text
                        as={Link}
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
                        Join Our Community
                      </Text>
                    </VStack>
                  </Box>
                  <HiArrowLongRight fontSize={"40px"} color="white" />
                </HStack>
              </Box>
              <Box h={"65px"} w={"300px"} borderRadius={"10px"} bg={"#0078c7"}>
                {" "}
                <HStack
                  p={"10px"}
                  w={"100%"}
                  h={"100%"}
                  justify={"left"}
                  align={"center"}
                ></HStack>{" "}
              </Box>
            </HStack>
          </Box>

          <Box>
            <Text
              mb={"15px"}
              color={"white"}
              fontWeight={"600"}
              fontSize={["18px", "18px", "20px", "20px", "28px"]}
            >
              Google Meet
            </Text>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
              All our meetings are conducted via Google Meet. Below is our
              meeting schedule:
              <br />
              - Monday: 7:30 AM
              <br />
              - Thursday: 8:00 AM
              <br />
              - Saturday: 9:30 AM and 10:30 AM
              <br />
              Please ensure you are on time for all scheduled meetings.
            </Text>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default CommunitySupport;
