import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import ProjectCard from "./ProjectCard";
import { listOfProjects } from "./ProjectData/ProjectsData";
import { Project } from "../../../Models/Models";

interface PropTypes {
  selectedBackground: string;
}
const Projects = (props: PropTypes) => {
  const { selectedBackground } = props;
  return (
    <Stack
      sx={{
        margin: "8px",
        marginLeft: "0px",
        background: "#fff",
        borderRadius: "40px",
        overflow: "auto",
        maxHeight: "calc(100vh - 16px)",
        height: "100vh",
        width: "calc(100vw - 242px)",
        maxWidth: "calc(100vw - 242px)",
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Box
        display="flex"
        sx={{
          justifyContent: "center",
          width: "calc(100vw - 300px)",
          flexWrap: "wrap",
          padding: "16px 0px",
          gap: "30px",
        }}
      >
        {listOfProjects.map((projectDetail: Project) => (
          <ProjectCard key={projectDetail.id} selectedBackground={selectedBackground} projectDetail={projectDetail} />
        ))}
      </Box>
    </Stack>
  );
};

export default Projects;
