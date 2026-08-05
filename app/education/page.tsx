import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import TimelineItem from "@/components/education/TimelineItem";
import { education } from "@/data/education";

export default function EducationPage() {
  return (
    <main className="py-32">

      <Container>

        <SectionTitle
          title="Education"
          subtitle="My Academic Journey"
        />

        <div className="mx-auto mt-20 max-w-4xl space-y-16">

          {education.map((item) => (

            <TimelineItem
              key={item.period}
              {...item}
            />

          ))}

        </div>

      </Container>

    </main>
  );
}