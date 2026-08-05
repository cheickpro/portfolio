import { languages } from "@/data/skills";

export default function Languages() {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-5xl px-6">

        <h2 className="mb-10 text-center text-4xl font-bold">
          Languages
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {languages.map((language) => (
            <div
              key={language.name}
              className="rounded-2xl border p-6 text-center shadow-sm"
            >
              <h3 className="text-2xl font-bold">
                {language.name}
              </h3>

              <p className="mt-3 text-blue-600 font-semibold">
                {language.level}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}