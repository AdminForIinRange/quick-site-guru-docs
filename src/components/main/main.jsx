import { Box, VStack, Text } from "@chakra-ui/react";
import React from "react";
import BreadCrumbs from "../breadCrumbs/breadCrumbs";

const Main = ({ titlepath, subpath }) => {
  //fix no emjoi issues by if else or some other methosds like laocl store on click save variable
  return (
    <>
      <Box
        w={"1200px"}
        h={"700px"} // swith to 100% after testing
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
            >
              Hello and welcome to the official documentation for QuickSite.guru
              – your gateway to effortless and innovative website creation! 🚀
              This guide is your resource for understanding and utilizing all
              the features of QuickSite.guru Our platform makes web development
              accessible to everyone, regardless of technical expertise. Let's
              start building amazing websites! 🌐
            </Text>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default Main;
