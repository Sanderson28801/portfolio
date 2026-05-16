import PageContainer from "@/components/layout/PageContainer";
import ShowcaseCard from "@/components/ui/ShowcaseCard";

export default function Experience() {
  return (
    <section className="pt-16 pb-24">
      <PageContainer>
        <h1 className="text-3xl md:text-4xl font-semibold text-[var(--color-header)]">
          Experience and Projects
        </h1>

        <p className="mt-4 text-[var(--color-text)] leading-relaxed">
          I love to collaborate with my peers on projects and also build solo
          projects that I'm passionate about
        </p>

        <p className="mt-4 text-[var(--color-text)] leading-relaxed">
          Tap on any of the cards below to learn more about the project
        </p>

        <div className="sm:flex sm:gap-2">
          <ShowcaseCard
            title="DillarAcademy"
            description="A fullstack teaching website for a nonprofit built from scratch to manage courses and users."
            image="/DillarAcademy.png"
            tags={["React", "Javascript", "MongoDB", "NodeJS", "TailwindCSS"]}
            href={"/experience/DillarAcademy"}
          />
          <ShowcaseCard
            title="Satisfactory Factory Planner"
            description="A fullstack WPF Desktop Application that parses game data to build crafting trees from user provided inputs."
            image="/SatisfactoryPlannerLogo.png"
            tags={["C#", ".Net", "WPF", "JsonSerialization"]}
            href={"/experience/SatisfactoryPlanner"}
          />
          <ShowcaseCard
            title="TuftsAdvisor"
            description="An Outlook plugin and chatbot that streamlines academic advising using retrieval-augmented generation."
            image="/TuftsAdvisor.png"
            tags={["React", "Python", "Flask", "RAG", "MongoDB"]}
            href={"/experience/TuftsAdvisor"}
          />
        </div>
      </PageContainer>
    </section>
  );
}
