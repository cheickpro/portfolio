

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;

  year: number;
  status: "Completed" | "Ongoing";

  featured: boolean;

  metrics?: {
    accuracy?: string;
    f1?: string;
    datasets?: number;
    models?: number;
  };

  github?: string;
  paper?: string;
  demo?: string;
}

export const projects: Project[] = [
 {
  id: 1,
  title: "Deep Learning-Based Network Intrusion Detection",
  description:
    "Comprehensive master's thesis evaluating deep learning models for network intrusion detection using UNSW-NB15 and CIC-IDS2017 datasets.",

  image: "/images/projects/preprocess.svg",

  technologies: [
    "Python",
    "PyTorch",
    "Scikit-Learn",
    "Pandas",
    "NumPy",
  ],

  category: "Artificial Intelligence",

  year: 2026,

  status: "Completed",

  featured: true,

  metrics: {
    accuracy: "99.75%",
    f1: "0.9937",
    datasets: 2,
    models: 5,
  },

  github: "https://github.com/cheickpro/ids-project",

  paper: "/documents/master-thesis.pdf",
},
{
  id: 2,
  title: "AI Research Portfolio",
  description:
    "A modern academic portfolio developed with Next.js, TypeScript, and Tailwind CSS to showcase research, projects, and publications.",
  image: "/images/projects/portfolio.png",
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "React",
  ],
  category: "Web Development",
  year: 2026,
  status: "Ongoing",
  featured: false,
  github: "https://github.com/cheickpro/portfolio",
},
{
  id: 3,
  title: "CNN-BiLSTM Intrusion Detection Model",
  description:
    "Hybrid deep learning architecture combining CNN and BiLSTM for network intrusion detection.",
  image: "/images/projects/cnn-bilstm.png",
  technologies: [
    "Python",
    "PyTorch",
    "Deep Learning",
  ],
  category: "Deep Learning",
  year: 2026,
  status: "Completed",
  featured: false,
},
{
  id: 4,
  title: "IDS Benchmark Framework",
  description:
    "Framework for evaluating machine learning and deep learning models on multiple intrusion detection datasets.",
  image: "/images/projects/plot_loss.png",
  technologies: [
    "Python",
    "Scikit-Learn",
    "Pandas",
  ],
  category: "Research",
  year: 2026,
  status: "Completed",
  featured: false,
},
]