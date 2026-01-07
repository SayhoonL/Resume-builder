import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { ResumeSection } from "../types/resume";

interface SortableSectionProps {
  section: ResumeSection;
  onUpdate: (
    id: string,
    field: "title" | "content",
    value: string
  ) => void;
  onDelete: (id: string) => void;
}

export function SortableSection({
  section,
  onUpdate,
  onDelete,
}: SortableSectionProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: section.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} className="editor-section">
      <div className="editor-header">
        <span className="drag-handle" {...attributes} {...listeners}>
          ☰
        </span>

        <input
          className="editor-title"
          value={section.title}
          onChange={(e) =>
            onUpdate(section.id, "title", e.target.value)
          }
        />

        <button className="delete-btn" onClick={() => onDelete(section.id)}>
          ✕
        </button>
      </div>

      <textarea
        className="editor-content"
        rows={5}
        value={section.content}
        onChange={(e) =>
          onUpdate(section.id, "content", e.target.value)
        }
      />
    </div>
  );
}
