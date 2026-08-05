import { ReactNode } from "react";

interface CardHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

export default function CardHeader({
  title,
  subtitle,
  action,
}: CardHeaderProps) {
  return (
    <div className="flex items-start justify-between border-b border-slate-200 pb-5 dark:border-slate-800">

      <div>

        <h2 className="text-2xl font-bold">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            {subtitle}
          </p>
        )}

      </div>

      {action}

    </div>
  );
}