import { Box, VStack, Text, Step } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/navigation";
import { useHistory } from "react-router-dom";
import Link from "next/link";

const Stage2steps = [
  {
    title: "Define Your Project",
    text: (
      <Text transition={"all 0.3s ease"}>
        Start by visting
        <Text
          transition={"all 0.3s ease"}
          mx={1.5}
          as={Link}
          href="/getting-started/introduction"
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
          
          🎨 Propose a design
        </Text>
        , and follow its instructions as this will help you get a start in
        selecting a theme and topic for your website and how to structure it and
        get it approved by a mentor.
      </Text>
    ),
  },
  // {
  //   title: "Sketch a Layout",
  //   text: (
  //     <Text transition={"all 0.3s ease"}>
  //       Plan your website layout on paper or a digital tool to visualize the
  //       structure and navigation before coding.
  //     </Text>
  //   ),
  // },
  {
    title: "Build with HTML",
    text: (
      <Text transition={"all 0.3s ease"}>
        After you have completed the
        <Text
          transition={"all 0.3s ease"}
          mx={1.5}
          as={Link}
          href="/getting-started/introduction"
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
          
          🎨 Propose a design
        </Text>
        , before you code take a more extesinve look though
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
          
          ⚙️ Using QuickSite
        </Text>
        . Create the basic structure of your website with HTML, including
        headers, footers, navigation bars, and content sections. Focus on clean
        and semantic markup if your confused give this a quick article read
        <Text
          transition={"all 0.3s ease"}
          mx={1.5}
          as={Link}
          href="https://blog.hubspot.com/website/semantic-html"
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
          
          Semantic Html
        </Text>
      </Text>
    ),
  },
  {
    title: "Style with CSS",
    text: (
      <Text transition={"all 0.3s ease"}>
        Style your website with CSS for a minimalist design emphasizing
        usability and accessibility. Ensure
        <Text
          transition={"all 0.3s ease"}
          mx={1.5}
          as={Link}
          href="/using-quicksite/responsiveness"
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
          
          📱 Responsiveness
        </Text>
        with media queries for different screen sizes, make sure you to your
        website on various devices and screen sizes, adjusting CSS as needed for
        a seamless user experience.
      </Text>
    ),
  },
  {
    title: "Incorporate QuickSite.guru Features",
    text: (
      <Text transition={"all 0.3s ease"}>
        Utilize QuickSite.guru features for content management and
        <Text
          transition={"all 0.3s ease"}
          mx={1.5}
          as={Link}
          href="/using-quicksite/svg-assets"
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
          
          🖼️ SVG/Assets
        </Text>
        handling also have a look at
        <Text
          transition={"all 0.3s ease"}
          mx={1.5}
          as={Link}
          href="/using-quicksite/links-scripts-meta"
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
          
          🔗 Links/Scripts/Meta tags
        </Text>
        for more in-depth explanation .
      </Text>
    ),
  },

  {
    title: "Publishing on QuickSite.guru ",
    text: (
      <Text transition={"all 0.3s ease"}>
        Once you completed your site visit
        <Text
          transition={"all 0.3s ease"}
          mx={1.5}
          as={Link}
          href="/using-quicksite/publishing"
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
          
          📰 Publishing
        </Text>
        to get started on QuickSite.guru and host your website. Not required but
        if want go a step further you can host your website on the internet but
        this will require you to Purchase a domain please visit
        <Text
          transition={"all 0.3s ease"}
          mx={1.5}
          as={Link}
          href="/using-quicksite/hosting"
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
          
          🌐 Hosting
        </Text>
        and
        <Text
          transition={"all 0.3s ease"}
          mx={1.5}
          as={Link}
          href="/using-quicksite/domain"
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
          
          🌍 Domain
        </Text>
        for a more in-depth explanation. .
      </Text>
    ),
  },
  {
    title: "Feedback",
    text: (
      <Text transition={"all 0.3s ease"}>
        Visit
        <Text
          transition={"all 0.3s ease"}
          mx={1.5}
          as={Link}
          href="/internship-program/meetings-feedback"
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
          
          📅 Meetings/Feedback
        </Text>
        as it will show you how we conduct the feedbacks/Meeting process and the
        expected format we advise. Please keep in mind that this process will
        take some time as the mentors will be dealing with others submission's,
        however please attend the meeting to get direct feedback
      </Text>
    ),
  },
  {
    title: "Refinement",
    text: (
      <Text transition={"all 0.3s ease"}>
        After you have received feedback in the meetings, please refine your
        project and repeat
        <Text
          transition={"all 0.3s ease"}
          mx={1.5}
          as={"span"}
          cursor={"pointer"}
          textAlign={"center"}
          fontWeight={"bold"}
          bg={"rgb(113,128,150)"}
          border={"1px solid rgb(255, 255, 255,0.05)"}
          p={1.5}
          rounded={"8px"}
          _hover={{
            transform: "scale(1.05)",
            shadow: "0 0 25px 0px rgb(113,128,150)",
          }}
          whiteSpace={"nowrap"}
        >
          
          Step 6: Feedback
        </Text>
        above. Keep in mind we are trying to develop your skills and ability's
        so learn to take constrictive criticism as we mean the best for you and
        the company.
      </Text>
    ),
  },
  {
    title: "Get sign-off from mentors",
    text: (
      <Text transition={"all 0.3s ease"}>
        After the mentors approve the website through rigorous feedback,
        meetings, and general advice, your mentors will sign off on your
        project, and you will be approved for stage 3.
      </Text>
    ),
  },
  {
    title: "Before Moving to Stage 3",
    text: (
      <Text transition={"all 0.3s ease"}>
        Reflect on your skills developed, challenges faced, and how you overcame
        them. This will provide valuable insights for future projects.
      </Text>
    ),
  },
];

export { Stage2steps };
