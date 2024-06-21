

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
import Link from "next/link";
import React from 'react';


const ProposeAdesignSteps =[
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


]
 


export default ProposeAdesignSteps;