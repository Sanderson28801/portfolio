import PageContainer from "@/components/layout/PageContainer";
import Link from "next/link";
import ImageGallery from "@/components/ui/ImageGallery";

export default function SatisfactoryPlanner() {
  const satisfactoryImages = [
    {
      src: "/SatisfactoryPlannerHomepage.png",
      alt: "Satisfactory Planner Homepage",
      caption:
        "The React client interface, which queries the ASP.NET backend for available items and base production parameters.",
    },
    {
      src: "/SatisfactoryPlannerRecipePage.png",
      alt: "Satisfactory Planner Recipe Page",
      caption:
        "Visualized output of the C# graph traversal algorithm, detailing the calculated logistical dependencies and power requirements.",
    },
  ];
  return (
    <section className="pt-16 pb-24">
      <PageContainer>
        {/* Wrapper to handle absolute positioning */}
        <div className="relative">
          {/* Back Link - positioned outside of the document flow */}
          <Link
            href="/experience"
            className="absolute -top-8 left-0 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text)] opacity-80 hover:opacity-100 hover:text-[var(--color-accent)] transition duration-300 ease-in-out"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Experiences
          </Link>

          <h1 className="text-3xl md:text-4xl font-semibold text-[var(--color-header)]">
            Satisfactory Factory Planner
          </h1>
        </div>

        <div className="mt-2">
          <a
            href="https://github.com/Sanderson28801/SatisfactoryWindowsPlanner"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] hover:underline"
          >
            Github link to project
          </a>
        </div>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--color-text)] border-b border-black/10 dark:border-white/10 pb-4 mb-6">
          <p>
            <strong className="text-[var(--color-header)] font-semibold">
              Role:
            </strong>{" "}
            Solo Developer
          </p>
          <p>
            <strong className="text-[var(--color-header)] font-semibold">
              Type:
            </strong>{" "}
            Personal Engine Project
          </p>
          <p>
            <strong className="text-[var(--color-header)] font-semibold">
              Timeline:
            </strong>{" "}
            Spring 2026
          </p>
          <p>
            <strong className="text-[var(--color-header)] font-semibold">
              Tech:
            </strong>{" "}
            C#, ASP.NET Core, JSON
          </p>
        </div>

        <p className="normal-text">
          In the automation game Satisfactory, end-game manufacturing requires
          balancing massively complex, multi-stage production lines. Calculating
          the optimal input ratios, power requirements, and logistical routing
          by hand quickly becomes a bottleneck.
        </p>

        <p className="normal-text">
          To solve this, I built a custom logistics calculator that acts as a
          production engine. The user inputs a target item and yield, and the
          application generates a mathematically optimized crafting tree
          detailing every machine, raw resource, and dependency required to
          maintain 100% efficiency.
        </p>

        <p className="normal-text">
          I built the backend engine in C# using ASP.NET Core, utilizing robust
          JSON serialization to dynamically parse raw game data files containing
          hundreds of nested recipes and items. The core logic relies on
          directed graph traversal algorithms to calculate the production
          chains, which are then served to a React and TypeScript frontend via a
          REST API.
        </p>
        <ImageGallery images={satisfactoryImages} />
      </PageContainer>
    </section>
  );
}
