import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Badge({
  children,
}: Props) {
  return (
    <span
      className="
        inline-flex
        rounded-full
        bg-blue-100
        px-3
        py-1
        text-sm
        font-medium
        text-blue-700
        dark:bg-slate-800
        dark:text-blue-400
      "
    >
      {children}
    </span>
  );
}