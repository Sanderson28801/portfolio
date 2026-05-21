import PageContainer from "@/components/layout/PageContainer";
import Link from "next/link";
import ImageGallery from "@/components/ui/ImageGallery";

export default function SatisfactoryPlanner() {
  const satisfactoryImages = [
    {
      src: "/SatisfactoryPlannerHomepage.png",
      alt: "Satisfactory Planner Homepage",
      caption:
        "Satisfactory Factory Planner Homepage where users can input the items they want to produce and the desired production rate",
    },
    {
      src: "/SatisfactoryPlannerRecipePage.png",
      alt: "Satisfactory Planner Recipe Page",
      caption:
        "Satisfactory Factory Planner Recipe Page which shows the crafting tree for a given item and production rate",
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

        <p className="normal-text">
          Satisfactory is a factory building game where players build and
          optimize complex production lines to manufacture a wide variety of
          products. Later in the game, crafting trees and productions lines
          become much more complex and it is difficult to figure out the optimal
          way to set up your factory.
        </p>

        <p className="normal-text">
          To address this issue, the Satisfactory Factory Planner app I built
          allows players to input the items they want to produce and the desired
          production rate, and then generates an optimized crafting tree for
          that detailing all the machines and power they will need.
        </p>

        <p className="normal-text">
          I'm becoming interested in C# and enterprise software development, so
          I built this app using React, Typescript, and Tailwind CSS for the
          frontend and ASP.Net for the backend. The app parses game data from
          JSON files to get information about all the items, recipes, and
          machines in the game, and then uses that data to build the crafting
          trees using graph traversal algorithms. The app also has a sleek and
          intuitive UI that allows users to easily input their desired items and
          production rates, and then visualize the resulting crafting tree in an
          interactive way.
        </p>
        <ImageGallery images={satisfactoryImages} />
      </PageContainer>
    </section>
  );
}
