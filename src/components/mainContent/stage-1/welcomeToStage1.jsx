"use client";

import {
  Box,
  VStack,
  Text,
  Step,
  StepDescription,
  StepIcon,
  Icon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import BreadCrumbs from "@/components/breadCrumbs/breadCrumbs";
import { FaDiscord } from "react-icons/fa";
const WelcomeToStage1 = ({ titlepath, subpath }) => {
  const Stage1 = [
    {
      title: "Understand Who We Are",
      text: (
        <Text transition={"all 0.3s ease"}>
          {" "}
          Welcome to Stage 1! Start by going through all of the{" "}
          <Text
            transition={"all 0.3s ease"}
            mx={1.5}
            as={"span"}
            cursor={"pointer"}
            textAlign={"center"}
            fontWeight={"bold"}
            bg={"rgb(255, 255, 255,0.05)"}
            border={"1px solid rgb(255, 255, 255,0.05)"}
            p={1.5}
            rounded={"8px"}
            _hover={{
              transform: "scale(1.05)",
              shadow: "0 0 25px 0px rgb(255, 255, 255,0.05)",
            }}
            whiteSpace={"nowrap"}
          >
            {" "}
            👋 Getting Started{" "}
          </Text>{" "}
          and{" "}
          <Text
            transition={"all 0.3s ease"}
            mx={1.5}
            as={"span"}
            cursor={"pointer"}
            textAlign={"center"}
            fontWeight={"bold"}
            bg={"rgb(255, 255, 255,0.05)"}
            border={"1px solid rgb(255, 255, 255,0.05)"}
            p={1.5}
            rounded={"8px"}
            _hover={{
              transform: "scale(1.05)",
              shadow: "0 0 25px 0px rgb(255, 255, 255,0.05)",
            }}
            whiteSpace={"nowrap"}
          >
            {" "}
            🎓 Internship Program{" "}
          </Text>{" "}
          materials. This will give you a greater sense of the internship and
          the company. After that, complete this signup form."{" "}
        </Text>
      ),
    },
    {
      title: "Introduce Yourself",
      text: (
        <Text transition={"all 0.3s ease"}>
          Share a brief introduction about yourself in the
          <Text
            transition={"all 0.3s ease"}
            mx={1.5}
            as={"span"}
            cursor={"pointer"}
            textAlign={"center"}
            fontWeight={"bold"}
            color={"white"}
            p={1.5}
            rounded={"8px"}
            bg={"#7289DA"}
            _hover={{
              transform: "scale(1.05)",
              shadow: "0 0 25px 0px rgb(255, 255, 255,0.05)",
            }}
            whiteSpace={"nowrap"}
          >
            {" "}
            #stage1-hello{" "}
          </Text>{" "}
          channel on Discord. Include your background, interests, and what you
          hope to learn during your internship. Visit:{" "}
          <Text
            transition={"all 0.3s ease"}
            mx={1.5}
            as={"span"}
            cursor={"pointer"}
            textAlign={"center"}
            fontWeight={"bold"}
            bg={"rgb(255, 255, 255,0.05)"}
            border={"1px solid rgb(255, 255, 255,0.05)"}
            p={1.5}
            rounded={"8px"}
            _hover={{
              transform: "scale(1.05)",
              shadow: "0 0 25px 0px rgb(255, 255, 255,0.05)",
            }}
            whiteSpace={"nowrap"}
          >
            {" "}
            🧑‍💻 Introduction{" "}
          </Text>
        </Text>
      ),
    },
    {
      title: "Connect with a Mentor",
      text: (
        <Text transition={"all 0.3s ease"}>
          Check out the
          <Text
            transition={"all 0.3s ease"}
            mx={1.5}
            as={"span"}
            cursor={"pointer"}
            textAlign={"center"}
            fontWeight={"bold"}
            bg={"rgb(255, 255, 255,0.05)"}
            border={"1px solid rgb(255, 255, 255,0.05)"}
            p={1.5}
            rounded={"8px"}
            _hover={{
              transform: "scale(1.05)",
              shadow: "0 0 25px 0px rgb(255, 255, 255,0.05)",
            }}
            whiteSpace={"nowrap"}
          >
            {" "}
            👨‍🏫 Mentorship/Guidance{" "}
          </Text>{" "}
          and
          <Text
            transition={"all 0.3s ease"}
            mx={1.5}
            as={"span"}
            cursor={"pointer"}
            textAlign={"center"}
            fontWeight={"bold"}
            bg={"rgb(255, 255, 255,0.05)"}
            border={"1px solid rgb(255, 255, 255,0.05)"}
            p={1.5}
            rounded={"8px"}
            _hover={{
              transform: "scale(1.05)",
              shadow: "0 0 25px 0px rgb(255, 255, 255,0.05)",
            }}
            whiteSpace={"nowrap"}
          >
            {" "}
            📅 Meetings/Feedback{" "}
          </Text>{" "}
          sections to get a clear understanding of the processes. After that,
          reach out to mentors on Discord and send a direct message to your
          chosen mentor to schedule a one-on-one meeting.
        </Text>
      ),
    },
    {
      title: "Start Joining Team Meetings",
      text: (
        <Text transition={"all 0.3s ease"}>
          Go to the
          <Text
            transition={"all 0.3s ease"}
            mx={1.5}
            as={"span"}
            cursor={"pointer"}
            textAlign={"center"}
            fontWeight={"bold"}
            bg={"rgb(255, 255, 255,0.05)"}
            border={"1px solid rgb(255, 255, 255,0.05)"}
            p={1.5}
            rounded={"8px"}
            _hover={{
              transform: "scale(1.05)",
              shadow: "0 0 25px 0px rgb(255, 255, 255,0.05)",
            }}
            whiteSpace={"nowrap"}
          >
            {" "}
            👨‍🏫 Mentorship/Guidance{" "}
          </Text>{" "}
          section and start joining team meetings via the Google Meet link in{" "}
          <Text
            transition={"all 0.3s ease"}
            mx={1.5}
            as={"span"}
            cursor={"pointer"}
            textAlign={"center"}
            fontWeight={"bold"}
            bg={"rgb(255, 255, 255,0.05)"}
            border={"1px solid rgb(255, 255, 255,0.05)"}
            p={1.5}
            rounded={"8px"}
            _hover={{
              transform: "scale(1.05)",
              shadow: "0 0 25px 0px rgb(255, 255, 255,0.05)",
            }}
            whiteSpace={"nowrap"}
          >
            {" "}
            📅 Meetings/Feedback{" "}
          </Text>{" "}
          . This will help you understand current projects and see where you can
          contribute.
        </Text>
      ),
    },
    {
      title: "Participate in the Culture Quiz",
      text: (
        <Text transition={"all 0.3s ease"} lineHeight={"26px"}>
          Take the fun quiz in the
          <Text
            transition={"all 0.3s ease"}
            mx={1.5}
            as={"span"}
            cursor={"pointer"}
            textAlign={"center"}
            fontWeight={"bold"}
            color={"white"}
            p={1.5}
            rounded={"8px"}
            bg={"#7289DA"}
            _hover={{
              transform: "scale(1.05)",
              shadow: "0 0 25px 0px rgb(255, 255, 255,0.05)",
            }}
            whiteSpace={"nowrap"}
          >
            {" "}
            #culture-quiz{" "}
          </Text>
          channel on
          <Text transition={"all 0.3s ease"} as={"span"} color={"blue.500"}>
            {" "}
            Discord{" "}
          </Text>
          to get familiar with QuickSite.guru's company culture and values. If
          you're unsure, go through the
          <Text
            transition={"all 0.3s ease"}
            mx={1.5}
            as={"span"}
            cursor={"pointer"}
            textAlign={"center"}
            fontWeight={"bold"}
            bg={"rgb(255, 255, 255,0.05)"}
            border={"1px solid rgb(255, 255, 255,0.05)"}
            p={1.5}
            rounded={"8px"}
            _hover={{
              transform: "scale(1.05)",
              shadow: "0 0 25px 0px rgb(255, 255, 255,0.05)",
            }}
            whiteSpace={"nowrap"}
          >
            {" "}
            👋 Getting Started{" "}
          </Text>{" "}
          and
          <Text
            transition={"all 0.3s ease"}
            mx={1.5}
            as={"span"}
            cursor={"pointer"}
            textAlign={"center"}
            fontWeight={"bold"}
            bg={"rgb(255, 255, 255,0.05)"}
            border={"1px solid rgb(255, 255, 255,0.05)"}
            p={1.5}
            rounded={"8px"}
            _hover={{
              transform: "scale(1.05)",
              shadow: "0 0 25px 0px rgb(255, 255, 255,0.05)",
            }}
            whiteSpace={"nowrap"}
          >
            {" "}
            🎓 Internship Program{" "}
          </Text>{" "}
          sections.
        </Text>
      ),
    },
    {
      title: "Explore the QuickSite.guru Platform",
      text: (
        <Text transition={"all 0.3s ease"}>
          Check out the
          <Text
            transition={"all 0.3s ease"}
            mx={1.5}
            as={"span"}
            cursor={"pointer"}
            textAlign={"center"}
            fontWeight={"bold"}
            bg={"rgb(255, 255, 255,0.05)"}
            border={"1px solid rgb(255, 255, 255,0.05)"}
            p={1.5}
            rounded={"8px"}
            _hover={{
              transform: "scale(1.05)",
              shadow: "0 0 25px 0px rgb(255, 255, 255,0.05)",
            }}
            whiteSpace={"nowrap"}
          >
            {" "}
            ⚙️ Using QuickSite{" "}
          </Text>{" "}
          section and spend some time navigating the QuickSite.guru platform .
          Share any insights or suggestions for improvement in the
          <Text
            transition={"all 0.3s ease"}
            mx={1.5}
            as={"span"}
            cursor={"pointer"}
            textAlign={"center"}
            fontWeight={"bold"}
            color={"white"}
            p={1.5}
            rounded={"8px"}
            bg={"#7289DA"}
            align={"center"}
            _hover={{
              transform: "scale(1.05)",
              shadow: "0 0 25px 0px rgb(255, 255, 255,0.05)",
            }}
            whiteSpace={"nowrap"}
          >
            #product-feedback{" "}
          </Text>
        </Text>
      ),
    },
    {
      title: "Follow Us on Social Media",
      text: (
        <Text transition={"all 0.3s ease"}>
          Visit our
          <Text
            transition={"all 0.3s ease"}
            mx={1.5}
            as={"span"}
            cursor={"pointer"}
            textAlign={"center"}
            fontWeight={"bold"}
            bg={"rgb(255, 255, 255,0.05)"}
            border={"1px solid rgb(255, 255, 255,0.05)"}
            p={1.5}
            rounded={"8px"}
            _hover={{
              transform: "scale(1.05)",
              shadow: "0 0 25px 0px rgb(255, 255, 255,0.05)",
            }}
            whiteSpace={"nowrap"}
          >
            {" "}
            🌐 Community/Support{" "}
          </Text>
          channel and follow QuickSite.guru on our social media accounts.
        </Text>
      ),
    },
    {
      title: "Provide Orientation Feedback",
      text: (
        <Text transition={"all 0.3s ease"}>
          After completing all the steps, visit the
          <Text
            transition={"all 0.3s ease"}
            mx={1.5}
            as={"span"}
            cursor={"pointer"}
            textAlign={"center"}
            fontWeight={"bold"}
            color={"white"}
            p={1.5}
            rounded={"8px"}
            bg={"#7289DA"}
            _hover={{
              transform: "scale(1.05)",
              shadow: "0 0 25px 0px rgb(255, 255, 255,0.05)",
            }}
            whiteSpace={"nowrap"}
          >
            {" "}
            #feedback{" "}
          </Text>
          channel on Discord to share your thoughts on the orientation process.
          Your feedback is invaluable for making continuous improvements.
        </Text>
      ),
    },
  ];

  const { activeStep } = useSteps({
    index: 8,
    count: Stage1.length,
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
              Welcome To Stage 1
            </Text>
          </Box>

          <Box>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              fontWeight={"300"}
            >
              Stage 1 is all about learning: you about us and us about you! You
              have 1 week to complete this stage from the time you have joined.
              Here's your detailed, step-by-step guide to get started:
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
            {Stage1.map(({ image, title, text }, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus
                    complete={<StepNumber />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                  />
                </StepIndicator>

                <Box
                  transition={"all 0.3s ease"}
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
                  <HStack
                    justify={"start"}
                    align={"left"}
                    w={"100%"}
                    h={"100%"}
                  >
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
                      {text}
                    </Box>
                  </HStack>
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

export default WelcomeToStage1;
