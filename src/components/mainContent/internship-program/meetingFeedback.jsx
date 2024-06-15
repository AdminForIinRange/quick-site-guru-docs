"use client";

import {
  Box,
  VStack,
  Text,
  HStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BreadCrumbs from "@/components/breadCrumbs/breadCrumbs";
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";
import Image from "next/image";

const MeetingFeedback = ({ titlepath, subpath }) => {
  //fix no emjoi issues by if else or some other methosds like laocl store on click save variable
  return (
    <>
      <Box
        boxShadow={"rgba(0, 0, 0, 0.25) 0px 0px 8px"}
        w={["95%", "95%", "95%", "70%", "62.5%"]}
        //DONT AJUST THIS NOW, DO IT WHEN ITS DONE
        h={"140%"} //DONT AJUST THIS NOW, DO IT WHEN ITS DONE
        bg={"rgb(255, 255, 255,0.05)"}
        border={"1px solid rgb(255, 255, 255,0.05)"}
        rounded={"15px"}
        pl={["18px", "25px", "25px", "15px", "35px"]}
        pr={["18px", "25px", "25px", "15px", "10px"]}
        py={"15px"}
        pb={"50px"}
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
              color={["white", "blue", "green", "yellow", "orange", "white"]}
              fontWeight={"600"}
              fontSize={["38px", "38px", "38px", "38px", "48px"]}
            >
              📅 Meeting/Feedback
            </Text>
          </Box>

          <Box>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
              At QuickSite.guru, we prioritize regular meetings and constructive
              feedback to foster your professional development. These sessions
              provide valuable opportunities to discuss your progress, address
              any challenges you may encounter, and refine your skills under the
              guidance of experienced mentors.
            </Text>
          </Box>
          <Box>
            <Text
              mb={"15px"}
              color={"white"}
              fontWeight={"600"}
              fontSize={["18px", "18px", "20px", "20px", "28px"]}
            >
          How to Upload to "Stage Reviews"
            </Text>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
              When you're planning to upload your site for any of the stage
              reviews, make sure to follow this format: Use your Discord name
              and your website as the title. 
            </Text>

            <Box>
              <Image style={{borderRadius:"30px"}}  />
            </Box>

            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
               Include your website link (which
              must be formatted in QSG and published with it - This is how you
              publish in QSG), and provide a description of your site. 
            </Text>

            
            <Box>
              <Image style={{borderRadius:"30px"}}  />
            </Box>


            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
              This
              format ensures clarity and helps our team provide effective
              feedback to enhance your project.
            </Text>

            
          </Box>



          <Box>
            <Text
              mb={"15px"}
              color={"white"}
              fontWeight={"600"}
              fontSize={["18px", "18px", "20px", "20px", "28px"]}
            >
           Don't Hesitate to Talk to Your Mentors
            </Text>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
            Feel free to reach out to them whenever you have questions or need guidance. They're experienced professionals dedicated to helping you navigate challenges, improve your designs, and gain valuable career insights. Open communication with your mentors enhances your internship experience and empowers you to achieve your goals with confidence.
            </Text>

          </Box>





          <Box textColor={"white"}>
            <Text
              mb={["10px", "10px", "15px", "15px", "15px"]}
              color={"white"}
              fontWeight={"600"}
              fontSize={["20px", "20px", "24px", "24px", "32px"]}
              lineHeight={"1.2"}
            >
              Google Meet Schedule
            </Text>

            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
              All meetings are conducted via Google Meet. Please ensure
              punctuality for all scheduled meetings.{" "}
              <Text color={"teal.300"} as={"span"}>
                {" "}
                To Accesss the google meet link ...................{" "}
              </Text>
            </Text>
            <Box
              px={["10px", "10px", "15px", "15px", "20px"]}
              py={["10px", "10px", "15px", "15px", "20px"]}
              bg={"rgb(255, 255, 255,0.05)"}
              border={"1px solid rgb(255, 255, 255,0.05)"}
              mt={["10px", "10px", "15px", "15px", "20px"]}
              rounded={"10px"}
            >
              <Table
                variant="simple"
                borderColor={"rgb(255, 255, 255,0.05)"}
                fontSize={["14px", "14px", "14px", "14px", "16px"]}
              >
                <Thead>
                  <Tr>
                    <Th
                      borderColor={"rgb(255, 255, 255,0.5)"}
                      fontSize={[
                        "24px",
                        "24px",
                        "24px",
                        "24px",
                        "24px",
                        " 24px",
                      ]}
                      color={"white"}
                      pb={"20px"}
                    >
                      Day
                    </Th>
                    <Th
                      pb={"20px"}
                      borderColor={"rgb(255, 255, 255,0.5)"}
                      color={"white"}
                      fontSize={["24px", "24px", "24", "24px", "24px", "24px"]}
                    >
                      Time
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td
                      borderColor={"rgb(255, 255, 255,0.5)"}
                      fontSize={["18px", "18px", "18px", "18px", "18px"]}
                      fontWeight={"600"}
                    >
                      Monday
                    </Td>
                    <Td borderColor={"rgb(255, 255, 255,0.5)"}>
                      {" "}
                      <Text
                        p={"10px"}
                        textAlign={"center"}
                        rounded={"10px"}
                        bg={"rgb(255, 255, 255,0.05)"}
                        border={"1px solid rgb(255, 255, 255,0.05)"}
                        w={"100px"}
                        fontWeight={"300"}
                      >
                        {" "}
                        7:30 AM{" "}
                      </Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      borderColor={"rgb(255, 255, 255,0.5)"}
                      fontWeight={"600"}
                      fontSize={["18px", "18px", "18px", "18px", "18px"]}
                    >
                      Thursday
                    </Td>
                    <Td borderColor={"rgb(255, 255, 255,0.5)"}>
                      <Text
                        p={"10px"}
                        textAlign={"center"}
                        rounded={"10px"}
                        bg={"rgb(255, 255, 255,0.05)"}
                        border={"1px solid rgb(255, 255, 255,0.05)"}
                        w={"100px"}
                        fontWeight={"300"}
                      >
                        {" "}
                        8:00 AM{" "}
                      </Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      borderColor={"rgb(255, 255, 255,0)"}
                      fontWeight={"600"}
                      fontSize={["18px", "18px", "18px", "18px", "18px"]}
                    >
                      Saturday
                    </Td>
                    <Td borderColor={"rgb(255, 255, 255,0)"}>
                      {" "}
                      <HStack wrap={"wrap"}>
                        {" "}
                        <Text
                          p={"10px"}
                          textAlign={"center"}
                          rounded={"10px"}
                          bg={"rgb(255, 255, 255,0.05)"}
                          border={"1px solid rgb(255, 255, 255,0.05)"}
                          w={"100px"}
                          fontWeight={"300"}
                        >
                          {" "}
                          9:30 AM{" "}
                        </Text>{" "}
                        <Text
                          p={"10px"}
                          textAlign={"center"}
                          rounded={"10px"}
                          bg={"rgb(255, 255, 255,0.05)"}
                          border={"1px solid rgb(255, 255, 255,0.05)"}
                          w={"100px"}
                          fontWeight={"300"}
                        >
                          {" "}
                          10:00 AM{" "}
                        </Text>{" "}
                      </HStack>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default MeetingFeedback;
