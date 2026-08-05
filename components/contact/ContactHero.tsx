"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
        >
          Let's Connect
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .1 }}
          className="mt-6 text-5xl font-bold md:text-6xl"
        >
          Contact Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 dark:text-gray-300"
        >
          Whether you're looking for a PhD candidate, an AI researcher,
          or a collaborator on innovative projects, I'd be delighted to
          hear from you.
        </motion.p>

      </div>
    </section>
  );
}