import ProjectsHero from "@/components/projects/ProjectsHero";
import FeaturedProject from "@/components/projects/FeaturedProject";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsHero />
      
      <FeaturedProject />
      
      <ProjectsGrid />
    </main>
  );
}