import HomeIcon from "@mui/icons-material/Home";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import WorkIcon from "@mui/icons-material/Work";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import localization from "../../localization.json";

const styleBtn = {
  justifyContent: "flex-start",
  ":hover": { backgroundColor: "#ffffff15" },
  borderRadius: "12px",
  height: "48px",
  padding: "6px 16px",
};
const styleText = {
  textTransform: "none",
  color: "#fff",
  marginLeft: "16px",
};

const listOfNavigations = [
  {
    id: 1,
    name: localization["home"],
    icon: <HomeIcon sx={{ color: "#fff" }} />,
  },
  {
    id: 2,
    name: localization["projects"],
    icon: <WorkIcon sx={{ color: "#fff" }} />,
  },
  {
    id: 3,
    name: localization["certificates"],
    icon: <MilitaryTechIcon sx={{ color: "#fff" }} />,
  },
];

const Navigations = () => {
  const params = useParams();
  const navigate = useNavigate();
  const handleClickProject = (name: string) => {
    navigate(name.toLowerCase());
  };
  return (
    <Box display="flex" flexDirection="column" sx={{ gap: "16px" }}>
      {listOfNavigations.map((navigate) => (
        <Button
          key={navigate.id}
          aria-label={navigate.name}
          style={{
            backgroundColor:
              params["*"] === navigate.name.toLowerCase() ||
              (params["*"] === "" && navigate.id === 1)
                ? "#ffffff15"
                : "",
          }}
          sx={styleBtn}
          disableRipple
          onClick={() => {
            handleClickProject(navigate.name);
          }}
        >
          {navigate.icon}
          <Typography variant="body1" sx={styleText}>
            {navigate.name}
          </Typography>
        </Button>
      ))}
    </Box>
  );
};

export default Navigations;
