import {
  HStack,
  Box,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Divider,
  Text,
} from "@chakra-ui/react";
import React from "react";

const RightSideNav = () => {
  return (
    <>
      <VStack pr={"30px"}>
        <Box
          minW={["125px", "125px", "125px", "50px", "50px"]}
          py={"200px"}
          transition={"all .3s ease"}
          h={"100%"}
          rounded={"8px"}
        >
          <VStack
            w={"50%"}
            h={"100%"}
            gap={"30px"}
            color={"white"}
            justify={"right"}
            align={"end"}
          ></VStack>
        </Box>
      </VStack>
    </>
  );
};

export default RightSideNav;
