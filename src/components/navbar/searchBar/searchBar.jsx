import { Box, HStack, Input } from '@chakra-ui/react'
import React from 'react'

const SearchBar = () => {
  return (
    <>
    
    <Box bg={"rgb(255, 255, 255,0.05)"}
                border={"1px solid rgb(255, 255, 255,0.05)"} w={"280px"} h={"45px"} rounded={"15px"}   >
                <Input
           
                               transition={"all 0.3s ease-in-out"}
                  bg={"transparent"}
                  h={"100%"}
                  justify={"right"}
                  align={"center"}
                  w={"100%"}
                  px={"15"}
                  placeholder='CRT + K'
                  color={"white"}
                  fontWeight={"700"}
                  fontSize={"16px"}
                  border={"none"}
                  _focus={{ border: "none", shadow: " 0 0 15px 0px rgb(255, 255, 255,0.4)" }}
                  _active={{ border: "none",  }}
                  borderRadius={"15px"}
                  _placeholder={{ fontWeight: "700", fontSize:"18px" }}
                >
                  
                </Input>
              </Box></>





  )
}

export default SearchBar