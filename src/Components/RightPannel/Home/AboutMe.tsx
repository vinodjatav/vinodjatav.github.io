import { Box, Typography } from "@mui/material";
import userInfo from "../../../UserData/UserInfo.json";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

interface PropTypes {
  selectedBackground: string;
}

const AboutMe = (props: PropTypes) => {
  const { selectedBackground } = props;
  return (
    <>
      <Box display="flex" flexDirection="column" sx={{ alignItems: "center" }}>
        <AutoAwesomeIcon
          sx={{
            width: "60px",
            height: "60px",
            alignSelf: "flex-end",
            marginLeft: "53rem",
            color: selectedBackground,
          }}
        />
        <Typography
          variant="h2"
          sx={{
            color: selectedBackground,
            fontSize: "80px",
            lineHeight: "60px",
          }}
        >
          Hi. I'm {userInfo.name}.
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: selectedBackground,
            fontSize: "80px",
            marginTop: "45px",
          }}
        >
          A {userInfo["full-designation"]}.
        </Typography>
        <AutoAwesomeIcon
          sx={{
            width: "60px",
            height: "60px",
            alignSelf: "flex-start",
            color: selectedBackground,
          }}
        />
      </Box>
      <Typography variant="h6" sx={{ fontSize: "28px" }}>
        {userInfo["about-me"]}
      </Typography>
    </>
  );
};

export default AboutMe;
