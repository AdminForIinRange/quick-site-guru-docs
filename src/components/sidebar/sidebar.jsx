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

const Sidebar = () => {

    const router = useRouter();
  const SideLink = [
    {
      Welcome: [
        {
          title: "🎉 Welcome",
          sublinks: [
            {
              sublink: "🗺️ docs index",
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
          sublinks: [
            {
              sublink: "🧑‍💻 Introduction",
              prams: "introduction",
              path: "getting-started/introduction",
            },
            {
              sublink: "🏢 Company Values",
              prams: "company-values",
              path: "getting-started/company-values",
            },
            {
              sublink: "🌐 Community/Support",
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
          sublinks: [
            {
              sublink: "🏗️ Program Structure",
              prams: "program-structure",
              path: "internship-program/program-structure",
            },
            {
              sublink: "🚀 What we Expect",
              prams: "what-we-expect",
              path: "internship-program/what-we-expect",
            },
            {
              sublink: "👨‍🏫 Mentorship/Guidance",
              prams: "mentorship-guidance",
              path: "internship-program/mentorship-guidance",
            },
            {
              sublink: "📅 Meetings/Feedback",
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
          sublinks: [
            {
              sublink: "🎉 Welcome to stage 1",
              prams: "welcome-stage-1",
              path: "stage-1/welcome-stage-1",
            },
            {
              sublink: "🌍 Our Mission/Vision",
              prams: "mission-vision",
              path: "stage-1/mission-vision",
            },
            {
              sublink: "🔊 Joining Discord",
              prams: "joining-discord",
              path: "stage-1/joining-discord",
            },
            {
              sublink: "🗣️ Talking to mentors",
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
          sublinks: [
            {
              sublink: "🎉 Welcome to stage 2",
              prams: "welcome-stage-2",
              path: "stage-2/welcome-stage-2",
            },
            {
              sublink: "🎨 Propose a design",
              prams: "propose-design",
              path: "stage-2/propose-design",
            },
            {
              sublink: "💻 Coding in QuickSite",
              prams: "coding-in-quicksite",
              path: "stage-2/coding-in-quicksite",
            },
            {
              sublink: "📅 Meetings/Feedback",
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
          sublinks: [
            {
              sublink: "🎉 Welcome to stage 3",
              prams: "welcome-stage-3",
              path: "stage-3/welcome-stage-3",
            },
            {
              sublink: "📊 Business Templates",
              prams: "business-templates",
              path: "stage-3/business-templates",
            },
            {
              sublink: "🎨 Propose a template",
              prams: "propose-template",
              path: "stage-3/propose-template",
            },
            {
              sublink: "📅 Meetings/Feedback",
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
          sublinks: [
            {
              sublink: "🎉 Welcome to stage 4",
              prams: "welcome-stage-4",
              path: "stage-4/welcome-stage-4",
            },
            {
              sublink: "📊 Business Templates",
              prams: "business-templates",
              path: "stage-4/business-templates",
            },
            {
              sublink: "🎨 Propose a template ",
              prams: "propose-template",
              path: "stage-4/propose-template",
            },
            {
              sublink: "📅 Meetings/Feedback",
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
          sublinks: [
            {
              sublink: "🚀 Get Started",
              prams: "get-started",
              path: "using-quicksite/get-started",
            },
            {
              sublink: "📱 Responsiveness",
              prams: "responsiveness",
              path: "using-quicksite/responsiveness",
            },
            {
              sublink: "📝 Content",
              prams: "content",
              path: "using-quicksite/content",
            },
            {
              sublink: "🌐 Hosting",
              prams: "hosting",
              path: "using-quicksite/hosting",
            },
            {
              sublink: "📰 Publishing",
              prams: "publishing",
              path: "using-quicksite/publishing",
            },
            {
              sublink: "🔄 Cloning",
              prams: "cloning",
              path: "using-quicksite/cloning",
            },
            {
              sublink: "🌍 Domain",
              prams: "domain",
              path: "using-quicksite/domain",
            },
            {
              sublink: "🔗 Embedding",
              prams: "embedding",
              path: "using-quicksite/embedding",
            },
            {
              sublink: "🖼️ SVG/Assets",
              prams: "svg-assets",
              path: "using-quicksite/svg-assets",
            },
            {
              sublink: "📞 Contact",
              prams: "contact",
              path: "using-quicksite/contact",
            },
            {
              sublink: "🔗 Links/Scripts/Meta tags",
              prams: "links-scripts-meta",
              path: "using-quicksite/links-scripts-meta",
            },
            {
              sublink: "📗 Learning Material",
              prams: "learning-material",
              path: "using-quicksite/learning-material",
            },
            {
              sublink: "⌨️ Scrimba",
              prams: "scrimba",
              path: "using-quicksite/scrimba",
            },
          ],
        },
      ],
    },
  ];


  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (




    <VStack px={"20px"} >
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
                  defaultIndex={[1]}
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
                      {section.sublinks.map((sublink, sublinkIndex) => (
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
                           onClick={handleClick}
                              cursor={"pointer"}
                              fontWeight={"400"}
                              w={"100%"}
                              h={"100%"}
                              p={"10px"}
                              rounded={"15px"}
                              _hover={{ background: "#3a3b3c" }}
                              fontSize={"14px"}
                              textIndent={"5px"}
                            >
                              {sublink.sublink}
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
