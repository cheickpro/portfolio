import { ReactNode } from "react";

interface Props {
  label: string;
  children: ReactNode;
}

export default function InfoItem({
  label,
  children,
}: Props) {
  return (
    <div>

      <p className="text-xs uppercase tracking-wider text-slate-500">
        {label}
      </p>

      <div className="mt-1 font-medium">
        {children}
      </div>

    </div>
  );
}