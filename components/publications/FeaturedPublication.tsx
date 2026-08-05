"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, BookOpen, Calendar, GraduationCap, GitBranch } from "lucide-react";
import { publications } from "@/data/publications";

export default function FeaturedPublication() {
  const publication = publications.find((p) => p.featured);

  if (!publication) return null;

  return (
    <section className="pb-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            Featured Publication
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="grid gap-12 items-center lg:grid-cols-2"
        >
          {/* Cover */}

          <div className="relative h-[500px] overflow-hidden rounded-3xl border">
            <Image
              src={publication.image}
              alt={publication.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}

          <div>

            <span className="inline-flex rounded-full bg-gray-100 px-4 py-2 text-sm dark:bg-gray-800">
              {publication.type}
            </span>

            <h2 className="mt-5 text-4xl font-bold">
              {publication.title}
            </h2>

            <div className="mt-6 flex flex-wrap gap-6 text-gray-500">

              <div className="flex items-center gap-2">
                <Calendar size={18} />
                {publication.year}
              </div>

              <div className="flex items-center gap-2">
                <GraduationCap size={18} />
                {publication.venue}
              </div>

            </div>

            <p className="mt-8 leading-8 text-gray-600 dark:text-gray-300">
              {publication.abstract}
            </p>

            {/* Keywords */}

            <div className="mt-8 flex flex-wrap gap-3">

              {publication.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full bg-gray-100 px-4 py-2 text-sm dark:bg-gray-800"
                >
                  {keyword}
                </span>
              ))}

            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              {publication.pdf && (
                <Link
                  href={publication.pdf}
                  target="_blank"
                  className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
                >
                  <FileText size={18} />
                  View Thesis
                </Link>
              )}

              {publication.github && (
                <Link
                  href={publication.github}
                  target="_blank"
                  className="flex items-center gap-2 rounded-xl border px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <GitBranch size={18} />
                  Source Code
                </Link>
              )}

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}