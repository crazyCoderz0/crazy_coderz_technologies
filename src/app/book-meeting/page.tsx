import { MeetingForm } from "@/components/meeting-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Book a Meeting",
  description: `Schedule a discovery meeting with ${siteConfig.name} and submit your project details.`,
  path: "/book-meeting"
});

export default function BookMeetingPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a Meeting"
        title="Choose a time to discuss your product goals with our team"
        description="Use our booking contact to request a meeting, then share your project details so we can confirm the best time quickly."
      />

      <section className="section">
        <div className="container meetingGrid">
          <div className="calendlyCard">
            <SectionHeading
              eyebrow="Schedule"
              title="Pick a meeting slot"
              description="Meeting coordination is handled through our official scheduling email so clients can request a time directly."
            />
            <div className="schedulePanel">
              <div className="scheduleHighlight">
                <p className="eyebrow">Scheduling Contact</p>
                <h3>{siteConfig.email}</h3>
                <p className="muted">
                  Use this email account to coordinate discovery calls, project discussions, and follow-up meetings with Crazy Coderz Technologies.
                </p>
              </div>

              <div className="scheduleActions">
                <a
                  href={`mailto:${siteConfig.email}?subject=Book%20a%20Meeting%20with%20Crazy%20Coderz%20Technologies`}
                  className="button buttonPrimary"
                >
                  Email to Book a Meeting
                </a>
                <a
                  href={`https://calendar.google.com/calendar/u/0/r/eventedit?add=${siteConfig.email}`}
                  target="_blank"
                  rel="noreferrer"
                  className="button buttonSecondary"
                >
                  Open Google Calendar
                </a>
              </div>

              <div className="scheduleNotes">
                <article className="card scheduleNoteCard">
                  <strong>How it works</strong>
                  <p className="muted">
                    Send your preferred date and time, and our team will confirm the meeting from <span className="inlineEmail">{siteConfig.email}</span>.
                  </p>
                </article>
                <article className="card scheduleNoteCard">
                  <strong>Recommended details</strong>
                  <p className="muted">
                    Include your name, company, project type, goals, and expected timeline so we can prepare the right discussion points.
                  </p>
                </article>
              </div>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Meeting Details"
              title="Submit your preferred time and project context"
              description="Your request is stored in Firebase under a dedicated meeting collection so your team can track and respond quickly."
            />
            <MeetingForm />
          </div>
        </div>
      </section>
    </>
  );
}
