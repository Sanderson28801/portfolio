import PageContainer from "@/components/layout/PageContainer";

export default function About() {
  return (
    <section className="pt-16 pb-24">
      <PageContainer>
        <h1 className="text-3xl md:text-4xl font-semibold text-[var(--color-header)]">
          About
        </h1>

        <p className="mt-4 text-[var(--color-text)] leading-relaxed">
          I'm currently pursuing a B.S. in Computer Science at Tufts University,
          where I maintain a 4.0 GPA and focus on building a strong foundation
          in both theory and practical software development.
        </p>

        <p className="mt-4 text-[var(--color-text)] leading-relaxed">
          I enjoy working across the stack, from designing clean user interfaces
          to building reliable backend systems. I've been learning C# in my free
          and am interested in large scale enterprise software using OOP.
          Because of this, I'm especially interested in learning how real-world
          software systems are designed, scaled, and maintained.
        </p>

        <p className="mt-4 text-[var(--color-text)] leading-relaxed">
          Outside of coursework, I enjoy collaborating on team-based projects,
          participating in hackathons, and continuously learning new tools and
          technologies.
        </p>
        <br></br>
        <h2 className="text-3xl md:text-3xl font-semibold text-[var(--color-header)]">
          Hobbies
        </h2>
        <p className="mt-4 text-[var(--color-text)] leading-relaxed">
          I play Ultimate Frisbee with the Tuft's Emen where we compete
          nationally and attend tournaments across the country. I also love
          playing the Piano and have played in the Pit for musicals In a jazz
          band briefly, but generally just love to play on my own.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-6">
          {/* Frame 1 */}
          <div className="w-full sm:w-auto max-w-sm border-2 border-gray-200 dark:border-gray-700 p-3 rounded-xl shadow-sm flex flex-col items-center">
            <img
              src="/EmenHuddle.jpeg"
              alt="Ultimate Frisbee huddle"
              className="w-full h-auto rounded-lg object-contain"
            />
            <p className="mt-4 text-center text-[var(--color-text)] leading-relaxed">
              Me and the Emen huddling at an important tournament
            </p>
          </div>

          {/* Frame 2 */}
          <div className="w-full sm:w-auto max-w-sm border-2 border-gray-200 dark:border-gray-700 p-3 rounded-xl shadow-sm flex flex-col items-center">
            <img
              src="/PitPiano.jpeg"
              alt="Playing piano in the pit"
              className="w-full h-auto rounded-lg object-contain"
            />
            <p className="mt-4 text-center text-[var(--color-text)] leading-relaxed">
              Me playing piano with the Pit in a High School Musical
            </p>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
