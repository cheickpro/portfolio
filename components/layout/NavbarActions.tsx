import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";

export default function NavbarActions() {
  return (
    <div className="hidden items-center gap-3 md:flex">
      <ThemeToggle />

      <Button href="/cv/Cheick_Mohamed_Rachid_CV.pdf">
        Download CV
      </Button>
    </div>
  );
}