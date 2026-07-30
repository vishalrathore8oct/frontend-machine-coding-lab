import { useMemo, useState } from "react";

/**
 * useProjectFilter
 *
 * Client-side filtering and search for the projects grid.
 *
 * @param {Array} projects - Full array from data/projects/index.js
 * @returns {{ filtered, search, setSearch, difficulty, setDifficulty, clearFilters, isFiltered, stats }}
 */
export function useProjectFilter(projects = []) {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("all");

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const q = search.trim().toLowerCase();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.concepts?.some((c) => c.toLowerCase().includes(q));

      const matchesDifficulty =
        difficulty === "all" || project.difficulty === difficulty;

      return matchesSearch && matchesDifficulty;
    });
  }, [projects, search, difficulty]);

  const stats = useMemo(
    () => ({
      total: projects.length,
      easy: projects.filter((p) => p.difficulty === "easy").length,
      medium: projects.filter((p) => p.difficulty === "medium").length,
      hard: projects.filter((p) => p.difficulty === "hard").length,
    }),
    [projects],
  );

  const clearFilters = () => {
    setSearch("");
    setDifficulty("all");
  };

  const isFiltered = search.trim() !== "" || difficulty !== "all";

  return {
    filtered,
    search,
    setSearch,
    difficulty,
    setDifficulty,
    clearFilters,
    isFiltered,
    stats,
  };
}
