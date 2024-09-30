import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Box, IconButton, Typography } from "@mui/material";
import { MediumIcon } from "../../Icons/Icons";
import localization from "../../localization.json";
import userInfo from "../../UserData/UserInfo.json";

export const style = {
  backgroundColor: "#ffffff15",
  ":hover": { backgroundColor: "#ffffff30" },
  borderRadius: "6px",
  height: "48px",
};

const Socials = () => {
  const handleOpenInNew = () => {
    const pdfFile = require("../../UserData/resume.pdf");
    fetch(pdfFile)
      .then((response) => response.blob())
      .then((blob) => {
        const blobUrl = URL.createObjectURL(blob);
        window.open(blobUrl, "_blank", "noopener");
      })
      .catch((error) => console.error("Error loading PDF:", error));
  };
  const handleClickOpenNewTab = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <Box display="flex" flexDirection="column" gap="8px">
      <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap="8px">
        <IconButton
          aria-label="GitHub Icon"
          sx={style}
          onClick={() => {
            handleClickOpenNewTab(userInfo["github-url"]);
          }}
        >
          <GitHubIcon sx={{ fill: "#fff" }} />
        </IconButton>
        <IconButton
          aria-label="LinkedIn Icon"
          sx={style}
          onClick={() => {
            handleClickOpenNewTab(userInfo["linkedin-url"]);
          }}
        >
          <LinkedInIcon sx={{ fill: "#fff" }} />
        </IconButton>
        <IconButton
          aria-label="Medium Icon"
          sx={style}
          onClick={() => {
            handleClickOpenNewTab(userInfo["medium-url"]);
          }}
        >
          <MediumIcon sx={{ fill: "#fff" }} />
        </IconButton>
      </Box>
      <IconButton
        aria-label="OpenInNew Icon"
        sx={style}
        onClick={handleOpenInNew}
      >
        <Typography variant="body1" sx={{ color: "#fff", marginRight: "8px" }}>
          {localization["resume"]}
        </Typography>
        <OpenInNewIcon sx={{ width: "19px", height: "19px", fill: "#fff" }} />
      </IconButton>
    </Box>
  );
};

export default Socials;
