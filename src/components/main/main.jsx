import { Box, VStack, Text, HStack } from "@chakra-ui/react";
import React from "react";
import BreadCrumbs from "../breadCrumbs/breadCrumbs";
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";

const Main = ({ titlepath, subpath }) => {
  //fix no emjoi issues by if else or some other methosds like laocl store on click save variable
  return (
    <>
      <Box
        w={"1200px"}
        h={"750px"} // swith to 100% after testing
        bg={"#242526"}
        rounded={"15px"}
        px={"35px"}
        py={"15px"}
      >
        <BreadCrumbs titlePath={titlepath} subPath={subpath} />

        <VStack
          justify={"start"}
          align={"left"}
          h={"100%"}
          w={"90%"}
          mt={"15px"}
          gap={"20px"}
        >
          <Box>
            <Text
              color={"white"}
              fontWeight={"600"}
              fontSize={["12px", "12px", "14px", "16px", "48"]}
            >
              👋 Hello
            </Text>
          </Box>

          <Box>
            <Text
              color={"white"}
              fontSize={["12px", "12px", "14px", "16px", "16px"]}
              lineHeight={"26px"}
              fontWeight={"300"}
            >
              Hello and welcome to the official documentation for QuickSite.guru
              ⭐ This documentation provides all the information you need to
              effectively use QuickSite.guru. Whether you're a beginner or
              intern building your first website or an just exploring the
              platform, this guide will help you navigate the platform with
              ease. Check out the boxes below ↓
            </Text>
          </Box>

          <Box mt={"15px"}>
            {" "}
            <Text
              color={"white"}
              fontWeight={"400"}
              fontSize={["12px", "12px", "14px", "16px", "28px"]}
            >
              Lets get you started
            </Text>
          </Box>

          <Box mt={"10px"}>
            <HStack
              w={"100%"}
              h={"100%"}
              justify={"space-between"}
              align={"start"}
            >
              <Box
                cursor={"pointer"}
                transition={"all 0.3s ease-in-out"}
                _hover={{
                  shadow: "0 0 25px 0px rgb(255, 255, 255,0.05)",
                  h: "110%",
                  bg: "rgb(255, 255, 255,0.05)",
                }}
                color={"white"}
                bg={"#1B1B1D"}
                border={"1px solid rgb(255, 255, 255,0.05)"}
                w={["260px", "260px", "260px", "280px", "290px"]}
                h={["200px", "200px", "225px", "225px", "225px"]}
                rounded={"xl"}
                p={["2", "2", "2", "3", "4"]}
              >
                <VStack align={"left"} w={"100%"} h={"100%"} gap={"15px"}>
                  <HStack>
                    <Text
                      w={"70%"}
                      fontSize={["22px", "22px", "28px", "28px", "32px"]}
                      fontWeight={"700"}
                      textAlign={"left"}
                    >
                      Introduction
                    </Text>
                  </HStack>

                  <HStack>
                    <Text
                      fontSize={["12px", "12px", "12px", "12px", "14px"]}
                      textAlign={"left"}
                    >
                      Lets get you started with a Introduction, understand the
                      company and our gaols
                    </Text>
                  </HStack>
                  <HStack
                    cursor={"pointer"}
                    w={"100%"}
                    h={"100%"}
                    justify={"end"}
                    align={"end"}
                    fontWeight={"500"}
                    transition="transform, 0.3s ease-in-out"
                    _hover={{
                      marginLeft: "5px",
                    }}
                  >
                    <HStack align={"center"} mr={"5px"}>
                      <Text fontSize={"12px"} as={"span"}>
                        🧑‍💻 Introduction
                      </Text>{" "}
                      <HiArrowLongRight fontSize={"30px"} />
                    </HStack>
                  </HStack>
                </VStack>
              </Box>

              <Box
                 cursor={"pointer"}
                 transition={"all 0.3s ease-in-out"}
                 _hover={{
                   shadow: "0 0 25px 0px rgb(255, 255, 255,0.05)",
                   h: "110%",
                   bg: "rgb(255, 255, 255,0.05)",
                 }}
                 color={"white"}
                 bg={"#1B1B1D"}
                 border={"1px solid rgb(255, 255, 255,0.05)"}
                 w={["260px", "260px", "260px", "280px", "290px"]}
                 h={["200px", "200px", "225px", "225px", "225px"]}
                 rounded={"xl"}
                 p={["2", "2", "2", "3", "4"]}
           
              >
                <VStack align={"left"} w={"100%"} h={"100%"} gap={"15px"}>
                  <HStack>
                    <Text
                      w={"70%"}
                      fontSize={["22px", "22px", "28px", "28px", "32px"]}
                      fontWeight={"700"}
                      textAlign={"left"}
                    >
                      QuickSite
                    </Text>
                  </HStack>

                  <HStack>
                    <Text
                      fontSize={["12px", "12px", "12px", "12px", "14px"]}
                      textAlign={"left"}
                    >
                      Want to learn how to use Quick Site Guru (QSG) Click here
                      to learn all the features and know-hows
                    </Text>
                  </HStack>
                  <HStack
                    cursor={"pointer"}
                    w={"100%"}
                    h={"100%"}
                    justify={"end"}
                    align={"end"}
                    fontWeight={"500"}
                    transition="transform, 0.3s ease-in-out"
                    _hover={{
                      marginLeft: "5px",
                    }}
                  >
                    <HStack align={"center"} mr={"5px"}>
                      <Text fontSize={"12px"} as={"span"}>
                        ⚙️ Using QuickSite
                      </Text>{" "}
                      <HiArrowLongRight fontSize={"30px"} />
                    </HStack>
                  </HStack>
                </VStack>
              </Box>

              <Box
                 cursor={"pointer"}
                 transition={"all 0.3s ease-in-out"}
                 _hover={{
                   shadow: "0 0 25px 0px rgb(255, 255, 255,0.05)",
                   h: "110%",
                   bg: "rgb(255, 255, 255,0.05)",
                 }}
                 color={"white"}
                 bg={"#1B1B1D"}
                 border={"1px solid rgb(255, 255, 255,0.05)"}
                 w={["260px", "260px", "260px", "280px", "290px"]}
                 h={["200px", "200px", "225px", "225px", "225px"]}
                 rounded={"xl"}
                 p={["2", "2", "2", "3", "4"]}
              >
                <VStack align={"left"} w={"100%"} h={"100%"} gap={"15px"}>
                  <HStack>
                    <Text
                      w={"70%"}
                      fontSize={["22px", "22px", "28px", "28px", "32px"]}
                      fontWeight={"700"}
                      textAlign={"left"}
                    >
                      Internship
                    </Text>
                  </HStack>

                  <HStack>
                    <Text
                      fontSize={["12px", "12px", "12px", "12px", "14px"]}
                      textAlign={"left"}
                    >
                      Click here if your interning at QuickSite.guru. Lest get
                      you up and running in no time
                    </Text>
                  </HStack>
                  <HStack
                    cursor={"pointer"}
                    w={"100%"}
                    h={"100%"}
                    justify={"end"}
                    align={"end"}
                    fontWeight={"500"}
                    transition="transform, 0.3s ease-in-out"
                    _hover={{
                      marginLeft: "5px",
                    }}
                  >
                    <HStack align={"center"} mr={"5px"}>
                      <Text fontSize={"12px"} as={"span"}>
                        🧠 Stage 1
                      </Text>{" "}
                      <HiArrowLongRight fontSize={"30px"} />
                    </HStack>
                  </HStack>
                </VStack>
              </Box>
            </HStack>
          </Box>

          <Box mt={"65px"} >
            <HStack  w={"100%"} h={"100%"} justify={"space-between"}  transition={"all 0.3s ease-in-out"}>
              <Box
       
                cursor={"pointer"}
                transition={"all 0.3s ease-in-out"}
                _hover={{
                
                  w: "200px",
                  
                }}
                p={"10px"}
                px={"20px"}
                rounded={"15px"}
                w={"190px"}
                h={"100%"}
                bg={"rgb(255, 255, 255,0.05)"}
                border={"1px solid rgb(255, 255, 255,0.05)"}
              >
                <HStack align={"center"} w={"100%"} h={"100%"}  justify={"space-between"}   >
                  <HiArrowLongLeft  fontSize={"40px"} color="white"   />
                  <Text 
                    fontSize={["16px", "16px", "16px", "16px", "16px"]}
                    as={"span"}
                    textAlign={"left"}
                    color={"white"}
                  >
                    🎉 Welcome 
                  </Text>{" "}
                </HStack>
              </Box>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default Main;

// <Box>
// <Text
//   color={"white"}
//   fontWeight={"600"}
//   fontSize={["12px", "12px", "14px", "16px", "28px"]}

// >
// About
// </Text>
// </Box>

// <Box>
// <Text
//   color={"white"}
//   fontSize={["12px", "12px", "14px", "16px", "16px"]}
//   lineHeight={"26px"}
//   fontWeight={"300"}
// >
//   Hello and welcome to the official documentation for QuickSite.guru
//   – your gateway to effortless and innovative website creation! 🚀
//   This guide is your resource for understanding and utilizing all
//   the features of QuickSite.guru Our platform makes web development
//   accessible to everyone, regardless of technical expertise. Let's
//   start building amazing websites! 🌐
// </Text>
// </Box>
