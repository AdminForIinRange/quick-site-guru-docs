import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";

const BreadCrumbs = ({ titlePath, subPath }) => {

    
  return (

    <>
      <Box>
        <HStack justify={"start"} align={"center"} w={"100%"} h={"50px"}>
          <Text color={"white"} fontSize={"18px"} textAlign={"center"}>
            {titlePath} 
          </Text>
          <Text color={"white"} fontSize={"18px"} textAlign={"center"}>

          </Text>
          <Text color={"white"} fontSize={"18px"} textAlign={"center"}>
            {subPath} 
          </Text>
        </HStack>
      </Box>
    </>
  );
};

export default BreadCrumbs;

