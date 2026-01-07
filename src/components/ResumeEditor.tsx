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

import type { ResumeSection, SectionType } from "../types/resume";
import { SortableSection } from "./SortableSection";

interface ResumeEditorProps {
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
    <div className="resume-editor">
      <h2>Edit Resume</h2>

      <select onChange={(e) => onAdd(e.target.value as SectionType)}>
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
