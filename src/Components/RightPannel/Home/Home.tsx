import { Box, Stack, Typography } from "@mui/material";
import ComapanyDetails from "./CompanyDetails/ComapanyDetails";
import { listOfOrgData } from "./SkillsData/SkillsData";
import AboutMe from "./AboutMe";

interface PropTypes {
  selectedBackground: string;
}
const Home = (props: PropTypes) => {
  const { selectedBackground } = props;
  return (
    <Stack
      sx={{
        margin: "8px",
        marginLeft: "0px",
        background: "#fff",
        borderRadius: "40px",
        overflow: "auto",
        maxHeight: "calc(100vh - 16px)",
        height: "100vh",
        width: "calc(100vw - 242px)",
        maxWidth: "calc(100vw - 242px)",
        "::-webkit-scrollbar": {
          display: "none",
        },
        flexWrap: "wrap",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          padding: "16px",
          justifyContent: "center",
          gap: "45px",
        }}
      >
        <AboutMe selectedBackground={selectedBackground} />
        <Typography variant="h2">Technical Expertise</Typography>
        {listOfOrgData.map((orgData, index) => (
          <ComapanyDetails
            key={index}
            companyDetails={orgData.companyDetails}
            listOfSkills={orgData.listOfSkills}
            selectedBackground={selectedBackground}
          />
        ))}
      </Box>
    </Stack>
  );
};

export default Home;
