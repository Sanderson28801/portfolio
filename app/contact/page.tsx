import PageContainer from "@/components/layout/PageContainer";

export default function Contact() {
  return (
    <section className="pt-16 pb-24">
      <PageContainer>
        <h1 className="text-3xl md:text-4xl font-semibold text-[var(--color-header)]">
          Contact
        </h1>

        <p className="mt-4 text-[var(--color-text)] leading-relaxed">
          I'm currently looking for software engineering internships and new
          opportunities. Whether you have a question, a project idea, or just
          want to connect, feel free to reach out to me through any of the
          channels below!
        </p>

        <br />

        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-header)]">
          Let's Connect
        </h2>

        <div className="mt-4 flex flex-col space-y-4 text-[var(--color-text)] leading-relaxed">
          {/* Email */}
          <p>
            <span className="font-semibold text-[var(--color-header)]">
              Email:{" "}
            </span>
            <a
              href="mailto:spencer.anderson@tufts.edu"
              className="hover:underline hover:opacity-80 transition-opacity"
            >
              spencer.anderson@tufts.edu
            </a>
          </p>

          {/* LinkedIn */}
          <p>
            <span className="font-semibold text-[var(--color-header)]">
              LinkedIn:{" "}
            </span>
            <a
              href="https://www.linkedin.com/in/spencer-anderson-14s/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:opacity-80 transition-opacity"
            >
              spencer-anderson14
            </a>
          </p>

          {/* GitHub */}
          <p>
            <span className="font-semibold text-[var(--color-header)]">
              GitHub:{" "}
            </span>
            <a
              href="https://github.com/Sanderson28801"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:opacity-80 transition-opacity"
            >
              github.com/Sanderson28801
            </a>
          </p>
        </div>
      </PageContainer>
    </section>
  );
}
