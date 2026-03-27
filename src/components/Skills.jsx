export default function Skills({ groups }) {
  return (
    <section className="fade-up rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-slate-900">
      <div className="max-w-2xl">
        <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-cyan-700 dark:text-cyan-300">
          Skills
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white md:text-4xl">
          Tools and technologies I use to ship backend products.
        </h2>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {groups.map((group) => (
          <article
            key={group.title}
            className="rounded-[1.6rem] border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-slate-800/70"
          >
            <h3 className="text-lg font-bold text-slate-950 dark:text-white">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
