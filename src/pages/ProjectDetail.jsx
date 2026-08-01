import { DifficultyBadge } from "@components/ui/Badge";
import projects from "@data/projects/index";
import { getProjectNav } from "@utils/helpers";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Layers,
  Tag,
} from "lucide-react";
import { Suspense, lazy } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

const projectComponents = {
  // '<new-project-slug>': lazy(() => import('@projects/<new-project-slug>/index')),
  Counter: lazy(() => import("@projects/Counter/index")),
    'Toggle-Password': lazy(() => import('@projects/Toggle-Password/index')),
    'Character-Counter': lazy(() => import('@projects/Character-Counter/index')),
  // Add new project lazy imports here ↑
};

function PreviewSkeleton() {
  return (
    <div className="h-56 rounded-2xl bg-themed-input animate-pulse border border-themed" />
  );
}

function SectionBox({ icon, title, children }) {
  return (
    <div className="rounded-2xl border border-themed bg-themed-card overflow-hidden">
      <div className="flex items-center gap-2.5 px-5 py-3.5 border-b border-themed">
        <span className="text-violet-500 dark:text-violet-400">{icon}</span>
        <h2 className="text-xs font-semibold uppercase tracking-widest t-text-3">
          {title}
        </h2>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function LinkRow({ href, icon, label, sublabel }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between gap-3 group p-3 rounded-xl
                 border border-themed bg-themed-input/40 hover:bg-themed-input
                 transition-all duration-150"
    >
      <div className="flex items-center gap-3">
        <span className="t-text-3 group-hover:t-text-1 transition-colors">
          {icon}
        </span>
        <div>
          <p className="text-sm font-medium group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors t-text-1">
            {label}
          </p>
          {sublabel && <p className="text-xs t-text-3">{sublabel}</p>}
        </div>
      </div>
      <ExternalLink
        size={13}
        className="t-text-3 group-hover:t-text-1 transition-colors shrink-0"
      />
    </a>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/404" replace />;

  const { prev, next } = getProjectNav(projects, slug);
  const LiveComponent = projectComponents[slug];

  return (
    <div className="section-container py-10 max-w-5xl">
      {/* ── Breadcrumb ── */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-sm t-text-3 hover:t-text-1 transition-colors"
        >
          <ArrowLeft size={14} />
          All Implementations
        </Link>
      </motion.div>

      {/* ── Header ── */}
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <DifficultyBadge difficulty={project.difficulty} />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight t-text-1">
          {project.title}
        </h1>

        <p className="text-base leading-relaxed max-w-2xl t-text-2">
          {project.description}
        </p>
      </motion.header>

      {/* ── Body — 2-column layout ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* Left — preview (spans 2 cols) */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-themed bg-themed-card overflow-hidden">
            {/* Preview header */}
            <div className="flex items-center justify-between gap-3 px-5 py-3.5 border-b border-themed">
              <div className="flex items-center gap-2.5">
                <span className="text-violet-500 dark:text-violet-400">
                  <Layers size={14} />
                </span>
                <h2 className="text-xs font-semibold uppercase tracking-widest t-text-3">
                  Interactive Preview
                </h2>
              </div>
              {/* Traffic light dots — macOS styled */}
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400/90 dark:bg-rose-500/80 border border-rose-500/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90 dark:bg-amber-500/80 border border-amber-500/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90 dark:bg-emerald-500/80 border border-emerald-500/20" />
              </div>
            </div>

            {/* Live component */}
            <div className="p-2">
              {LiveComponent ? (
                <Suspense fallback={<PreviewSkeleton />}>
                  <div className="rounded-xl bg-themed-input border border-themed/40 overflow-hidden">
                    <LiveComponent />
                  </div>
                </Suspense>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
                  <div className="text-3xl mb-3">🚧</div>
                  <p className="text-sm font-semibold text-zinc-300">
                    Implementation Component Not Found
                  </p>

                  <div className="mt-3 max-w-md text-xs text-zinc-500 space-y-2">
                    <p>
                      The preview is unavailable because no project folder was
                      found matching the slug:
                      <span className="font-mono text-violet-400 bg-violet-500/10 px-1.5 py-0.5 rounded ml-1">
                        '{project.slug}'
                      </span>
                    </p>
                    <p className="border-t border-themed/40 pt-2 text-[11px] text-zinc-600">
                      To fix this, ensure that:
                    </p>
                    <ul className="list-disc text-left pl-5 space-y-1 text-[11px] text-zinc-500 font-mono">
                      <li>
                        A folder exists at{" "}
                        <span className="text-zinc-400">
                          src/projects/{project.slug}/
                        </span>
                      </li>
                      <li>
                        It contains an{" "}
                        <span className="text-zinc-400">index.jsx</span> file
                        (default export)
                      </li>
                      <li>
                        The <span className="text-zinc-400">slug</span> inside
                        the metadata file matches the folder name exactly
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right — sidebar */}
        <div className="flex flex-col gap-5">
          {/* Concepts */}
          {project.concepts?.length > 0 && (
            <SectionBox icon={<BookOpen size={14} />} title="Concepts Used">
              <div className="flex flex-wrap gap-2">
                {project.concepts.map((c) => (
                  <span key={c} className="tag-pill">
                    {c}
                  </span>
                ))}
              </div>
            </SectionBox>
          )}

          {/* Technologies */}
          {project.technologies?.length > 0 && (
            <SectionBox icon={<Tag size={14} />} title="Technologies">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span key={t} className="tag-pill">
                    {t}
                  </span>
                ))}
              </div>
            </SectionBox>
          )}

          {/* Project Links */}
          {(project.github || project.namasteDev || project.demo) && (
            <SectionBox icon={<ExternalLink size={14} />} title="Project Links">
              <div className="flex flex-col gap-2.5">
                {project.github && (
                  <LinkRow
                    href={project.github}
                    icon={<Github size={15} />}
                    label="GitHub Source"
                    sublabel="View implementation code"
                  />
                )}
                {project.namasteDev && (
                  <LinkRow
                    href={project.namasteDev}
                    icon={<ExternalLink size={15} />}
                    label="Original Challenge"
                    sublabel="NamasteDev"
                  />
                )}
                {project.demo && (
                  <LinkRow
                    href={project.demo}
                    icon={<Layers size={15} />}
                    label="Live Demo"
                    sublabel="Standalone deployment"
                  />
                )}
              </div>
            </SectionBox>
          )}
        </div>
      </motion.div>

      {/* ── Prev / Next navigation ── */}
      <div className="mt-14 pt-8 border-t border-themed grid grid-cols-2 gap-4">
        {prev ? (
          <Link
            to={`/projects/${prev.slug}`}
            className="flex flex-col gap-1 p-4 rounded-2xl border border-themed
                       bg-themed-card hover:bg-themed-input
                       transition-all duration-200 group"
          >
            <span
              className="flex items-center gap-1 text-xs t-text-3
                             group-hover:t-text-2 transition-colors"
            >
              <ChevronLeft size={13} /> Previous
            </span>
            <span
              className="text-sm font-semibold t-text-2
                             group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors"
            >
              {prev.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            to={`/projects/${next.slug}`}
            className="flex flex-col items-end gap-1 p-4 rounded-2xl border border-themed
                       bg-themed-card hover:bg-themed-input
                       transition-all duration-200 group"
          >
            <span
              className="flex items-center gap-1 text-xs t-text-3
                             group-hover:t-text-2 transition-colors"
            >
              Next <ChevronRight size={13} />
            </span>
            <span
              className="text-sm font-semibold t-text-2
                             group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors"
            >
              {next.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
