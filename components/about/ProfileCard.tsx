import Image from "next/image";
import Card from "@/components/ui/Card";
import { profile } from "@/data/profile";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SocialLinks from "@/components/ui/SocialLinks";
import Button from "../ui/Button";

export default function ProfileCard() {
  return (
    <div className="w-full max-w-[420px] space-y-6">
      <Card className="overflow-hidden p-0">
        <Image
          src={profile.image}
          alt={profile.name}
          width={420}
          height={420}
          priority
          className="h-auto w-full object-cover"
        />
      </Card>

      <Card>
        <h2 className="text-2xl font-bold">
          {profile.name}
        </h2>

        <p className="mt-2 text-blue-600 dark:text-blue-400">
          Artificial Intelligence Researcher
        </p>

        <div className="mt-6 space-y-4">

          <div className="flex items-center gap-3">
            <MapPin size={18} />
            <span>Türkiye</span>
          </div>

          <div className="flex items-center gap-3">
            <GraduationCap size={18} />
            <span>Gümüşhane University</span>
          </div>

          <div className="flex items-center gap-3">
            <Briefcase size={18} />
            <span>Open to PhD Opportunities</span>
          </div>

        </div>

        <div className="mt-8">
            <SocialLinks
                github={profile.github}
                linkedin={profile.linkedin}
                researchgate={profile.researchgate}
            />
        </div>

      <Button
            href="/cv/Cheick_Mohamed_Rachid_CV.pdf"
            className="mt-8 w-full"
            >
            Download CV
    </Button>

      </Card>
    </div>
  );
}