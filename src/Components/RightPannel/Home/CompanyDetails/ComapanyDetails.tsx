import { Box } from "@mui/material";
import CompanyDetailsHeader from "../CompanyDetailsHeader";
import TechCard from "../TechCard";
import { CompanyDetailsModel, ItemCard } from "../../../../Models/Models";

interface PropTypes {
  companyDetails: CompanyDetailsModel;
  listOfSkills: ItemCard[];
  selectedBackground: string;
}

const ComapanyDetails = (props: PropTypes) => {
  const { companyDetails, listOfSkills, selectedBackground } = props;
  return (
    <>
      <CompanyDetailsHeader details={companyDetails} />
      <Box display="flex" flexDirection="column" sx={{ gap: "24px" }}>
        {listOfSkills.map((cardData) => (
          <TechCard
            key={cardData.title}
            selectedBackground={selectedBackground}
            cardData={cardData}
          />
        ))}
      </Box>
    </>
  );
};

export default ComapanyDetails;
