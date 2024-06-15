"use client";

import { Box, VStack, Text } from "@chakra-ui/react";
import React from "react";
import BreadCrumbs from "@/components/breadCrumbs/breadCrumbs";

const WelcomeToStage1 = ({ titlepath, subpath }) => {
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
              Stage 1 is all about learning: you about us and us about you! You have 1 week to complete this stage from the time you have joined. Here's your detailed, step-by-step guide to get started:
            </Text>
          </Box>

          <Box>
            <Text
              mb={"15px"}
              color={"white"}
              fontWeight={"600"}
              fontSize={["18px", "18px", "20px", "20px", "28px"]}
            >
              Review Our Mission, Vision, and Product
            </Text>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
              Start by going through the materials provided in the ⁠mission and ⁠product channels. Engage with the team by asking at least one insightful question about our mission in ⁠org-feedback.
              <br />
              Visit: <a href="/🌍 Our Mission/Vision" style={{ color: "white" }}>Our Mission/Vision</a>
            </Text>
          </Box>

          <Box>
            <Text
              mb={"15px"}
              color={"white"}
              fontWeight={"600"}
              fontSize={["18px", "18px", "20px", "20px", "28px"]}
            >
              Introduce Yourself
            </Text>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
              Share a brief introduction about yourself in the ⁠stage1-hello channel. Include your background, interests, and what you hope to learn during your internship.
              <br />
              Visit: <a href="/🧑‍💻 Introduction" style={{ color: "white" }}>Introduction</a>
            </Text>
          </Box>

          <Box>
            <Text
              mb={"15px"}
              color={"white"}
              fontWeight={"600"}
              fontSize={["18px", "18px", "20px", "20px", "28px"]}
            >
              Choose a Mentor
            </Text>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
              Read the bios in the ⁠stage1-mentors channel and send a direct message to your chosen mentor to schedule a one-on-one meeting.
              <br />
              Visit: <a href="/👨‍🏫 Mentorship/Guidance" style={{ color: "white" }}>Mentorship/Guidance</a>
            </Text>
          </Box>

          <Box>
            <Text
              mb={"15px"}
              color={"white"}
              fontWeight={"600"}
              fontSize={["18px", "18px", "20px", "20px", "28px"]}
            >
              Start Joining Team Meetings
            </Text>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
              Find your team's channel and join their next scheduled meeting. This will help you understand current projects and see where you can contribute.
              <br />
              Visit: <a href="/📅 Meetings/Feedback" style={{ color: "white" }}>Meetings/Feedback</a>
            </Text>
          </Box>

          <Box>
            <Text
              mb={"15px"}
              color={"white"}
              fontWeight={"600"}
              fontSize={["18px", "18px", "20px", "20px", "28px"]}
            >
              Participate in the Culture Quiz
            </Text>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
              Take the fun quiz in the ⁠culture-quiz channel to get familiar with QuickSite.guru's company culture and values.
              <br />
              Visit: <a href="/🏢 Company Values" style={{ color: "white" }}>Company Values</a>
            </Text>
          </Box>

          <Box>
            <Text
              mb={"15px"}
              color={"white"}
              fontWeight={"600"}
              fontSize={["18px", "18px", "20px", "20px", "28px"]}
            >
              Explore the QuickSite.guru Platform
            </Text>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
              Spend some time navigating the QuickSite.guru platform as if you were a new user. Share any insights or suggestions for improvement in the ⁠product-feedback channel.
              <br />
              Visit: <a href="/⚙️ Using QuickSite" style={{ color: "white" }}>Using QuickSite</a>
            </Text>
          </Box>

          <Box>
            <Text
              mb={"15px"}
              color={"white"}
              fontWeight={"600"}
              fontSize={["18px", "18px", "20px", "20px", "28px"]}
            >
              Follow Us on Social Media
            </Text>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
              Follow QuickSite.guru on our social media accounts:
              <br />
              <a href="https://x.com/quicksiteguru" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>Twitter</a>
              <br />
              <a href="https://www.linkedin.com/company/quicksite-guru/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>LinkedIn</a>
            </Text>
          </Box>

          <Box>
            <Text
              mb={"15px"}
              color={"white"}
              fontWeight={"600"}
              fontSize={["18px", "18px", "20px", "20px", "28px"]}
            >
              Provide Orientation Feedback
            </Text>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
              After completing all the steps, visit the "Feedback" channel to share your thoughts on the orientation process. Your feedback is invaluable for making continuous improvements.
              <br />
              Visit: <a href="/📅 Meetings/Feedback" style={{ color: "white" }}>Feedback</a>
            </Text>
          </Box>

          <Box>
            <Text
              mb={"15px"}
              color={"white"}
              fontWeight={"600"}
              fontSize={["18px", "18px", "20px", "20px", "28px"]}
            >
              Complete Stage 1
            </Text>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
              To complete Stage 1, please fill out the Stage 1 Completion Gate Form: <a href="https://forms.gle/AGAa6ideTx98ucFw6" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>Stage 1 Completion Form</a>.
            </Text>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default WelcomeToStage1;
