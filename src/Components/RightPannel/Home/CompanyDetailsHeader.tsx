import { Box, Typography } from "@mui/material";
import { CompanyDetailsModel } from "../../../Models/Models";

interface PropTypes {
  details: CompanyDetailsModel;
}
const CompanyDetailsHeader = (props: PropTypes) => {
  const { details } = props;
  return (
    <Box display="flex" justifyContent="space-between">
      <Typography variant="h4" textTransform="uppercase">
        {details.org + " "}
        <span
          style={{
            fontSize: "24px",
            lineHeight: "29px",
            fontWeight: "400",
            textTransform: "capitalize",
          }}
        >
          | {details.designation}
        </span>
      </Typography>
      <Typography variant="h4" fontWeight="400">
        {details.tenure} | {details.location}
      </Typography>
    </Box>
  );
};

export default CompanyDetailsHeader;
