"use client";

import { HStack, Box, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  console.log("sending you to welcomeOpening/helloOpening");

  const router = useRouter();
  router.push("/welcomeOpening/helloOpening");
};

export default Home;

