import PageContainer from "@/components/layout/PageContainer";
import ImageGallery from "@/components/ui/ImageGallery";
export default function About() {
  const aboutImages = [
    {
      src: "/EmenHuddle.jpeg",
      alt: "Ultimate Frisbee huddle",
      caption: "Me and the Emen huddling at an important tournament",
    },
    {
      src: "/PitPiano.jpeg",
      alt: "Playing piano in the pit",
      caption: "Me playing piano with the Pit in a High School Musical",
    },
  ];
  return (
    <section className="pt-16 pb-24">
      <PageContainer>
        <h1 className="text-3xl md:text-4xl font-semibold text-[var(--color-header)]">
          About
        </h1>

        <p className="normal-text">
          I am currently pursuing a B.S. in Computer Science at Tufts
          University, maintaining a 4.0 GPA. While I have experience building
          full-stack applications, I have found that my primary interest lies
          firmly in backend development and data organization.
        </p>

        <p className="normal-text">
          I enjoy the mechanics of how software operates under the hood. Whether
          I am structuring a relational database, writing REST APIs, or
          exploring new C# features, I am driven by the challenge of designing
          clean, logical systems. My overarching goal is to build software that
          acts as a force for good—tools that are efficient, privacy-respecting,
          and highly practical.
        </p>

        <p className="normal-text">
          This interest in systems engineering carries over into my free time. I
          frequently play technical games like Satisfactory and GregTech, where
          I enjoy tackling complex automation logic, resource management, and
          infrastructure planning.
        </p>

        <br />
        <h2 className="text-3xl md:text-3xl font-semibold text-[var(--color-header)]">
          Currently Learning
        </h2>
        <p className="normal-text">
          I believe in continuously expanding my technical toolkit. This summer,
          I am taking an intensive Data Science course, diving deep into SQL and
          relational database management. I am focusing heavily on optimizing
          data queries and preparing to architect more complex, data-driven
          backend pipelines in my upcoming projects.
        </p>
        <h2 className="text-3xl md:text-3xl font-semibold text-[var(--color-header)]">
          Hobbies
        </h2>
        <p className="normal-text">
          Outside of Computer Science, I play Ultimate Frisbee with Tufts Emen,
          which involves a demanding weekly practice schedule and competing in
          national collegiate tournaments. I also love hiking, skiing, and the
          great outdoors. I am also an avid pianist with a background in
          classical and jazz. I've previously played in the pit for musicals,
          but these days I focus on studying ergonomic playing techniques and
          enjoying the instrument on my own.
        </p>
        <ImageGallery images={aboutImages} />
      </PageContainer>
    </section>
  );
}
