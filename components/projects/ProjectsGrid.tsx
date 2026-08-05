import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  const projectList = projects.filter((project) => !project.featured);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Other Projects</h2>

          <p className="mx-auto mt-4 max-w-3xl text-gray-600 dark:text-gray-300">
            A selection of research and software engineering projects related to
            artificial intelligence, deep learning, and modern web development.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {projectList.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}