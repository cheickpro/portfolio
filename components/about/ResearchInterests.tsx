import Badge from "@/components/ui/Badge";
import { about } from "@/data/about";

export default function ResearchInterests() {
  return (
    <section className="mt-24">

      <h2 className="text-center text-3xl font-bold">
        Research Interests
      </h2>

      <p className="mt-3 text-center text-slate-500 dark:text-slate-400">
        My main research interests and technical expertise.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {about.interests.map((interest) => (
          <Badge key={interest}>
            {interest}
          </Badge>
        ))}
      </div>

    </section>
  );
}