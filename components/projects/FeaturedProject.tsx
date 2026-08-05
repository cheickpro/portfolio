"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FeaturedProject() {
  const project = projects.find((p) => p.featured);

  if (!project) return null;

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            Featured Project
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            {project.title}
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="grid gap-12 lg:grid-cols-2 items-center"
        >
          {/* Image */}

          <div className="relative h-[420px] overflow-hidden rounded-3xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}

          <div>

            <h3 className="text-3xl font-bold">
              {project.title}
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {project.description}
            </p>

            {/* Technologies */}

            <div className="mt-8 flex flex-wrap gap-3">

              {project.technologies.map((tech) => (

                <span
                  key={tech}
                  className="rounded-full bg-gray-100 px-4 py-2 text-sm dark:bg-gray-800"
                >
                  {tech}
                </span>

              ))}

            </div>

            {/* Highlights */}

            <div className="mt-10 grid grid-cols-2 gap-6">

              <div className="rounded-xl border p-5">
                <h4 className="text-3xl font-bold text-blue-600">
                   {project.metrics?.accuracy}
                </h4>

                <p className="text-sm text-gray-500">
                  Accuracy
                </p>
              </div>

              <div className="rounded-xl border p-5">
                <h4 className="text-3xl font-bold text-blue-600">
                  {project.metrics?.f1}
                </h4>

                <p className="text-sm text-gray-500">
                  F1-Score
                </p>
              </div>

              <div className="rounded-xl border p-5">
                <h4 className="text-3xl font-bold text-blue-600">
                  {project.metrics?.datasets}
                </h4>

                <p className="text-sm text-gray-500">
                  Datasets
                </p>
              </div>

              <div className="rounded-xl border p-5">
                <h4 className="text-3xl font-bold text-blue-600">
                  {project.metrics?.models}
                </h4>

                <p className="text-sm text-gray-500">
                  Models Compared
                </p>
              </div>

            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              {project.github && (

                <Link
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 rounded-xl border px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <FaGithub />

                  GitHub

                </Link>

              )}

              <Link
                href="/thesis.pdf"
                target="_blank"
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
              >
                <FaLinkedin />

                Thesis

              </Link>

              {project.demo && (

                <Link
                  href={project.demo}
                  target="_blank"
                  className="flex items-center gap-2 rounded-xl border px-6 py-3"
                >
                  <FaLinkedin />

                  Live Demo

                </Link>

              )}

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}