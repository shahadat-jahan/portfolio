import { useEffect, useState } from "react";
import About from "./components/About";
import EducationContact from "./components/EducationContact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import {
  education,
  experiences,
  profile,
  projects,
  skillGroups,
  stats,
  strengths,
} from "./components/data";

function getInitialTheme() {
  const saved = window.localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") {
    return saved;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8%" },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 520);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(14,116,144,0.08),transparent_22%),linear-gradient(180deg,#fbfdff_0%,#f3f6f8_100%)] text-slate-950 transition-colors dark:bg-[radial-gradient(circle_at_top_left,rgba(94,209,234,0.08),transparent_22%),linear-gradient(180deg,#061016_0%,#071218_100%)] dark:text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="ambient-orb absolute left-[-6rem] top-10 h-44 w-44 rounded-full bg-cyan-300/30 blur-3xl dark:bg-cyan-400/20" />
        <div className="ambient-orb ambient-orb-delay absolute right-[-4rem] top-72 h-56 w-56 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-400/10" />
        <div className="ambient-orb ambient-orb-slow absolute bottom-16 left-1/3 h-40 w-40 rounded-full bg-emerald-200/30 blur-3xl dark:bg-emerald-300/10" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-6 px-4 py-6 md:px-6 lg:px-8">
        <header
          data-reveal="zoom"
          className="rounded-[2.25rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-slate-950/75 dark:shadow-[0_24px_70px_rgba(0,0,0,0.28)]"
        >
          <Navbar
            resume={profile.resume}
            theme={theme}
            onToggleTheme={() =>
              setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"))
            }
          />
          <Hero profile={profile} stats={stats} />
        </header>

        <main className="grid gap-6">
          <About strengths={strengths} />
          <Skills groups={skillGroups} />
          <Experience items={experiences} />
          <Projects items={projects} />
          <EducationContact education={education} profile={profile} />
        </main>
      </div>

      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-slate-900 shadow-[0_18px_35px_rgba(15,23,42,0.16)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:text-white dark:border-white/10 dark:bg-slate-900/90 dark:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-950 ${
          showBackToTop
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 15 6-6 6 6" />
        </svg>
      </button>
    </div>
  );
}
