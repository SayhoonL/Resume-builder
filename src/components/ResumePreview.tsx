import type { ResumeSection, HeaderInfo } from "../types/resume";
import { HeaderPreview } from "./HeaderPreview";

interface ResumePreviewProps {
  header: HeaderInfo;
  sections: ResumeSection[];
}

export function ResumePreview({ header, sections }: ResumePreviewProps) {
  return (
    <div className="w-full max-w-[1200px] mx-auto bg-white rounded-2xl px-16 py-12 border border-white/30 shadow-[0_12px_48px_rgba(0,0,0,0.12)] font-serif">
      <HeaderPreview header={header} />

      {sections.map((section) => (
        <section key={section.id} className="mb-6 animate-fade-in">
          <h2 className="text-lg font-bold mb-2 text-gray-900 uppercase tracking-wide">
            {section.title}
          </h2>
          <div className="border-b border-gray-400 mb-3"></div>

          <div className="text-left">
            {section.content.split("\n").map((line, index) => (
              <p key={index} className="mb-1 leading-normal text-gray-800 text-[15px]">
                {line || "\u00A0"}
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
