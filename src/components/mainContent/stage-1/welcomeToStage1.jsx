"use client";

import {
  Box,
  VStack,
  Text,
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
import React from "react";
import BreadCrumbs from "@/components/breadCrumbs/breadCrumbs";

const WelcomeToStage1 = ({ titlepath, subpath }) => {
  const Stage1 = [
    {
      title: "Understand Who We Are",
      text: "Welcome to Stage 1, start by going though all of the Getting Started as well internship Program, going thoug them will allwo you to get a greater sese of the internship and teh company ",
    },
    {
      title: "Introduce Yourself",
      text: "Share a brief introduction about yourself in the ⁠stage1-hello channel. Include your background, interests, and what you hope to learn during your internship.\nVisit: Introduction",
    },
    {
      title: "Choose a Mentor",
      text: "Read the bios in the ⁠stage1-mentors channel and send a direct message to your chosen mentor to schedule a one-on-one meeting.\nVisit: Mentorship/Guidance",
    },
    {
      title: "Start Joining Team Meetings",
      text: "Find your team's channel and join their next scheduled meeting. This will help you understand current projects and see where you can contribute.\nVisit: Meetings/Feedback",
    },
    {
      title: "Participate in the Culture Quiz",
      text: "Take the fun quiz in the ⁠culture-quiz channel to get familiar with QuickSite.guru's company culture and values.\nVisit: Company Values",
    },
    {
      title: "Explore the QuickSite.guru Platform",
      text: "Spend some time navigating the QuickSite.guru platform as if you were a new user. Share any insights or suggestions for improvement in the ⁠product-feedback channel.\nVisit: Using QuickSite",
    },
    {
      title: "Follow Us on Social Media",
      text: "Follow QuickSite.guru on our social media accounts:\nTwitter\nLinkedIn",
    },
    {
      title: "Provide Orientation Feedback",
      text: 'After completing all the steps, visit the "Feedback" channel to share your thoughts on the orientation process. Your feedback is invaluable for making continuous improvements.\nVisit: Feedback',
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
              lineHeight={"24px"}
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
                  w={["90%", "90%", "90%", "90%", "80%", "80%"]}
                  flexShrink="0"
                  mb={"20px"}
                >
                  <StepTitle
                    mb={"15px"}
                    color={"white"}
                    fontWeight={"600"}
                    fontSize={["16px", "16px", "18px", "18px", "20px"]}
                  >
                    {title}
                  </StepTitle>


                  <StepDescription mb={"15px"}      
                    color={"white"}
                    fontWeight={"300"}
                    fontSize={["14px", "14px", "14px", "14px", "16px"]}>
                    {text}
                    </StepDescription>
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
