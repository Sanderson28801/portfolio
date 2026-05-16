import PageContainer from "@/components/layout/PageContainer";

export default function DillarAcademy() {
  return (
    <section className="pt-16 pb-24">
      <PageContainer>
        <h1 className="text-3xl md:text-4xl font-semibold text-[var(--color-header)]">
          Dillar Academy
        </h1>

        <p className="mt-4 text-[var(--color-text)] leading-relaxed">
          Dillar Academy is a nonprofit organization that provides a free
          English education to Uyghurs around the world. When we started
          creating the website for them, they had just a wix site which was
          incredibly laggy, and users joined classes by just joining a google
          meet link. They had no logins, no admins, and no users. This means
          that they had no way to track if a student was signed up for a class
          and no way to manage students at all.
        </p>

        <p className="mt-4 text-[var(--color-text)] leading-relaxed">
          There was so much friction in using the system they had that they
          needed an upgrade. We designed and built a brand new custom website
          for them from scratch that included user authentication, an admin
          dashboard, and a course management system. This allowed them to focus
          on teaching English rather than getting bogged down in manual student
          management and configuring a buggy wix site.
        </p>

        <p className="mt-4 text-[var(--color-text)] leading-relaxed">
          Over the course of 2 semesters, a team of 10 developers, a project
          manager, and a tech lead completed weekly sprints and slowly built
          this website from the ground up. We built a custom backend using
          NodeJS and MongoDB, and a custom frontend using React and TailwindCSS.
          While building the app, we kept in touch with the founder of Dillar
          Academy to make sure we were building the features they needed and
          that the design was something they liked.
        </p>
      </PageContainer>
    </section>
  );
}
