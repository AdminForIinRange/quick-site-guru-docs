"use client";
import Main from "@/components/main/main";
import RightSideNav from "@/components/rightSideNav/rightSideNav";
import Sidebar from "@/components/sidebar/sidebar";
import { HStack, Box, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";

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
  </Box>
  );
};

export default Home;

