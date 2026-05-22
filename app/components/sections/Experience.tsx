import PageContainer from "@/components/layout/PageContainer";
import ShowcaseCard from "../ui/ShowcaseCard";
import Link from "next/link";

export default function Experience() {
  return (
    <section id="work">
      <PageContainer>
        <div className="flex justify-between w-full">
          <h2 className="text-xl font-semibold text-[var(--color-header)]">
            Featured Experience and Projects
          </h2>
          <Link
            href="/experience"
            className="text-[var(--color-header)] hover:text-[var(--color-accent)]"
          >
            View experience
          </Link>
        </div>
        <br />

        <div className="sm:flex sm:gap-2">
          <ShowcaseCard
            title="DillarAcademy"
            description="Engineered the Node.js and MongoDB backend for a non-profit platform, enabling secure user management and dynamic course enrollment."
            image="/DillarAcademy.png"
            tags={["Node.js", "MongoDB", "React", "JavaScript", "TailwindCSS"]} // Backend tech first!
            href={"/experience/DillarAcademy"}
          />
          <ShowcaseCard
            title="Satisfactory Factory Planner"
            description="Developed a C#/.NET engine that parses complex JSON game data to calculate multi-stage resource logistics and production efficiencies."
            image="/SatisfactoryPlannerLogo.jpg"
            tags={["C#", ".NET", "ASP.NET Core", "JSON Serialization", "React"]} // Prioritized the logic
            href={"/experience/SatisfactoryPlanner"}
          />
        </div>
      </PageContainer>
    </section>
  );
}
