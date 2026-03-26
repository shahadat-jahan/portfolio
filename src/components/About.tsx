type Strength = {
  title: string;
  text: string;
};

type AboutProps = {
  strengths: Strength[];
};

export default function About({ strengths }: AboutProps) {
  return (
    <section id="about" className="fade-up grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <div className="rounded-[1.75rem] border border-slate-200/80 bg-slate-950 p-8 text-white shadow-[0_18px_50px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-cyan-400 dark:text-slate-950">
        <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-cyan-300 dark:text-slate-950/70">
          About
        </p>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
          Backend engineering for products that run real operations.
        </h2>
        <p className="mt-5 text-base leading-8 text-slate-200 dark:text-slate-950/80">
          My experience is centered on Laravel applications where APIs, data
          integrity, and maintainable business logic are part of daily product
          delivery. I care about systems that keep working when teams scale usage,
          not just when demos look good.
        </p>
      </div>

      <div className="grid gap-4">
        {strengths.map((item) => (
          <article
            key={item.title}
            className="rounded-[1.6rem] border border-slate-200/80 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-slate-900"
          >
            <h3 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
