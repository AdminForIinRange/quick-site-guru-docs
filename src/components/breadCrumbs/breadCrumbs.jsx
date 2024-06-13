import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";

import  SideLink  from "../../app/global/data/Sidelink";
const BreadCrumbs = ({ titlePath, subPath }) => {
  // Function to find and return the title with emoji when titlePath matches StartingPath
  const getTitleWithEmoji = () => {
    let emojiTitle = "";

    // Loop through each section in SideLink
    SideLink.forEach(section => {
      Object.keys(section).forEach(sectionKey => {
        const items = section[sectionKey];

        // Loop through items in the section to find the matching StartingPath
        items.forEach(item => {
          if (item.StartingPath === titlePath) {
            emojiTitle = item.title; // Assign emoji title if match found
          }
        });
      });
    });

    return emojiTitle;
  };

  // Function to find and return the subtitle with emoji when subPath matches prams
  const getSublinkWithEmoji = () => {
    let emojiSublink = "";

    // Loop through each section in SideLink
    SideLink.forEach(section => {
      Object.keys(section).forEach(sectionKey => {
        const items = section[sectionKey];

        // Loop through items in the section to find the matching subtitle
        items.forEach(item => {
          item.sublinks.forEach(sublinkItem => {
            if (sublinkItem.prams === subPath) {
              emojiSublink = sublinkItem.subtitle; // Assign emoji subtitle if match found
            }
          });
        });
      });
    });

    return emojiSublink;
  };

  const emojiTitle = getTitleWithEmoji();
  const emojiSublink = getSublinkWithEmoji();

 return (
    <>
      <Box>
        <HStack justify={"start"} align={"center"} w={"100%"} h={"50px"} fontSize={"14px"} >
          <Text color={"white"} textAlign={"center"}>
            {emojiTitle ===  "" ? titlePath : emojiTitle}
          </Text>
          <Text color={"white"} fontSize={"18px"} textAlign={"center"}>
         /
          </Text>
          <Text color={"#9896FF"}  textAlign={"center"} >
            {emojiSublink  === "" ? subPath : emojiSublink}
          </Text>
        </HStack>
      </Box>
    </>
  );
};

export default BreadCrumbs;
