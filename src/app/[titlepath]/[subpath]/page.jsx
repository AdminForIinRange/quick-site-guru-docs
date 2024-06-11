"use client";
import Main from "@/components/main/main";
import Sidebar from "@/components/sidebar/sidebar";
import { HStack, Box, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";

const Home = ( {params} ) => {
    console.log(params)
  const [isTablet] = useMediaQuery("(max-width: 768px)");
  return (
    <Box mt={"25px"} h={"1200px"}>
    <HStack
      align={"start"}
    
      mt={"15px"}
    >
      {!isTablet ? <Sidebar titlepath={params.titlepath} subpath={params.subpath}  /> : null}

 <Main titlepath={params.titlepath} subpath={params.subpath} /> 

 {/* you can only get prams if you asking from the page.jsx  */}
    </HStack>
  </Box>
  );
};

export default Home;

