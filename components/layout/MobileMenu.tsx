"use client";

import { Menu } from "lucide-react";

export default function MobileMenu() {
  return (
    <button
      className="rounded-lg p-2 md:hidden"
      aria-label="Open menu"
    >
      <Menu />
    </button>
  );
}