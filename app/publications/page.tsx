import PublicationsHero from "@/components/publications/PublicationsHero";
import FeaturedPublication from "@/components/publications/FeaturedPublication";
import PublicationsList from "@/components/publications/PublicationsList";

export default function PublicationsPage() {
  return (
    <main>
      <PublicationsHero />
      <FeaturedPublication />
      <PublicationsList />
    </main>
  );
}