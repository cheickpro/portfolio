import StatCard from "@/components/ui/StatCard";
import { about } from "@/data/about";

export default function AcademicHighlights() {
  return (
    <section className="mt-20">
      <h2 className="mb-8 text-3xl font-bold text-center">
        Academic Highlights
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {about.stats.map((item) => {
          const Icon = item.icon;

          return (
            <StatCard
              key={item.title}
              icon={<Icon size={36} />}
              title={item.title}
              value={item.value}
            />
          );
        })}
      </div>
    </section>
  );
}