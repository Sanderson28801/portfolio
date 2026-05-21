import PageContainer from "@/components/layout/PageContainer";
import Link from "next/link";

export default function TuftsAdvisor() {
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
            Tufts Advisor
          </h1>
        </div>
        <div className="mt-2">
          <a
            href="https://github.com/KY233466/JumboHack"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] hover:underline"
          >
            Github link to project
          </a>
        </div>
        <div className="mt-2">
          <a
            href="https://devpost.com/software/tuftsadvisor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] hover:underline"
          >
            Devpost submission
          </a>
        </div>

        <p className="normal-text">
          JumboHack is the hackathon for Tufts University. It takes place over
          one weekend giving developers just 48 hours to build a project from
          scratch. I participated in JumboHack 2024 with a team of 5 other
          students and we built TuftsAdvisor, an Outlook plugin and chatbot that
          streamlines academic advising using retrieval-augmented generation.
        </p>
        <p className="normal-text">
          We then linked out model to outlook, allowing advisors to "auto-reply"
          to students inquires about school policy. These auto generated
          messages would be left in the advisors drafts folder and not sent to
          students automatically so they could be edited and personalized before
          being sent out. This helps address the issue that advisors often must
          answer the same questions over and over, but there is no way to
          automate these mundane rote messages except now through TuftsAdvisor.
        </p>
        <p className="normal-text">
          We built the app using Python and Flask for a simple chatbot app. Then
          we used Microsoft Graph API to connect our model to outlook and allow
          it to read and write draft messages. We were the winners of the Down
          the Rabbit Hole track, which required that most of the members be
          freshmen.
        </p>

        <div className="flex justify-center mt-6">
          {/* Video Frame */}
          <div className="w-full sm:w-auto max-w-lg border-2 border-gray-200 dark:border-gray-700 p-3 rounded-xl shadow-sm flex flex-col items-center">
            {/* Responsive 16:9 Video Container */}
            <div className="w-full aspect-video rounded-lg overflow-hidden bg-black">
              <iframe
                src="https://www.youtube.com/embed/9oV0EOHMvZM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Caption */}
            <p className="mt-4 mx-15 text-center text-[var(--color-text)] leading-relaxed">
              A demonstration of TuftsAdvisor working with Outlook
            </p>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
