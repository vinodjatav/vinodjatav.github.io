import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import userInfo from "../../UserData/UserInfo.json";
import profilePicture from "../../UserData/profile_picture.jpg";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [isHover, setHover] = useState(false);
  const handleOnMouseEnter = () => {
    setHover(true);
  };
  const handleOnMouseLeave = () => {
    setHover(false);
  };
  return (
    <Box display="flex">
      <Button
        onClick={()=>{navigate(`/home`);}}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        disableRipple
        sx={{
          borderRadius: "12px",
          padding: "16px",
          ":hover": { background: "#ffffff15" },
        }}
      >
        <Avatar
          sx={{ marginRight: "8px" }}
          alt="User profile picture"
          src={profilePicture}
        />
        <Box
          display="flex"
          alignItems="center"
          sx={{ gap: isHover ? "30px" : "8px", transition: "600ms" }}
        >
          <Box width="105px">
            <Typography
              sx={{ color: "#fff", fontSize: "20px", textTransform: "none" }}
            >
              {userInfo["name"]}
            </Typography>
            <Typography
              variant="overline"
              sx={{ color: "#fff", textTransform: "none" }}
            >
              {userInfo["designation"]} at {userInfo['current-company']}
            </Typography>
          </Box>
          <KeyboardArrowRightIcon
            sx={{
              color: "#fff",
            }}
          />
        </Box>
      </Button>
    </Box>
  );
};

export default Profile;
