import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string; // ← ajouté
}

export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  className, // ← ajouté
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium transition-all duration-300",
    {
      "bg-blue-600 text-white hover:bg-blue-700":
        variant === "primary",

      "border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800":
        variant === "secondary",
    },
    className // ← ajouté, permet de surcharger/compléter les classes depuis l'extérieur
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}