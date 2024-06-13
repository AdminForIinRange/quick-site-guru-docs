import { Box, HStack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";
import  SideLink from "../../app/global/data/Sidelink.json";


const PageSwitch = ({ titlepath, subpath }) => {

  const [forwardSwitch, setForwardSwitch] = useState({
    link:"",
    title:"",
    fullPath:"",
    titlePath:"",
    subPath:""
  });
  const [backwardSwitch, setbackwardSwitch] = useState(false);



useEffect(() => {

  
    console.log(titlepath)
    console.log(subpath)
  SideLink.forEach(section => {
  Object.keys(section).forEach(sectionKey => {
    const items = section[sectionKey];
    items.forEach(item => {
      if (item.StartingPath === titlepath && item.sublinks[0].prams === subpath) {
        setForwardSwitch(item.sublinks[0]);
      }
    });
  });
  
  })
  
},[])


  const backwardsLink = () => {

    console.log(titlepath)
    console.log(subpath)
  }



  return (
    <>
      <Box ml={["0", "0", "0", "265px", "306px"]} mt={"15"}>
        <HStack w={"100%"} justify={"center"} align={"center"}>
          <HStack
            w={["94%", "94%", "94%", "90%", "78%", "75%"]}
            h={"100%"}
            justify={"right"}
            align={"center"}
            transition={"all 0.3s ease-in-out"}
        
 
          >
      
            
            <Box
              cursor={"pointer"}
              transition={"all 0.3s ease-in-out"}
              _hover={{
                w: ["190px", "190px", "220px", "220px", "220px"],
                bg: "rgb(255, 255, 255,0.1)",
              }}
              p={"5px"}
              px={"20px"}
              rounded={"15px"}
              w={["190px", "190px", "205px", "205px", "205px", "225px"]}
              h={["90%", "90%", "100%", "100%", "100%"]}
              bg={"rgb(255, 255, 255,0.05)"}
              border={"1px solid rgb(255, 255, 255,0.05)"}
              boxShadow={"rgba(0, 0, 0, 0.25) 0px 0px 8px"}
            >
              <HStack
                align={"center"}
                w={"100%"}
                h={"100%"}
                justify={"space-between"}
              >
                <Text
                  fontSize={["14px", "14px", "16px", "16px", "16px", "18px"]}
                  as={"span"}
                  textAlign={"left"}
                  color={"white"}
                >
                  🧑‍💻 Introduction   
                </Text>{" "}
                <HiArrowLongRight fontSize={"40px"} color="white" />
              </HStack>
            </Box>
          </HStack>
        </HStack>
      </Box>
    </>
  );
};

export default PageSwitch;