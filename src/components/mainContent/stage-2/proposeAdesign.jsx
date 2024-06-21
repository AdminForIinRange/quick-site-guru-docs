"use client";

import {
  Box,
  VStack,
  Text,
  HStack,
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
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BreadCrumbs from "@/components/breadCrumbs/breadCrumbs";
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";
import Link from "next/link";

const ProposeAdesign = ({ titlepath, subpath }) => {
  const proposingSteps = [
    {
      title: "Propose a design",

      desc: " When you're planning to upload your site for any of the stage reviews, make sure to follow this format Use your Discord name and your website name as the title. ",
    },

    {
      title: "Propose a design",
      desc: (
        <Text>
          Include your website link which must be formatted in QSG and
          published, if you dont know see{" "}
          <Text
            transition={"all 0.3s ease"}
            mx={1.5}
            as={Link}
            href="/using-quicksite/hosting"
            cursor={"pointer"}
            textAlign={"center"}
            fontWeight={"bold"}
            bg={"rgb(255, 255, 255,0.05)"}
            border={"1px solid rgb(255, 255, 255,0.05)"}
            p={1.5}
            rounded={"8px"}
            _hover={{
              transform: "scale(1.05)",
              shadow: "0 0 25px 0px rgb(255, 255, 255,0.2)",
            }}
            whiteSpace={"nowrap"}
          >
            {" "}
            🌐 Hosting{" "}
          </Text>{" "}
          <Text
            transition={"all 0.3s ease"}
            mx={1.5}
            as={Link}
            href="/using-quicksite/publishing"
            cursor={"pointer"}
            textAlign={"center"}
            fontWeight={"bold"}
            bg={"rgb(255, 255, 255,0.05)"}
            border={"1px solid rgb(255, 255, 255,0.05)"}
            p={1.5}
            rounded={"8px"}
            _hover={{
              transform: "scale(1.05)",
              shadow: "0 0 25px 0px rgb(255, 255, 255,0.2)",
            }}
            whiteSpace={"nowrap"}
          >
            {" "}
            📰 Publishing{" "}
          </Text>{" "}
          and provide a description of your site, along with a image."{" "}
        </Text>
      ),
    },
  ];

  const { activeStep } = useSteps({
    index: 4,
    count: proposingSteps.length,
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
              🎨 Propose a design
            </Text>
          </Box>

          <Box>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
              Hello and welcome to the official documentation for QuickSite.guru
              – your gateway to effortless and innovative website creation! 🚀
              This guide is your resource for understanding and utilizing all
              the features of QuickSite.guru. Our platform makes web development
              accessible to everyone, regardless of technical expertise. Let's
              start building amazing websites! 🌐
            </Text>
          </Box>
          <Box>
            <Text
              mb={"15px"}
              color={"white"}
              fontWeight={"600"}
              fontSize={["18px", "18px", "20px", "20px", "28px"]}
            >
              About
            </Text>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
              QuickSite.guru simplifies the complex process of website creation,
              transforming it into a swift, seamless, and intuitive experience.
              Our mission is to empower startups, small businesses, and
              visionaries with the tools to establish a professional online
              presence without hassle or high costs. 💼
            </Text>
          </Box>

          <Box>
            <Text
              mb={"15px"}
              color={"white"}
              fontWeight={"600"}
              fontSize={["18px", "18px", "20px", "20px", "28px"]}
            >
              Getting Started
            </Text>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
              To begin your journey with QuickSite.guru, follow our step-by-step
              setup guide. This section will walk you through account creation,
              selecting a template, customizing your site, and launching it
              live. With clear instructions and helpful tips, you'll have your
              website up and running in no time. Ready to get started? Let's
              dive in!
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
            {proposingSteps.map(({ title, desc }, index) => (
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
                  <Box
                    mb={"15px"}
                    color={"white"}
                    fontWeight={"600"}
                    fontSize={["16px", "16px", "18px", "18px", "20px"]}
                  >
                    {title}
                  </Box>
                  <Box
                    lineHeight={[
                      "35px",
                      "35px",
                      "35px",
                      "35px",
                      "35px",
                      "35px",
                    ]}
                    mb={"15px"}
                    color={"white"}
                    fontWeight={"300"}
                    fontSize={["14px", "14px", "14px", "14px", "16px"]}
                  >
                    {desc}
                  </Box>

                  <StepDescription mb={"15px"}></StepDescription>
                </Box>

                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        </VStack>
      </Box>
    </>
  );
};

export default ProposeAdesign;
