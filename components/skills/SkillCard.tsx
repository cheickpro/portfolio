"use client";

import { motion } from "framer-motion";
import { SkillCategory } from "@/data/skills";

interface SkillCardProps {
  category: SkillCategory;
}

export default function SkillCard({ category }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
    >
      <h2 className="mb-6 text-2xl font-bold">
        {category.title}
      </h2>

      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border bg-gray-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-600 hover:text-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-blue-600"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}