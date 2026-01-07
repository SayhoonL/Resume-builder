# Resume Builder

A modern, interactive resume builder application built with React and TypeScript. Create, edit, and export professional resumes with an intuitive drag-and-drop interface.

## Features

### Core Functionality
- **Live Editing**: Real-time resume editing with instant preview
- **Drag & Drop**: Reorder resume sections with intuitive drag-and-drop functionality
- **Multiple Sections**: Support for various resume sections including:
  - Contact Information (name, email, phone, location, LinkedIn, portfolio)
  - Professional Summary
  - Work Experience
  - Education
  - Technical Skills
  - Projects

### User Experience
- **Dual-Mode Interface**: Toggle between Edit and Preview modes
- **Print/PDF Export**: Generate print-ready PDFs with proper formatting and margins
- **Responsive Design**: Clean, modern UI with glass-morphism effects
- **Professional Layout**: Resume preview follows standard professional formatting conventions

### Technical Highlights
- **Modern Stack**: Built with React 18, TypeScript, and Vite
- **Styling**: Tailwind CSS for utility-first styling approach
- **Type Safety**: Full TypeScript implementation for robust code
- **Component Architecture**: Modular, reusable components

## Tech Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript 5.6.2
- **Build Tool**: Vite 6.0.11
- **Styling**: Tailwind CSS 3.4.1
- **Drag & Drop**: @dnd-kit (core, sortable, utilities)

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd resume-builder
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## Usage

### Building Your Resume

1. **Edit Contact Information**
   - Enter your name, email, phone, location, LinkedIn, and portfolio URL
   - Fields are organized in a two-column layout for easy access

2. **Add/Edit Sections**
   - Use the "Add section..." dropdown to add new resume sections
   - Edit section titles and content directly in the editor
   - Drag the ☰ handle to reorder sections
   - Click the ✕ button to delete unwanted sections

3. **Preview Your Resume**
   - Click the "Preview" button to see your resume in professional format
   - The preview uses a clean, left-aligned layout with traditional resume styling

4. **Export to PDF**
   - Click "Print / PDF" to generate a print-ready version
   - Use your browser's print dialog to save as PDF
   - Optimized for standard letter-size paper with proper margins

## Project Structure

```
src/
├── components/
│   ├── HeaderEditor.tsx       # Contact information form
│   ├── HeaderPreview.tsx      # Contact information display
│   ├── ResumeEditor.tsx       # Main editing interface
│   ├── ResumePreview.tsx      # Resume preview component
│   └── SortableSection.tsx    # Draggable section component
├── types/
│   └── resume.ts              # TypeScript type definitions
├── App.tsx                    # Main application component
├── App.css                    # Custom styles & print media queries
├── index.css                  # Tailwind directives & base styles
└── main.tsx                   # Application entry point
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Key Design Decisions

1. **State Management**: Uses React's built-in `useState` hooks for simplicity
2. **Drag & Drop**: Leverages @dnd-kit for accessible, performant drag-and-drop
3. **Styling Approach**: Tailwind CSS for rapid development and consistency
4. **Type Safety**: TypeScript interfaces ensure type safety across components
5. **Print Optimization**: Custom CSS media queries for proper PDF generation

## Browser Support

Modern browsers with ES6+ support:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Future Enhancements

Potential improvements for consideration:
- Local storage persistence
- Template selection
- Custom theme colors
- Multiple resume management
- Import/export JSON data

## License

This project is open source and available for educational and personal use.

---

**Built with React + TypeScript + Vite**
