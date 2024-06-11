"use client";
import {
  Box,
  Divider,
  HStack,
  Spacer,
  Text,
  Center,
  useMediaQuery,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SearchBar from "./searchBar/searchBar";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const [isTablet] = useMediaQuery("(max-width: 768px)");

  const [night, setNight] = useState(true);

  const links = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "About us",
      link: "/aboutUs",
    },
    {
      name: "Properties",
      link: "/properties",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "FAQ",
      link: "/FAQ",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const IconsLinks = [
    {
      icon: <FaDiscord fontSize={"28px"} />,
      link: "https://discord.gg/FsKFxcTC",
      color: "#5865F2",
    },
    {
      icon: <FaLinkedin fontSize={"25px"} />,
      link: "https://www.linkedin.com/company/quicksite-guru/",
      color: "#0077B5",
    },
  ];

  useEffect(() => {
    if (night) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, [night]);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setNight(true);
    } else {
      setNight(false);
    }
  }, [night]);

  return (
    <>
      <Box display={["block", "block", "block", "none", "none"]}>
        {" "}
        <HStack
          px={"15"}
          w={"100%"}
          h={"100%"}
          justify={"left"}
          align={"start"}
          mt={"25px"}
        >
          <Box
            bg={"#242526"}
            rounded={"15px"}
            w={"55px"}
            h={"50px"}
            px={"15"}
            borderRadius={"15px"}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          >
            <HStack w={"100%"} h={"100%"} justify={"center"} align={"center"}>
              <FaBars size={"25px"} color="#656565" />
            </HStack>
          </Box>
          <HStack
            w={"100%"}
            h={"100%"}
            justify={"center"}
            align={"center"}
            px={"15"}
          >
            {" "}
            <SearchBar />{" "}
          </HStack>
        </HStack>{" "}
      </Box>
      
      <Box display={["none", "none", "none", "block", "block"]}>
        {" "}
        <HStack
          w={"100%"}
          h={"100%"}
          justify={"center"}
          align={"center"}
          mt={"15px"}
        >
          <HStack w={"100%"} h={"100%"} justify={"center"} align={"center"}>
            <Box
              bg={"#242526"}
              rounded={"15px"}
              w={["100%", "100%", "100%", "95%", "90%"]}
              h={"55px"}
              px={"14"}
              borderRadius={"15px"}
              boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            >
              <HStack
                bg={"#242526"}
                w={"100%"}
                h={"100%"}
                justify={"space-between"}
                align={"center"}
                gap={["20px", "30px", "40px", "50px", "35px"]}
                fontFamily={"Raleway"}
                px={["2", "2", "5", "5", "5"]}
              >
                <Box w={"55px"} h={"55px"} borderRadius={"100%"} />
                <Spacer />

                {IconsLinks.map(({ icon, link, color }, index) => (
                  <Box
                    transition={"all 0.3s ease-in-out"}
                    color={color}
                    key={index}
                    cursor={"pointer"}
                    _hover={{ transform: "scale(1.3)", color: "white" }}
                  >
                    <Link href={link} target="_blank">
                      {icon}
                    </Link>
                  </Box>
                ))}

                {night ? ( // a simple local state for night mode
                  <Box
                    cursor={"pointer"}
                    transition={"all 0.3s ease-in-out"}
                    _hover={{ transform: "scale(1.3)", color: "white" }}
                    color={"#656565"}
                  >
                    <FaMoon size={"25px"} onClick={() => setNight(!night)} />
                  </Box>
                ) : (
                  <Box
                    cursor={"pointer"}
                    transition={"all 0.3s ease-in-out"}
                    _hover={{ transform: "scale(1.3)", color: "white" }}
                    color={"#D69E2E"}
                  >
                    <FaSun size={"25px"} onClick={() => setNight(!night)} />
                  </Box>
                )}

                <Center height="40px">
                  <Divider
                    orientation="vertical"
                    bgColor={"#656565"}
                    w={"1.5px"}
                  />
                </Center>

                <SearchBar />
              </HStack>
            </Box>
          </HStack>
        </HStack>
      </Box>
    </>
  );
};

export default Navbar;

// {links.map(({ name, link }) => (
//   <Link href={link} key={name}     >
//     <Text

//     color={"white"}
//       transition={"all 0.3s ease-in-out"}
//       cursor={"pointer"}
//       _hover={{
//         transform: "scale(1.2)",
//       }}
//       whiteSpace={"nowrap"}
//       fontSize={["12px", "12px", "14px", "16px", "16px"]}
//       fontWeight={600}
//       bg={"#242526"}
//     >
//       {name}
//     </Text>{" "}
//   </Link>
// ))}
