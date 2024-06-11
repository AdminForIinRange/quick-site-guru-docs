import React from "react";
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
} from "@chakra-ui/react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import  SideLink  from "../../app/global/data/Sidelink";
const Sidebar = ({titlepath, subpath}) => {

    const router = useRouter();


  return (
    <VStack pl={"30px"}  >
      {SideLink.map((item, index) =>
        Object.keys(item).map((key) =>
          item[key].map((section, sectionIndex) => (
          

            <Box
            transition={"all .3s ease"}
              key={`${index}-${sectionIndex}`}
              bg={"#242526"}
              w={["265px", "265px", "265px", "225px", "265px"]}
              h={"100%"}
              p={"5px"}
              rounded={"8px"}
              _hover={{ width:"105%"}}
            >
              <VStack justify={"left"} align={"left"} h={"100%"} >
                <Accordion
                  transition={"all .3s ease"}
                  defaultIndex={[section.StartingPath == titlepath ? 0 : 1]}
                  allowMultiple
                  color={"white"}
                  border={"none"}
                  _hover={{ background: "#2C2D2F"}}
                  rounded={"10px"}
                >
                  <AccordionItem border={"none"} >
                    <AccordionButton
                      _hover={{ background: "none", transform: "scale(1.05)", }}
                    >
                      <Box

                        as="span"
                        flex="1"
                        textAlign="left"
                        fontSize={["14px", "14px", "14px", "14px", "16px"]}
                        fontWeight={"400"}
                      >
                        {section.title}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel py={"5px"}>
                      {section.sublinks.map((subtitle, sublinkIndex) => (

                        <HStack
                          justify={"left"}
                          align={"left"}
                          gap={"10px"}
                          w={"100%"}
                          h={"100%"}
                          key={`${index}-${sectionIndex}-${sublinkIndex}`}
                        >
                          <VStack
                            h={"100%"}
                            justify={"left"}
                            align={"left"}
                            height="41px"
                          >
                            <Divider
                              orientation="vertical"
                              borderColor={"#686868"}
                              borderWidth={"2px"}
                            />
                          </VStack>
                          <VStack
                            w={"100%"}
                            h={"100%"}
                            justify={"left"}
                            align={"left"}
                          >
                            <Box
rounded={"10px"}
                              onClick={() => router.replace(`/${subtitle.path}`)}
                              cursor={"pointer"}
                              fontWeight={"400"}
                              w={"100%"}
                              h={"100%"}
                              p={"10px"}
                              _hover={{ background: "#3a3b3c" }}
                              fontSize={["12px", "12px", "12px", "12px", "14px"]}

                              textIndent={["5px", "5px", "5px", "0px", "5px"]}
                              textColor={subtitle.prams == subpath ? "#9896FF" : "white"}
                            >
                              {subtitle.subtitle}
                            </Box>
                          </VStack>
                        </HStack>
                      ))}
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </VStack>
            </Box>
          ))
        )
      )}
    </VStack>
  );
};

export default Sidebar;
