"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, ExternalLink, Calendar } from "lucide-react";
import { Publication } from "@/data/publications";

interface PublicationCardProps {
  publication: Publication;
}

export default function PublicationCard({
  publication,
}: PublicationCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
          {publication.type}
        </span>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Calendar size={16} />
          {publication.year}
        </div>
      </div>

      {/* Title */}
      <h3 className="mt-5 text-2xl font-bold">
        {publication.title}
      </h3>

      {/* Authors */}
      <p className="mt-3 text-gray-500">
        {publication.authors.join(", ")}
      </p>

      {/* Venue */}
      <p className="mt-2 text-sm font-medium text-blue-600">
        {publication.venue}
      </p>

      {/* Abstract */}
      <p className="mt-5 text-gray-600 dark:text-gray-300">
        {publication.abstract}
      </p>

      {/* Keywords */}
      <div className="mt-6 flex flex-wrap gap-2">
        {publication.keywords.map((keyword) => (
          <span
            key={keyword}
            className="rounded-full bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800"
          >
            {keyword}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-8 flex flex-wrap gap-4">
        {publication.pdf && (
          <Link
            href={publication.pdf}
            target="_blank"
            className="flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <FileText size={18} />
            PDF
          </Link>
        )}

        {publication.doi && (
          <Link
            href={publication.doi}
            target="_blank"
            className="flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <ExternalLink size={18} />
            DOI
          </Link>
        )}
      </div>
    </motion.article>
  );
}