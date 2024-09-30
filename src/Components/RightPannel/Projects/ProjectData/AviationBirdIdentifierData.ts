import { Project } from "../../../../Models/Models";

const youWillLearnList = [
  {
    id: 1,
    text: "How to leverage transfer learning with a pre-trained ResNet50 model for bird classification.",
  },
  {
    id: 2,
    text: "How to deploy a machine learning model in an Android app to perform real-time predictions.",
  },
  {
    id: 3,
    text: "The significance of using large-scale datasets like Caltech-UCSD Birds for training ML models.",
  },
  {
    id: 4,
    text: "Techniques to optimize ML models for mobile platforms, ensuring performance efficiency.",
  },
  {
    id: 5,
    text: "How aviation and bird strike mitigation can benefit from AI-driven species identification.",
  },
  {
    id: 6,
    text: "The challenges of building apps that merge machine learning and mobile development for real-world use cases.",
  },
];

const theProblemSubPage = {
  title: "The challenge - A wicked problem",
  prblemStatement:
    "How can we effectively mitigate bird strikes in aviation while ensuring safety for both aircraft and bird species? Bird strikes pose a significant threat to flight safety, often resulting in costly damage to aircraft and endangering lives. Identifying bird species involved in these incidents is critical but highly challenging due to the speed and unpredictability of the events. <br/><br/> A solution is needed that enables real-time identification of bird species near airports to help predict and prevent bird strikes, enhancing aviation safety while protecting wildlife.",
};
const listOfSolutionItems = [
  {
    id: 1,
    text: "Understanding the problem: First, we analyzed the aviation industry's safety challenges related to bird strikes and studied existing methods of bird identification and prevention near airports.",
  },
  {
    id: 2,
    text: "Identifying a scalable solution: We selected machine learning, leveraging a pre-trained model from the Caltech-UCSD Birds dataset. The aim was to predict bird species in real-time and ensure that the model could adapt to the dynamic nature of airport environments.",
  },
  {
    id: 3,
    text: "Building the solution: We integrated the pre-trained bird identification model into an Android application, focusing on a user-friendly interface and robust prediction accuracy to identify bird species around airports.",
  },
  {
    id: 4,
    text: "Continuous improvement: We regularly evaluated the app's performance, fine-tuning the machine learning model and user experience based on feedback and evolving safety needs in aviation.",
  },
];

const theSolutionSubPage = {
  mainItem:
    "We devised a strategic approach to address bird strikes in aviation, focusing on quick yet effective solutions:",
  listOfSolutionItems: listOfSolutionItems,
};

const ourMarketSubPage = [
  {
    id: 1,
    text: "Target user - Aviation authorities, airports, wildlife management teams, and airline operators.",
  },
  {
    id: 2,
    text: "Target demographics - Global aviation industry, focusing initially on airports prone to bird strike incidents and regions with significant migratory bird populations.",
  },
];

const focusSubPage = {
  mainItem:
    "Our focus was on enhancing aviation safety and preventing costly and dangerous bird strikes. Aviation safety is a massive industry that requires continuous innovation to prevent hazards. We identified bird strikes as a critical issue, particularly at airports near migratory routes and natural bird habitats. After discussions with industry experts, we decided to focus on: ",
  focusItems: [
    {
      id: 1,
      text: "Accurate bird identification to predict potential threats.",
    },
    {
      id: 2,
      text: "Mitigating bird strikes through advanced, real-time monitoring and alerts.",
    },
  ],
};

const openMinsetSubPage = {
  mainItem:
    "We realized early on that just a software solution for bird identification wouldn’t fully address the aviation industry's needs. It required hardware and environmental integration to be effective.",
  openMinsetItems: [
    {
      id: 1,
      text: "Incorporating cameras and sensors at airports or on aircrafts would enable real-time bird detection, improving the system's predictive accuracy.",
    },
    {
      id: 2,
      text: "Leveraging machine learning and AI models to process images and classify bird species in-flight helps provide immediate alerts, aiding in bird strike prevention.",
    },
  ],
  anotherMainItem:
    "A holistic approach includes integrating hardware, software, and AI solutions to work in harmony, enhancing aviation safety and reducing bird strike incidents.",
};

