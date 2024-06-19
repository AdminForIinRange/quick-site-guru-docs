"use client";

import { Box, VStack, Text, HStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BreadCrumbs from "@/components/breadCrumbs/breadCrumbs";
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";
import Link from "next/link";


const OurMissionVison = ({ titlepath, subpath }) => {
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
        pb={"50px"}
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
              🏢 Community/Support
            </Text>
          </Box>

          <Box>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
              Welcome to       <Text
          transition={"all 0.3s ease"}
          mx={1.5}
          as={Link}
          target="_blank"
          href="https://discord.com/channels/1223592781235359764/1224795787985420298"
          cursor={"pointer"}
          textAlign={"center"}
          fontWeight={"bold"}
          lineHeight={"35px"}
          color={"white"}
          p={1.5}
          rounded={"8px"}
          bg={"rgb(255, 255, 255,0.05)"}
          border={"1px solid rgb(255, 255, 255,0.05)"}
          _hover={{
            transform: "scale(1.05)",
            shadow: "0 0 25px 0px rgb(255, 255, 255,0.2)",
          }}
          whiteSpace={"nowrap"}
        >
          {" "}
        quicksite.guru{" "}
        </Text> – where your digital footprint is just a few clicks away from becoming a reality. QuickSite.guru emerges as a beacon of innovation in the website creation landscape, heralding a new era where accessibility, speed, and simplicity are not just ideals but everyday standards
            </Text>
          </Box>
          <Box>
            <Text
              mb={"15px"}
              color={"white"}
              fontWeight={"600"}
              fontSize={["18px", "18px", "20px", "20px", "28px"]}
            >
              Our Mission
            </Text>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
             In a world where an online presence is not just an asset but a necessity, QuickSite.guru aims to democratize website creation. We believe that every startup, every small business, and every visionary should have the tools to launch their dream online without the hassle, high costs, or time-consuming processes that have traditionally hampered digital aspirations.
            </Text>
          </Box>

          <Box>
            <Text
              mb={"15px"}
              color={"white"}
              fontWeight={"600"}
              fontSize={["18px", "18px", "20px", "20px", "28px"]}
            >
           Our Vision
            </Text>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
             We envision a future where creating a professional, mobile-friendly website is as straightforward as asking for it. Leveraging the cutting-edge capabilities of AI, specifically in coding and design, QuickSite.guru transforms the complex web development process into an immediate, incremental, and interactive journey. Our goal is to disrupt the status quo, making static website hosting not just affordable but entirely free, and turning the dream of a custom online domain into a reality within minutes.
            </Text>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default OurMissionVison;
