export interface Publication {
  id: number;
  title: string;
  authors: string[];
  venue: string;
  year: number;

  type: "Master Thesis" | "Conference" | "Journal" | "Preprint";

  status: "Published" | "Accepted" | "Under Review" | "In Preparation";

  abstract: string;

  keywords: string[];

  image: string;

  pdf?: string;
  github?: string;
  doi?: string;

  featured: boolean;
}

export const publications: Publication[] = [
  {
    id: 1,

    title:
      "Detection of Network-based Attacks using Deep Learning Models and Performance Analysis",

    authors: ["Cheick Mohamed Rachid"],

    venue: "Gümüşhane University",

    year: 2026,

    type: "Master Thesis",

    status: "Published",

    abstract:
      "This master's thesis presents a comprehensive comparative study of machine learning and deep learning models for network intrusion detection using the UNSW-NB15 and CIC-IDS2017 datasets. The work investigates advanced preprocessing, feature selection, class imbalance handling, and hybrid neural architectures to improve intrusion detection performance.",

    keywords: [
      "Artificial Intelligence",
      "Deep Learning",
      "Cybersecurity",
      "Network Intrusion Detection",
      "CNN",
      "CNN-BiLSTM",
      "PyTorch",
    ],

    image: "/images/publications/master-thesis.png",

    pdf: "/documents/master-thesis.pdf",

    github: "https://github.com/cheickpro/nids-deep-learning-evaluation",

    featured: true,
  },
];