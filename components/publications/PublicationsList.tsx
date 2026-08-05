import { publications } from "@/data/publications";
import PublicationCard from "./PublicationCard";

export default function PublicationsList() {
  const otherPublications = publications.filter(
    (publication) => !publication.featured
  );

  if (otherPublications.length === 0) {
    return (
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-center text-4xl font-bold">
            Other Publications
          </h2>

          <div className="rounded-2xl border border-dashed p-10 text-center">
            <h3 className="text-xl font-semibold">
              More publications coming soon
            </h3>

            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Future conference papers, journal articles, and preprints will be
              listed here as they become available.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-center text-4xl font-bold">
          Other Publications
        </h2>

        <div className="space-y-8">
          {otherPublications.map((publication) => (
            <PublicationCard
              key={publication.id}
              publication={publication}
            />
          ))}
        </div>
      </div>
    </section>
  );
}