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
import { Stage2steps } from "./stage2Components/stage2steps.jsx";
import Link from "next/link.js";

const WelcomeToStage2 = ({ titlepath, subpath }) => {
  const { activeStep } = useSteps({
    index: 11,
    count: Stage2steps.length,
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
              🎉 Welcome To Stage 2
            </Text>
          </Box>

          <Box>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              fontWeight={"300"}
            >
              Stage 2 of your QuickSite.guru internship is a two-week hands-on
              learning phase where you'll build a website from scratch. We
              expect you have already gone through{" "}
              <Text
                transition={"all 0.3s ease"}
                mx={1.5}
                lineHeight={"35px"}
                as={Link}
                href="/stage-1/welcome-stage-1"
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
                🧠 Stage 1 Learning{" "}
              </Text>{" "}
              and a little bit of{" "}
              <Text
                transition={"all 0.3s ease"}
                lineHeight={"35px"}
                mx={1.5}
                as={Link}
                href="/using-quicksite/get-started"
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
                ⚙️ Using QuickSite{" "}
              </Text>{" "}
              . You'll use minimal HTML and CSS to master web development
              basics, explore QuickSite.guru's features like content management
              and image handling, and understand SEO. You have 2 weeks to
              complete this stage from the time you start, rember if you stuggleing with coding or desgin please reach for/to         <Text
          transition={"all 0.3s ease"}
          mx={1.5}
          as={Link}
          href="/internship-program/mentorship-guidance"
          cursor={"pointer"}
          textAlign={"center"}
          fontWeight={"bold"}
          lineHeight={"35px"}
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
          👨‍🏫 Mentorship/Guidance{" "}
        </Text> on Discord  .
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
            {Stage2steps.map(({ image, title, text }, index) => (
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

export default WelcomeToStage2;
