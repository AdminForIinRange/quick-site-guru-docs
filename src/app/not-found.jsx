"use client";
import Main from "@/components/main/main";
import RightSideNav from "@/components/rightSideNav/rightSideNav";
import Sidebar from "@/components/sidebar/sidebar";
import { HStack, Box, useMediaQuery, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";
import Home from "./page";

const NotFound = () => {

  console.log("sending you to / wich will push you to welcome/hello");

  return (
    <>
      <Home />
    </>
  );
};

export default NotFound;
