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
        Start by visting{" "}
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
          {" "}
          🎨 Propose a design{" "}
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
        After you have completed the   <Text
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
          {" "}
          🎨 Propose a design{" "}
        </Text>, before you code take a more extesinve look though  <Text
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
        </Text>. Create the basic structure of your
        website with HTML, including headers, footers, navigation bars, and
        content sections. Focus on clean and semantic markup if your confused
        give this a quick article read
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
          {" "}
          Semantic Html{" "}
        </Text>
      </Text>
    ),
  },
  {
    title: "Style with CSS",
    text: (
      <Text transition={"all 0.3s ease"}>
        Style your website with CSS for a minimalist design emphasizing
        usability and accessibility. Ensure{" "}
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
          {" "}
          📱 Responsiveness{" "}
        </Text>{" "}
        with media queries for different screen sizes .
      </Text>
    ),
  },
  {
    title: "Incorporate QuickSite.guru Features",
    text: (
      <Text transition={"all 0.3s ease"}>
        Utilize QuickSite.guru features for content management and image
        handling. Pay attention to the "head" section for SEO optimization, have
        a look at

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
          {" "}
          🔗 Links/Scripts/Meta tags{" "}
        </Text>

        and

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
          {" "}
          🖼️ SVG/Assets{" "}
        </Text>
        to get a better understanding.
      </Text>
    ),
  },
  {
    title: "Ensure Responsiveness",
    text: (
      <Text transition={"all 0.3s ease"}>
        Test your website on various devices and screen sizes, adjusting CSS as
        needed for a seamless user experience.
      </Text>
    ),
  },
  {
    title: "Hosting on QuickSite.guru",
    text: (
      <Text transition={"all 0.3s ease"}>
        Purchase a domain and follow the DOMAINS section steps to make your
        website live, familiarizing yourself with web hosting and domain
        management.
      </Text>
    ),
  },
  {
    title: "Feedback and Refinement",
    text: (
      <Text transition={"all 0.3s ease"}>
        Share your website for feedback, use insights to improve design,
        content, and user experience. Iterate based on constructive criticism.
      </Text>
    ),
  },
  {
    title: "Get feedback from mentor",
    text: (
      <Text transition={"all 0.3s ease"}>
        Share your website in ⁠stage2-review on Discord. Follow mentor guidance
        to make necessary fixes. Complete this step when your mentor approves.
      </Text>
    ),
  },
  {
    title: "Get sign-off from mentors",
    text: (
      <Text transition={"all 0.3s ease"}>
        After making changes based on feedback, ask your mentor for a final
        review. Complete stage 2 once your website is approved.
      </Text>
    ),
  },
  {
    title: "Reflect on Your Learning",
    text: (
      <Text transition={"all 0.3s ease"}>
        Reflect on your skills developed, challenges faced, and how you overcame
        them. This will provide valuable insights for future projects.
      </Text>
    ),
  },
];

export { Stage2steps };
