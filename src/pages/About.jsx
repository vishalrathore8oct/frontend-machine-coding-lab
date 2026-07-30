import { Button } from "@components/ui/Button";
import { motion } from "framer-motion";
import { Code2, Folder, Github, Layers, Linkedin, Zap } from "lucide-react";

const techStack = [
  { label: "React 19", note: "UI framework" },
  { label: "Vite", note: "Build tool" },
  { label: "React Router", note: "Client-side routing" },
  { label: "Tailwind CSS", note: "Styling" },
  { label: "Framer Motion", note: "Animation" },
  { label: "Lucide React", note: "Icons" },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: "easeOut" },
});

export default function About() {
  return (
    <div className="section-container py-12 max-w-3xl">
      {/* ── Page header ── */}
      <motion.div {...fade(0)} className="mb-14">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="p-2 rounded-xl bg-violet-500/10 border border-violet-500/20">
            <Code2 size={16} className="text-violet-400" />
          </div>
          <span className="text-sm font-medium text-violet-500 dark:text-violet-400 uppercase tracking-wider">
            About
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight t-text-1">
          Frontend Machine Coding Lab
        </h1>
        <p className="text-lg leading-relaxed t-text-2">
          A premium frontend portfolio showcasing React machine coding
          implementations built during interview preparation.
        </p>
      </motion.div>

      {/* ── What is this ── */}
      <motion.section {...fade(0.08)} className="mb-12">
        <h2 className="text-lg font-semibold mb-4 t-text-1">
          What is this repository?
        </h2>
        <div className="space-y-3 leading-relaxed text-[15px] t-text-2">
          <p>
            This is a monorepo that houses every React machine coding challenge
            I've implemented during frontend interview preparation. Each problem
            lives as a fully self-contained module inside{" "}
            <code className="inline-code">src/projects/</code>.
          </p>
          <p>
            The website is a gallery — not a coding platform. There are no
            challenges to solve here. Visitors can preview my working
            implementation, inspect the source code on GitHub, and visit the
            original problem on NamasteDev.
          </p>
        </div>
      </motion.section>

      {/* ── Why I built it ── */}
      <motion.section {...fade(0.12)} className="mb-12">
        <h2 className="text-lg font-semibold mb-4 t-text-1">Why I built it</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              icon: <Zap size={16} />,
              title: "Deliberate practice",
              desc: "One machine coding problem implemented from scratch every day. Depth over breadth.",
            },
            {
              icon: <Folder size={16} />,
              title: "One scalable repo",
              desc: "Every project lives in one monorepo instead of 30+ scattered repositories.",
            },
            {
              icon: <Layers size={16} />,
              title: "Portfolio ready",
              desc: "A live, browsable gallery that showcases real implementations to potential employers.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-2xl bg-themed-card border border-themed
                         hover:border-themed-hover transition-all duration-200"
            >
              <div
                className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20
                              text-violet-500 dark:text-violet-400 w-fit mb-3"
              >
                {item.icon}
              </div>
              <h3 className="text-sm font-semibold mb-1.5 t-text-1">
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed t-text-3">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── Tech stack ── */}
      <motion.section {...fade(0.16)} className="mb-12">
        <h2 className="text-lg font-semibold mb-4 t-text-1">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {techStack.map(({ label, note }) => (
            <div
              key={label}
              className="flex items-start justify-between gap-2 px-4 py-3
                         rounded-xl bg-themed-card border border-themed
                         hover:border-themed-hover transition-all duration-150"
            >
              <span className="text-sm font-medium t-text-1">{label}</span>
              <span className="text-[11px] mt-0.5 shrink-0 t-text-3">
                {note}
              </span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── Architecture ── */}
      <motion.section {...fade(0.2)} className="mb-14">
        <h2 className="text-lg font-semibold mb-4 t-text-1">Architecture</h2>
        <div className="rounded-2xl bg-themed-card border border-themed p-5">
          <p className="text-sm leading-relaxed mb-4 t-text-2">
            Feature-based folder structure. Every machine coding project is a
            fully isolated module with its own component tree, hooks, and
            styles.
          </p>
          <pre className="text-xs font-mono leading-6 overflow-x-auto t-text-3">
            {`src/
├── projects/
│   ├── counter/       ← isolated module
│   ├── accordion/
│   └── _template/     ← copy to add new project
├── data/projects/     ← one metadata file per project
├── components/ui/     ← shared atoms
├── pages/             ← Home · Projects · Detail · About
└── hooks/             ← useDarkMode · useProjectFilter`}
          </pre>
        </div>
      </motion.section>

      {/* ── Links ── */}
      <motion.section {...fade(0.24)}>
        <h2 className="text-lg font-semibold mb-4 t-text-1">Connect</h2>
        <div className="flex flex-wrap gap-3">
          <Button
            href="https://github.com/vishalrathore8oct"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            icon={<Github size={15} />}
          >
            GitHub
          </Button>
          <Button
            href="https://linkedin.com/in/vishalrathore8oct"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            icon={<Linkedin size={15} />}
          >
            LinkedIn
          </Button>
        </div>
      </motion.section>
    </div>
  );
}
