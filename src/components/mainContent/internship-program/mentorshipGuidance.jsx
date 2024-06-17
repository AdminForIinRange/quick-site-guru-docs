"use client";

import { Box, VStack, Text, HStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BreadCrumbs from "@/components/breadCrumbs/breadCrumbs";
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";
import Anjesh from "../../../img/MentorAvater/Anjesh.png";
import Anthony from "../../../img/MentorAvater/Anthony.png";
import Serge from "../../../img/MentorAvater/Serge.png";
import Rayyan from "../../../img/MentorAvater/Rayyan.png";
import Image from "next/image";
const MentorshipGuidance = ({ titlepath, subpath }) => {
  //fix no emjoi issues by if else or some other methosds like laocl store on click save variable

  const mentors = [
    {
      name: "Serge", 
      sub:'- founder',
    
      imgAvt: Serge,
      desc: "Years of software development and project delivery experience. Loves coding, paddleboarding and ambitious projects 😉",
    },

    {
      name: "Rayyan",
      imgAvt: Rayyan,
      desc: "3 years in the design space known for being versatile in the fintech startup scene in indonesia, Extrovert and loves teamwork haha 🥳",
    },

    {
      name: "Anthony",
      imgAvt: Anthony,
      desc: "I'm a Full Stack Web Developer with 10+ years experience and currently a Uni Lecturer teaching UX Design and Front-End Development as part of the Design Bachelor's Degree. 😊",
    },

    {
      name: "Anjesh",
      imgAvt: Anjesh,
      desc: "I'm a self-taught Full Stack Developer specializing in Frontend, I currently do Contracting/Freelancing for companies and startups. 💻",
    },
  ];

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
              👨‍🏫 Mentorship/Guidance
            </Text>
          </Box>

          <Box>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
              Mentorship and guidance are at the heart of our approach at
              QuickSite.guru. Our dedicated mentors bring years of industry
              experience and a passion for nurturing talent.
            </Text>
          </Box>

          <Box>
            <Text
              mb={"15px"}
              color={"white"}
              fontWeight={"600"}
              fontSize={["18px", "18px", "20px", "20px", "28px"]}
            >
              Project Reviews and Support
            </Text>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
              During stage reviews, our mentors carefully examine your designs,
              provide constructive advice, and ensure your projects meet our
              design and template standards. Whether optimizing for deployment
              or troubleshooting coding issues, they're here to help you achieve
              excellence. Count on our mentors to support your growth by
              offering personalized feedback and guidance, committed to helping
              you succeed in mastering the skills needed for effective website
              deployment.
            </Text>
          </Box>

          <Box>
            <Text
              mb={"15px"}
              color={"white"}
              fontWeight={"600"}
              fontSize={["18px", "18px", "20px", "20px", "28px"]}
            >
              Experienced Mentors and Personalized Support
            </Text>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
              At QuickSite.guru, our interns are dedicated, proactive, and eager
              to assist you throughout your internship journey. They bring years
              of versatile experience to the table, ensuring you receive
              comprehensive support. Count on our mentors to support your growth
              by offering personalized feedback and guidance. They are committed
              to helping you succeed in mastering the skills needed for
              effective website deployment. You can connect with them directly
              in the "Stage 1 Mentors" Discord channel or schedule meetings.
            </Text>
          </Box>

          <Box>
            <Text
              mb={"15px"}
              color={"white"}
              fontWeight={"600"}
              fontSize={["18px", "18px", "20px", "20px", "28px"]}
            >
              Mentors:
            </Text>

            <HStack
              flexWrap={"wrap"}
              mt={"30px"}
              gap={"30px"}
              justify={"left"}
              align={"start"}
              w={"100%"}
              h={"100%"}
            >
              {mentors.map(({ name, imgAvt, desc, sub }, index) => (
                <Box
                  key={index}
                  transition={"all 0.3s ease-in-out"}
                  _hover={{
                    shadow: "0 0 15px 0px #424549",
                    cursor: "pointer",
                    color: "teal.500",
                    transform: "scale(1.05)",
                  }}
                  h={["100%", "100%", "235px", "235px", "235px", "235px"]}
                  w={["100%", "100%", "300px", "300px", "300px", "300px"]}
                  borderRadius={"10px"}
                  bg={"rgb(255, 255, 255,0.05)"}
                  border={"1px solid rgb(255, 255, 255,0.05)"}
                >
                  <HStack
                    w={"100%"}
                    h={"100%"}
                    justify={"space-between"}
                    align={"left"}
                    p={"15px"}
                  >
                    <Box>
                      <VStack gap={"2px"} align={"left"} justify={"left"}>
                        <Box w={"55px"} h={"55px"} mb={"10px"}>
                          <Image
                            alt="mentors"
                            src={imgAvt}
                            bgRepeat={"no-repeat"}
                            style={{ borderRadius: "100%" }}
                          />
                        </Box>
                     
                        <Text
                          color={"white"}
                          fontSize={["18px", "22px", "22px", "18px", "22px"]}
                          fontWeight={"500"}
     
                        >
                          {name}

                          <Text as={"span"}
                          color={"white"}
                          fontSize={["14px", "14px", "14px", "14px", "14px"]}
                          fontWeight={"500"}
             
                        >
                          {" "} {sub}
                        </Text>
                        
                        </Text>
                    
                  
                        
             
                        <Text
                          color={"white"}
                          fontSize={[
                            "12px",
                            "12px",
                            "12px",
                            "12px",
                            "12px",
                            "12px",
                          ]}
                          w={"100%"}
                          textAlign={"left"}
                          pr={"40px"}
                        >
                          {desc}
                        </Text>
                      </VStack>
                    </Box>
                  </HStack>
                </Box>
              ))}
            </HStack>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default MentorshipGuidance;
