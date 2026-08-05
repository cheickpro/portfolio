export interface ContactInfo {
  email: string;
  location: string;
  github: string;
  linkedin: string;

  availability: string;

  interests: string[];
}

export const contactInfo: ContactInfo = {
  email: "2424481501@ogr.gumushane.edu.tr",

  location: "Türkiye",

  github: "https://github.com/cheickpro/",

  linkedin: "https://www.linkedin.com/in/cheick-mohamed-rachid-6b9779173",

  availability:
    "Open to PhD positions, AI Research internships, R&D collaborations, and consulting opportunities.",

  interests: [
    "Artificial Intelligence",
    "Deep Learning",
    "Cybersecurity",
    "Computer Vision",
    "Network Security",
  ],
};