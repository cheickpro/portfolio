import Card from "@/components/ui/Card";
import { research } from "@/data/research";

export default function Abstract() {
  return (
    <Card>

      <h2 className="text-2xl font-bold">
        Abstract
      </h2>

     <div
        className="
          mt-8
          whitespace-pre-line
          text-justify
          leading-8
          text-slate-700
          dark:text-slate-300
        "
        >
        {research.abstract}
      </div>

    </Card>
  );
}