"use client";
import Sidebar from "@/components/sidebar/sidebar";
import { HStack, Box, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";

const Home = () => {
  const [isTablet] = useMediaQuery("(max-width: 768px)");
  return (
    <div>
    <HStack
      align={"start"}
      gap={["15px", "15px", "25px", "25px", "25px"]}
      mt={"15px"}
    >
      {!isTablet ? <Sidebar /> : null}

<Box>
  
</Box>
    </HStack>
  </div>
  );
};

export default Home;

