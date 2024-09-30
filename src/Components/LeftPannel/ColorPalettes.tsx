import CircleIcon from "@mui/icons-material/Circle";
import { Box, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import React from "react";
import localization from "../../localization.json";
import { CheckCircleIcon } from "../../Icons/Icons";

const style = {
  stroke: "#ffffff",
  strokeWidth: 1,
  width: "32px",
  height: "32px",
};

const colorList = [
  "rgba(107, 67, 229, 0.80)",
  "rgba(161, 67, 229, 0.80)",
  "rgba(67, 143, 229, 0.80)",
  "rgba(89, 229, 67, 0.80)",
  "rgba(229, 186, 67, 0.80)",
  "rgba(229, 94, 67, 0.80)",
  "rgba(229, 67, 67, 0.80)",
];

interface propType {
  setSelectedBackground: Function;
}

const ColorPalettes = (props: propType) => {
  const { setSelectedBackground } = props;
  const [selectedBackgroundColor, setSelectedBackgroundColor] =
    React.useState("rgba(67, 143, 229, 0.80)");

  const handleClick = (color: string) => {
    setSelectedBackgroundColor(color);
    setSelectedBackground(color);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        background: "#ffffff15",
        textAlign: "start",
        borderRadius: "16px",
        padding: "24px",
      }}
    >
      <Typography variant="body2" sx={{ color: "#fff", marginLeft: "16px" }}>
        {localization["set-your-vibes"]}
      </Typography>
      <Box display="grid" gridTemplateColumns="repeat(4, 1fr)">
        {colorList.map((color) => (
          <Checkbox
            key={color}
            checked={color === selectedBackgroundColor}
            onClick={() => {
              handleClick(color);
            }}
            icon={<CircleIcon style={{ color: color }} sx={style} />}
            checkedIcon={
              <CheckCircleIcon style={{ color: color }} sx={style} />
            }
          />
        ))}
      </Box>
    </Box>
  );
};

export default ColorPalettes;
