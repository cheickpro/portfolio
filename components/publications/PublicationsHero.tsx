"use client";

import { motion } from "framer-motion";

export default function PublicationsHero() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
        >
          Academic Contributions
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-6 text-5xl font-bold tracking-tight md:text-6xl"
        >
          Publications
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300"
        >
          A collection of my academic work, including my master's thesis,
          research outputs, and future scientific publications in Artificial
          Intelligence, Deep Learning, Cybersecurity, and Network Security.
        </motion.p>
      </div>
    </section>
  );
}