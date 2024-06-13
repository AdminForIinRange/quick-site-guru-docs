import { Box, HStack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import SideLink from "../../app/global/data/Sidelink.json";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const PageSwitch = ({ titlepath, subpath }) => {
  const router = useRouter();

  const [forwardSwitch, setForwardSwitch] = useState({
    link: "",
    title: "",
    fullPath: "",
    titlePath: "",
    subPath: "",
    CurrentLink: ""
  });

  const [backwardSwitch, setbackwardSwitch] = useState({
    link: "",
    title: "",
    fullPath: "",
    titlePath: "",
    subPath: "",
    CurrentLink: ""
  });
useEffect(() => {
    let found = false;

    for (let sectionIndex = 0; sectionIndex < SideLink.length; sectionIndex++) {
      const section = SideLink[sectionIndex];
      const sectionKey = Object.keys(section)[0];
      const items = section[sectionKey];

      for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
        const item = items[itemIndex];
        const sublinks = item.sublinks;

        if (item.StartingPath === titlepath) {
          for (let sublinkIndex = 0; sublinkIndex < sublinks.length; sublinkIndex++) {
            if (sublinks[sublinkIndex].prams === subpath) {
              found = true;

              if (sublinkIndex + 1 < sublinks.length) {
                // Move to the next sublink within the same item
                setForwardSwitch({
                  ...sublinks[sublinkIndex + 1],
                  title: sublinks[sublinkIndex + 1].subtitle,
                  CurrentLink: sublinks[sublinkIndex].path,
                  titlePath: item.StartingPath,
                  subPath: sublinks[sublinkIndex + 1].prams,
                  fullPath: `${item.StartingPath}/${sublinks[sublinkIndex + 1].prams}`
                });

              } else if (itemIndex + 1 < items.length) {
                // Move to the first sublink of the next item in the same section
                const nextItem = items[itemIndex + 1];
                setForwardSwitch({
                  ...nextItem.sublinks[0],
                  title: nextItem.sublinks[0].subtitle,
                  CurrentLink: sublinks[sublinkIndex].path,
                  titlePath: nextItem.StartingPath,
                  subPath: nextItem.sublinks[0].prams,
                  fullPath: `${nextItem.StartingPath}/${nextItem.sublinks[0].prams}`
                });
              } else if (sectionIndex + 1 < SideLink.length) {
                // Move to the first sublink of the first item in the next section
                const nextSection = SideLink[sectionIndex + 1];
                const nextSectionKey = Object.keys(nextSection)[0];
                const nextSectionItems = nextSection[nextSectionKey];
                const nextItem = nextSectionItems[0];

                setForwardSwitch({
                  ...nextItem.sublinks[0],
                  title: nextItem.sublinks[0].subtitle,
                  CurrentLink: sublinks[sublinkIndex].path,
                  titlePath: nextItem.StartingPath,
                  subPath: nextItem.sublinks[0].prams,
                  fullPath: `${nextItem.StartingPath}/${nextItem.sublinks[0].prams}`
                });
              }

              // For backward switch --------------------------------------------
              if (sublinkIndex - 1 >= 0) {
                // Move to the previous sublink within the same item
                setbackwardSwitch({
                  ...sublinks[sublinkIndex - 1],
                  title: sublinks[sublinkIndex - 1].subtitle,
                  CurrentLink: sublinks[sublinkIndex].path,
                  titlePath: item.StartingPath,
                  subPath: sublinks[sublinkIndex - 1].prams,
                  fullPath: `${item.StartingPath}/${sublinks[sublinkIndex - 1].prams}`
                });
              } else if (itemIndex - 1 >= 0) {
                // Move to the last sublink of the previous item in the same section
                const prevItem = items[itemIndex - 1];
                const lastSublinkIndex = prevItem.sublinks.length - 1;
                setbackwardSwitch({
                  ...prevItem.sublinks[lastSublinkIndex],
                  title: prevItem.sublinks[lastSublinkIndex].subtitle,
                  CurrentLink: sublinks[sublinkIndex].path,
                  titlePath: prevItem.StartingPath,
                  subPath: prevItem.sublinks[lastSublinkIndex].prams,
                  fullPath: `${prevItem.StartingPath}/${prevItem.sublinks[lastSublinkIndex].prams}`
                });
              } else if (sectionIndex - 1 >= 0) {
                // Move to the last sublink of the last item in the previous section
                const prevSection = SideLink[sectionIndex - 1];
                const prevSectionKey = Object.keys(prevSection)[0];
                const prevSectionItems = prevSection[prevSectionKey];
                const prevItem = prevSectionItems[prevSectionItems.length - 1];
                const lastSublinkIndex = prevItem.sublinks.length - 1;

                setbackwardSwitch({
                  ...prevItem.sublinks[lastSublinkIndex],
                  title: prevItem.sublinks[lastSublinkIndex].subtitle,
                  CurrentLink: sublinks[sublinkIndex].path,
                  titlePath: prevItem.StartingPath,
                  subPath: prevItem.sublinks[lastSublinkIndex].prams,
                  fullPath: `${prevItem.StartingPath}/${prevItem.sublinks[lastSublinkIndex].prams}`
                });
              }
              break;
            }
          }
        }
        if (found) break;
      }
      if (found) break;
    }
  }, [titlepath, subpath]);

  const backwardsLink = () => {
 
  };

  return (
    <>
      <Box ml={["0", "0", "0", "265px", "306px"]} mt={"15"}>
        <HStack w={"100%"} justify={"center"} align={"center"}>
          <HStack
            w={["94%", "94%", "94%", "90%", "78%", "75%"]}
            h={"100%"}
            justify={["center", "center", "space-between", "space-between", "space-between"]}
            align={"center"}
            transition={"all 0.3s ease-in-out"}
            flex={"wrap"}
            wrap={"wrap"}
          >
            
             <Box
              cursor={"pointer"}
              transition={"all 0.3s ease-in-out"}
              _hover={{
                w: ["100%", "100%", "295px", "295px", "295px", "295px"],
                bg: "rgb(255, 255, 255,0.1)",
              }}
              p={"5px"}
              px={"20px"}
              rounded={"15px"}
              w={["100%", "100%", "285px", "285px", "285px", "285px"]}
              h={["90%", "90%", "100%", "100%", "100%"]}
              bg={"rgb(255, 255, 255,0.05)"}
              border={"1px solid rgb(255, 255, 255,0.05)"}
              boxShadow={"rgba(0, 0, 0, 0.25) 0px 0px 8px"}
              visibility={backwardSwitch.title === "" ? "hidden" : "visible"}
            >
              <HStack
                align={"center"}
                w={"100%"}
                h={"100%"}
                justify={"space-between"}
              >
          
                <HiArrowLongLeft fontSize={"40px"} color="white" />
                <Text
                  w={["100%", "100%", "100%", "100%", "100%"]}
                  fontSize={["14px", "14px", "16px", "16px", "16px", "16px"]}
                  as={"span"}
                  textAlign={"right"}
                  color={"white"}
                  onClick={() => router.push(`/${backwardSwitch.fullPath}`)}
                >
                  { backwardSwitch.title }
                </Text>

              </HStack>
            </Box>

        

         <Box
              cursor={"pointer"}
              transition={"all 0.3s ease-in-out"}
              _hover={{
                w: ["100%", "100%", "295px", "295px", "295px", "295px"],
                bg: "rgb(255, 255, 255,0.1)",
              }}
              p={"5px"}
              px={"20px"}
              rounded={"15px"}
              w={["100%", "100%", "285px", "285px", "285px", "285px"]}
              h={["90%", "90%", "100%", "100%", "100%"]}
              bg={"rgb(255, 255, 255,0.05)"}
              border={"1px solid rgb(255, 255, 255,0.05)"}
              boxShadow={"rgba(0, 0, 0, 0.25) 0px 0px 8px"}
              visibility={forwardSwitch.title === "" ? "hidden" : "visible"}
            >
              <HStack
                align={"center"}
                w={"100%"}
                h={"100%"}
                justify={"space-between"}
              >
                <Text
                  w={["100%", "100%", "100%", "100%", "100%"]}
                  fontSize={["14px", "14px", "16px", "16px", "16px", "16px"]}
                  as={"span"}
                  textAlign={"left"}
                  color={"white"}
                  onClick={() => router.push(`/${forwardSwitch.fullPath}`)}
                >
                  {forwardSwitch.title }
                </Text>
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
