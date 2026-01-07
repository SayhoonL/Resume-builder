import { useState } from "react";
import type { ResumeSection, SectionType, HeaderInfo } from "./types/resume";
import { ResumeEditor } from "./components/ResumeEditor";
import { ResumePreview } from "./components/ResumePreview";
import "./App.css";

type Mode = "edit" | "preview";

const DEFAULT_TITLES: Record<SectionType, string> = {
  header: "Contact Information",
  summary: "Professional Summary",
  experience: "Work Experience",
  education: "Education",
  skills: "Technical Skills",
  projects: "Projects",
};

const generateId = () =>
  Date.now().toString() + Math.random().toString(36);

const initialSections: ResumeSection[] = [
  {
    id: generateId(),
    type: "summary",
    title: "Professional Summary",
    content:
      "Software engineer with a strong foundation in frontend development and full-stack web applications. Experienced in building React + TypeScript interfaces, REST-driven systems, and deploying production applications on cloud platforms.",
  },
  {
    id: generateId(),
    type: "experience",
    title: "Experience",
    content:
      "Freelance Software Engineer | Sep 2024 – Present\n" +
      "• Developed responsive websites using React with a focus on usability and clean content presentation.\n" +
      "• Collaborated directly with clients to gather requirements and translate needs into functional web pages.\n" +
      "• Deployed and maintained applications using modern cloud and static hosting platforms.\n\n" +
      "Technical Instructor | University of Michigan | Sep 2022 – Sep 2024\n" +
      "• Taught web development fundamentals, backend design, and deployment workflows.\n" +
      "• Instructed students in Data Structures, Algorithms, and Object-Oriented Programming in C++.\n" +
      "• Guided teams through Git/GitHub collaboration and real-world coding practices.",
  },
  {
    id: generateId(),
    type: "education",
    title: "Education",
    content:
      "University of Michigan – Ann Arbor\n" +
      "Bachelor of Science in Computer Science\n" +
      "Sep 2020 – Jan 2025",
  },
  {
    id: generateId(),
    type: "skills",
    title: "Technical Skills",
    content:
      "Languages: Python, JavaScript, TypeScript, Java, C++, C, SQL\n" +
      "Frontend: React, TypeScript, Vite, HTML, CSS\n" +
      "Backend: Django, Django REST Framework, Flask, Node.js\n" +
      "Databases: PostgreSQL, SQLite, MongoDB\n" +
      "Cloud & Deployment: Google Cloud Platform (Cloud Run, Cloud SQL), Docker, Nginx, Heroku, GitHub Pages",
  },
  {
    id: generateId(),
    type: "projects",
    title: "Projects",
    content:
      "Schema-Driven Form Builder Platform | React, TypeScript, Vite\n" +
      "• Built a form builder that dynamically generates UI from structured JSON schemas.\n" +
      "• Designed reusable components and conditional rendering logic using React + TypeScript.\n" +
      "• Implemented submission workflows that serialize user input into structured JSON.\n\n" +
      "Developer-Centric Social Platform | React, Flask, SQL, GCP\n" +
      "• Developed a social media application using REST APIs for authentication, posts, comments, and likes.\n" +
      "• Deployed backend services on Google Cloud Run with data persisted in Cloud SQL.",
  },
];

function App() {
  const [mode, setMode] = useState<Mode>("edit");
  const [sections, setSections] = useState<ResumeSection[]>(initialSections);
  const [header, setHeader] = useState<HeaderInfo>({
    name: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    website: "",
  });

  const updateHeader = (field: keyof HeaderInfo, value: string) => {
    setHeader((prev) => ({ ...prev, [field]: value }));
  };

  const updateSection = (
    id: string,
    field: "title" | "content",
    value: string
  ) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === id ? { ...section, [field]: value } : section
      )
    );
  };

  const addSection = (type: SectionType) => {
    const newSection: ResumeSection = {
      id: generateId(),
      type,
      title: DEFAULT_TITLES[type],
      content: "",
    };

    setSections((prev) => [...prev, newSection]);
  };

  const deleteSection = (id: string) => {
    setSections((prev) => prev.filter((section) => section.id !== id));
  };

  const reorderSections = (newSections: ResumeSection[]) => {
    setSections(newSections);
  };

  return (
    <div className="w-full max-w-[1000px] px-6 py-8">
      <header className="app-header flex items-center justify-between mb-8 bg-white/95 backdrop-blur-md px-7 py-5 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent m-0">
          Resume Builder
        </h1>

        <div className="mode-toggle flex gap-2.5">
          <button
            className={`px-5 py-2.5 border-2 border-transparent rounded-xl text-sm font-semibold transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] ${
              mode === "edit"
                ? "bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white shadow-[0_4px_16px_rgba(102,126,234,0.4)]"
                : "bg-white/90"
            }`}
            onClick={() => setMode("edit")}
          >
            Edit
          </button>

          <button
            className={`px-5 py-2.5 border-2 border-transparent rounded-xl text-sm font-semibold transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] ${
              mode === "preview"
                ? "bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white shadow-[0_4px_16px_rgba(102,126,234,0.4)]"
                : "bg-white/90"
            }`}
            onClick={() => setMode("preview")}
          >
            Preview
          </button>

          <button
            className="px-5 py-2.5 border-2 border-transparent bg-white/90 rounded-xl text-sm font-semibold transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
            onClick={() => window.print()}
          >
            Print / PDF
          </button>
        </div>
      </header>

      <main className="flex justify-center items-start min-h-[400px] w-full">
        {mode === "edit" && (
          <ResumeEditor
            header={header}
            onUpdateHeader={updateHeader}
            sections={sections}
            onUpdate={updateSection}
            onAdd={addSection}
            onDelete={deleteSection}
            onReorder={reorderSections}
          />
        )}

        {mode === "preview" && <ResumePreview header={header} sections={sections} />}
      </main>
    </div>
  );
}

export default App;
