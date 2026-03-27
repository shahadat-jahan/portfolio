export default function Navbar({ theme, onToggleTheme, resume }) {
  return (
    <nav className="flex flex-col gap-4 border-b border-slate-200/70 pb-6 dark:border-white/10 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900 text-sm font-bold tracking-[0.25em] text-white dark:bg-cyan-400 dark:text-slate-950">
          SU
        </div>
        <div>
          <p className="text-lg font-extrabold tracking-tight text-slate-950 dark:text-white">
            MD. Shahadat Uddin
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Software Engineer (Backend-focused)
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {[
          ["About", "#about"],
          ["Experience", "#experience"],
          ["Projects", "#projects"],
          ["Contact", "#contact"],
        ].map(([label, href]) => (
          <a
            key={label}
            href={href}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-cyan-500/40 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200"
          >
            {label}
          </a>
        ))}
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-cyan-700 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 dark:bg-cyan-400 dark:text-slate-950"
        >
          Resume
        </a>
        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200"
        >
          {theme === "light" ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07 6.7 17.3M17.3 6.7l1.77-1.77" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
