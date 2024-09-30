import { Box, Divider, Typography } from "@mui/material";

interface propTypes {
  placeholder: string;
}
const CustomDivider = (props: propTypes) => {
  const { placeholder } = props;
  return (
    <Box>
      <Divider
        textAlign="left"
        sx={{
          "&::after": {
            borderColor: "#fff",
          },
          "&::before": {
            width: 0,
          },
        }}
      >
        <Typography variant="caption" color="#fff" fontSize="8px">
          {placeholder}
        </Typography>
      </Divider>
    </Box>
  );
};

export default CustomDivider;
