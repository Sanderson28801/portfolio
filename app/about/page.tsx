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
      </PageContainer>
    </section>
  );
}
