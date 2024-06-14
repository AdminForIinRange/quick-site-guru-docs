"use client";

import { Box, VStack, Text, HStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BreadCrumbs from "@/components/breadCrumbs/breadCrumbs";
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";
import Link from "next/link";

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
              🤝 Community & Support
            </Text>
          </Box>

          <Box>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
              At QuickSite.guru, we prioritize effective communication and community support to ensure our team and users are always connected and informed. Join our community and stay updated through our primary communication channels.
            </Text>
          </Box>

          <Box>
            <Text
              mb={"15px"}
              color={"white"}
              fontWeight={"600"}
              fontSize={["18px", "18px", "20px", "20px", "28px"]}
            >
              Discord
            </Text>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
              Discord is our main communication platform where we interact 80% of the time. Join our Discord server to stay connected, participate in discussions, and get instant support from our team and community.
              <br />
              <Text as={Link} color={"teal.500"} href="https://discord.gg/bPtbBVAw" isExternal>
                Join our Discord Server
              </Text>
            </Text>

            <Box h={"300px"} w={"300px"}> </Box>
 
          </Box>

          <Box>
            <Text
              mb={"15px"}
              color={"white"}
              fontWeight={"600"}
              fontSize={["18px", "18px", "20px", "20px", "28px"]}
            >
              LinkedIn
            </Text>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
              Connect with us on LinkedIn for professional updates, news, and networking opportunities. While it's not as frequently used as Discord, LinkedIn remains an important part of our online presence.
              <br />
              <Link color={"teal.500"} href="https://www.linkedin.com/company/quicksite-guru/mycompany/" isExternal>
                Visit our LinkedIn Page
              </Link>
            </Text>
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
              All our meetings are conducted via Google Meet. Below is our meeting schedule:
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
