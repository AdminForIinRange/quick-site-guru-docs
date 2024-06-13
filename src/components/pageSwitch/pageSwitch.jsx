import { Box, HStack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";
import  SideLink from "../../app/global/data/Sidelink.json";
import Link from 'next/link';
import { Router } from 'next/router';


const PageSwitch = ({ titlepath, subpath }) => {

  const [forwardSwitch, setForwardSwitch] = useState({
    link:"",
    title:"",
    fullPath:"",
    titlePath:"",
    subPath:"",
    CurrentLink:""
  });
  const [backwardSwitch, setbackwardSwitch] = useState(false);



useEffect(() => {





  SideLink.forEach(section => {
  Object.keys(section).forEach(sectionKey => {
    const items = section[sectionKey];
    items.forEach((item, index) =>  { // it double log in dev mode because of strict mode in NEXTJS/React


// console.log(titlepath, subpath)


      if (item.StartingPath === titlepath && item.sublinks[0].prams === subpath) {
console.log(item.sublinks[index + 1].prams)

        setForwardSwitch({...item.sublinks[index + 1], title: item.sublinks[index + 1].subtitle})

      }
    });
  });
  
  })
  
},[titlepath, subpath]);


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
              w={["190px", "225px", "245px", "245px", "245px", "255px"]}
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
                
              
                
                <Text w={["100%", "100%", "100%", "100%", "100%"]}
                  fontSize={["14px", "14px", "16px", "16px", "16px", "18px"]}
                  as={"span"}
                  textAlign={"left"}
                  color={"white"}
                  onClick={Router.push(`/${forwardSwitch.title}/`)}
                  >
                
                  {forwardSwitch.title}  
                </Text>{" "}
                <Link href={`backwardSwitch.link`}>
                <HiArrowLongRight fontSize={"40px"} color="white" />
                </Link>
              </HStack>
            </Box>
          </HStack>
        </HStack>
      </Box>
    </>
  );
};

export default PageSwitch;