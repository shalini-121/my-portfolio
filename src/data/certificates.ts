import { IconType } from "react-icons";
import {
  SiNeo4J,
  SiSelenium,
  SiPagerduty,
  SiOracle,
  SiPython,
  SiWordpress,
  SiCisco,
  SiOpenjdk,
  SiAtlassian,
  SiClickup,
  SiLinkedin,
  SiHackerrank
} from "react-icons/si";
import {
  BsFillKanbanFill,
  BsBook,
  BsAward,
  BsGraphUp,
  BsBuilding,
  BsWindow,
  BsFileEarmarkCode,
} from "react-icons/bs";

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  detailsUrl: string;
  icon: IconType;
};

export const certifications: Certification[] = [
  {
    id: "google-aiml-internship-2024",
    title: "Google AI/ML Internship Certification",
    issuer: "AICTE (Google AI/ML Domain)",
    date: "July 2024",
    description:
      "Completed a hands‑on internship covering neural networks, object detection, product image search, cloud integration with Google Vision API, and real‑time image classification using TensorFlow Lite.",
    skills: [
      "Neural Networks",
      "Object Detection",
      "Image Classification",
      "Cloud Integration",
      "TensorFlow Lite",
    ],
    detailsUrl: "https://www.linkedin.com/posts/shalini-chegireddy-290599290_aicte-google-virtual-internship-report-on-activity-7345088206389825536-FQ6U?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaQ00wBfq8YGI81SzUTOVMBgH6_JTo_8hI", // add your certificate link here
    icon: BsBook,
  },
  {
    id: "salesforce-agent-force-specialist-2025",
    title: "Agent Force Specialist Certification",
    issuer: "Salesforce",
    date: "June 2025",
    description:
      "Certified Agent Force Specialist on the Salesforce platform, skilled in managing real‑world customer data, automating workflows, and building scalable cloud‑based CRM solutions.",
    skills: [
      "Salesforce CRM",
      "Cloud Computing",
      "Data Management",
      "Process Automation",
    ],
    detailsUrl: "https://www.linkedin.com/posts/shalini-chegireddy-290599290_agent-force-specialist-certification-report-activity-7345089583589560320-Jhdj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaQ00wBfq8YGI81SzUTOVMBgH6_JTo_8hI", 
    icon: BsBuilding,
  },
  {
    id: "coincent-ml-internship-2024",
    title: "Machine Learning Internship",
    issuer: "Coincent.ai in association with Fox Trading",
    date: "July 2024",
    description:
      "Completed a Machine Learning internship focused on real-world applications like diabetes prediction and lead scoring. Gained hands-on experience in building and fine-tuning predictive models, applying business analytics, and working with real-world datasets.",
    skills: [
      "Machine Learning",
      "Data Preprocessing",
      "Model Evaluation",
      "Lead Scoring",
      "Python",
      "Scikit-learn",
      "Pandas",
    ],
    detailsUrl: "https://www.linkedin.com/posts/shalini-chegireddy-290599290_certificate-activity-7245804498089082880-veR-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaQ00wBfq8YGI81SzUTOVMBgH6_JTo_8hI", 
    icon: BsAward, 
  },
  
  {
    id: "codsoft-java-internship-2024",
    title: "Java Programming Internship",
    issuer: "CodSoft",
    date: "June 2024",
    description:
      "Completed a hands-on internship focused on core Java development, involving interactive applications and logic-based programs. Gained practical experience by building console-based tools such as grading systems, number guessing games, and quiz applications.",
    skills: [
      "Java Programming",
      "OOPs Concepts",
      "Logic Building",
      "Problem Solving",
      "Console Applications",
    ],
    detailsUrl: "https://www.linkedin.com/posts/shalini-chegireddy-290599290_certificate-activity-7242532462185082880-UJa5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaQ00wBfq8YGI81SzUTOVMBgH6_JTo_8hI", 
    icon: BsGraphUp, 
  },
  
  {
    id: "learning-python-joemarini-2024",
    title: "Learning Python",
    issuer: "Joe Marini (LinkedIn Learning)",
    date: "June 2024",
    description:
      "Completed the 'Learning Python' course by Joe Marini, covering the fundamentals of Python programming including syntax, data structures, functions, and real-world scripting. This course strengthened my ability to build and automate Python-based applications.",
    skills: [
      "Python Programming",
      "Data Structures",
      "Problem Solving",
      "Automation",
      "Scripting",
    ],
    detailsUrl: "https://www.linkedin.com/posts/shalini-chegireddy-290599290_certificate-of-completion-activity-7124392631060594688-6LdC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaQ00wBfq8YGI81SzUTOVMBgH6_JTo_8hI", 
    icon: SiPython, 
  },
  
  {
    id: "python-standard-library-2024",
    title: "Python Standard Library Essential Training",
    issuer: "Joe Marini (LinkedIn Learning)",
    date: "June 2024",
    description:
      "Completed the 'Python Standard Library Essential Training' course by Joe Marini. This course provided in-depth knowledge of built-in Python modules for file handling, system operations, data manipulation, and more—enhancing my ability to write efficient and powerful Python code.",
    skills: [
      "Python Standard Library",
      "File Handling",
      "OS & Sys Modules",
      "Data Manipulation",
      "Efficient Coding",
    ],
    detailsUrl: "", 
    icon: BsFileEarmarkCode, 
  }
  
];
