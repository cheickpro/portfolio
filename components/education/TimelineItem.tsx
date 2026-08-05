import Card from "@/components/ui/Card";

interface Props {
  period: string;
  degree: string;
  field: string;
  university: string;
  country: string;
  description: string;
  specialization: string;   
}

export default function TimelineItem({
  period,
  degree,
  field,
  specialization,
  university,
  country,
  description,
}: Props) {
  return (
    <div className="relative pl-12">

      {/* ligne */}

      <div className="absolute left-4 top-0 h-full w-0.5 bg-slate-300 dark:bg-slate-700" />

      {/* point */}

      <div className="absolute left-1 top-6 h-6 w-6 rounded-full border-4 border-blue-600 bg-white dark:bg-slate-950" />

      <Card>

        <span className="text-blue-600 font-semibold">
          {period}
        </span>

        <h3 className="mt-3 text-2xl font-bold">
          {degree}
        </h3>

        <h4 className="mt-2 font-semibold">
          {field}
        </h4>
        <h4 className="mt-2 font-semibold">
          {specialization}
        </h4>

        <p className="mt-1 text-slate-500">
          {university}
        </p>

        <p className="text-slate-500">
          {country}
        </p>

        <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
          {description}
        </p>

      </Card>

    </div>
  );
}