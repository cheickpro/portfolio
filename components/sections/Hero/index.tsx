import Container from "@/components/layout/Container";
import HeroContent from "./HeroContent";
import HeroProfileCard from "./HeroProfileCard";

export default function Hero() {
  return (
    <section
      className="
        min-h-screen
        flex
        items-center
        pt-24
      "
    >
      <Container>
        <div
          className="
            grid
            gap-16
            lg:grid-cols-2
            items-center
          "
        >
          <HeroContent />

          <HeroProfileCard />
        </div>
      </Container>
    </section>
  );
}