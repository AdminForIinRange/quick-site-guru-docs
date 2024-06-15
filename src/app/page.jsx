"use client";
import Main from "@/components/main/main";
import Sidebar from "@/components/sidebar/sidebar";
import { HStack, Box, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  console.log("sending you to welcome/hello");

  const router = useRouter();
  router.push("/welcome/hello");
};

export default Home;
