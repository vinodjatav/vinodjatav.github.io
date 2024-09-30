import { Stack } from "@mui/material";
import React, { MutableRefObject, useRef } from "react";
import { useParams } from "react-router-dom";
import FocusSubPage from "./ProjectSubPages/FocusSubPage";
import ImpactBeyondImaginationSubPage from "./ProjectSubPages/ImpactBeyondImaginationSubPage";
import MyLearningsSubPage from "./ProjectSubPages/MyLearningsSubPage";
import OpenMindsetSubPage from "./ProjectSubPages/OpenMindsetSubPage";
import OurMarketSubPage from "./ProjectSubPages/OurMarketSubPage";
import ProjectDetailSubList from "./ProjectSubPages/ProjectDetailSubList";
import ProjectDetailSubPage from "./ProjectSubPages/ProjectDetailSubPage";
import ProjectHomePage from "./ProjectSubPages/ProjectHomePage";
import ProjectList from "./ProjectSubPages/ProjectList";
import TheProblemSubPage from "./ProjectSubPages/TheProblemSubPage";
import TheSolutionSubPage from "./ProjectSubPages/TheSolutionSubPage";
import UniqueBlendOfInnovationSubPage from "./ProjectSubPages/UniqueBlendOfInnovationSubPage";
import YouWillLearnSubPage from "./ProjectSubPages/YouWillLearnSubPage";
import useOnScreen from "./UseOnScreenHook";
import { listOfProjects } from "../ProjectData/ProjectsData";
import { ProjectDetailSubPageModel } from "../../../../Models/Models";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = React.useState(1);
  const firstScrollableRef = React.useRef<HTMLDivElement>(null);
  const [isFirstSectionFullyScrolled, setIsFirstSectionFullyScrolled] =
    React.useState(false);

  const listOfButtonRef: { [key: string]: MutableRefObject<null> } = {
    buttonRef0: useRef(null),
    buttonRef1: useRef(null),
    buttonRef2: useRef(null),
    buttonRef3: useRef(null),
    buttonRef4: useRef(null),
    buttonRef5: useRef(null),
    buttonRef6: useRef(null),
    buttonRef7: useRef(null),
    buttonRef8: useRef(null),
    buttonRef9: useRef(null),
    buttonRef10: useRef(null),
  };

  const listOfIntersectionObserver: { [key: string]: boolean } = {
    0: useOnScreen(listOfButtonRef["buttonRef0"]),
    1: useOnScreen(listOfButtonRef["buttonRef1"]),
    2: useOnScreen(listOfButtonRef["buttonRef2"]),
    3: useOnScreen(listOfButtonRef["buttonRef3"]),
    4: useOnScreen(listOfButtonRef["buttonRef4"]),
    5: useOnScreen(listOfButtonRef["buttonRef5"]),
    6: useOnScreen(listOfButtonRef["buttonRef6"]),
    7: useOnScreen(listOfButtonRef["buttonRef7"]),
    8: useOnScreen(listOfButtonRef["buttonRef8"]),
    9: useOnScreen(listOfButtonRef["buttonRef9"]),
    10: useOnScreen(listOfButtonRef["buttonRef10"]),
  };

  const selectedProject = listOfProjects.filter(
    (projectDetail) => projectDetail?.id === Number(id)
  )[0];

  const getProjectDetailSubPageData: ProjectDetailSubPageModel[] = [
    {
      id: 1,
      type: "Genesis",
      description: selectedProject.genesis,
    },
    {
      id: 2,
      type: "Project type",
      description: selectedProject.projectType,
    },
    {
      id: 3,
      type: "Services",
      description: selectedProject.services,
    },
    {
      id: 4,
      type: "Timeline",
      description: selectedProject.timeline,
    },
    {
      id: 5,
      type: "Design & development team",
      description: selectedProject.designDevTeam,
    },
  ];

  const handleScrollFirstSection = () => {
    if (firstScrollableRef.current) {
      const { scrollHeight, scrollTop, clientHeight } =
        firstScrollableRef.current;
      if (scrollTop + clientHeight >= scrollHeight) {
        setIsFirstSectionFullyScrolled(true);
      } else {
        setIsFirstSectionFullyScrolled(false);
      }
    }
  };

  React.useEffect(() => {
    if (firstScrollableRef.current) {
      firstScrollableRef.current.addEventListener(
        "scroll",
        handleScrollFirstSection
      );
    }

    return () => {
      if (firstScrollableRef.current) {
        firstScrollableRef.current.removeEventListener(
          "scroll",
          handleScrollFirstSection
        );
      }
    };
  }, []);

  React.useEffect(() => {
    let keys = Object.keys(listOfIntersectionObserver);
    let filteredKeys = keys.filter(function (key) {
      return listOfIntersectionObserver[key];
    });
    setSelectedItem(Number(filteredKeys[filteredKeys.length - 2]));
  });

  return (
    <Stack flexDirection="row" sx={{ bgcolor: "#FFFFFF" }}>
      <ProjectList projectList={listOfProjects} />
      <Stack
        ref={firstScrollableRef}
        sx={{
          width: "95%",
          margin: "8px",
          maxHeight: "calc(100vh - 16px)",
          overflowY: "scroll",
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <ProjectHomePage
          name={selectedProject?.name}
          description={selectedProject?.description}
          imageName={selectedProject?.imageName}
          buttonRef={listOfButtonRef["buttonRef0"]}
        />
        <Stack flexDirection="row" sx={{ position: "relative" }}>
          <Stack
            sx={{
              width: "calc(100vw - 477px)",
              maxHeight: "calc(100vh - 16px)",
              overflowY: isFirstSectionFullyScrolled ? "scroll" : "hidden",
              "::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <ProjectDetailSubPage
              buttonRef={listOfButtonRef["buttonRef1"]}
              data={getProjectDetailSubPageData}
            />
            <YouWillLearnSubPage
              buttonRef={listOfButtonRef["buttonRef2"]}
              data={selectedProject.youWillLearnList}
            />
            <TheProblemSubPage
              buttonRef={listOfButtonRef["buttonRef3"]}
              data={selectedProject.theProblemSubPage}
            />
            <TheSolutionSubPage
              buttonRef={listOfButtonRef["buttonRef4"]}
              data={selectedProject.theSolutionSubPage}
            />
            <OurMarketSubPage
              buttonRef={listOfButtonRef["buttonRef5"]}
              data={selectedProject.ourMarketSubPage}
            />
            <FocusSubPage
              buttonRef={listOfButtonRef["buttonRef6"]}
              data={selectedProject.focusSubPage}
            />
            <OpenMindsetSubPage
              buttonRef={listOfButtonRef["buttonRef7"]}
              data={selectedProject.openMinsetSubPage}
            />
            <UniqueBlendOfInnovationSubPage
              buttonRef={listOfButtonRef["buttonRef8"]}
              data={selectedProject.uniqueBlendOfInnovationSubPage}
            />
            <ImpactBeyondImaginationSubPage
              buttonRef={listOfButtonRef["buttonRef9"]}
              data={selectedProject.impactBeyondImaginationSubPage}
            />
            <MyLearningsSubPage
              buttonRef={listOfButtonRef["buttonRef10"]}
              data={selectedProject.myLearningSubPage}
            />
          </Stack>
          <ProjectDetailSubList
            listOfButtonRef={listOfButtonRef}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProjectDetailPage;
