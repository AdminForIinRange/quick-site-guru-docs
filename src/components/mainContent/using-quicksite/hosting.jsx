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
import Opening1 from "../../../img/QSG/Opening1.png";
import CreatingAproject from "../../../img/QSG/CreatingAproject.png";
import Image from "next/image";
import codeQSG from "../../../img/QSG/code/codeQSG.png"
import htmlcss from "../../../img/QSG/code/htmlcss.png"
const Hosting = ({ titlepath, subpath }) => {
  const steps = [
    {
      title: "Getting Started",
      img: codeQSG,
      text: (
        <Text transition={"all 0.3s ease"}>
          After registering on the platform, the site should open up to the
          image below. This page is the AI-integrated design page. However, you
          don’t need to worry about using this unless you have a GTP API key and
          want to experiment with it. For the internship, we will be focusing on
          code, content, and hosting. If it does not look like
              this, try zooming out.
        </Text>
      ),
    },

   

  ];

  const { activeStep } = useSteps({
    index: 5,
    count: steps.length,
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
      👨‍💻 Code
            </Text>
          </Box>

          <Box>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
              Let's get you started on using the official{" "}
              <Text
                transition={"all 0.3s ease"}
                mx={1.5}
                as={Link}
                target="_blank"
                href="https://quicksite.guru"
                cursor={"pointer"}
                textAlign={"center"}
                fontWeight={"bold"}
                lineHeight={"35px"}
                color={"white"}
                p={1.5}
                rounded={"8px"}
                bg={"rgb(255, 255, 255,0.05)"}
                border={"1px solid rgb(255, 255, 255,0.05)"}
                _hover={{
                  transform: "scale(1.05)",
                  shadow: "0 0 25px 0px rgb(255, 255, 255,0.2)",
                }}
                whiteSpace={"nowrap"}
              >
                {" "}
                quicksite.guru{" "}
              </Text>{" "}
              After registering on the platform, the site should open up to the
              image below. This page is the AI-integrated design page. However,
              you don’t need to worry about using this unless you have a GTP API
              key and want to experiment with it. For the internship, we will be
              focusing on Code, Content, and Hosting. 
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
            {steps.map(({ title, text, img }, index) => (
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
                    mb={"15px"}
                    color={"white"}
                    fontWeight={"300"}
                    fontSize={["14px", "14px", "14px", "14px", "16px"]}
                  >
                    {text}
                  </Box>
                  <Box>
                    <Image
                      style={{
                        borderRadius: "2px",
                        width: "100%",
                        height: "100%",
                      }}
                      src={img}
                      alt="image"
                    />
                  </Box>
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

export default Hosting;
