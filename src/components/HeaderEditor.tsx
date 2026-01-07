import type { HeaderInfo } from "../types/resume";

interface HeaderEditorProps {
  header: HeaderInfo;
  onUpdate: (field: keyof HeaderInfo, value: string) => void;
}

export function HeaderEditor({ header, onUpdate }: HeaderEditorProps) {
  return (
    <div className="border-2 border-blue-200 rounded-xl p-5 mb-5 bg-gradient-to-b from-blue-50 to-white transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 text-center">
        Contact Information
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            value={header.name}
            onChange={(e) => onUpdate("name", e.target.value)}
            placeholder="Sayhoon Lee"
            className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg text-sm transition-all duration-200 focus:outline-none focus:border-[#667eea] focus:shadow-[0_0_0_3px_rgba(102,126,234,0.1)]"
          />
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={header.email}
              onChange={(e) => onUpdate("email", e.target.value)}
              placeholder="Sayhoon77@gmail.com"
              className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg text-sm transition-all duration-200 focus:outline-none focus:border-[#667eea] focus:shadow-[0_0_0_3px_rgba(102,126,234,0.1)]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              value={header.phone}
              onChange={(e) => onUpdate("phone", e.target.value)}
              placeholder="(248) 662-7401"
              className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg text-sm transition-all duration-200 focus:outline-none focus:border-[#667eea] focus:shadow-[0_0_0_3px_rgba(102,126,234,0.1)]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              value={header.location}
              onChange={(e) => onUpdate("location", e.target.value)}
              placeholder="Novi, MI"
              className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg text-sm transition-all duration-200 focus:outline-none focus:border-[#667eea] focus:shadow-[0_0_0_3px_rgba(102,126,234,0.1)]"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              LinkedIn
            </label>
            <input
              type="text"
              value={header.linkedin}
              onChange={(e) => onUpdate("linkedin", e.target.value)}
              placeholder="linkedin.com/in/sayhoonlee"
              className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg text-sm transition-all duration-200 focus:outline-none focus:border-[#667eea] focus:shadow-[0_0_0_3px_rgba(102,126,234,0.1)]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Website/Portfolio
            </label>
            <input
              type="text"
              value={header.website}
              onChange={(e) => onUpdate("website", e.target.value)}
              placeholder="www.sayhoonlee.com"
              className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg text-sm transition-all duration-200 focus:outline-none focus:border-[#667eea] focus:shadow-[0_0_0_3px_rgba(102,126,234,0.1)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
