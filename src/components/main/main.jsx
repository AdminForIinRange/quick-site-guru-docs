import { Box, VStack, Text, HStack } from "@chakra-ui/react";
import React from "react";
import BreadCrumbs from "../breadCrumbs/breadCrumbs";
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";

const Main = ({ titlepath, subpath }) => {
  const navBoxes = [
    {
      title: "Introduction",
      desc: " Lets get you started with a Introduction, understand the company and our gaols",
      nav: "   🧑‍💻 Introduction",
    },
    {
      title: "QuickSite",
      desc: " Want to learn how to use Quick Site Guru (QSG) Click here to learn all the features and know-hows",
      nav: "  ⚙️ Using QuickSite",
    },
    {
      title: "Internship",
      desc: "  Click here if your interning at QuickSite.guru. Lest get you up and running in no time",
      nav: "🎓 Internship Program",
    },
  ];

  //fix no emjoi issues by if else or some other methosds like laocl store on click save variable
  return (
    <>
      <Box
        w={["95%", "95%", "95%", "100%", "62.5%"]}
        h={["900px", "1000px", "750px", "750px", "800px"]} // swith to 100% after testing
        bg={"#242526"}
        rounded={"15px"}

        pl={["18px", "25px", "25px", "15px", "35px"]}
        pr={["18px", "25px", "25px", "15px", "35px"]}
        py={"15px"}
      >
        <BreadCrumbs titlePath={titlepath} subPath={subpath} />

        <VStack
          justify={"start"}
          align={"left"}
          h={"100%"}
          w={["100%", "100%", "100%", "100%", "90%"]}
          mt={"15px"}
          gap={"30px"}
        >
          <Box>
            <Text
              color={["red", "blue", "green", "yellow", "orange"]}
              fontWeight={"600"}
              fontSize={["28px", "38px", "38px", "38px", "48px"]}
            >
              👋 Hello
            </Text>
           
          </Box>

          

          <Box>
          <Text
            mb={"25px"}
              color={"white"}
              fontWeight={"600"}
              fontSize={["16px", "18px", "20px", "20px", "28px"]}
            >
              Find What You Need
            </Text>
            <Text
              color={"white"}
              fontSize={["12px", "14px", "14px", "14px", "16px"]}
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
              fontWeight={"600"}
              fontSize={["16px", "18px", "20px", "20px", "28px"]}
            >
              Lets get you started {`↓`}
            </Text>
          </Box>

          <Box  >
            <HStack
              transition={"all 0.3s ease-in-out"}
              flexWrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
              w={"100%"}
              h={"100%"}
              justify={["space-between", "space-between", "space-between", "space-between", "space-between"]}
              align={"start"}
            >
             {navBoxes.map(({ title, desc, nav}, index) => ( 
              <Box key={index}
                cursor={"pointer"}
                transition={"all 0.3s ease-in-out"}
                _hover={{
                  shadow: "0 0 25px 0px rgb(255, 255, 255,0.05)",
                  h: ["35%", "38%", "110%", "110%", "110%"],
                  bg: "rgb(255, 255, 255,0.05)",
                }}
                color={"white"}
                bg={"#1B1B1D"}
                border={"1px solid rgb(255, 255, 255,0.05)"}
                w={["100%", "100%", "280px", "100%", "100%"]}
                h={["130px", "150px", "225px", "225px", "225px"]}
                rounded={"xl"}
                p={"3"}
              >
                <VStack
                  align={"left"}
                  w={"100%"}
                  h={"100%"}
                  gap={["5px", "5px", "15px", "15px", "15px"]}
                >
                  <HStack>
                    <Text
                      w={"70%"}
                      fontSize={["16px", "22px", "22px", "18px", "20px"]}
                      fontWeight={"700"}
                      textAlign={"left"}
                    >
                      {title}
                    </Text>
                  </HStack>

                  <HStack>
                    <Text
                      fontSize={["12px", "12px", "14px", "12px", "14px"]}
                      textAlign={"left"}
                       fontWeight={"300"}
                    >
                      {desc}
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
                      marginLeft: "10px",
                    }}
                  >
                    <HStack align={"center"} mr={"5px"} w={"100%"}>
                      <Text   fontSize={["12px", "12px", "14px", "11px", "14px"]}as={"span"} >
                       {nav}
                      </Text>{" "}
                      <HiArrowLongRight fontSize={"20px"} />
                    </HStack>
                  </HStack>
                </VStack>
              </Box>))}
            </HStack>
          </Box>


         
        </VStack>

        <Box mt={"-20px"}>
            <HStack
              w={"100%"}
              h={"100%"}
              justify={"right"}
              transition={"all 0.3s ease-in-out"}
            >
              <Box
                cursor={"pointer"}
                transition={"all 0.3s ease-in-out"}
                _hover={{
                  w: "220px",
                  bg: "rgb(255, 255, 255,0.1)",
                }}
                p={"10px"}
                px={"20px"}
                rounded={"15px"}
                w={["180px", "180px", "195px", "195px", "195px"]}
                h={["90%", "90%", "100%", "100%", "100%"]}
                bg={"rgb(255, 255, 255,0.05)"}
                border={"1px solid rgb(255, 255, 255,0.05)"}
              >
                <HStack
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  justify={"space-between"}
                >
                  <Text
                    fontSize={["12px", "12px", "14px", "11px", "14px"]}
                    as={"span"}
                    textAlign={"left"}
                    color={"white"}
                  >
                    🧑‍💻 Introduction
                  </Text>{" "}
                  <HiArrowLongRight fontSize={"inherit"} color="white" />
                </HStack>
              </Box>
            </HStack>
          </Box>
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

// <Box mt={"65px"} >
// <HStack  w={"100%"} h={"100%"} justify={"space-between"}  transition={"all 0.3s ease-in-out"}>
//   <Box

//     cursor={"pointer"}
//     transition={"all 0.3s ease-in-out"}
//     _hover={{

//       w: "200px",

//     }}
//     p={"10px"}
//     px={"20px"}
//     rounded={"15px"}
//     w={"190px"}
//     h={"100%"}
//     bg={"rgb(255, 255, 255,0.05)"}
//     border={"1px solid rgb(255, 255, 255,0.05)"}
//   >
//     <HStack align={"center"} w={"100%"} h={"100%"}  justify={"space-between"}   >
//       <HiArrowLongLeft  fontSize={"40px"} color="white"   />
//       <Text
//         fontSize={["16px", "16px", "16px", "16px", "16px"]}
//         as={"span"}
//         textAlign={"left"}
//         color={"white"}
//       >
//         🎉 Welcome
//       </Text>{" "}
//     </HStack>
//   </Box>
// </HStack>
// </Box>
