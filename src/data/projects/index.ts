import { teluguSpeechToTextProject } from './teluguSpeechToTextProject';
import { emailSpamDetectionProject } from './emailSpamDetectionProject';
import { weatherCrimePredictionProject } from './weatherCrimePredictionProject';


export const projectsdata = [
  teluguSpeechToTextProject,
  emailSpamDetectionProject,
  weatherCrimePredictionProject,
  
];

export type Project = typeof teluguSpeechToTextProject;
