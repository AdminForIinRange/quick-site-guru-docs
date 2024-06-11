"use client";
import {
  Box,
  Divider,
  HStack,
  Spacer,
  Center,
  useMediaQuery,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SearchBar from "./searchBar/searchBar";
import { FaDiscord, FaLinkedin, FaMoon, FaSun, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isTablet] = useMediaQuery("(max-width: 767px)");
  const [night, setNight] = useState(true);

  const links = [
    { name: "Home", link: "/home" },
    { name: "About us", link: "/aboutUs" },
    { name: "Properties", link: "/properties" },
    { name: "Services", link: "/services" },
    { name: "Blog", link: "/blog" },
    { name: "FAQ", link: "/FAQ" },
    { name: "Contact", link: "/contact" },
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
    localStorage.setItem("theme", night ? "dark" : "light");
  }, [night]);

  useEffect(() => {
    setNight(localStorage.getItem("theme") === "dark");
  }, []);

  return (
    <>
      {/* Mobile Navbar */}
      {isTablet && (
        <Box>
          <HStack
            px={"15"}
            w={"100%"}
            h={"100%"}
            justify={"left"}
            align={"start"}
            mt={"16.5px"}
          >
            <Box
              bg={"rgb(255, 255, 255,0.05)"}
              border={"1px solid rgb(255, 255, 255,0.05)"}
              rounded={"15px"}
              w={"55px"}
              h={"45px"}
              
              borderRadius={"15px"}
            >
              <HStack w={"100%"} h={"100%"} justify={"center"} align={"center"}>
                <FaBars size={"25px"} color="rgb(255, 255, 255,0.5)" />
              </HStack>
            </Box>
            <HStack w={"100%"} h={"100%"} justify={"center"} align={"center"}>
              <SearchBar />
            </HStack>
          </HStack>
        </Box>
      )}

      {/* Desktop Navbar */}
      {!isTablet && (
        <Box>
          <HStack
            w={"100%"}
            h={"100%"}
            justify={"center"}
            align={"center"}
            mt={"10px"}
          >
            <HStack w={"100%"} h={"100%"} justify={"center"} align={"center"}>
              <Box
                bg={"#242526"}
                rounded={"15px"}
                w={["100%", "100%", "100%", "95%", "90%"]}
                h={"65px"}
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
                  
                   <SearchBar />
                   <Center height="40px">
                    <Divider
                      orientation="vertical"
                      bgColor={"#656565"}
                      w={"1.5px"}
                    />
                  </Center>
                  <Box w={"55px"} h={"55px"} borderRadius={"100%"} />
                  
                  <Spacer />

                 
             
                  <Center height="40px">
                    <Divider
                      orientation="vertical"
                      bgColor={"#656565"}
                      w={"1.5px"}
                    />
                  </Center>

                  {IconsLinks.map(({ icon, link, color }, index) => (
                    <Box
                      key={index}
                      color={color}
                      cursor={"pointer"}
                      _hover={{ transform: "scale(1.3)", color: "white" }}
                    >
                      <Link href={link} target="_blank">
                        {icon}
                      </Link>
                    </Box>
                  ))}

                  <Box
                    cursor={"pointer"}
                    color={night ? "#656565" : "#D69E2E"}
                    _hover={{ transform: "scale(1.3)", color: "white" }}
                    onClick={() => setNight(!night)}
                  >
                    {night ? <FaMoon size={"25px"} /> : <FaSun size={"25px"} />}
                  </Box>

                 
                </HStack>
              </Box>
            </HStack>
          </HStack>
        </Box>
      )}
    </>
  );
};

export default Navbar;
