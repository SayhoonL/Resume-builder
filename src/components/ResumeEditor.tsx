import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import type { ResumeSection, SectionType, HeaderInfo } from "../types/resume";
import { SortableSection } from "./SortableSection";
import { HeaderEditor } from "./HeaderEditor";

interface ResumeEditorProps {
  header: HeaderInfo;
  onUpdateHeader: (field: keyof HeaderInfo, value: string) => void;
  sections: ResumeSection[];
  onUpdate: (
    id: string,
    field: "title" | "content",
    value: string
  ) => void;
  onAdd: (type: SectionType) => void;
  onDelete: (id: string) => void;
  onReorder: (sections: ResumeSection[]) => void;
}

export function ResumeEditor({
  header,
  onUpdateHeader,
  sections,
  onUpdate,
  onAdd,
  onDelete,
  onReorder,
}: ResumeEditorProps) {
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = sections.findIndex((s) => s.id === active.id);
    const newIndex = sections.findIndex((s) => s.id === over.id);

    onReorder(arrayMove(sections, oldIndex, newIndex));
  };

  return (
    <div className="w-full max-w-[2000px] mx-auto bg-white/[0.98] backdrop-blur-md rounded-2xl px-7 py-7 border border-white/30 shadow-[0_12px_48px_rgba(0,0,0,0.12)]">
      <h2 className="mt-0 mb-5 text-2xl text-gray-800">Edit Resume</h2>

      <HeaderEditor header={header} onUpdate={onUpdateHeader} />

      <select
        onChange={(e) => onAdd(e.target.value as SectionType)}
        className="w-full px-4 py-3 mb-6 border-2 border-gray-200 rounded-xl text-sm font-[inherit] bg-white cursor-pointer transition-all duration-200 hover:border-[#667eea] focus:outline-none focus:border-[#667eea] focus:shadow-[0_0_0_3px_rgba(102,126,234,0.1)]"
      >
        <option value="">Add section…</option>
        <option value="summary">Summary</option>
        <option value="experience">Experience</option>
        <option value="education">Education</option>
        <option value="skills">Skills</option>
        <option value="projects">Projects</option>
      </select>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={sections.map((s) => s.id)}
          strategy={verticalListSortingStrategy}
        >
          {sections.map((section) => (
            <SortableSection
              key={section.id}
              section={section}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}
