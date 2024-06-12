"use client";
import Main from "@/components/main/main";
import PageSwitch from "@/components/pageSwitch/pageSwitch";
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
            h={"780px"}
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

     <PageSwitch />
    </>
  );
};

export default Home;
