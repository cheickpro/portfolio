import Card from "@/components/ui/Card";

const facts = [
  "🎓 Master's in Artificial Intelligence",
  "🧠 Research in Deep Learning & Cybersecurity",
  "📊 Best model accuracy: 99.75%",
  "🌍 Fluent in French, English and Turkish",
  "🎯 Looking for a fully funded PhD",
];

export default function QuickFacts() {
  return (
    <section className="mt-24">

      <h2 className="text-center text-3xl font-bold">
        Quick Facts
      </h2>

      <Card className="mx-auto mt-10 max-w-4xl">

        <ul className="space-y-4">

          {facts.map((fact) => (

            <li key={fact}>
              {fact}
            </li>

          ))}

        </ul>

      </Card>

    </section>
  );
}