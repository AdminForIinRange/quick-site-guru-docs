"use client";
import Main from "@/components/main/main";
import RightSideNav from "@/components/rightSideNav/rightSideNav";
import Sidebar from "@/components/sidebar/sidebar";
import { HStack, Box, useMediaQuery, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";

const Home = ( {params} ) => {
    console.log(params)
 
  return (
    <Box mt={"25px"} h={"1200px"}>
    <HStack
      align={"start"}
    w={"100%"}
      mt={"15px"}
      gap={["20px", "20px", "20px", "10px", "20px"]}
      justify={"center"}
    >

      <Box display={["none", "none", "none", "block", "block"]}>
    <Sidebar titlepath={params.titlepath} subpath={params.subpath}  /> 

      </Box>


 <Main titlepath={params.titlepath} subpath={params.subpath} /> 
 <Box display={["none", "none", "none", "block", "block"]}>
 <RightSideNav /> 

 </Box>


 {/* you can only get prams if you asking from the page.jsx  */}
    </HStack>

    <Box ml={["0", "0", "0", "120px", "140px"]} mt={["25px", "25px", "25px", "25px", "25px"]} >
      <HStack w={"100%"} justify={"center"} align={"center"}>
      <HStack 
 
            w={["94%", "94%", "94%", "65%", "67%"]}
              h={"100%"}
              justify={"right"}
              align={"center"}
              transition={"all 0.3s ease-in-out"}
            >
              <Box
                cursor={"pointer"}
                transition={"all 0.3s ease-in-out"}
                _hover={{
                  w: "220px",
                  bg: "rgb(255, 255, 255,0.1)",
                }}
                p={"10px"}
                px={"20px"}
                rounded={"15px"}
                w={["180px", "180px", "195px", "195px", "195px"]}
                h={["90%", "90%", "100%", "100%", "100%"]}
                bg={"rgb(255, 255, 255,0.05)"}
                border={"1px solid rgb(255, 255, 255,0.05)"}
              >
                <HStack
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  justify={"space-between"}
                >
                  <Text
                    fontSize={["12px", "12px", "14px", "11px", "14px"]}
                    as={"span"}
                    textAlign={"left"}
                    color={"white"}
                  >
                    🧑‍💻 Introduction
                  </Text>{" "}
                  <HiArrowLongRight fontSize={"inherit"} color="white" />
                </HStack>
              </Box>
            </HStack>
      </HStack>
         
          </Box>
  </Box>
  );
};

export default Home;

