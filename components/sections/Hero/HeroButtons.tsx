import Button from "@/components/ui/Button";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4">

      <Button href="/cv/Cheick_Mohamed_Rachid_CV.pdf">
        Download CV
      </Button>

      <Button
        href="#contact"
        variant="secondary"
      >
        Contact Me
      </Button>

    </div>
  );
}