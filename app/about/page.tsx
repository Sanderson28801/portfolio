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
          I'm currently pursuing a B.S. in Computer Science at Tufts University,
          where I maintain a 4.0 GPA and focus on building a strong foundation
          in both theory and practical software development.
        </p>

        <p className="normal-text">
          I enjoy working across the stack, from designing clean user interfaces
          to building reliable backend systems. I've been learning C# in my free
          and am interested in large scale enterprise software using OOP.
          Because of this, I'm especially interested in learning how real-world
          software systems are designed, scaled, and maintained.
        </p>

        <p className="normal-text">
          Outside of coursework, I enjoy collaborating on team-based projects,
          participating in hackathons, and continuously learning new tools and
          technologies.
        </p>
        <br></br>
        <h2 className="text-3xl md:text-3xl font-semibold text-[var(--color-header)]">
          Hobbies
        </h2>
        <p className="normal-text">
          I play Ultimate Frisbee with the Tuft's Emen where we compete
          nationally and attend tournaments across the country. I also love
          playing the Piano and have played in the Pit for musicals In a jazz
          band briefly, but generally just love to play on my own.
        </p>
        <ImageGallery images={aboutImages} />
      </PageContainer>
    </section>
  );
}
