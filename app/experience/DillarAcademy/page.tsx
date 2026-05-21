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
        <p className="normal-text">
          Dillar Academy is a nonprofit organization that provides a free
          English education to Uyghurs around the world. When we started
          creating the website for them, they had just a wix site which was
          incredibly laggy, and users joined classes by just joining a google
          meet link. They had no logins, no admins, and no users. This means
          that they had no way to track if a student was signed up for a class
          and no way to manage students at all.
        </p>

        <p className="normal-text">
          There was so much friction in using the system they had that they
          needed an upgrade. We designed and built a brand new custom website
          for them from scratch that included user authentication, an admin
          dashboard, and a course management system. This allowed them to focus
          on teaching English rather than getting bogged down in manual student
          management and configuring a buggy wix site.
        </p>

        <p className="normal-text">
          Over the course of 2 semesters, a team of 10 developers, a project
          manager, and a tech lead completed weekly sprints and slowly built
          this website from the ground up. We built a custom backend using
          NodeJS and MongoDB, and a custom frontend using React and TailwindCSS.
          While building the app, we kept in touch with the founder of Dillar
          Academy to make sure we were building the features they needed and
          that the design was something they liked.
        </p>

        <ImageGallery images={dillarImages} />
      </PageContainer>
    </section>
  );
}
