export const teluguSpeechToTextProject = {
  id: 1,
  title: "Telugu Speech to Telugu Text System",
  description:
    "A web-based real-time speech recognition system that converts spoken Telugu into written Telugu script using the Google Speech API.",
  image: "/paper/project-1.webp", 
  tools: ["HTML", "CSS", "JavaScript", "Google Speech API","VS Code"],
  slug: "telugu-speech-to-text",
  overview:
    "This project allows users to speak in Telugu and receive accurate text output in Telugu script. Built using only frontend web technologies and the Google Speech API, it simplifies Telugu speech transcription for content creators, learners, and educators.",
  challenges: [
    "Handling regional Telugu accents and variations in pronunciation.",
    "Ensuring the accuracy of transcription using browser-based tools.",
    "Maintaining a responsive UI with real-time voice input.",
    "Rendering Telugu Unicode characters correctly in the browser."
  ],
  solution:
    "The system uses the Web Speech API (powered by Google) for voice recognition and JavaScript to render real-time Telugu text in the browser. The interface is built with HTML and styled using CSS to make it clean and accessible.",
  outcome:
    "The final product is a lightweight, browser-based tool that enables real-time Telugu speech transcription without needing external libraries or servers. It’s ideal for demos, classroom tools, or language-based projects.",
};
