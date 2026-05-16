import PageContainer from "@/components/layout/PageContainer";

export default function SatisfactoryPlanner() {
  return (
    <section className="pt-16 pb-24">
      <PageContainer>
        <h1 className="text-3xl md:text-4xl font-semibold text-[var(--color-header)]">
          Satisfactory Factory Planner
        </h1>

        <p className="mt-4 text-[var(--color-text)] leading-relaxed">
          Satisfactory is a factory building game where players build and
          optimize complex production lines to manufacture a wide variety of
          products. Later in the game, crafting trees and productions lines
          become much more complex and it is difficult to figure out the optimal
          way to set up your factory.
        </p>

        <p className="mt-4 text-[var(--color-text)] leading-relaxed">
          To address this issue, the Satisfactory Factory Planner app I built
          allows players to input the items they want to produce and the desired
          production rate, and then generates an optimized crafting tree for
          that detailing all the machines and power they will need.
        </p>

        <p className="mt-4 text-[var(--color-text)] leading-relaxed">
          I'm becoming interested in C# and enterprise software development, so
          I built this app using WPF for the frontend and .Net for the backend.
          The app parses game data from JSON files to get information about all
          the items, recipes, and machines in the game, and then uses that data
          to build the crafting trees using graph traversal algorithms. The app
          also has a sleek and intuitive UI that allows users to easily input
          their desired items and production rates, and then visualize the
          resulting crafting tree in an interactive way.
        </p>
      </PageContainer>
    </section>
  );
}
