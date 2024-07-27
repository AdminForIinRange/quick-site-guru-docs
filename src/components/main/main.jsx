//##########################################################################

///_   _  ____ _______    ____  _____ _______ _____ __  __ _____ ____________ _____  //
//| \ | |/ __ \__   __|  / __ \|  __ \__   __|_   _|  \/  |_   _|___  /  ____|  __ \ //
//|  \| | |  | | | |    | |  | | |__) | | |    | | | \  / | | |    / /| |__  | |  | |//
//| . ` | |  | | | |    | |  | |  ___/  | |    | | | |\/| | | |   / / |  __| | |  | |//
//| |\  | |__| | | |    | |__| | |      | |   _| |_| |  | |_| |_ / /__| |____| |__| |//
//|_| \_|\____/  |_|     \____/|_|      |_|  |_____|_|  |_|_____/_____|______|_____/ //

//##########################################################################


import React from "react";

import HelloOpening from "../mainContent/welcomeOpening/helloOpening";
import SublinkNotFound from "../mainContent/sublinkNotFound/sublinkNotFound";
import Introduction from "../mainContent/getting-started/introduction";
import CompanyValues from "../mainContent/getting-started/companyValues";
import CommunitySupport from "../mainContent/getting-started/communitySupport";
import ProgramStructure from "../mainContent/internship-program/programStructure";
import WhatToExpect from "../mainContent/internship-program/whatToExpect";
import MeetingFeedback from "../mainContent/internship-program/meetingFeedback";
import WelcomeToStage1 from "../mainContent/stage-1/welcomeToStage1";
import OurMissionVison from "../mainContent/stage-1/ourMissionVison";
import JoiningDiscord from "../mainContent/getting-started/joiningDiscord.jsx";

import WelcomeToStage2 from "../mainContent/stage-2/welcomeToStage2";
import ProposeAdesign from "../mainContent/stage-2/proposeAdesign";

import WelcomeToStage3 from "../mainContent/stage-3/welcomeToStage3";
import ProposeATemplate from "../mainContent/stage-3/proposeATemplate";
import BusinessTemplates from "../mainContent/stage-3/businessTemplates";

import WelcomeToStage4 from "../mainContent/stage-4/welcomeToStage4"; // use stage 3 for other means and pass props or something

import Scrimba from "../mainContent/learning-material/scrimba";
import GetStarted from "../mainContent/using-quicksite/getStarted";
import Code from "../mainContent/using-quicksite/code.jsx";
import Content from "../mainContent/using-quicksite/content";
import Hosting from "../mainContent/using-quicksite/hosting";
import Publishing from "../mainContent/using-quicksite/publishing";
import Cloning from "../mainContent/using-quicksite/cloning";
import Domain from "../mainContent/using-quicksite/domain";
import Embedding from "../mainContent/using-quicksite/embedding";
import SvgAssets from "../mainContent/using-quicksite/svgAssets";
import Contact from "../mainContent/using-quicksite/contact";
import LinksScriptsMetaTags from "../mainContent/using-quicksite/linksScriptsMetaTags";
import MentorshipGuidance from "../mainContent/internship-program/mentorshipGuidance";

