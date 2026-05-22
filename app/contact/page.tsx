import PageContainer from "@/components/layout/PageContainer";
import { FiMail, FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";

export default function Contact() {
  return (
    <section className="pt-16 pb-24">
      <PageContainer>
        <h1 className="text-3xl md:text-4xl font-semibold text-[var(--color-header)]">
          Contact
        </h1>

        <p className="mt-4 text-[var(--color-text)] leading-relaxed max-w-[75ch]">
          I am actively seeking backend, data engineering, and general software
          engineering internships for <strong>Summer 2027</strong>. Whether you
          have an open role, a project idea, or just want to connect, my inbox
          is always open.
        </p>
        <br />

        <div className="mt-6 flex flex-col space-y-6 text-[var(--color-text)] text-lg">
          {/* Email */}
          <a
            href="mailto:sanderson28801@gmail.com"
            className="flex items-center gap-3 hover:text-[var(--color-accent)] transition-colors w-fit"
          >
            <FiMail className="w-6 h-6" />
            <span>sanderson28801@gmail.com</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/spencer-anderson-14s/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-[var(--color-accent)] transition-colors w-fit"
          >
            <AiOutlineLinkedin className="w-6 h-6" />
            <span>spencer-anderson-14s</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Sanderson28801"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-[var(--color-accent)] transition-colors w-fit"
          >
            <FiGithub className="w-6 h-6" />
            <span>Sanderson28801</span>
          </a>
        </div>
      </PageContainer>
    </section>
  );
}
