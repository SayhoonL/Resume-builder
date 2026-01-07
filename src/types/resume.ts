// Finite set of allowed section types
export type SectionType =
  | "summary"
  | "experience"
  | "education"
  | "skills"
  | "projects";

// Shape of a resume section
export interface ResumeSection {
  id: string;
  type: SectionType;
  title: string;
  content: string;
}
