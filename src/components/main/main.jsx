import { Box, VStack, Text, HStack } from "@chakra-ui/react";
import React from "react";
import BreadCrumbs from "../breadCrumbs/breadCrumbs";
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";
import Hello from "../mainContent/Welcome/hello";
import SublinkNotFound from "../mainContent/sublinkNotFound/sublinkNotFound";

const Main = ({ titlepath, subpath }) => {

  // OPTMIZE THIS LATER, LIKE THE TITLE OR COMPS SHOULD BE DYNAMIC AND 
  //ONLY PROP NEEDS TO BE PASSED IN. MAYBE VIA GLOBAL/CONTENTDATA.JOSN IDK

  const RenderMain = () => {
    if (titlepath === "welcome" && subpath === "hello") {
      return <Hello titlepath={titlepath} subpath={subpath} />;
    } else {
      return (
        <>
          <SublinkNotFound titlepath={titlepath} subpath={subpath} />
        </>
      );
    }
  };

  //fix no emjoi issues by if else or some other methosds like laocl store on click save variable
  return (
    <>
      {RenderMain()}
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
