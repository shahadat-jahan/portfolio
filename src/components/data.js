export const profile = {
  name: "MD. Shahadat Uddin",
  title: "Software Engineer (Backend-focused)",
  location: "Dhaka, Bangladesh",
  availability: "Based in Dhaka, Bangladesh and remote anywhere",
  email: "shahadat.jahan@gmail.com",
  phone: "+8801673622719",
  image: `${import.meta.env.BASE_URL}shahadat-profile.png`,
  resume: `${import.meta.env.BASE_URL}Shahadat_Resume_v2.pdf`,
  linkedin: "https://www.linkedin.com/in/shahadat-jahan/",
};

export const skillGroups = [
  {
    title: "Backend",
    items: ["PHP", "Laravel", "RESTful APIs", "Laravel Sanctum", "Laravel JSON API", "Laravel Scout"],
  },
  {
    title: "Database",
    items: ["MySQL", "PostgreSQL", "Schema Design", "Query Optimization", "Indexing"],
  },
  {
    title: "Architecture & Practices",
    items: [
      "MVC Architecture",
      "SOLID Principles",
      "DRY Principles",
      "Clean Code",
      "API-First Development",
      "Token-based Authentication (Sanctum/JWT)",
      "RBAC",
    ],
  },
  {
    title: "DevOps",
    items: ["Docker", "CI/CD", "Swagger/OpenAPI", "Postman", "Git & GitHub", "Agile Workflow"],
  },
  {
    title: "Frontend",
    items: ["JavaScript", "jQuery", "Bootstrap", "CSS"],
  },
];

export const strengths = [
  {
    title: "Business software mindset",
    text: "I work on systems that teams actually run every day, from CRM pipelines to financial and academic operations, across both modular and monolith-style products.",
  },
  {
    title: "Performance-aware backend work",
    text: "Database structure, query quality, and API behavior are part of the implementation, not cleanup later.",
  },
  {
    title: "Cross-team delivery",
    text: "I am comfortable working with QA, frontend engineers, and product stakeholders inside sprint-based delivery.",
  },
];

export const experiences = [
  {
    role: "Software Engineer",
    company: "Vivasoft Limited",
    start: "2022-10-01",
    end: "2026-03-31",
    points: [
      "Architected and maintained a CRM platform covering lead tracking, prospect management, and sales operations.",
      "Designed and developed a Student Management System for academic, examination, and financial workflows.",
      "Built secure REST APIs with token authentication and role-based access control.",
      "Improved heavy database operations through indexing and query refactoring.",
      "Worked on monolith-style Laravel products where backend logic and Blade-based frontend delivery had to move together.",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "Swapnoloke",
    start: "2022-04-01",
    end: "2022-09-30",
    points: [
      "Developed Laravel backend modules for a Library Management System.",
      "Implemented ERP features for purchase, sales, and tender workflows.",
      "Contributed to requirement analysis, issue resolution, and production support.",
    ],
  },
];

export const projects = [
  {
    name: "Student Management System",
    type: "Academic platform",
    summary:
      "A monolith-style Laravel platform for scheduling, attendance, exams, promotions, fee management, financial reporting, and day-to-day academic operations.",
    stack: ["Laravel", "MySQL", "jQuery", "Bootstrap", "Docker"],
  },
  {
    name: "Flash Card API Platform",
    type: "API-first platform",
    summary:
      "A content API with authentication, full-text search, monitoring, and containerized deployment for reliable delivery.",
    stack: ["Laravel", "Laravel JSON API", "PostgreSQL", "Sanctum", "Scout", "Docker", "Feature Test"],
  },
  {
    name: "CRM System",
    type: "Sales operations platform",
    summary:
      "A CRM product for tracking leads, prospects, and conversion workflows with practical internal tooling.",
    stack: ["Laravel", "MySQL", "JavaScript", "Ajax", "Docker"],
  },
  {
    name: "ERP System",
    type: "Operations workflow system",
    summary:
      "An internal ERP setup for purchase, sales, and tender management with a strong focus on business-rule accuracy.",
    stack: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
  },
];

export const education = {
  degree: "B.Sc. in Computer Science & Engineering",
  school: "Uttara University, Dhaka",
  period: "Sep 2014 - Dec 2017",
};

export function getExperienceYears(items) {
  const earliest = items.reduce((min, item) => (item.start < min ? item.start : min), items[0].start);
  const startDate = new Date(earliest);
  const now = new Date();
  const totalMonths =
    (now.getFullYear() - startDate.getFullYear()) * 12 +
    (now.getMonth() - startDate.getMonth());
  const years = totalMonths / 12;

  if (years < 1) {
    return `${Math.max(totalMonths, 1)}+ months`;
  }

  return `${years.toFixed(1)}+ years`;
}

export function getDeliveredSystemsCount(items) {
  return `${items.length}+`;
}

export const stats = [
  { value: getExperienceYears(experiences), label: "Hands-on engineering experience" },
  { value: getDeliveredSystemsCount(projects), label: "Core business systems delivered" },
  { value: "API first + Monolith", label: "Primary implementation style" },
];
