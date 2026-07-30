const template = {
  id: 0, // ← increment from last project id
  slug: "newProject", // ← MUST EXACTLY match the folder name (e.g., '<new-project-slug>')
  title: "New Project", // ← Display Title
  difficulty: "easy", // ← 'easy' | 'medium' | 'hard'
  description:
    "A short, one-sentence description of what this implementation demonstrates.",

  concepts: ["useState", "useEffect"],

  technologies: ["React", "Hooks"],

  github:
    "https://github.com/vishalrathore8oct/frontend-machine-coding-lab/tree/main/src/projects/newProject", // ← original github project repo url

  namasteDev: "https://namastedev.com/practice/newProject", // ← original challenge URL

  demo: null, // ← optional live demo URL
};

export default template;
