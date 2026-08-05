"use client";

import Link from "next/link";
import { navigation } from "@/data/navigation";

export default function NavLinks() {
  return (
    <ul className="hidden items-center gap-8 md:flex">
      {navigation.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}