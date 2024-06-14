//##########################################################################


///_   _  ____ _______    ____  _____ _______ _____ __  __ _____ ____________ _____  //
//| \ | |/ __ \__   __|  / __ \|  __ \__   __|_   _|  \/  |_   _|___  /  ____|  __ \ //
//|  \| | |  | | | |    | |  | | |__) | | |    | | | \  / | | |    / /| |__  | |  | |//
//| . ` | |  | | | |    | |  | |  ___/  | |    | | | |\/| | | |   / / |  __| | |  | |//
//| |\  | |__| | | |    | |__| | |      | |   _| |_| |  | |_| |_ / /__| |____| |__| |//
//|_| \_|\____/  |_|     \____/|_|      |_|  |_____|_|  |_|_____/_____|______|_____/ //


//##########################################################################


import { Box, VStack, Text, HStack } from "@chakra-ui/react";
import React from "react";
import BreadCrumbs from "../breadCrumbs/breadCrumbs";
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";
import Hello from "../mainContent/welcome/hello";
import SublinkNotFound from "../mainContent/sublinkNotFound/sublinkNotFound";
import Introduction from "../mainContent/getting-started/introduction";

const Main = ({ titlepath, subpath }) => {
  // OPTMIZE THIS LATER, LIKE THE TITLE OR COMPS SHOULD BE DYNAMIC AND
  //ONLY PROP NEEDS TO BE PASSED IN. MAYBE VIA GLOBAL/CONTENTDATA.JOSN IDK

  const RenderMain = (titlepath, subpath) => {
    if (titlepath === "welcome" && subpath === "hello") {
      return <Hello titlepath={titlepath} subpath={subpath} />;
    }
    
    else if (titlepath === "getting-started" && subpath === "introduction") {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    } 
    
    else if (
      titlepath === "getting-started" &&
      subpath === "company-values"
    ) {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    } 
    
    else if (
      titlepath === "getting-started" &&
      subpath === "community-support"
    ) {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    }
    
    else if (
      titlepath === "internship-program" &&
      subpath === "program-structure"
    ) {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    } 
    
    else if (
      titlepath === "internship-program" &&
      subpath === "what-we-expect"
    ) {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    } 
    
    else if (
      titlepath === "internship-program" &&
      subpath === "mentorship-guidance"
    ) {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    } 
    
    else if (
      titlepath === "internship-program" &&
      subpath === "meetings-feedback"
    ) {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    } 
    
    else if (titlepath === "stage-1" && subpath === "welcome-stage-1") {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    } 
    
    else if (titlepath === "stage-1" && subpath === "mission-vision") {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    }
    
    else if (titlepath === "stage-1" && subpath === "joining-discord") {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    }
    
    else if (titlepath === "stage-1" && subpath === "talking-to-mentors") {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    }
    
    else if (titlepath === "stage-2" && subpath === "welcome-stage-2") {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    }
    
    else if (titlepath === "stage-2" && subpath === "propose-design") {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    }
    
    else if (titlepath === "stage-2" && subpath === "coding-in-quicksite") {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    }
    
    else if (titlepath === "stage-2" && subpath === "meetings-feedback") {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    }
    
    else if (titlepath === "stage-3" && subpath === "welcome-stage-3") {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    }
    
    else if (titlepath === "stage-3" && subpath === "propose-template") {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    }
    
    else if (titlepath === "stage-3" && subpath === "business-templates") {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    }
    
    else if (titlepath === "stage-3" && subpath === "meetings-feedback") {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    }
    
    else if (titlepath === "stage-4" && subpath === "welcome-stage-4") {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    }
    
    else if (titlepath === "stage-4" && subpath === "propose-template") {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    }
    
    else if (titlepath === "stage-4" && subpath === "business-templates") {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    }
    
    else if (titlepath === "stage-4" && subpath === "meetings-feedback") {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    }
    
    else if (titlepath === "learning-material" && subpath === "scrimba") {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    }
    
    else if (titlepath === "using-quicksite" && subpath === "get-started") {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    }
    
    else if (
      titlepath === "using-quicksite" &&
      subpath === "responsiveness"
    ) {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    }
    
    else if (titlepath === "using-quicksite" && subpath === "content") {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    }
    
    else if (titlepath === "using-quicksite" && subpath === "hosting") {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    }
    
    else if (titlepath === "using-quicksite" && subpath === "publishing") {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    }
    
    else if (titlepath === "using-quicksite" && subpath === "cloning") {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    }
    
    else if (titlepath === "using-quicksite" && subpath === "domain") {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    }
    
    else if (titlepath === "using-quicksite" && subpath === "embedding") {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    }
    
    else if (titlepath === "using-quicksite" && subpath === "svg-assets") {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    }
    
    else if (titlepath === "using-quicksite" && subpath === "contact") {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    }
    
    else if (
      titlepath === "using-quicksite" &&
      subpath === "links-scripts-meta"
    ) {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    } else {
      return (
        <>
          <SublinkNotFound titlepath={titlepath} subpath={subpath} />
        </>
      );
    }
  };

  //fix no emjoi issues by if else or some other methosds like laocl store on click save variable
  return <>{RenderMain(titlepath, subpath)}</>;
};

export default Main;
