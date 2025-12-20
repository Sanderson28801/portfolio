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
            description="A fullstack teaching website for a nonprofit built from scratch to manage courses and users."
            image="/DillarAcademy.png"
            tags={["React", "Javascript", "MongoDB", "NodeJS", "TailwindCSS"]}
          />
          <ShowcaseCard
            title="TuftsAdvisor"
            description="An Outlook plugin and chatbot that streamlines academic advising using retrieval-augmented generation."
            image="/TuftsAdvisor.png"
            tags={["React", "Python", "Flask", "RAG", "MongoDB"]}
          />
        </div>
      </PageContainer>
    </section>
  );
}
