"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiGithub, SiLinkerd } from "react-icons/si";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
    >
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
          {project.category}
        </span>

        <h3 className="text-2xl font-bold">{project.title}</h3>

        <p className="text-gray-600 dark:text-gray-300">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-2">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className="flex items-center gap-2 rounded-lg border px-4 py-2 transition hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <SiGithub />
              GitHub
            </Link>
          )}

          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
            >
              <ExternalLink size={18} />
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}