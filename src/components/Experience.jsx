function formatPeriod(start, end) {
  const format = new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" });
  return `${format.format(new Date(start))} - ${format.format(new Date(end))}`;
}

export default function Experience({ items }) {
  return (
    <section
      id="experience"
      data-reveal="zoom"
      className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-slate-900"
    >
      <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-cyan-700 dark:text-cyan-300">
        Experience
      </p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white md:text-4xl">
        Roles focused on Laravel product delivery.
      </h2>

      <div className="mt-8 grid gap-4">
        {items.map((item, index) => (
          <article
            key={`${item.company}-${item.role}`}
            style={{ "--reveal-delay": `${140 + index * 110}ms` }}
            className="interactive-card rounded-[1.6rem] border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-slate-800/70"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">{item.role}</h3>
                <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
                  {item.company}
                </p>
              </div>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300">
                {formatPeriod(item.start, item.end)}
              </span>
            </div>

            <ul className="mt-5 space-y-3 pl-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
