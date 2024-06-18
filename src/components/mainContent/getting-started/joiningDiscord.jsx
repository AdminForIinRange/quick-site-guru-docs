"use client";

import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
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

import mute from "../../../img/discord/mute.png";
import editServerProfile from "../../../img/discord/editServerProfile.png";
import serverNameChange from "../../../img/discord/serverNameChange.png";


const JoiningDiscord = ({ titlepath, subpath }) => {
  const ReviewFormat = [
   

    {
      image: editServerProfile,
      desc: " Right click on the your profile and press 'profile', then press the pencil icon to edit your server's profile. ",
    },

    {
      image: serverNameChange,
      desc: " Enter your new Name and click save changes, (if you require help or its different in your device, reach out to one of the mentors). ",
    },
  
  ];

  const { activeStep } = useSteps({
    index: 4,
    count: ReviewFormat.length,
  });
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
        pb={"40px"}
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
              🔊 Joining Discord
            </Text>
          </Box>

          <Box>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
              Discord is the fundamental communication platform that we use for
              sharing information, organising and moving forward. Make sure you
              have it setup on both your mobile and desktop.
            </Text>
          </Box>

          <VStack h={"100%"} justify={"left"} align={"left"}>
            <Text
              mb={"15px"}
              color={"white"}
              fontWeight={"600"}
              fontSize={["18px", "18px", "20px", "20px", "28px"]}
            >
              What you need to do
            </Text>

            <Box>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
              mb={"15px"}
            >
It's important that we could relate to you by your server profile name in meetings. This will not change your name on any other discrod servers, just on QSG server.
This is how you do it:
            </Text>
          </Box>
            <Stepper
              h={"100%"}
              w={"100%"}
              index={activeStep}
              orientation="vertical"
              gap="0px"
              colorScheme={"gray"}
            >
              {ReviewFormat.map(({ image, desc }, index) => (
                <Step key={index}>
                  <StepIndicator>
                    <StepStatus
                      complete={<StepNumber />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>

                  <Box
                    w={["90%", "90%", "90%", "90%", "80%", "80%"]}
                    flexShrink="0"
                    mb={"20px"}
                  >
                    <StepTitle
                      mb={"15px"}
                      color={"white"}
                      fontWeight={"300"}
                      fontSize={["14px", "14px", "14px", "14px", "16px"]}
                    >
                      {desc}
                    </StepTitle>

                    <StepDescription mb={"15px"}>
                      <Image
                        style={{
                          borderRadius: "15px",
                      
                        }}
                        src={image}
                        alt="image"
                      />
                    </StepDescription>
                  </Box>

                  <StepSeparator />
                </Step>
              ))}
            </Stepper>
          </VStack>
        </VStack>
      </Box>
    </>
  );
};

export default JoiningDiscord;
