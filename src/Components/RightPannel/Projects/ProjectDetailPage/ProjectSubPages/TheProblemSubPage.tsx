import { Box, Typography } from "@mui/material";
import { TheProblemSubPageModel } from "../../../../../Models/Models";

interface PropTypes {
  buttonRef: React.MutableRefObject<null>;
  data: TheProblemSubPageModel;
}

const TheProblemSubPage = (props: PropTypes) => {
  const { buttonRef, data } = props;
  return (
    <Box
      ref={buttonRef}
      display="flex"
      flexDirection="column"
      sx={{
        padding: "80px",
        paddingTop: "0px",
        paddingBottom: "160px",
        gap: "24px",
      }}
    >
      <Typography variant="h2" sx={{ fontSize: "60px", lineHeight: "73px" }}>
        {data.title}
      </Typography>
      <Typography
        variant="body1"
        style={{ fontSize: "24px", lineHeight: "29px" }}
      >
        <div dangerouslySetInnerHTML={{ __html: data.prblemStatement }} />
      </Typography>
    </Box>
  );
};

export default TheProblemSubPage;
