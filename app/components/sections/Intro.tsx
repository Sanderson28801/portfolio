import PageContainer from "@/components/layout/PageContainer";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";

export default function Intro() {
  return (
    <section className="pt-16 pb-24">
      <PageContainer>
        <h1 className="text-3xl md:text-4xl font-semibold text-[var(--color-header)]">
          Hello! I’m{" "}
          <span className="text-[var(--color-accent)]">Spencer Anderson</span>
        </h1>

        <p className="mt-4 text-lg text-[var(--color-text)] leading-relaxed max-w-[75ch]">
          I'm a computer science student at Tufts University and a software
          developer based out of Brooklyn NY. I taught myself web development
          and I love helping people .....
        </p>
        <br />
        <p className="text-[var(--color-text)]">
          <Link href={"https://github.com/Sanderson28801"}>
            <span className=" hover:text-[var(--color-accent)]">
              <FiGithub className="align-middle inline" /> GitHub
            </span>
            {" | "}
          </Link>
          <Link href={"https://www.linkedin.com/in/spencer-anderson-14s/"}>
            <span className="hover:text-[var(--color-accent)]">
              <AiOutlineLinkedin className="align-middle inline" /> LinkedIn
            </span>
            {" | "}
          </Link>
          <Link href="/about" className="hover:text-[var(--color-accent)]">
            Learn more about me
          </Link>
        </p>
      </PageContainer>
    </section>
  );
}
