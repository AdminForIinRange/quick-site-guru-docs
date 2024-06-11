import { Box } from '@chakra-ui/react'
import React from 'react'
import BreadCrumbs from '../breadCrumbs/breadCrumbs'

const Main = ({titlepath, subpath}) => {
//fix no emjoi issues by if else or some other methosds like laocl store on click save variable
  return (
    <>
    
    <Box w={"1200px"} h={"700px"}  bg={"#242526"} rounded={"15px"} px={"35px"} py={"15px"}  >
  <BreadCrumbs titlePath={titlepath} subPath={subpath} />


</Box></>
  )
}

export default Main