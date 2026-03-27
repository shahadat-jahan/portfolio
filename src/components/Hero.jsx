function PinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s6-4.35 6-10a6 6 0 1 0-12 0c0 5.65 6 10 6 10Z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  );
}

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

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
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

export default function Hero({ profile, stats }) {
  return (
    <section className="grid gap-6 pt-8 lg:grid-cols-[minmax(0,1.1fr)_320px] lg:items-start">
      <div className="fade-up space-y-6 rounded-[2rem] border border-slate-200/80 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-slate-900 dark:shadow-[0_18px_50px_rgba(0,0,0,0.28)] md:p-9">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-cyan-700 dark:text-cyan-300">
              Software Engineer / Monolith Systems / API Platforms
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-none tracking-tight text-slate-950 dark:text-white md:text-6xl">
              Building reliable products for teams that need systems to hold up.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
              Experienced in Laravel, APIs, Monolith applications and Blade-based
              frontend work for CRM, ERP, academic, and workflow-heavy business
              systems. Currently learning React and Vue to expand full-stack
              delivery.
            </p>
          </div>

          <div className="order-first flex md:order-last md:justify-end">
            <div className="relative w-36 shrink-0 rounded-[1.75rem] bg-gradient-to-br from-cyan-200 via-cyan-50 to-slate-100 p-2 dark:from-cyan-400/30 dark:via-slate-900 dark:to-slate-800">
              <img
                src={profile.image}
                alt={`Portrait of ${profile.name}`}
                className="aspect-[4/5] w-full rounded-[1.35rem] object-cover object-top"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 dark:border-white/10 dark:bg-slate-800 dark:text-slate-200">
            <PinIcon />
            {profile.location}
          </span>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 dark:border-white/10 dark:bg-slate-800 dark:text-slate-200"
          >
            <MailIcon />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 dark:border-white/10 dark:bg-slate-800 dark:text-slate-200"
          >
            <PhoneIcon />
            {profile.phone}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 dark:border-white/10 dark:bg-slate-800 dark:text-slate-200"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 dark:bg-cyan-400 dark:text-slate-950"
          >
            <ArrowIcon />
            View Projects
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-slate-800 dark:text-slate-100"
          >
            <DownloadIcon />
            Download Resume
          </a>
        </div>
      </div>

      <div className="fade-up-delay grid gap-4">
        {stats.map((item, index) => (
          <article
            key={item.label}
            className={`rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-slate-900 dark:shadow-[0_14px_40px_rgba(0,0,0,0.24)] ${
              index === 0 ? "lg:mt-10" : ""
            }`}
          >
            <p className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">
              {item.value}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {item.label}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
