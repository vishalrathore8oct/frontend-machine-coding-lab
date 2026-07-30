import { Button } from "@components/ui/Button";
import { DifficultyFilter } from "@components/ui/DifficultyFilter";
import { EmptyState } from "@components/ui/EmptyState";
import { ProjectCard } from "@components/ui/ProjectCard";
import { SearchBar } from "@components/ui/SearchBar";
import projects from "@data/projects/index";
import { useProjectFilter } from "@hooks/useProjectFilter";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

function StatPill({ label, value, color = "zinc" }) {
  const colorMap = {
    violet: "text-violet-600 dark:text-violet-400",
    emerald: "text-emerald-600 dark:text-emerald-400",
    amber: "text-amber-600 dark:text-amber-400",
    rose: "text-rose-600 dark:text-rose-400",
    zinc: "text-zinc-800 dark:text-zinc-300",
  };
  return (
    <div
      className="flex flex-col items-center gap-0.5 px-5 py-3 rounded-2xl
                    bg-themed-input border border-themed"
    >
      <span className={`text-2xl font-bold tabular-nums ${colorMap[color]}`}>
        {value}
      </span>
      <span className="text-[11px] font-medium tracking-wide t-text-3">
        {label}
      </span>
    </div>
  );
}

export default function Home() {
  const {
    filtered,
    search,
    setSearch,
    difficulty,
    setDifficulty,
    clearFilters,
    isFiltered,
    stats,
  } = useProjectFilter(projects);

  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-16 pb-12 sm:pt-24 sm:pb-16">
        {/* Dot-grid background */}
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        {/* Top radial glow */}
        <div
          className="absolute inset-x-0 top-0 h-[50vh] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(99,102,241,0.06), transparent)",
          }}
        />

        <div className="section-container relative text-center">
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="flex justify-center mb-5"
          >
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
                             bg-themed-input border border-themed text-xs font-semibold t-text-2
                             shadow-sm shadow-black/5"
            >
              React Machine Coding Implementations
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight
                       mb-5 leading-[1.08] t-text-1"
          >
            Frontend{" "}
            <span className="gradient-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Machine Coding
            </span>
            <br className="hidden sm:block" /> Lab
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed t-text-2"
          >
            A curated collection of React machine coding implementations built
            during frontend interview preparation.
            <br className="hidden sm:block" />
            Every project is independently built, documented and maintained.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <Button
              href="/projects"
              variant="primary"
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-md border-transparent transition-all"
              iconRight={<ArrowRight size={16} />}
            >
              Browse Implementations
            </Button>
            <Button
              href="https://github.com/vishalrathore8oct/frontend-machine-coding-lab"
              variant="secondary"
              size="lg"
              icon={<Github size={15} />}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Stats dashboard ──────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="section-container mb-16"
      >
        <div className="flex flex-wrap justify-center gap-3">
          <StatPill label="Total" value={stats.total} color="violet" />
          <div className="w-px self-stretch bg-themed mx-1 hidden sm:block border-l border-themed" />
          <StatPill label="Easy" value={stats.easy} color="emerald" />
          <StatPill label="Medium" value={stats.medium} color="amber" />
          <StatPill label="Hard" value={stats.hard} color="rose" />
        </div>
      </motion.section>

      {/* ── Implementations grid ─────────────────────────────────────────── */}
      <section className="section-container pb-24">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8"
        >
          <div>
            <h2 className="text-xl font-semibold t-text-1">Implementations</h2>
            <p className="text-sm t-text-3 mt-0.5">
              {isFiltered
                ? `${filtered.length} of ${projects.length} implementations`
                : `${projects.length} implementation${projects.length !== 1 ? "s" : ""}`}
            </p>
          </div>
          <Link
            to="/projects"
            className="text-sm text-violet-400 hover:text-violet-300
                       transition-colors flex items-center gap-1 font-medium shrink-0"
          >
            View all <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Toolbar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 mb-8"
        >
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search by name, concept or tag…"
            className="sm:flex-1"
          />
          <DifficultyFilter
            difficulty={difficulty}
            onDifficultyChange={setDifficulty}
          />
        </motion.div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No implementations match"
            description="Try a different search term or reset the difficulty filter."
            action={
              <Button variant="secondary" size="sm" onClick={clearFilters}>
                Clear Filters
              </Button>
            }
          />
        )}
      </section>
    </div>
  );
}
