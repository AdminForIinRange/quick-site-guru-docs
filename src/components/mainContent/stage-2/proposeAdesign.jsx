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
      title: "Step 1: Define Your Project",
      desc: (
        <Text>
          Start by selecting the theme and topic for your website. This could be
          anything from a personal blog to a portfolio or a cause you're
          passionate about. A clear, defined project will guide your design and
          development process.
        </Text>
      ),
    },
    {
      title: "Step 2: Gather Inspiration and Create a Mood Board",
      desc: (
        <Text>
          Before sketching your layout, gather inspiration from websites you
          like. Create a
          <Text
            transition={"all 0.3s ease"}
            mx={1.5}
            lineHeight={"35px"}
            as={Link}
           target="_blank"
            href="https://www.google.com/search?q=mood+board"
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
            Mood Board{" "}
          </Text>{" "}
          to compile your ideas, which can include color schemes, typography,
          and overall style. Tools like{" "}
          <Text
            transition={"all 0.3s ease"}
            mx={1.5}
            lineHeight={"35px"}
            as={Link}
            target="_blank"
            href="https://www.pinterest.com"
            cursor={"pointer"}
            textAlign={"center"}
            fontWeight={"bold"}
            bg={"rgb(231,8,32,0.5)"}
            border={"1px solid rgb(255, 255, 255,0.05)"}
            p={1.5}
            rounded={"8px"}
            _hover={{
              transform: "scale(1.05)",
              shadow: "0 0 25px 0px rgb(231,8,32,0.2)",
            }}
            whiteSpace={"nowrap"}
          >
            {" "}
            Pinterest{" "}
          </Text>{" "}
          or{" "}
          <Text
            transition={"all 0.3s ease"}
            mx={1.5}
            lineHeight={"35px"}
            as={Link}
            target="_blank"
            href="https://www.canva.com"
            cursor={"pointer"}
            textAlign={"center"}
            fontWeight={"bold"}
            bg={"rgb(51,147,214,0.5)"}
            border={"1px solid rgb(255, 255, 255,0.05)"}
            p={1.5}
            rounded={"8px"}
            _hover={{
              transform: "scale(1.05)",
              shadow: "0 0 25px 0px rgb(51,147,214,0.2)",
            }}
            whiteSpace={"nowrap"}
          >
            {" "}Canva
          </Text>
        can be useful for this step.
        </Text>
      ),
    },
    {
      title: "Step 3: Understand CRAP Fundamentals",
      desc: (
        <Text>
          Familiarize yourself with the CRAP design principles: Contrast,
          Repetition, Alignment, and Proximity. These fundamentals will help you
          create a visually appealing and cohesive design. Ensure your layout
          makes good use of these principles.
        </Text>
      ),
    },
    {
      title: "Step 4: Formulate Your Proposal",
      desc: (
        <Text>
          Define what the website will be for, how it will look, who the users
          will be, and what value it will bring to those users. Document this in
          stage2-review by creating a post with this format: [YOUR DISCORD NAME]
          - [WEBSITE NAME]. Ideally, this should be a website you will use in
          the future, not just forget about after the internship is over. If you
          can't decide, we will help you with it.
        </Text>
      ),
    },
    {
      title: "Step 5: Sketch a Layout",
      desc: (
        <Text>
          Sketch a basic layout of your website. Consider the structure and how
          users will navigate your site. Planning your layout on paper or using
          a digital tool like Figma can help visualize the end product and
          streamline the development process.
        </Text>
      ),
    },
  ];

  const { activeStep } = useSteps({
    index: 5,
    count: proposingSteps.length,
  });

  return (
    <>
      <Box
        boxShadow={"rgba(0, 0, 0, 0.25) 0px 0px 8px"}
        w={["95%", "95%", "95%", "70%", "62.5%"]}
        h={"140%"}
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
              In this guide, you will follow a structured approach to propose
              and develop a design for your website. Each step will help you
              progress from the initial concept to a fully realized web project.
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
