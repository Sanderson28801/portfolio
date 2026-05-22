import PageContainer from "@/components/layout/PageContainer";
import ShowcaseCard from "@/components/ui/ShowcaseCard";

export default function Experience() {
  return (
    <section className="pt-16 pb-24">
      <PageContainer>
        <h1 className="text-3xl md:text-4xl font-semibold text-[var(--color-header)]">
          Experience and Projects
        </h1>

        <p className="mt-4 text-[var(--color-text)] leading-relaxed max-w-[75ch]">
          Here are a few of the systems I've built. My work ranges from
          developing full-scale educational platforms in agile team environments
          to architecting solo data engines and RAG pipelines.
        </p>
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
          <ShowcaseCard
            title="TuftsAdvisor"
            description="An Outlook plugin and chatbot that streamlines academic advising using retrieval-augmented generation."
            image="/TuftsAdvisor.png"
            tags={["Python", "Flask", "MongoDB", "RAG", "React"]} // React moved to the end!
            href={"/experience/TuftsAdvisor"}
          />
        </div>
      </PageContainer>
    </section>
  );
}
