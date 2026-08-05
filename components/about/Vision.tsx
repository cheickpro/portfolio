import Card from "@/components/ui/Card";

export default function Vision() {
  return (
    <section className="mt-24">
      <Card className="mx-auto max-w-4xl text-center">

        <h2 className="text-3xl font-bold">
          My Vision
        </h2>

        <p className="mt-8 text-xl italic leading-9 text-slate-600 dark:text-slate-300">
          "I believe Artificial Intelligence should not only be accurate,
          but also explainable, trustworthy and capable of solving real-world
          problems."
        </p>

      </Card>
    </section>
  );
}