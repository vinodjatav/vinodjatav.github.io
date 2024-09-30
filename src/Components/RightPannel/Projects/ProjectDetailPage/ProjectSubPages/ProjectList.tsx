import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Project } from "../../../../../Models/Models";

interface PropTypes {
  projectList: Project[];
}
const ProjectList = (props: PropTypes) => {
  const { projectList } = props;
  const { id } = useParams();
  const navigate = useNavigate();
  const [isHoverProjectId, setIsHoverProjectId] = useState(-1);
  const handleOnMouseEnter = (id: number) => {
    setIsHoverProjectId(id);
  };
  const handleOnMouseLeave = () => {
    setIsHoverProjectId(-1);
  };
  const handleProject = (id: number) => {
    navigate(`/project/${id}`);
  };
  const handleClickBack = () => {
    navigate(`/projects`);
  };

  return (
    <Stack
      sx={{
        alignItems: "flex-start",
        padding: "40px 16px",
        gap: "40px",
        width: "200px",
        maxWidth: "252px",
        height: "532px",
        left: "0px",
        top: "80px",
      }}
    >
      <Stack sx={{ gap: "40px" }}>
        <IconButton
          sx={{
            padding: "0px",
            alignSelf: "flex-start",
          }}
          onClick={handleClickBack}
        >
          <ArrowCircleLeftOutlinedIcon
            sx={{
              color: "#576068",
              width: "36px",
              height: "36px",
              opacity: 0.4,
            }}
          />
        </IconButton>
        <Box display="flex" flexDirection="column" gap="4px" padding="0px 16px">
          <Typography variant="h4">User-Centric Design</Typography>
          <Typography variant="h5" sx={{ color: "#9CA6AD" }}>
            Transforming Feedback into Features
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" gap="8px">
          {projectList?.map((projectDetail: Project) => (
            <Button
              key={projectDetail.id}
              sx={{
                padding:
                  isHoverProjectId === projectDetail.id ||
                  Number(id) === projectDetail.id
                    ? "0px"
                    : "0px 16px",
                width: "200px",
                background:
                  Number(id) === projectDetail.id ? "#145EFD" : "#fff",
                borderRadius: "8px",
                justifyContent: "flex-start",
                ":hover, :active, :focus": {
                  background: "#145EFD",
                },
                flexWrap: "wrap",
              }}
              onClick={() => handleProject(projectDetail.id)}
              onMouseEnter={() => handleOnMouseEnter(projectDetail.id)}
              onMouseLeave={handleOnMouseLeave}
            >
              <Box
                display="flex"
                flexDirection="column"
                sx={{
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                  padding:
                    isHoverProjectId === projectDetail.id ||
                    Number(id) === projectDetail.id
                      ? "0px 24px"
                      : "0px",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    lineClamp: 1,
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                    textAlign: "left",
                    textTransform: "none",
                    color:
                      isHoverProjectId === projectDetail.id ||
                      Number(id) === projectDetail.id
                        ? "#fff"
                        : "#576068",
                  }}
                >
                  {projectDetail.name}
                </Typography>
                <Typography
                  variant="overline"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    lineClamp: 2,
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    textAlign: "left",
                    textTransform: "none",
                    color:
                      isHoverProjectId === projectDetail.id ||
                      Number(id) === projectDetail.id
                        ? "#fff"
                        : "#576068",
                    fontSize: "10px",
                    lineHeight: "12px",
                  }}
                >
                  {projectDetail.description}
                </Typography>
              </Box>
            </Button>
          ))}
        </Box>
      </Stack>
    </Stack>
  );
};

export default ProjectList;
