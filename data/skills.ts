export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "SQL",
      "C++",
    ],
  },

  {
    title: "Artificial Intelligence",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-Learn",
      "Deep Learning",
      "Machine Learning",
      "Computer Vision",
      "Natural Language Processing",
    ],
  },

  {
    title: "Data Science",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Data Preprocessing",
      "Feature Engineering",
    ],
  },

  {
    title: "Cybersecurity",
    skills: [
      "Network Intrusion Detection",
      "UNSW-NB15",
      "CIC-IDS2017",
      "Threat Detection",
    ],
  },

  {
    title: "Web Development",
    skills: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "REST API",
    ],
  },

  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Linux",
      "Docker",
      "VS Code",
    ],
  },
];

export const languages = [
  {
    name: "French",
    level: "Native",
  },
  {
    name: "English",
    level: "Professional",
  },
  {
    name: "Turkish",
    level: "Professional",
  },
];