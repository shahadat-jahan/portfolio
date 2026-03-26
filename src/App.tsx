import { useEffect, useState } from "react";
import About from "./components/About";
import EducationContact from "./components/EducationContact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { education, experiences, profile, projects, skillGroups, stats, strengths } from "./components/data";

function getInitialTheme(): "light" | "dark" {
  const saved = window.localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") {
    return saved;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(14,116,144,0.08),transparent_22%),linear-gradient(180deg,#fbfdff_0%,#f3f6f8_100%)] text-slate-950 transition-colors dark:bg-[radial-gradient(circle_at_top_left,rgba(94,209,234,0.08),transparent_22%),linear-gradient(180deg,#061016_0%,#071218_100%)] dark:text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-6 px-4 py-6 md:px-6 lg:px-8">
        <header className="rounded-[2.25rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-slate-950/75 dark:shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
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
    </div>
  );
}
