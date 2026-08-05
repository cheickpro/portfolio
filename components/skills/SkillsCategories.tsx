import SkillCard from "./SkillCard";
import { skillCategories } from "@/data/skills";

export default function SkillsCategories() {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">
            Technical Skills
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Technologies, frameworks, and tools that I use in research
            and software development.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => (
            <SkillCard
              key={category.title}
              category={category}
            />
          ))}
        </div>

      </div>
    </section>
  );
}