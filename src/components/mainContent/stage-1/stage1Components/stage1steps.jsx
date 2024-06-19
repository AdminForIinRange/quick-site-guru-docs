import { Box, VStack, Text, Step } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/navigation";
import { useHistory } from "react-router-dom";
import Link from "next/link";

const Stage1steps = [
  {
    title: "Understand Who We Are",
    text: (
      <Text transition={"all 0.3s ease"}>
        {" "}
        Welcome to Stage 1! Start by going through all of the{" "}
        <Text
          as={Link}
          href="/getting-started/introduction"
          transition={"all 0.3s ease"}
          mx={1.5}
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
          👋 Getting Started{" "}
        </Text>{" "}
        and{" "}
        <Text
          transition={"all 0.3s ease"}
          mx={1.5}
          as={Link}
          href="/internship-program/program-structure"
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
          🎓 Internship Program{" "}
        </Text>{" "}
        materials. This will give you a greater sense of the internship and the
        company. After that, complete this signup form
        <Text
          transition={"all 0.3s ease"}
          mx={1.5}
          as={Link}
          href="https://forms.gle/AGAa6ideTx98ucFw6"
          target="_blank"
          cursor={"pointer"}
          textAlign={"center"}
          fontWeight={"bold"}
          bg={"rgb(103,58,1830)"}
          border={"1px solid rgb(103,58,183, 0.05)"}
          p={1.5}
          rounded={"8px"}
          _hover={{
            transform: "scale(1.05)",
            shadow: "0 0 25px 0px rgb(103,58,1830.2)",
          }}
          whiteSpace={"nowrap"}
        >
          {" "}
          Orientation Form {""}
        </Text>{" "}
        . "{" "}
      </Text>
    ),
  },
  {
    title: "Introduce Yourself",
    text: (
      <Text transition={"all 0.3s ease"}>
        Share a brief introduction about yourself in the
        <Text
          transition={"all 0.3s ease"}
          mx={1.5}
          target="_blank"
          as={Link}
          href="https://discord.com/channels/1223592781235359764/1224788718221787136"
          cursor={"pointer"}
          textAlign={"center"}
          fontWeight={"bold"}
          color={"white"}
          p={1.5}
          rounded={"8px"}
          bg={"#7289DA"}
          _hover={{
            transform: "scale(1.05)",
            shadow: "0 0 25px 0px rgb(114,137,218,0.5)",
          }}
          whiteSpace={"nowrap"}
        >
          {" "}
          #stage1-hello{" "}
        </Text>{" "}
        channel on Discord. Include your background, interests, and what you
        hope to learn during your internship. Visit:{" "}
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
          🧑‍💻 Introduction{" "}
        </Text>
      </Text>
    ),
  },
  {
    title: "Connect with a Mentor",
    text: (
      <Text transition={"all 0.3s ease"}>
        Check out the
        <Text
          transition={"all 0.3s ease"}
          mx={1.5}
          as={Link}
          href="/internship-program/mentorship-guidance"
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
          👨‍🏫 Mentorship/Guidance{" "}
        </Text>{" "}
        and
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
          {" "}
          📅 Meetings/Feedback{" "}
        </Text>{" "}
        sections to get a clear understanding of the processes. After that,
        reach out to mentors on Discord and send a direct message to your chosen
        mentor to schedule a one-on-one meeting.
      </Text>
    ),
  },
  {
    title: "Start Joining Team Meetings",
    text: (
      <Text transition={"all 0.3s ease"}>
        Go to the
        <Text
          transition={"all 0.3s ease"}
          mx={1.5}
          as={Link}
          href="/internship-program/mentorship-guidance"
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
          👨‍🏫 Mentorship/Guidance{" "}
        </Text>{" "}
        section and start joining team meetings via the Google Meet link in{" "}
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
          {" "}
          📅 Meetings/Feedback{" "}
        </Text>{" "}
        . This will help you understand current projects and see where you can
        contribute.
      </Text>
    ),
  },
  {
    title: "Participate in the Culture Quiz",
    text: (
      <Text transition={"all 0.3s ease"} lineHeight={"26px"}>
        Take the fun
        <Text
          transition={"all 0.3s ease"}
          mx={1.5}
          as={Link}
          href="https://forms.gle/pd88EJYtZKYeJ5pq7"
          target="_blank"
          cursor={"pointer"}
          textAlign={"center"}
          fontWeight={"bold"}
          bg={"rgb(103,58,1830)"}
          border={"1px solid rgb(103,58,183, 0.05)"}
          p={1.5}
          rounded={"8px"}
          _hover={{
            transform: "scale(1.05)",
            shadow: "0 0 25px 0px rgb(103,58,1830.2)",
          }}
          whiteSpace={"nowrap"}
        >
          {" "}
          Culture Quiz {""}
        </Text>{" "}
        . to get familiar with QuickSite.guru's company culture and values.
      </Text>
    ),
  },
  {
    title: "Explore the QuickSite.guru Platform",
    text: (
      <Text transition={"all 0.3s ease"}>
        Check out the
        <Text
          transition={"all 0.3s ease"}
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
        section and spend some time navigating the QuickSite.guru platform .
        Share any insights or suggestions for improvement in the
        <Text
          transition={"all 0.3s ease"}
          mx={1.5}
          as={Link}
          target="_blank"
          href="https://discord.com/channels/1223592781235359764/1224795814962925740"
          cursor={"pointer"}
          textAlign={"center"}
          fontWeight={"bold"}
          color={"white"}
          p={1.5}
          rounded={"8px"}
          bg={"#7289DA"}
          align={"center"}
          _hover={{
            transform: "scale(1.05)",
            shadow: "0 0 25px 0px rgb(114,137,218,0.5)",
          }}
          whiteSpace={"nowrap"}
        >
          #product-feedback{" "}
        </Text>
      </Text>
    ),
  },
  {
    title: "Follow Us on Social Media",
    text: (
      <Text transition={"all 0.3s ease"}>
        Visit our
        <Text
          transition={"all 0.3s ease"}
          mx={1.5}
          as={Link}
          href="/getting-started/community-support"
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
          🌐 Community/Support{" "}
        </Text>
        channel and follow QuickSite.guru on our social media accounts.
      </Text>
    ),
  },
  {
    title: "Provide Orientation Feedback",
    text: (
      <Text transition={"all 0.3s ease"}>
        After completing all the steps, visit the
        <Text
          transition={"all 0.3s ease"}
          mx={1.5}
          as={Link}
          target="_blank"
          href="https://discord.com/channels/1223592781235359764/1224795787985420298"
          cursor={"pointer"}
          textAlign={"center"}
          fontWeight={"bold"}
          color={"white"}
          p={1.5}
          rounded={"8px"}
          bg={"#7289DA"}
          _hover={{
            transform: "scale(1.05)",
            shadow: "0 0 25px 0px rgb(114,137,218,0.5)",
          }}
          whiteSpace={"nowrap"}
        >
          {" "}
          #org-feedback{" "}
        </Text>
        channel on Discord to share your thoughts on the orientation process.
        Your feedback is invaluable for making continuous improvements.
      </Text>
    ),
  },
  {
    title: "Before Moving to Stage 2",
    text: (
      <Text transition={"all 0.3s ease"}>
        Stage two is hard and a bit more complicated and will require you to be
        more proactive in the internship. You will learn a lot of skills in both
        development, operations, communication and overall how developers work.
        If this is your first time coding please visit{" "}
        <Text
          transition={"all 0.3s ease"}
          mx={1.5}
          as={Link}
          href="/learning-material/scrimba"
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
          📗 Learning Material{" "}
        </Text>
        for a quick startup guide.
      </Text>
    ),
  },
];

export { Stage1steps };
