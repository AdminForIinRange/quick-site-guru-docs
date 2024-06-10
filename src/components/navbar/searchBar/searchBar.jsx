import { Box, HStack } from '@chakra-ui/react'
import React from 'react'

const SearchBar = () => {
  return (
    <>
    
    <Box bg={"#161717"} w={"350px"} h={"40px"} rounded={"15px"}   >
                <HStack
                  bg={"transparent"}
                  h={"100%"}
                  justify={"right"}
                  align={"center"}
                  w={"100%"}
                  px={"15"}
                >
                  <Box
                    bg={"White"}
                    w={"80px"}
                    h={"25px"}
                    rounded={"10px"}
                  ></Box>
                </HStack>
              </Box></>
  )
}

export default SearchBar