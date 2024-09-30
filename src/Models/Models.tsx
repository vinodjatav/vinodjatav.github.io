export interface CommonItem {
  id: number;
  text: string;
}
export interface Project {
  id: number;
  name: string;
  description: string;
  projectType: string;
  services: string;
  imageName: string;
  genesis: string;
  timeline: string;
  designDevTeam: string;
  youWillLearnList: CommonItem[];
  theProblemSubPage: TheProblemSubPageModel;
  theSolutionSubPage: TheSolutionSubPageModel;
  ourMarketSubPage: CommonItem[];
  focusSubPage: FocusSubPageModel;
  openMinsetSubPage: OpenMinsetSubPageModel;
  uniqueBlendOfInnovationSubPage: string;
  impactBeyondImaginationSubPage: string;
  myLearningSubPage: CommonItem[];
}
export interface ItemCard {
  title: string;
  items: CommonItem[];
}
export interface ProjectDetailSubPageModel {
  id: number;
  type: string;
  description: string;
}
export interface TheProblemSubPageModel {
  title: string;
  prblemStatement: string;
}
export interface TheSolutionSubPageModel {
  mainItem: string;
  listOfSolutionItems: CommonItem[];
}
export interface FocusSubPageModel {
  mainItem: string;
  focusItems: CommonItem[];
}
export interface OpenMinsetSubPageModel {
  mainItem: string;
  openMinsetItems: CommonItem[];
  anotherMainItem: string;
}
export interface CompanyDetailsModel {
  org: string;
  designation: string;
  tenure: string;
  location: string;
}
