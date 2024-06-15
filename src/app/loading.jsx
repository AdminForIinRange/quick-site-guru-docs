import React from "react";

import { HStack, VStack, Text, Box, AbsoluteCenter } from "@chakra-ui/react";

const loading = () => {
  return (
    // fuuit rotates in teh background
    <>
      <VStack justify={"center"} align={"center"} w={"100%"} h={"100%"}>
        <HStack justify={"center"} align={"center"} w={"100%"} h={"100%"}>
          <Text fontSize={"26"} fontWeight={"600"}>
            {" "}
            Loading 🌀
          </Text>
        </HStack>
      </VStack>
    </>
  );
};

export default loading;
