import PageContainer from "@/components/layout/PageContainer";
import Link from "next/link";
import ImageGallery from "@/components/ui/ImageGallery";

export default function DillarAcademy() {
  const dillarImages = [
    {
      src: "/DillarAcademy.png",
      alt: "Dillar Academy Homepage",
      caption: "Dillar Academy Welcome Page",
    },
    {
      src: "/DillarLogin.png",
      alt: "Dillar Academy Login Page",
      caption: "Dillar Academy Login Page which I prototyped",
    },
    {
      src: "/ClassBrowsing.png",
      alt: "Dillar Class Browsing Page",
      caption:
        "Dillar Academy's Class Browsing Page which allows students to enroll in classes",
    },
  ];
  return (
    <section className="pt-16 pb-24">
      <PageContainer>
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
            Dillar Academy
          </h1>
        </div>
        <div className="mt-2">
          <a
            href="https://github.com/JumboCode/dillar-academy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] hover:underline"
          >
            Github link to project
          </a>
        </div>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--color-text)] border-b border-black/10 dark:border-white/10 pb-4 mb-6">
          <p>
            <strong className="text-[var(--color-header)] font-semibold">
              Role:
            </strong>{" "}
            Backend Developer
          </p>
          <p>
            <strong className="text-[var(--color-header)] font-semibold">
              Team Size:
            </strong>{" "}
            10
          </p>
          <p>
            <strong className="text-[var(--color-header)] font-semibold">
              Timeline:
            </strong>{" "}
            8 Months
          </p>
          <p>
            <strong className="text-[var(--color-header)] font-semibold">
              Tech:
            </strong>{" "}
            Node.js, MongoDB
          </p>
        </div>
        <p className="normal-text">
          Dillar Academy is a nonprofit organization providing free English
          education to Uyghur students globally. Their legacy system—a basic Wix
          site paired with public Google Meet links lacked authentication, user
          roles, and database management. Administrators had no systematic way
          to track enrollment, and students experienced high friction just
          trying to join a class.
        </p>

        <p className="normal-text">
          To resolve this, our team engineered a custom, full-stack application
          from the ground up. I contributed heavily to the backend architecture
          using Node.js and MongoDB, implementing secure user authentication,
          role-based access control (admins vs. students), and a relational
          course management system. This allowed the organization to automate
          student tracking and focus entirely on education.
        </p>

        <p className="normal-text">
          Over the course of two semesters, I collaborated closely within a
          10-person agile development team. Working alongside a project manager
          and tech lead, we executed weekly sprints and maintained continuous
          communication with the nonprofit's founder to ensure our database
          architecture and feature set precisely matched their operational
          needs.
        </p>

        <ImageGallery images={dillarImages} />
      </PageContainer>
    </section>
  );
}
