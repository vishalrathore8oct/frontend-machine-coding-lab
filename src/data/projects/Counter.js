const template = {
  id: 1, // ← increment from last project id
  slug: "Counter", // ← MUST EXACTLY match the folder name (e.g., '<new-project-slug>')
  title: "Counter", // ← Display Title
  difficulty: "easy", // ← 'easy' | 'medium' | 'hard'
  description:
    "A simple counter application with increment, decrement, and reset functionality.",

  concepts: ["useState"],

  technologies: ["React", "TailwindCSS"],

  github:
    "https://github.com/vishalrathore8oct/frontend-machine-coding-lab/tree/main/src/projects/Counter/index.jsx", // ← original github project repo url

  namasteDev: "https://namastedev.com/practice/counter-using-react", // ← original challenge URL

  demo: null, // ← optional live demo URL
};

export default template;
