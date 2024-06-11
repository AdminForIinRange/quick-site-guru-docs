import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

const NotFound = () => {
  return (
   
    <Box color={"white"} align={"center"}  >
      <h2>Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/welcome/docs-index"> <Text color={"blue"}>
      Return Home </Text></Link>

    </Box>
  );
};

export default NotFound;
