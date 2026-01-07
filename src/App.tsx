import { useState } from "react";
import type { ResumeSection, SectionType } from "./types/resume";
import { ResumeEditor } from "./components/ResumeEditor";
import { ResumePreview } from "./components/ResumePreview";
import "./App.css";

type Mode = "edit" | "preview";

const DEFAULT_TITLES: Record<SectionType, string> = {
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
    content: "Experienced software engineer with 5+ years in web development.",
  },
  {
    id: generateId(),
    type: "experience",
    title: "Work Experience",
    content:
      "Senior Frontend Engineer at Tech Corp\n2020 - Present\nBuilt scalable React applications\nLed a team of 4 developers",
  },
  {
    id: generateId(),
    type: "education",
    title: "Education",
    content: "B.S. Computer Science\nUniversity Name, 2018",
  },
  {
    id: generateId(),
    type: "skills",
    title: "Technical Skills",
    content: "JavaScript, TypeScript, React, Node.js, Python",
  },
];

function App() {
  const [mode, setMode] = useState<Mode>("edit");
  const [sections, setSections] = useState<ResumeSection[]>(initialSections);

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
    <div className="app">
      <header className="app-header">
        <h1>Resume Builder</h1>

        <div className="mode-toggle">
          <button
            className={mode === "edit" ? "active" : ""}
            onClick={() => setMode("edit")}
          >
            Edit
          </button>

          <button
            className={mode === "preview" ? "active" : ""}
            onClick={() => setMode("preview")}
          >
            Preview
          </button>

          <button onClick={() => window.print()}>
            Print / PDF
          </button>
        </div>
      </header>

      <main className="app-main">
        {mode === "edit" && (
          <ResumeEditor
            sections={sections}
            onUpdate={updateSection}
            onAdd={addSection}
            onDelete={deleteSection}
            onReorder={reorderSections}
          />
        )}

        {mode === "preview" && <ResumePreview sections={sections} />}
      </main>
    </div>
  );
}

export default App;