const uniqueBlendOfInnovationSubPage =
  "I designed the bird identification system as a solo developer, incorporating several key components into the solution. The standout feature was the real-time bird classification model. Using the pre-trained ResNet50 model, I enabled the system to accurately identify bird species involved in potential bird strikes, which helps mitigate risks at airports. The model could detect and classify birds in-flight using images and automatically alert airport authorities, reducing response time and improving safety. This solution not only enhances aviation safety but also helps prevent future bird strike incidents, providing significant ecological and operational benefits to the aviation industry.";

const impactBeyondImaginationSubPage =
  "The Aviation Bird Identifier project extends its impact far beyond just the immediate prevention of bird strikes. It contributes to enhancing safety in aviation, protecting both human lives and wildlife. By accurately identifying bird species that frequently collide with aircraft, this solution has the potential to mitigate costly damages and improve airport efficiency. This project also promotes ecological balance by reducing the unnecessary harm to bird populations, creating a safer environment for both wildlife and air travelers. The broader vision of this solution is to safeguard future generations of air passengers and contribute to sustainable aviation practices for decades to come.";

const myLearningSubPage = [
  {
    id: 1,
    text: "Transfer Learning with Pre-trained Models: Learned how to leverage a pre-trained model (ResNet50) from the Caltech-UCSD Birds dataset to adapt it for specific bird species identification, optimizing time and resources.",
  },
  {
    id: 2,
    text: "Deploying Machine Learning Models in Mobile Applications: Gained hands-on experience deploying machine learning models in an Android app, bridging the gap between ML research and practical mobile applications.",
  },
  {
    id: 3,
    text: "Aviation Safety and Real-World Applications of AI: Understood the practical implications of AI in aviation safety, particularly in mitigating bird strikes by accurately identifying bird species in real-time.",
  },
  {
    id: 4,
    text: "Android App Development for ML Integration: Learned how to integrate a machine learning model into a user-friendly Android app, focusing on user interface design and ensuring smooth model predictions.",
  },
  {
    id: 5,
    text: "Optimizing Performance for Mobile Devices: Tackled challenges in optimizing the performance of a machine learning model for mobile deployment, ensuring efficient predictions without overloading device resources.",
  },
  {
    id: 6,
    text: "Cross-functional Collaboration for Innovation: Understood the importance of combining knowledge from different fields, such as wildlife research, aviation safety, and mobile app development, to create a solution that tackles a real-world problem.",
  },
];

export const aviationBirdIdentifierData: Project = {
  id: 4,
  name: "Aviation Bird Identifier",
  description:
    "A bird identification project using a pre-trained ML model from the Caltech-UCSD Birds dataset, deployed in an Android app to predict bird categories and help mitigate bird strikes in aviation.",
  projectType: "Machine Learning, Mobile Application Development.",
  services:
    "Bird identification, Transfer learning, Android app development, Aviation safety.",
  imageName: "bird-identification-from-minimal-sample.png",
  genesis: "Internship @ Bennett University(The Times Group)",
  timeline: "2 months",
  designDevTeam: "Solo developer",
  youWillLearnList: youWillLearnList,
  theProblemSubPage: theProblemSubPage,
  theSolutionSubPage: theSolutionSubPage,
  ourMarketSubPage: ourMarketSubPage,
  focusSubPage: focusSubPage,
  openMinsetSubPage: openMinsetSubPage,
  uniqueBlendOfInnovationSubPage: uniqueBlendOfInnovationSubPage,
  impactBeyondImaginationSubPage: impactBeyondImaginationSubPage,
  myLearningSubPage: myLearningSubPage,
};
