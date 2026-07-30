import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { DifficultyBadge } from "./Badge";

export function ProjectCard({ project, index = 0 }) {
  const { slug, title, difficulty, description, concepts, github, namasteDev } =
    project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
      className="group relative flex flex-col card-base overflow-hidden"
    >
      {/* Difficulty accent line */}
      <div
        className={`h-px w-full ${
          difficulty === "easy"
            ? "bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent"
            : difficulty === "medium"
              ? "bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"
              : "bg-gradient-to-r from-transparent via-rose-500/40 to-transparent"
        }`}
      />

      <div className="flex flex-col flex-1 p-7">
        {/* Difficulty badge */}
        <div className="mb-4">
          <DifficultyBadge difficulty={difficulty} />
        </div>

        {/* Title */}
        <h3
          className="text-base font-semibold mb-2 transition-colors duration-200
                     group-hover:text-indigo-600 dark:group-hover:text-violet-400"
          style={{ color: "var(--text-1)" }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed line-clamp-2 mb-4 flex-1"
          style={{ color: "var(--text-2)" }}
        >
          {description}
        </p>

        {/* Concept */}
        {concepts?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {concepts.slice(0, 4).map((c) => (
              <span key={c} className="tag-pill">
                {c}
              </span>
            ))}
            {concepts.length > 4 && (
              <span className="tag-pill" style={{ color: "var(--text-3)" }}>
                +{concepts.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Actions */}
        <div
          className="flex items-center gap-2 pt-4"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {/* Preview — primary */}
          <Link
            to={`/projects/${slug}`}
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl
                       bg-indigo-50 dark:bg-violet-600/10 text-indigo-600 dark:text-violet-400
                       hover:text-indigo-700 dark:hover:text-violet-300
                       border border-indigo-100 dark:border-violet-500/25 hover:border-indigo-200 dark:hover:border-violet-500/40
                       text-xs font-medium transition-all duration-150 group/btn"
          >
            Preview
            <ArrowUpRight
              size={13}
              className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5
                         transition-transform duration-150"
            />
          </Link>

          {/* GitHub */}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              title="View source on GitHub"
              className="p-2 rounded-xl transition-all duration-150"
              style={{
                border: "1px solid var(--border)",
                color: "var(--text-3)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-3)")
              }
            >
              <Github size={14} />
            </a>
          )}

          {/* Original NamasteDev challenge */}
          {namasteDev && (
            <a
              href={namasteDev}
              target="_blank"
              rel="noopener noreferrer"
              title="View original challenge on NamasteDev"
              className="p-2 rounded-xl transition-all duration-150"
              style={{
                border: "1px solid var(--border)",
                color: "var(--text-3)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-3)")
              }
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
