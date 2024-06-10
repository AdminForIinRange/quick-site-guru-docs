import { Box } from '@chakra-ui/react'
import React from 'react'
import BreadCrumbs from '../breadCrumbs/breadCrumbs'

const Main = ({titlepath, subpath}) => {

  return (
    <>
    
    <Box w={"1200px"} h={"700px"}  bg={"#242526"} rounded={"15px"} >
  <BreadCrumbs titlePath={titlepath} subPath={subpath} />

  
</Box></>
  )
}

export default Main