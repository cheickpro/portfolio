import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";
import AcademicHighlights from "@/components/about/AcademicHighlights";
import ResearchInterests from "@/components/about/ResearchInterests";
import Vision from "@/components/about/Vision";
import { about } from "@/data/about";
import Card from "@/components/ui/Card";
import ProfileCard from "@/components/about/ProfileCard";
import QuickFacts from "@/components/about/QuickFacts";

import {
        MapPin,
        GraduationCap,
        Briefcase,
        Globe,
} from "lucide-react";

const researchAreas = [
 "Deep Learning",
  "Cybersecurity",
 "Network Intrusion Detection",
 "Explainable AI",
 "Machine Learning",
 "PyTorch",
"TensorFlow",
"Python",
];



export default function AboutPage() {
  return (
    <main className="py-32">
      <Container>

        <SectionTitle
          title="About Me"
          subtitle="Artificial Intelligence Researcher "
        />

        <div className="mt-16 grid items-center gap-16 lg:grid-cols-2">

          {/* Photo */}

            <div className="flex justify-center">
              <ProfileCard />
            </div>

          {/* Biography */}

          <div>

            <h2 className="text-3xl font-bold">
              {profile.name}
            </h2>

            <div className="space-y-6">
              {about.biography.map((paragraph) => (
                <p
                  key={paragraph}
                  className="leading-8 text-slate-600 dark:text-slate-300"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">

              {researchAreas.map((item) => (

                <span
                  key={item}
                  className="
                    rounded-full
                    bg-blue-100
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-blue-700
                    dark:bg-slate-800
                    dark:text-blue-400
                  "
                >
                  {item}
                </span>

              ))}

            </div>

            <div className="mt-10 flex gap-4">

              <Button href="/cv/Cheick_Mohamed_Rachid_CV.pdf">
                Download CV
              </Button>

              <Button
                href="/contact"
                variant="secondary"
              >
                Contact Me
              </Button>

            </div>

          </div>

        </div>
          <AcademicHighlights />
              <QuickFacts />
            <ResearchInterests />

          <Vision />
      </Container>
    </main>
  );
}