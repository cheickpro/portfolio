import Card from "./Card";

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

export default function StatCard({
  icon,
  title,
  value,
}: StatCardProps) {
  return (
    <Card
      className="
        group
        text-center
        transition-all
        duration-300
        hover:scale-105
      "
    >
      <div
        className="
          mx-auto
          mb-5
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-blue-100
          text-blue-600
          transition
          group-hover:bg-blue-600
          group-hover:text-white
          dark:bg-slate-800
          dark:text-blue-400
        "
      >
        {icon}
      </div>

      <h3 className="text-lg font-bold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {value}
      </p>
    </Card>
  );
}