const Main = ({ titlepath, subpath }) => {
  // OPTMIZE THIS LATER, LIKE THE TITLE OR COMPS SHOULD BE DYNAMIC AND
  //ONLY PROP NEEDS TO BE PASSED IN. MAYBE VIA GLOBAL/CONTENTDATA.JOSN IDK

  const RenderMain = (titlepath, subpath) => {
    if (titlepath === "welcome" && subpath === "HelloOpening") {
      return <HelloOpening titlepath={titlepath} subpath={subpath} />;
    } else if (titlepath === "getting-started" && subpath === "introduction") {
      return <Introduction titlepath={titlepath} subpath={subpath} />;
    } else if (
      titlepath === "getting-started" &&
      subpath === "company-values"
    ) {
      return <CompanyValues titlepath={titlepath} subpath={subpath} />;
    } else if (
      titlepath === "getting-started" &&
      subpath === "community-support"
    ) {
      return <CommunitySupport titlepath={titlepath} subpath={subpath} />;
    } else if (
      titlepath === "internship-program" &&
      subpath === "program-structure"
    ) {
      return <ProgramStructure titlepath={titlepath} subpath={subpath} />;
    } else if (
      titlepath === "internship-program" &&
      subpath === "what-to-expect"
    ) {
      return <WhatToExpect titlepath={titlepath} subpath={subpath} />;
    } else if (
      titlepath === "internship-program" &&
      subpath === "mentorship-guidance"
    ) {
      return <MentorshipGuidance titlepath={titlepath} subpath={subpath} />;
    } else if (
      titlepath === "internship-program" &&
      subpath === "meetings-feedback"
    ) {
      return <MeetingFeedback titlepath={titlepath} subpath={subpath} />;
    } else if (
      titlepath === "getting-started" &&
      subpath === "joining-discord"
    ) {
      return <JoiningDiscord titlepath={titlepath} subpath={subpath} />;
    } else if (titlepath === "stage-1" && subpath === "welcome-stage-1") {
      return <WelcomeToStage1 titlepath={titlepath} subpath={subpath} />;
    } else if (titlepath === "stage-1" && subpath === "mission-vision") {
      return <OurMissionVison titlepath={titlepath} subpath={subpath} />;
    } else if (titlepath === "stage-2" && subpath === "welcome-stage-2") {
      return <WelcomeToStage2 titlepath={titlepath} subpath={subpath} />;
    } else if (titlepath === "stage-2" && subpath === "propose-design") {
      return <ProposeAdesign titlepath={titlepath} subpath={subpath} />;
    } else if (titlepath === "stage-3" && subpath === "welcome-stage-3") {
      return <WelcomeToStage3 titlepath={titlepath} subpath={subpath} />;
    } else if (titlepath === "stage-3" && subpath === "propose-template") {
      return <ProposeATemplate titlepath={titlepath} subpath={subpath} />;
    } else if (titlepath === "stage-3" && subpath === "business-templates") {
      return <BusinessTemplates titlepath={titlepath} subpath={subpath} />;
    } else if (titlepath === "stage-4" && subpath === "welcome-stage-4") {
      return <WelcomeToStage4 titlepath={titlepath} subpath={subpath} />;
    } else if (titlepath === "learning-material" && subpath === "scrimba") {
      return <Scrimba titlepath={titlepath} subpath={subpath} />;
    } else if (titlepath === "using-quicksite" && subpath === "get-started") {
      return <GetStarted titlepath={titlepath} subpath={subpath} />;
    } else if (titlepath === "using-quicksite" && subpath === "code") {
      return <Code titlepath={titlepath} subpath={subpath} />;
    } else if (titlepath === "using-quicksite" && subpath === "content") {
      return <Content titlepath={titlepath} subpath={subpath} />;
    } else if (titlepath === "using-quicksite" && subpath === "hosting") {
      return <Hosting titlepath={titlepath} subpath={subpath} />;
    } else if (titlepath === "using-quicksite" && subpath === "publishing") {
      return <Publishing titlepath={titlepath} subpath={subpath} />;
    } else if (titlepath === "using-quicksite" && subpath === "cloning") {
      return <Cloning titlepath={titlepath} subpath={subpath} />;
    } else if (titlepath === "using-quicksite" && subpath === "domain") {
      return <Domain titlepath={titlepath} subpath={subpath} />;
    } else if (titlepath === "using-quicksite" && subpath === "embedding") {
      return <Embedding titlepath={titlepath} subpath={subpath} />;
    } else if (titlepath === "using-quicksite" && subpath === "svg-assets") {
      return <SvgAssets titlepath={titlepath} subpath={subpath} />;
    } else if (titlepath === "using-quicksite" && subpath === "contact") {
      return <Contact titlepath={titlepath} subpath={subpath} />;
    } else if (
      titlepath === "using-quicksite" &&
      subpath === "links-scripts-meta"
    ) {
      return <LinksScriptsMetaTags titlepath={titlepath} subpath={subpath} />;
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
