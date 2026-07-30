/**
 * Utility helpers shared across the app
 */

/**
 * Format a date string into a human-readable date
 * @param {string} dateStr - ISO date string e.g. '2026-07-30'
 * @returns {string} e.g. 'Jul 30, 2026'
 */
export function formatDate(dateStr) {
  if (!dateStr) return "—";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Capitalise the first letter of a string
 * @param {string} str
 * @returns {string}
 */
export function capitalize(str = "") {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Clamp a number between min and max
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Returns the Tailwind color variant name for a difficulty level
 * @param {'easy' | 'medium' | 'hard'} difficulty
 */
export function difficultyColor(difficulty) {
  const map = {
    easy: "emerald",
    medium: "amber",
    hard: "rose",
  };
  return map[difficulty] ?? "zinc";
}

/**
 * Build navigation links (prev/next) from an ordered list of projects
 * @param {Array} projects
 * @param {string} currentSlug
 * @returns {{ prev: object|null, next: object|null }}
 */
export function getProjectNav(projects, currentSlug) {
  const idx = projects.findIndex((p) => p.slug === currentSlug);
  return {
    prev: idx > 0 ? projects[idx - 1] : null,
    next: idx < projects.length - 1 ? projects[idx + 1] : null,
  };
}
