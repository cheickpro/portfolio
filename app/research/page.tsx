import Container from "@/components/layout/Container";
import ResearchHeader from "@/components/research/ResearchHeader";
import Abstract from "@/components/research/Abstract";
import ResearchInfo from "@/components/research/ResearchInfo";
import Citation from "@/components/research/Citation";

export default function ResearchPage() {
  return (
    <main className="py-32">

      <Container>

        <ResearchHeader />

        <div className="mt-16 grid gap-12 lg:grid-cols-3">

          <div className="lg:col-span-2">

            <Abstract />

          </div>

          <ResearchInfo />

        </div>

      </Container>

      <Citation />
    </main>
  );
}