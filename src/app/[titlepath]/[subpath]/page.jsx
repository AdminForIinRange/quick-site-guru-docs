"use client";
import Main from "@/components/main/main";
import RightSideNav from "@/components/rightSideNav/rightSideNav";
import Sidebar from "@/components/sidebar/sidebar";
import { HStack, Box, useMediaQuery, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";

const Home = ({ params }) => {


  return (
    <>
      <Box mt={"15px"}>
        <HStack
          align={"start"}
          w={"100%"}
          mt={"15px"}
          gap={["15px", "15px", "15px", "10px", "10px"]}
          justify={"center"}
  
        >
          <Box
            display={["none", "none", "none", "block", "block"]}
            h={"745px"}
            overflowY={"scroll"}
            pr="10px"
             pl="10px"
             borderRadius={"15px"}
            overflowX={"hidden"}
         
          
       
          >
            <Sidebar titlepath={params.titlepath} subpath={params.subpath} />
          </Box>

          <Main titlepath={params.titlepath} subpath={params.subpath} />

          {/* you can only get prams if you asking from the page.jsx  */}
        </HStack>
      </Box>

      <Box ml={["0", "0", "0", "265px", "306px"]} mt={"15px"}>
        <HStack w={"100%"} justify={"center"} align={"center"}>
          <HStack
            w={["94%", "94%", "94%", "88%", "74%"]}
            h={"100%"}
            justify={"right"}
            align={"center"}
            transition={"all 0.3s ease-in-out"}
 
          >
            <Box
              cursor={"pointer"}
              transition={"all 0.3s ease-in-out"}
              _hover={{
                w: ["190px", "190px", "220px", "220px", "220px"],
                bg: "rgb(255, 255, 255,0.1)",
              }}
              p={"5px"}
              px={"20px"}
              rounded={"15px"}
              w={["190px", "190px", "205px", "205px", "205px", "225px"]}
              h={["90%", "90%", "100%", "100%", "100%"]}
              bg={"rgb(255, 255, 255,0.05)"}
              border={"1px solid rgb(255, 255, 255,0.05)"}
              boxShadow={"rgba(0, 0, 0, 0.25) 0px 0px 8px"}
            >
              <HStack
                align={"center"}
                w={"100%"}
                h={"100%"}
                justify={"space-between"}
              >
                <Text
                  fontSize={["14px", "14px", "16px", "16px", "16px", "18px"]}
                  as={"span"}
                  textAlign={"left"}
                  color={"white"}
                >
                  🧑‍💻 Introduction
                </Text>{" "}
                <HiArrowLongRight fontSize={"40px"} color="white" />
              </HStack>
            </Box>
          </HStack>
        </HStack>
      </Box>
    </>
  );
};

export default Home;
