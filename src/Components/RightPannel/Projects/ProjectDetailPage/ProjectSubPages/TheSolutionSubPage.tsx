import { Box, List, ListItemText, Typography } from "@mui/material";
import { TheSolutionSubPageModel } from "../../../../../Models/Models";

interface PropTypes {
  buttonRef: React.MutableRefObject<null>;
  data: TheSolutionSubPageModel;
}

const TheSolutionSubPage = (props: PropTypes) => {
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
        Four-pronged approach to a solving a wicked problem
      </Typography>
      <List>
        <Typography
          variant="body1"
          style={{ fontSize: "24px", lineHeight: "29px" }}
        >
          {data.mainItem}
        </Typography>
        {data.listOfSolutionItems?.map((item) => (
          <ListItemText
            key={item?.id}
            primary={
              <Typography
                variant="body1"
                style={{ fontSize: "24px", lineHeight: "29px" }}
              >
                &bull; {item?.text}
              </Typography>
            }
          />
        ))}
      </List>
    </Box>
  );
};

export default TheSolutionSubPage;
