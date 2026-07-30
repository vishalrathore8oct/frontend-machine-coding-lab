import { Button } from "@components/ui/Button";
import { DifficultyFilter } from "@components/ui/DifficultyFilter";
import { EmptyState } from "@components/ui/EmptyState";
import { ProjectCard } from "@components/ui/ProjectCard";
import { SearchBar } from "@components/ui/SearchBar";
import projects from "@data/projects/index";
import { useProjectFilter } from "@hooks/useProjectFilter";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export default function Projects() {
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
    <div className="section-container py-12">
      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <div className="flex items-center gap-2.5 mb-3">
          <div className="p-2 rounded-xl bg-violet-500/10 border border-violet-500/20">
            <Code2 size={16} className="text-violet-400" />
          </div>
          <span className="text-sm font-medium text-violet-500 dark:text-violet-400 uppercase tracking-wider">
            Implementations
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-3 t-text-1">
          All Implementations
        </h1>
        <p className="max-w-2xl leading-relaxed t-text-2">
          Every React machine coding implementation built during interview
          preparation — each one independently structured, documented and
          deployed.
        </p>

        {/* Difficulty strip */}
        <div className="flex flex-wrap items-center gap-4 mt-5 text-sm t-text-3">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            {stats.easy} Easy
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            {stats.medium} Medium
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            {stats.hard} Hard
          </span>
        </div>
      </motion.div>

      {/* Toolbar */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-3 mb-4"
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

      {/* Results meta */}
      {isFiltered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-between mb-6"
        >
          <p className="text-sm t-text-3">
            Showing{" "}
            <span className="font-semibold t-text-1">{filtered.length}</span> of{" "}
            {projects.length} implementations
          </p>
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Clear filters
          </Button>
        </motion.div>
      )}

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
    </div>
  );
}
