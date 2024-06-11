import React from "react";
import {
  HStack,
  Box,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Divider,
} from "@chakra-ui/react";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Sidebar = ({titlepath, subpath}) => {

    const router = useRouter();
  const SideLink = [
    {
      Welcome: [
        {
          title: "🎉 Welcome",
          StartingPath: "welcome",
          sublinks: [
            {
              subtitle: "🗺️ docs index",
              prams: "docs-index",
              path: "welcome/docs-index",
            },
        ],
     
        },
      ],
    },
    {
      GettingStarted: [
        {
          title: "👋 Getting Started",
          StartingPath: "getting-started",
          sublinks: [
            {
              subtitle: "🧑‍💻 Introduction",
              prams: "introduction",
              path: "getting-started/introduction",
            },
            {
              subtitle: "🏢 Company Values",
              prams: "company-values",
              path: "getting-started/company-values",
            },
            {
              subtitle: "🌐 Community/Support",
              prams: "community-support",
              path: "getting-started/community-support",
            },
          ],
        },
      ],
    },
    {
      InternshipProgram: [
        {
          title: "🎓 Internship Program",
          StartingPath: "internship-program",
          sublinks: [
            {
              subtitle: "🏗️ Program Structure",
              prams: "program-structure",
              path: "internship-program/program-structure",
            },
            {
              subtitle: "🚀 What we Expect",
              prams: "what-we-expect",
              path: "internship-program/what-we-expect",
            },
            {
              subtitle: "👨‍🏫 Mentorship/Guidance",
              prams: "mentorship-guidance",
              path: "internship-program/mentorship-guidance",
            },
            {
              subtitle: "📅 Meetings/Feedback",
              prams: "meetings-feedback",
              path: "internship-program/meetings-feedback",
            },
          ],
        },
      ],
    },
    {
      Stage1: [
        {
          title: "🧠 Stage 1 Learning",
          StartingPath: "stage-1",
          sublinks: [
            {
              subtitle: "🎉 Welcome to stage 1",
              prams: "welcome-stage-1",
              path: "stage-1/welcome-stage-1",
            },
            {
              subtitle: "🌍 Our Mission/Vision",
              prams: "mission-vision",
              path: "stage-1/mission-vision",
            },
            {
              subtitle: "🔊 Joining Discord",
              prams: "joining-discord",
              path: "stage-1/joining-discord",
            },
            {
              subtitle: "🗣️ Talking to mentors",
              prams: "talking-to-mentors",
              path: "stage-1/talking-to-mentors",
            },
          ],
        },
      ],
    },
    {
      Stage2: [
        {
          title: "💪 Stage 2 Building",
          StartingPath: "stage-2",
          sublinks: [
            {
              subtitle: "🎉 Welcome to stage 2",
              prams: "welcome-stage-2",
              path: "stage-2/welcome-stage-2",
            },
            {
              subtitle: "🎨 Propose a design",
              prams: "propose-design",
              path: "stage-2/propose-design",
            },
            {
              subtitle: "💻 Coding in QuickSite",
              prams: "coding-in-quicksite",
              path: "stage-2/coding-in-quicksite",
            },
            {
              subtitle: "📅 Meetings/Feedback",
              prams: "meetings-feedback",
              path: "stage-2/meetings-feedback",
            },
          ],
        },
      ],
    },
    {
      Stage3: [
        {
          title: "🏗️ Stage 3 Tempting",
          StartingPath: "stage-3",
          sublinks: [
            {
              subtitle: "🎉 Welcome to stage 3",
              prams: "welcome-stage-3",
              path: "stage-3/welcome-stage-3",
            },
            {
              subtitle: "📊 Business Templates",
              prams: "business-templates",
              path: "stage-3/business-templates",
            },
            {
              subtitle: "🎨 Propose a template",
              prams: "propose-template",
              path: "stage-3/propose-template",
            },
            {
              subtitle: "📅 Meetings/Feedback",
              prams: "meetings-feedback",
              path: "stage-3/meetings-feedback",
            },
          ],
        },
      ],
    },
    {
      Stage4: [
        {
          title: "⚒️ Stage 4 Developing",
          StartingPath: "stage-4",
          sublinks: [
            {
              subtitle: "🎉 Welcome to stage 4",
              prams: "welcome-stage-4",
              path: "stage-4/welcome-stage-4",
            },
            {
              subtitle: "📊 Business Templates",
              prams: "business-templates",
              path: "stage-4/business-templates",
            },
            {
              subtitle: "🎨 Propose a template ",
              prams: "propose-template",
              path: "stage-4/propose-template",
            },
            {
              subtitle: "📅 Meetings/Feedback",
              prams: "meetings-feedback",
              path: "stage-4/meetings-feedback",
            },
          ],
        },
      ],
    },
    {
      UsingQuickSite: [
        {
          title: "⚙️ Using QuickSite",
          StartingPath: "using-quicksite",
          sublinks: [
            {
              subtitle: "🚀 Get Started",
              prams: "get-started",
              path: "using-quicksite/get-started",
            },
            {
              subtitle: "📱 Responsiveness",
              prams: "responsiveness",
              path: "using-quicksite/responsiveness",
            },
            {
              subtitle: "📝 Content",
              prams: "content",
              path: "using-quicksite/content",
            },
            {
              subtitle: "🌐 Hosting",
              prams: "hosting",
              path: "using-quicksite/hosting",
            },
            {
              subtitle: "📰 Publishing",
              prams: "publishing",
              path: "using-quicksite/publishing",
            },
            {
              subtitle: "🔄 Cloning",
              prams: "cloning",
              path: "using-quicksite/cloning",
            },
            {
              subtitle: "🌍 Domain",
              prams: "domain",
              path: "using-quicksite/domain",
            },
            {
              subtitle: "🔗 Embedding",
              prams: "embedding",
              path: "using-quicksite/embedding",
            },
            {
              subtitle: "🖼️ SVG/Assets",
              prams: "svg-assets",
              path: "using-quicksite/svg-assets",
            },
            {
              subtitle: "📞 Contact",
              prams: "contact",
              path: "using-quicksite/contact",
            },
            {
              subtitle: "🔗 Links/Scripts/Meta tags",
              prams: "links-scripts-meta",
              path: "using-quicksite/links-scripts-meta",
            },
           
           
          ],
        },
      ],
    },
    {
      UsingQuickSite: [
        {
          title: "📗 Learning Material",
        StartingPath: "learning-material",
          sublinks: [
           
            {
              subtitle: "⌨️ Scrimba",
              prams: "scrimba",
              path: "using-quicksite/scrimba",
            },
          ],
        },
      ],
    },
  ];

  return (
    <VStack px={"20px"}>
      {SideLink.map((item, index) =>
        Object.keys(item).map((key) =>
          item[key].map((section, sectionIndex) => (
          

            <Box
              key={`${index}-${sectionIndex}`}
              bg={"#242526"}
              w={"265px"}
              h={"100%"}
              p={"5px"}
              rounded={"8px"}
            >
              <VStack justify={"left"} align={"left"} h={"100%"}>
                <Accordion
                  transition={"all .3s ease"}
                  defaultIndex={[section.StartingPath == titlepath ? 0 : 1]}
                  allowMultiple
                  color={"white"}
                  border={"none"}
                >
                  <AccordionItem border={"none"}>
                    <AccordionButton
                      _hover={{ background: "none", transform: "scale(1.05)" }}
                    >
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontSize={"16px"}
                        fontWeight={"400"}
                      >
                        {section.title}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel py={"5px"}>
                      {section.sublinks.map((subtitle, sublinkIndex) => (

                        <HStack
                          justify={"left"}
                          align={"left"}
                          gap={"10px"}
                          w={"100%"}
                          h={"100%"}
                          key={`${index}-${sectionIndex}-${sublinkIndex}`}
                        >
                          <VStack
                            h={"100%"}
                            justify={"left"}
                            align={"left"}
                            height="41px"
                          >
                            <Divider
                              orientation="vertical"
                              borderColor={"#686868"}
                              borderWidth={"2px"}
                            />
                          </VStack>
                          <VStack
                            w={"100%"}
                            h={"100%"}
                            justify={"left"}
                            align={"left"}
                          >
                            <Box

                              onClick={() => router.replace(`/${subtitle.path}`)}
                              cursor={"pointer"}
                              fontWeight={"400"}
                              w={"100%"}
                              h={"100%"}
                              p={"10px"}
                              rounded={"15px"}
                              _hover={{ background: "#3a3b3c" }}
                              fontSize={"14px"}
                              textIndent={"5px"}
                              textColor={subtitle.prams == subpath ? "#9896FF" : "white"}
                            >
                              {subtitle.subtitle}
                            </Box>
                          </VStack>
                        </HStack>
                      ))}
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </VStack>
            </Box>
          ))
        )
      )}
    </VStack>
  );
};

export default Sidebar;
