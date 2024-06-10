"use client";
import Main from "@/components/main/main";
import Sidebar from "@/components/sidebar/sidebar";
import { HStack, Box, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";

const Home = () => {
  const [isTablet] = useMediaQuery("(max-width: 768px)");
  return (
    <Box mt={"25px"} h={"1200px"}>
    <HStack
      align={"start"}
      gap={["15px", "15px", "25px", "25px", "25px"]}
      mt={"15px"}
    >
      {!isTablet ? <Sidebar /> : null}

<Main />
    </HStack>
  </Box>
  );
};

export default Home;

