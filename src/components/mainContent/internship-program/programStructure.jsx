"use client";
import {
  Box,
  VStack,
  Text,
  HStack,
  Divider,
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
import Link from "next/link";

const ProgramStructure = ({ titlepath, subpath }) => {
  const steps = [
    {
      title: "Stage 1: Orientation and Integration",
      week: "1",
      description:
        "Start your journey with an in-depth understanding of QuickSite.guru's mission, vision, and  operating principles. This stage sets the groundwork for your success within the company and introduces you to our culture of innovation.",
    },
    {
      title: "  Stage 2: Learning through Building",
      week: "2",
      description:
        "Dive into the heart of our technology by creating your own website on QuickSite.guru. This practical experience reinforces learning through application, with the support and feedback of our experienced designers and developers."
    },
    {
      title: "Stage 3: Focus on Quality",
      week: "3",
      description:
        "Designing a template that could be utilized by users globally requires extra attention to detail and learning. You will improve technical skills and the understanding of user-centric design by getting productive feedback from our dev and design team. Our goal is to help you build something you would be proud of.",
    },
    {
      title: "Stage 4: Participate in Real-life Project (Optional)",
      week: "3",
      description:
        "Participate in a real project for real start-ups! Sometimes we develop websites for free to thelp start-ups. This helps us better understand real users and their needs. If participating, you will learn how to be part of a project team, collaborate with different stakeholders, and achieve success together.",
    },
  ];

  const { activeStep } = useSteps({
    index: 4,
    count: steps.length,
  });
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
        pb={"240px"}
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
              🏗️ Program Structure
            </Text>
          </Box>

          <Box>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
              Welcome to the QuickSite.guru Web Development Internship Program!
              Our program is designed to provide hands-on experience and
              mentorship to aspiring web developers. Here’s how our internship
              is structured
            </Text>
          </Box>

          <Box>
            <Text
              mb={"15px"}
              color={"white"}
              fontWeight={"600"}
              fontSize={["18px", "18px", "20px", "20px", "28px"]}
            >
              Our Internship Philosophy
            </Text>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
              We believe in offering a hands-on, immersive experience that goes
              beyond conventional learning. Interns at QuickSite.guru aren't
              just observers; they're active participants in our journey to
              reshape the website creation industry. Through this program,
              interns gain not only professional experience but also contribute
              their unique ideas and perspectives to our mission.
            </Text>
          </Box>

          <Box>
            <Text
              mb={"15px"}
              color={"white"}
              fontWeight={"600"}
              fontSize={["18px", "18px", "20px", "20px", "28px"]}
            >
              For Future Developers
            </Text>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
              This internship offers hands-on experience in website building,
              including HTML/CSS (Bootstrap, Tailwind, etc.), layout design,
              animations, hosting, content writing, and domain management.
              Interns create responsive, SEO-friendly websites with guidance
              from experienced developers. The program emphasizes practical
              learning and teamwork, with projects ranging from personal
              websites to real-world applications.
            </Text>
          </Box>

          <Box>
            <Text
              mb={"15px"}
              color={"white"}
              fontWeight={"600"}
              fontSize={["18px", "18px", "20px", "20px", "28px"]}
            >
              Duration and Commitment
            </Text>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
              Our internship is fully remote and part-time only. You should
              expect to spend around 8 hours per week in your own time. The
              schedule is flexible, and it is up to you how quickly you will
              proceed. The expected completion timeframe is 2-3 months.
            </Text>
          </Box>

          <Box>
            <Text
              mb={"15px"}
              color={"white"}
              fontWeight={"600"}
              fontSize={["18px", "18px", "20px", "20px", "28px"]}
            >
              Learning and Development
            </Text>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
            >
              Throughout the internship, you will work on real-world projects,
              gaining practical experience in web development. Our mentors will
              provide guidance and feedback to help you grow your skills. You’ll
              have the opportunity to learn about front-end and back-end
              development, user experience design, and more.
            </Text>
          </Box>

          <Box>
            <Text
              mb={"15px"}
              color={"white"}
              fontWeight={"600"}
              fontSize={["18px", "18px", "20px", "20px", "28px"]}
            >
              Stages of the Internship
            </Text>
            <Text
              color={"white"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              lineHeight={"24px"}
              fontWeight={"300"}
              mb={"15px"}
            >
              The internship is divided into four stages. Each stage focuses on
              different aspects of web development, gradually increasing in
              complexity and responsibility.
            </Text>

            <HStack justify={"left"}>
              <VStack h={"100%"} justify={"left"} align={"centre"}>
                <Stepper
                  index={activeStep}
                  orientation="vertical"
                  height="400px"
                  gap="0"
colorScheme={"teal"}
px={"10px"}
                >
                  {steps.map(({ title, description, week }, index) => (
                    <Step key={index}   >
                      <StepIndicator >
                        <StepStatus  
                          complete={<StepIcon  />}
                          incomplete={<StepNumber  />}
                          active={<StepNumber  />}
                        />
                      </StepIndicator>

                      <Box flexShrink="0" w={"80%"} mb={"15px"}>
                        <StepTitle
                          mb={"15px"}
                          color={"white"}
                          fontWeight={"600"}
                          fontSize={["16px", "16px", "18px", "18px", "20px"]}
                        >
                          {title}
                        </StepTitle>
                        <Text
                          color={"white"}
                          fontSize={["14px", "14px", "14px", "14px", "16px"]}
                          lineHeight={"24px"}
                          fontWeight={"300"}
                        >
                          <strong>Duration:</strong>{" "}
                          <Text as={"span"}>{week}</Text> week
                        </Text>
                        <StepDescription
                          color={"white"}
                          fontSize={["14px", "14px", "14px", "14px", "16px"]}
                          lineHeight={"24px"}
                          fontWeight={"300"}
                          mb={"15px"}
                        >
                          {" "}
                          <strong>Focus:</strong> {description}
                        </StepDescription>
                      </Box>

                      <StepSeparator />
                    </Step>
                  ))}
                </Stepper>
              </VStack>

            </HStack>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default ProgramStructure;