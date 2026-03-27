export default function Projects({ items }) {
  return (
    <section
      id="projects"
      data-reveal="zoom"
      className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-slate-900"
    >
      <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-cyan-700 dark:text-cyan-300">
        Projects
      </p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white md:text-4xl">
        Product systems built around real workflows.
      </h2>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {items.map((item, index) => (
          <article
            key={item.name}
            style={{ "--reveal-delay": `${140 + index * 90}ms` }}
            className="interactive-card rounded-[1.6rem] border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-slate-800/70"
          >
            <p className="text-xs font-extrabold uppercase tracking-[0.26em] text-cyan-700 dark:text-cyan-300">
              {item.type}
            </p>
            <h3 className="mt-3 text-xl font-bold text-slate-950 dark:text-white">{item.name}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {item.summary}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {item.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-500/40 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
