import PageContainer from "@/components/layout/PageContainer";

export default function About() {
  return (
    <PageContainer>
      <h2 className="text-xl font-semibold text-[var(--color-header)]">
        About
      </h2>

      <p className="mt-4 text-[var(--color-text)] leading-relaxed">
        I’m currently pursuing a B.S. in Computer Science at Tufts University,
        where I maintain a 4.0 GPA and focus on building a strong foundation in
        both theory and practical software development.
      </p>

      <p className="mt-4 text-[var(--color-text)] leading-relaxed">
        I enjoy working across the stack, from designing clean user interfaces
        to building reliable backend systems. I’m especially interested in
        learning how real-world software systems are designed, scaled, and
        maintained.
      </p>

      <p className="mt-4 text-[var(--color-text)] leading-relaxed">
        Outside of coursework, I enjoy collaborating on team-based projects,
        participating in hackathons, and continuously learning new tools and
        technologies.
      </p>
    </PageContainer>
  );
}
