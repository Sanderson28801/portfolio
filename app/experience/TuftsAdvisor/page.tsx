import PageContainer from "@/components/layout/PageContainer";

export default function TuftsAdvisor() {
  return (
    <section className="pt-16 pb-24">
      <PageContainer>
        <h1 className="text-3xl md:text-4xl font-semibold text-[var(--color-header)]">
          TuftsAdvisor
        </h1>

        <p className="mt-4 text-[var(--color-text)] leading-relaxed">
          JumboHack is the hackathon for Tuft's University. It takes place over
          one weekend giving developers just 48 hours to build a project from
          scratch. I participated in JumboHack 2024 with a team of 5 other
          students and we built TuftsAdvisor, an Outlook plugin and chatbot that
          streamlines academic advising using retrieval-augmented generation.
        </p>

        <p className="mt-4 text-[var(--color-text)] leading-relaxed">
          We then linked out model to outlook, allowing advisors to "auto-reply"
          to students inquires about school policy. These auto generated
          messages would be left in the advisors drafts folder and not sent to
          students automatically so they could be edited and personalized before
          being sent out. This helps address the issue that advisors often must
          answer the same questions over and over, but there is no way to
          automate these mundane rote messages except now through TuftsAdvisor.
        </p>

        <p className="mt-4 text-[var(--color-text)] leading-relaxed">
          We built the app using Python and Flang for a simple chatbot app. Then
          we used Microsoft Graph API to connect our model to outlook and allow
          it to read and write draft messages. We were the winners of the Down
          the Rabbit Hole track, which required that most of the members be
          freshmen.
        </p>
      </PageContainer>
    </section>
  );
}
