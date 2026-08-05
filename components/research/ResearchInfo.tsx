import Card from "@/components/ui/Card";
import { research } from "@/data/research";

export default function ResearchInfo() {
  return (
    <aside className="sticky top-28">

      <Card>

        <h2 className="text-xl font-bold">
          Research Summary
        </h2>

        {/* Research Areas */}

        <div className="mt-8">

          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Research Areas
          </h3>

          <div className="mt-3 flex flex-wrap gap-2">

            {research.keywords.map((item) => (

              <span
                key={item}
                className="
                  rounded-full
                  bg-slate-100
                  px-3
                  py-1
                  text-sm
                  dark:bg-slate-800
                "
              >
                {item}
              </span>

            ))}

          </div>

        </div>

        {/* Datasets */}

        <div className="mt-10">

          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Datasets
          </h3>

          <ul className="mt-3 space-y-2">

            {research.datasets.map(dataset => (

              <li key={dataset}>
                • {dataset}
              </li>

            ))}

          </ul>

        </div>

        {/* Algorithms */}

        <div className="mt-10">

          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Algorithms
          </h3>

          <ul className="mt-3 space-y-2">

            {research.algorithms.map(model => (

              <li key={model}>
                • {model}
              </li>

            ))}

          </ul>

        </div>

        {/* Evaluation */}

        <div className="mt-10">

          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Evaluation Metrics
          </h3>

          <ul className="mt-3 space-y-2">

            {research.metrics.map(metric => (

              <li key={metric}>
                • {metric}
              </li>

            ))}

          </ul>

        </div>

      </Card>

    </aside>
  );
}