import { Project } from "../../../../Models/Models";

const youWillLearnList = [
  {
    id: 1,
    text: "How to design a drag-and-drop feature for enhanced user interaction",
  },
  {
    id: 2,
    text: "How to implement CRUD (Create, Read, Update, Delete) functionality in a React app",
  },
  {
    id: 3,
    text: "Techniques for managing and updating state dynamically as users interact with sticky notes",
  },
  {
    id: 4,
    text: "How to style interactive elements like sticky notes for a user-friendly interface",
  },
  {
    id: 5,
    text: "Best practices for handling color customization and note organization in a simple, intuitive UI",
  },
  {
    id: 6,
    text: "The importance of user experience in building productivity tools",
  },
];

const theProblemSubPage = {
  title: "The challenge - A wicked problem",
  prblemStatement:
    "How can we provide users with a seamless way to organize, update, and manage multiple sticky notes in a visually intuitive interface? With traditional note-taking apps, users often struggle to rearrange notes efficiently, which leads to clutter and a lack of productivity. Users need the ability to quickly create, modify, and organize their thoughts in real-time without losing track of important information. <br/><br/> A solution is needed that allows for easy drag-and-drop functionality, color coding, and dynamic updates—all while maintaining a clean and minimalistic user experience.",
};

const listOfSolutionItems = [
  {
    id: 1,
    text: "Understanding user needs: We first focused on understanding how users typically interact with note-taking apps and the pain points they experience with organizing notes.",
  },
  {
    id: 2,
    text: "Designing a dynamic interface: We mapped out different layout options, prioritizing flexibility and ease of use with drag-and-drop functionality, ensuring a seamless user experience validated by feedback.",
  },
  {
    id: 3,
    text: "Building the solution: We implemented key features such as creating, updating, deleting, and color coding notes, combining backend logic with a responsive and visually appealing frontend.",
  },
  {
    id: 4,
    text: "Testing and iterating: We continuously evaluated the app's performance and usability, iterating on feedback to refine the experience and optimize for efficiency and user satisfaction.",
  },
];

const theSolutionSubPage = {
  mainItem:
    "To create an intuitive and user-friendly sticky notes app, we followed a systematic approach:",
  listOfSolutionItems: listOfSolutionItems,
};

const ourMarketSubPage = [
  {
    id: 1,
    text: "Target user - Individuals, teams, and businesses looking for an easy-to-use, visual note-taking tool to organize tasks, ideas, and reminders.",
  },
  {
    id: 2,
    text: "Target demographics - Freelancers, project managers, and collaborative teams in industries such as software development, creative agencies, and education.",
  },
];

const focusSubPage = {
  mainItem:
    "Our focus was on improving personal and team productivity through seamless digital note-taking. The task management and collaboration tools industry is vast, with numerous opportunities to innovate and enhance user experiences -",
  focusItems: [
    {
      id: 1,
      text: "We aimed to streamline organization by offering intuitive drag-and-drop functionality.",
    },
    {
      id: 2,
      text: "Simplifying the creation, management, and color-coding of sticky notes to help users prioritize tasks visually.",
    },
    {
      id: 3,
      text: "Enhancing collaboration for teams by allowing real-time updates and easy accessibility.",
    },
  ],
};

const openMinsetSubPage = {
  mainItem:
    "We quickly realized that the solution wasn’t just about creating an application. The core idea was to enhance how users approach task management and collaboration in both digital and physical workspaces -",
  openMinsetItems: [
    {
      id: 1,
      text: "We explored integrating the app with real-time team collaboration tools to enable more efficient brainstorming and project planning.",
    },
    {
      id: 2,
      text: "By promoting the use of visual organization techniques through the app, we encouraged users to combine software with productivity best practices, enhancing both individual and team workflows.",
    },
  ],
  anotherMainItem:
    "We understood that offering more than just a digital tool—by teaching users how to maximize productivity through simple yet powerful organizational methods—would deliver a truly holistic solution.",
};

const uniqueBlendOfInnovationSubPage =
  "As the sole developer on this project, I was responsible for both the design and functionality of the app, ensuring seamless user experience from start to finish. The standout feature was the drag-and-drop interface, which allowed users to interact with sticky notes in a dynamic and intuitive way, making task management visually engaging and flexible. I integrated features like customizable note colors, making it easier for users to prioritize and organize tasks efficiently. By combining a simple user interface with powerful functionality, I transformed the traditional sticky note concept into a digital solution that improved personal productivity and team collaboration.";

const impactBeyondImaginationSubPage =
  "The Drag & Drop Stickies App has revolutionized the way users organize and manage tasks, bringing simplicity and efficiency to both personal and professional workflows. By empowering users to create, move, and customize notes effortlessly, the app promotes a sense of productivity and control over their daily tasks. The app's intuitive interface is not only a tool for the present but serves as an adaptable, scalable solution for the future, making task management easier for individuals and teams alike. The real impact lies in the app's ability to streamline collaboration, reduce clutter, and inspire creative approaches to managing ideas and tasks — setting a new standard for digital productivity tools.";
const myLearningSubPage = [
  {
    id: 1,
    text: "Full-Stack Development: Gained in-depth experience by developing both frontend (JavaScript, TypeScript, React) and backend (Java, Spring Boot, MySQL) components, allowing for a seamless integration of user-facing features and data management.",
  },
  {
    id: 2,
    text: "Scalability and Efficiency: Learned how to build a scalable and efficient architecture that can handle dynamic interactions like real-time drag-and-drop functionality, while maintaining performance.",
  },
  {
    id: 3,
    text: "Data Storage & Management: Developed an understanding of integrating MySQL to handle persistent data storage for user-created notes, ensuring reliability and efficiency.",
  },
  {
    id: 4,
    text: "Rapid Prototyping: Experienced fast-paced development cycles, iterating on the UI and features based on user feedback and enhancing the overall user experience.",
  },
  {
    id: 5,
    text: "User-Centered Design: Understood the importance of designing intuitive and responsive interfaces that prioritize user needs, focusing on ease-of-use and customization.",
  },
  {
    id: 6,
    text: "End-to-End Solution: Mastered the process of creating a complete end-to-end solution, from UI/UX design to backend development, ensuring a holistic and functional application.",
  },
];

export const dragAndDropStickyNotesData: Project = {
  id: 1,
  name: "Drag & Drop Stickies App",
  description:
    "A sticky notes application with drag-and-drop functionality, allowing users to create, update, delete, and change the color of notes.",
  projectType: "Full Stack Web Application",
  services:
    "Create, update, and delete notes, Drag and drop functionality, Change color of notes",
  imageName: "sticky-notes.png",
  genesis: "Self-developed Project",
  timeline: "2 weeks",
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
