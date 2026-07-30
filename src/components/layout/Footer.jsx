import { Github } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-themed">
      <div className="section-container py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs t-text-3">
          <p className="text-center sm:text-left">
            © {year} Frontend Machine Coding Lab. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <span>Built with React</span>
            <a
              href="https://github.com/vishalrathore8oct/frontend-machine-coding-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded-md transition-colors hover:t-text-1"
              aria-label="GitHub repository"
            >
              <Github size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
