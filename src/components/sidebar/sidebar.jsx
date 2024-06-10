import React from "react";
import {
  HStack,
  Text,
  Box,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Divider,
} from "@chakra-ui/react";

import Link from "next/link";
const Sidebar = () => {
  const PresetItems = [
    {
      title: "🪵 Login Form",
      path: "/Welcome/docs-index",
    },
  ];


  return (
    <VStack px={"20px"}>
      <Box bg={"#242526"} w={"250px"} h={"100%"} p={"5px"} rounded={"8px"}>
        <VStack justify={"left"} align={"left"}>
          <Accordion
          transition={"all .3s ease"}
            defaultIndex={[0]}
            allowMultiple
            color={"white"}
            border={"none"}

          >
            <AccordionItem border={"none"}  >
      
                <AccordionButton  _hover={{ background: "none", transform: "scale(1.05)" }}>
                  <Box as="span" flex="1" textAlign="left" fontSize={"18px"}    fontWeight={"400"}>
                    🎉 Welcome
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

              <AccordionPanel py={"5px"}>
                <HStack
                  justify={"left"}
                  align={"left"}
                  gap={"10px"}
                  w={"100%"}
                  h={"100%"}
                >
                  <VStack
                    h={"100%"}
                    justify={"left"}
                    align={"left"}
                    height="50px"
                  >
                    <Divider
                      orientation="vertical"
                      borderColor={"#686868"}
                      borderWidth={"2px"}
                       // map this too and index it with the subheadings
                    />
                  </VStack>
                  <VStack w={"100%"} h={"100%"} justify={"left"} align={"left"} gap={"0px"}>
                    <Box
                      cursor={"pointer"}
                      fontWeight={"400"}
                      w={"100%"}
                      h={"100%"}
                      p={"10px"}
        
                      rounded={"15px"}
                      _hover={{ background: "#3a3b3c" }}
                      fontSize={"15px"}
                      textIndent={"5px"}
                    >
                      🗺️ Docs Index
                    </Box>
              
                   
                  </VStack>
                </HStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Sidebar;
