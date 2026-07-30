# Frontend Machine Coding Lab

> A premium, highly interactive frontend portfolio showcasing React machine coding implementations built during interview preparation.

[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646cff?style=flat-square&logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)

---

## 🎯 Purpose

This project is a centralized **monorepo gallery** showcasing clean, modular, and interactive React frontend components. Every page is built around showcasing isolated machine coding solutions, allowing visitors to:

- **Preview** real-time interactive implementations directly on the web app.
- **Inspect** the underlying source code and component tree structure.
- **Visit** original reference material and challenge descriptions.

---

## 📂 Architecture & Directory Structure

The project utilizes a feature-based folder structure where each challenge/project is completely self-contained.

```
src/
├── projects/
│   ├── _template/         ← base template for new projects
│   └── counter/           ← counter implementation module
│       ├── index.jsx      ← default export (interactive preview component)
│       ├── hooks.js       ← custom React state/logic hooks
│       └── README.md      ← documentation & interview questions
│
├── data/
│   └── projects/
│       ├── index.js       ← central registry for all projects
│       └── counter.js     ← metadata configurations
│
├── components/
│   ├── layout/            ← Layout components (Navbar, Footer, Shell)
│   └── ui/                ← reusable UI library (Button, Badge, SearchBar, Card)
│
├── pages/                 ← top-level route views (Home, About, Detail, Projects)
├── hooks/                 ← global custom hooks (dark mode, filtering)
├── styles/                ← global stylesheet with custom CSS variables
├── routes/                ← React Router v6 routing configurations
└── utils/                 ← general helper & utility functions
```

### Key Workspace References

- Template Entry: [index.jsx](/src/projects/_template/index.jsx)
- Central Project Registry: [index.js](/src/data/projects/index.js)
- Routing Config: [index.jsx](/src/routes/index.jsx)
- Project Details Shell: [ProjectDetail.jsx](/src/pages/ProjectDetail.jsx)
- Global Design Styles: [index.css](/src/styles/index.css)

---

## ⚙️ Project Metadata Schema

Every project must define its characteristics in a metadata file under `src/data/projects/`. The schema is typed as follows:

```typescript
interface ProjectMetadata {
  id: number; // Unique incrementing integer
  slug: string; // URL-safe pathname slug (e.g., 'counter')
  title: string; // Display title of the project
  difficulty: "easy" | "medium" | "hard";
  description: string; // Single-sentence concise description
  concepts: string[]; // React and state concepts demonstrated
  technologies: string[]; // Technologies or libraries utilized
  github: string; // Direct URL to the project's folder on GitHub
  namasteDev: string; // Original challenge reference URL
  demo: string | null; // Optional external standalone deployment URL
}
```

Refer to the project metadata template at [metadata.js](/src/projects/_template/metadata.js) for an example.

---

## 🚀 Adding a New Project (Automated One-Click Scaffolding)

You can automatically generate the project directories, template components, set up populated metadata files, and register everything in the central project registry with one CLI command:

```bash
# Run interactively (will prompt you for a slug)
npm run new

# Or pass the slug directly
npm run new <new-project-slug>
```
*(e.g., `npm run new helloWorld` or `npm run new accordion`)*

---

### Manual Alternative (4 Steps)

If you prefer to set up a project manually:

#### 1. Copy the Base Template
Duplicate the template component to a new directory matching your slug:
```bash
mkdir -p src/projects/<new-project-slug>
cp src/projects/_template/index.jsx src/projects/<new-project-slug>/index.jsx
```

#### 2. Configure Project Metadata
Copy the metadata template and configure the fields:
```bash
cp src/projects/_template/metadata.js src/data/projects/<new-project-slug>.js
```
Edit the newly created `<new-project-slug>.js` file. **Crucial:** The `slug` value inside the metadata file *must exactly match* the folder name created in Step 1, otherwise the dynamic loader will not find the project component.

#### 3. Register in the Registry Index
Import and append the metadata object to the `projects` array in [index.js](/src/data/projects/index.js):
```javascript
import newProject from './<new-project-slug>'

const projects = [
  newProject, // ← add here more projects
]
```

#### 4. Register Lazy Loading in UI
Add a lazy loading reference to your interactive preview inside [ProjectDetail.jsx](/src/pages/ProjectDetail.jsx):
```javascript
const projectComponents = {
  '<new-project-slug>': lazy(() => import('@projects/<new-project-slug>/index')), // ← add here
}
```

The application's home, projects, filtering, and routing systems will automatically load, route, and render the new component. ✅

---

## 🛠️ Technology Stack

| Layer                    | Technology                      |
| ------------------------ | ------------------------------- |
| **Core Framework**       | React 19                        |
| **Bundler & Dev Server** | Vite 5                          |
| **Routing Manager**      | React Router v6                 |
| **Styling Solution**     | Tailwind CSS v3 & CSS Variables |
| **Animations**           | Framer Motion                   |
| **Icons Library**        | Lucide React                    |

---

## 💻 Local Development

Ensure you have Node.js installed, then follow the instructions below:

```bash
# 1. Install all required dependencies
npm install

# 2. Spin up the local development server (with HMR)
npm run dev

# 3. Compile and optimize for production
npm run build
```

---

<p align="center">Built with React 19 · Challenges inspired by NamasteDev</p>
