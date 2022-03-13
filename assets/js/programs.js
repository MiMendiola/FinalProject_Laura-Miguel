import Program from './programClass.js';

const careers = {
  webDevelopment: new Program("WD", "Web Development", ["HTML", "CSS", "JS"]),
  userInterface: new Program("UI", "User Interface", [
    "Intro UI",
    "Traditional UI",
    "UI Components",
  ]),
  userExperience: new Program("UX", "User experience", [
    "Intro UX Design",
    "User Research",
    "Analysis Techniques",
  ]),
  hospitalityManagement: new Program("HM", "Hospitality Management", ["Intro Hospitality Management","Tourism","Business Communications"]),
  digitalMarketing: new Program("DM", "Digital Marketing",["Fundamentals of Digital Marketing","Web Analytics","Social Media Marketing"]),
};

const eslClasses = {
  esl: new Program("ESL", "ESL",["Reading","Writing","Listening"]),
  toefl: new Program("TOEFL", "TOEFL",["Reading","Writing","Listening"]),
  ielts: new Program("Ielts", "Ielts",["Reading","Writing","Listening"]),
};

//Estos maps son los que se mostraran en el select dinamico de ESL/Career
export const ESLMap = new Map([
  [eslClasses.esl.Id, eslClasses.esl],
  [eslClasses.toefl.Id, eslClasses.toefl],
  [eslClasses.ielts.Id, eslClasses.ielts],
]);
export const CareerMap = new Map([
  [careers.webDevelopment.Id, careers.webDevelopment],
  [careers.userInterface.Id, careers.userInterface],
  [careers.userExperience.Id, careers.userExperience],
  [careers.hospitalityManagement.Id, careers.hospitalityManagement],
  [careers.digitalMarketing.Id, careers.digitalMarketing],
]);
//TOEFL
//const ProgramsEsl = new Map([["ESL","ESL"],["Tofel","Tofel"],["Ielts","Ielts"]]);
