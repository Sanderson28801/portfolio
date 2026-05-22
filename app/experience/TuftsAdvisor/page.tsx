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
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--color-text)] border-b border-black/10 dark:border-white/10 pb-4 mb-6">
          <p>
            <strong className="text-[var(--color-header)] font-semibold">
              Role:
            </strong>{" "}
            Backend & API Integration
          </p>
          <p>
            <strong className="text-[var(--color-header)] font-semibold">
              Team Size:
            </strong>{" "}
            6
          </p>
          <p>
            <strong className="text-[var(--color-header)] font-semibold">
              Timeline:
            </strong>{" "}
            48 Hours
          </p>
          <p>
            <strong className="text-[var(--color-header)] font-semibold">
              Tech:
            </strong>{" "}
            Python, Flask, Graph API
          </p>
        </div>
        <p className="normal-text">
          During Tufts University's JumboHack, our team of six noticed a major
          inefficiency in academic advising: advisors spend countless hours
          answering the same routine policy questions. We had 48 hours to build
          a solution from scratch, resulting in TuftsAdvisor, a
          Retrieval-Augmented Generation (RAG) tool that automates these
          workflows.
        </p>
        <p className="normal-text">
          I architected the backend using Python and Flask, integrating a RAG
          pipeline to pull accurate institutional policies. We then connected
          the system directly to an advisor's inbox using the Microsoft Graph
          API. Instead of sending emails automatically, the model reads incoming
          student inquiries and generates highly contextual draft responses
          directly into the advisor's Outlook Drafts folder.
        </p>
        <p className="normal-text">
          This "human-in-the-loop" approach eliminates the friction of writing
          simple emails while allowing the advisor to quickly review and
          personalize the message before sending. Our fully functional prototype
          won the 'Down the Rabbit Hole' track, demonstrating how effectively
          backend data pipelines can optimize administrative bottlenecks.
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
              A demonstration of the RAG pipeline utilizing the Microsoft Graph
              API to securely draft Outlook responses.
            </p>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
