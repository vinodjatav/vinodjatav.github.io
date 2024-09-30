import { CompanyDetailsModel, ItemCard } from "../../../../Models/Models";

const companyDetails: CompanyDetailsModel = {
  org: "Siemens",
  designation: "Software Engineer",
  tenure: "Sept 2021 - Present",
  location: "Gurugram, Haryana, India",
};

const frontendCardData: ItemCard = {
  title: "Frontend Development",
  items: [
    {
      id: 1,
      text: "Developed dynamic and responsive UIs using React, JavaScript, and TypeScript, integrating them with backend APIs.",
    },
    {
      id: 2,
      text: "Designed a device monitoring and visualization screen using Chart.js for real-time IoT data, improving user insights.",
    },
    {
      id: 3,
      text: "Led efforts to increase UI test coverage from 52% to 85%, addressing SonarQube issues for code quality improvements.",
    },
    {
      id: 4,
      text: "Suggested and implemented React Hook Form and Zod for handling complex forms and validations, replacing Formik and Yup for better performance and simplicity.",
    },
  ],
};

const backendCardData: ItemCard = {
  title: "Backend Development",
  items: [
    {
      id: 1,
      text: "Developed and maintained mgc-gateway and EMS backend applications using Java Spring Boot.",
    },
    {
      id: 2,
      text: "Integrated OPC UA protocol to communicate with ctrlX core IoT devices, handling real-time time-series data.",
    },
    {
      id: 3,
      text: "Stored time-series data in InfluxDB and user data in MySQL to ensure efficient database management.",
    },
    {
      id: 4,
      text: "Built and secured APIs using Spring Security and implemented custom Spring Filters for enhanced security.",
    },
    {
      id: 5,
      text: "Developed GraphQL APIs for multiple microservices, optimizing data access and providing robust endpoints to the frontend.",
    },
  ],
};

const snapContainerCardData: ItemCard = {
  title: "Snap Container Expertise",
  items: [
    {
      id: 1,
      text: "Created Snap containers for ctrlX core IoT devices, successfully converting Docker-based applications to Snap for deployment.",
    },
    {
      id: 2,
      text: "Developed a Snap container app to handle real-time data publication from the ctrlX data layer to AWS IoT Core using MQTT.",
    },
    {
      id: 3,
      text: "Managed real-time subscribe/unsubscribe functionality based on user input from a tree view, enabling dynamic data handling.",
    },
    {
      id: 4,
      text: "Addressed critical Snap application functionalities like handling connection loss and ensuring uninterrupted data transmission.",
    },
  ],
};

const cloudAndRealTimeDataProcessingCardData: ItemCard = {
  title: "Cloud & Real-Time Data Processing",
  items: [
    {
      id: 1,
      text: "Integrated AWS IoT Core and Apache Flink for real-time data streaming, writing data to AWS Timestream DB.",
    },
    {
      id: 2,
      text: "Conducted a PoC to replace the MQTT pub-sub model with gRPC, significantly improving the real-time data processing and reducing latency.",
    },
    {
      id: 3,
      text: "Deployed gRPC clients on ctrlX core IoT devices and set up servers for processing time-series data, storing it in InfluxDB for further analysis.",
    },
  ],
};

const listOfSkills: ItemCard[] = [frontendCardData, backendCardData, snapContainerCardData, cloudAndRealTimeDataProcessingCardData];

export const siemensOrgData = {
  companyDetails: companyDetails,
  listOfSkills: listOfSkills
}
