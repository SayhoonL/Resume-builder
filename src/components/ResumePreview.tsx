import type { ResumeSection, SectionType } from "../types/resume";

interface ResumePreviewProps {
  sections: ResumeSection[];
}

export function ResumePreview({ sections }: ResumePreviewProps) {
  return (
    <div className="resume-preview">
      {sections.map((section) => (
        <section key={section.id} className="resume-section">
          <h2 className="resume-section-title">{section.title}</h2>

          <div className="resume-section-content">
            {section.content.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
