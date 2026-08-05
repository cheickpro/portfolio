import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiResearchgate } from "react-icons/si";
import { profile } from "@/data/profile";

export default function HeroSocials() {
  return (
    <div className="flex gap-6 text-3xl">

      <a
        href={profile.github}
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>

      <a
        href={profile.linkedin}
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>

      <a
        href={profile.researchgate}
        target="_blank"
        rel="noreferrer"
      >
        <SiResearchgate />
      </a>

    </div>
  );
}