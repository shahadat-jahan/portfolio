function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72l.35 2.81a2 2 0 0 1-.57 1.72l-1.2 1.2a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 1.72-.57l2.81.35A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.96 1.96 0 1 0 5.3 6.9 1.96 1.96 0 0 0 5.25 3Zm14.19 5.64c-2.25 0-3.26 1.24-3.82 2.11V8.5h-3.38V20h3.38v-6.21c0-1.63.31-3.2 2.34-3.2 2 0 2.03 1.87 2.03 3.3V20H23V13.2c0-3.34-.72-5.9-3.56-5.9Z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

export default function EducationContact({ education, profile }) {
  return (
    <section className="fade-up grid gap-4 lg:grid-cols-2">
      <article className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-slate-900">
        <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-cyan-700 dark:text-cyan-300">
          Education
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Academic foundation
        </h2>
        <h3 className="mt-6 text-xl font-bold text-slate-950 dark:text-white">{education.degree}</h3>
        <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{education.school}</p>
        <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{education.period}</p>
      </article>

      <article
        id="contact"
        className="rounded-[2rem] border border-slate-200/80 bg-slate-950 p-8 text-white shadow-[0_18px_50px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-cyan-400 dark:text-slate-950"
      >
        <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-cyan-300 dark:text-slate-950/70">
          Contact
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
          Open to software engineering opportunities.
        </h2>
        <p className="mt-5 text-sm leading-7 text-slate-200 dark:text-slate-950/80">
          If you are hiring for Laravel, API, or database-focused software engineering work,
          I am available for conversation.
        </p>

        <div className="mt-6 grid gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white dark:border-slate-950/10 dark:bg-slate-950/10 dark:text-slate-950"
          >
            <MailIcon />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white dark:border-slate-950/10 dark:bg-slate-950/10 dark:text-slate-950"
          >
            <PhoneIcon />
            {profile.phone}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white dark:border-slate-950/10 dark:bg-slate-950/10 dark:text-slate-950"
          >
            <LinkedInIcon />
            LinkedIn Profile
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white dark:border-slate-950/10 dark:bg-slate-950/10 dark:text-slate-950"
          >
            <DownloadIcon />
            Download Resume
          </a>
          <span className="px-1 pt-2 text-sm text-slate-200 dark:text-slate-950/80">
            {profile.availability}
          </span>
        </div>
      </article>
    </section>
  );
}
