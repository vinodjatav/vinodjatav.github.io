import { Box } from "@mui/material";
import localization from "../../localization.json";
import ColorPalettes from "./ColorPalettes";
import CustomDivider from "./CustomDivider";
import Navigations from "./Navigations";
import Profile from "./Profile";
import Socials from "./Socials";

interface propType {
  setSelectedBackground: Function;
}

const LeftPannel = (props: propType) => {
  const { setSelectedBackground } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        alignSelf: "stretch",
        justifyContent: "space-between",
        padding: "40px 16px",
      }}
    >
      <Box display="flex" flexDirection="column" gap="40px" width="240px">
        <Profile />
        <CustomDivider placeholder={localization["navigation"]} />
        <Navigations />
        <CustomDivider placeholder={localization["social"]} />
        <Socials />
      </Box>
      <ColorPalettes setSelectedBackground={setSelectedBackground} />
    </Box>
  );
};

export default LeftPannel;
