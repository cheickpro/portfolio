import { research } from "@/data/research";
import { Badge } from "lucide-react";

export default function ResearchHeader() {
  return (
    <header className="border-b border-slate-200 pb-12 dark:border-slate-800">

      <Badge>
        {research.type}
     </Badge>

      <h1 className="mt-6 text-5xl font-bold leading-tight">
        {research.title}
      </h1>

      {/* Metadata */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

  <div>
    <p className="text-sm text-slate-500 uppercase tracking-wide">
      Institution
    </p>

    <p className="mt-1 font-semibold">
      {research.university}
    </p>
  </div>

  <div>
    <p className="text-sm text-slate-500 uppercase tracking-wide">
      Supervisor
    </p>

    <p className="mt-1 font-semibold">
      {research.supervisor}
    </p>
  </div>

  <div>
    <p className="text-sm text-slate-500 uppercase tracking-wide">
      Status
    </p>

    <p className="mt-1 font-semibold">
      {research.status}
    </p>
  </div>

  <div>
    <p className="text-sm text-slate-500 uppercase tracking-wide">
      Period
    </p>

    <p className="mt-1 font-semibold">
      {research.period}
    </p>
  </div>

</div>

    </header>
  );
}