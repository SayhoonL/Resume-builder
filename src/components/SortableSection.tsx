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
    <div
      ref={setNodeRef}
      style={style}
      className="border-2 border-blue-200 rounded-xl p-5 mb-5 bg-gradient-to-b from-blue-50 to-white transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
    >
      <div className="flex items-center gap-3 mb-4">
        <span
          className="cursor-grab text-xl select-none opacity-50 hover:opacity-100 transition-opacity duration-200 active:cursor-grabbing text-blue-600"
          {...attributes}
          {...listeners}
        >
          ☰
        </span>

        <input
          className="flex-1 text-lg font-semibold px-3 py-2 border-2 border-transparent rounded-lg transition-all duration-200 bg-transparent text-gray-800 focus:outline-none focus:border-[#667eea] focus:bg-white focus:shadow-[0_0_0_3px_rgba(102,126,234,0.1)]"
          value={section.title}
          onChange={(e) => onUpdate(section.id, "title", e.target.value)}
        />

        <button
          className="bg-red-600/10 border-none text-red-600 text-lg cursor-pointer w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-red-600 hover:text-white hover:scale-105"
          onClick={() => onDelete(section.id)}
        >
          ✕
        </button>
      </div>

      <textarea
        className="w-full min-h-[120px] resize-y px-3 py-3 font-[inherit] text-sm leading-relaxed border-2 border-gray-200 rounded-lg transition-all duration-200 bg-white focus:outline-none focus:border-[#667eea] focus:shadow-[0_0_0_3px_rgba(102,126,234,0.1)]"
        rows={5}
        value={section.content}
        onChange={(e) => onUpdate(section.id, "content", e.target.value)}
      />
    </div>
  );
}
