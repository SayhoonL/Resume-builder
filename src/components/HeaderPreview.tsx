import type { HeaderInfo } from "../types/resume";

interface HeaderPreviewProps {
  header: HeaderInfo;
}

export function HeaderPreview({ header }: HeaderPreviewProps) {
  const contactItems = [
    header.email,
    header.phone,
    header.location,
    header.linkedin,
    header.website,
  ].filter((item) => item.trim() !== "");

  return (
    <div className="mb-6 pb-4 border-b-2 border-gray-900">
      <h1 className="text-3xl font-bold mb-2 text-gray-900 uppercase tracking-wide">
        {header.name || "Your Name"}
      </h1>
      {contactItems.length > 0 && (
        <div className="text-sm text-gray-700">
          {contactItems.map((item, index) => (
            <span key={index}>
              {item}
              {index < contactItems.length - 1 && " | "}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
