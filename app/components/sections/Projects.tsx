import PageContainer from "@/components/layout/PageContainer";

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <PageContainer>
        <h2 className="text-xl font-semibold text-[var(--color-header)]">
          Projects
        </h2>

        <ul className="mt-6 space-y-4">
          <li>
            <h3 className="font-medium text-[var(--color-header)]">
              TuftsAdvisor
            </h3>

            <p className="mt-1 text-[var(--color-text)]">
              An Outlook plugin and chatbot that assists students and advisors
              by providing real-time academic policy guidance and drafting
              advisor email responses.
            </p>

            <p className="mt-2 text-sm text-[var(--color-text)]">
              Built with React, Python, Flask, MongoDB, and Microsoft Graph API.
            </p>
          </li>
          <li>
            <h3 className="mt-6 font-medium text-[var(--color-header)]">
              Teaching Platform for Non-Profit
            </h3>

            <p className="mt-1 text-[var(--color-text)]">
              A full-stack web application that enables student enrollment and
              allows teachers and administrators to manage courses and users.
            </p>

            <p className="mt-2 text-sm text-[var(--color-text)]">
              Built with React, Node.js, MongoDB, and Tailwind CSS.
            </p>
          </li>
        </ul>
        
      </PageContainer>
    </section>
  );
}
