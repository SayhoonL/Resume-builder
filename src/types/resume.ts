// Finite set of allowed section types
export type SectionType =
  | "header"
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

// Header information structure
export interface HeaderInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  website: string;
}
