import { CompanyDetailsModel, ItemCard } from "../../../../Models/Models";

const companyDetails: CompanyDetailsModel = {
  org: "Qwikstudios",
  designation: "Software Engineer",
  tenure: "Jan 2021 - Jun 2021",
  location: "Noida, Utter Pradesh, India",
};

const frontendCardData: ItemCard = {
  title: "Frontend Development",
  items: [
    {
      id: 1,
      text: "Developed two core modules for Quick-Banner: a brand asset management system and an Unsplash API-integrated image search application. Utilized HTML, CSS, JavaScript, React.js and MySQL.",
    },
  ],
};

const backendCardData: ItemCard = {
  title: "Backend Development",
  items: [
    {
      id: 1,
      text: "Designed and implemented two REST APIs using Java and Spring Boot to interact with a MySQL database and power the Quick-Banners front-end application.",
    },
  ],
};

const listOfSkills: ItemCard[] = [frontendCardData, backendCardData];

export const qwikstudiosOrgData = {
  companyDetails: companyDetails,
  listOfSkills: listOfSkills,
};
