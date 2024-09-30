import { Project } from "../../../../Models/Models";
import { weatherAppData } from "./WeatherAppData";
import { dragAndDropStickyNotesData } from "./StickyNotesData";
import { edgeSecuritySystemData } from "./EdgeSecuritySystemData";
import { aviationBirdIdentifierData } from "./AviationBirdIdentifierData";

export const listOfProjects: Project[] = [
  dragAndDropStickyNotesData,
  weatherAppData,
  edgeSecuritySystemData,
  aviationBirdIdentifierData,
];
