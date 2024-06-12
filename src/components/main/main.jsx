import { Box, VStack, Text, HStack } from "@chakra-ui/react";
import React from "react";
import BreadCrumbs from "../breadCrumbs/breadCrumbs";
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";
import Hello from "../mainContent/Welcome/hello";
import SublinkNotFound from "../mainContent/sublinkNotFound/sublinkNotFound";
import Introduction from "../mainContent/getting-started/introduction";

const Main = ({ titlepath, subpath }) => {

  // OPTMIZE THIS LATER, LIKE THE TITLE OR COMPS SHOULD BE DYNAMIC AND 
  //ONLY PROP NEEDS TO BE PASSED IN. MAYBE VIA GLOBAL/CONTENTDATA.JOSN IDK

  const RenderMain = () => {
    if (titlepath === "welcome" && subpath === "hello") {
      return <Hello titlepath={titlepath} subpath={subpath} />;
    } else if (titlepath === "getting-started" && subpath === "introduction") {

 return <Introduction titlepath={titlepath} subpath={subpath} />;

    }
    else {
      return (
        <>
          <SublinkNotFound titlepath={titlepath} subpath={subpath} />
        </>
      );
    }
  };

  //fix no emjoi issues by if else or some other methosds like laocl store on click save variable
  return (
    <>
      {RenderMain()}
    </>
  );
};

export default Main;

