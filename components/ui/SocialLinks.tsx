import Link from "next/link";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";
import { SiGithub, SiLinkerd, SiResearchgate } from "react-icons/si";


interface SocialLinksProps {
  github: string;
  linkedin: string;
  researchgate: string;
}

export default function SocialLinks({
  github,
  linkedin,
  researchgate,
}: SocialLinksProps) {
  return (
    <div className="flex items-center gap-4">

      <Link
        href={linkedin}
        target="_blank"
        className="rounded-full border p-3 transition hover:bg-slate-100 dark:hover:bg-slate-800"
      >
        <SiLinkerd size={20} />
      </Link>

      <Link
        href={github}
        target="_blank"
        className="rounded-full border p-3 transition hover:bg-slate-100 dark:hover:bg-slate-800"
      >
        <SiGithub size={20} />
      </Link>

      <Link
        href={researchgate}
        target="_blank"
        className="rounded-full border p-3 transition hover:bg-slate-100 dark:hover:bg-slate-800"
      >
        <SiResearchgate size={20} />
      </Link>

    </div>
  );
}