const badgeVariants = {
  easy: "bg-emerald-50/60 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20 dark:border-emerald-500/25",
  medium:
    "bg-amber-50/60 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20 dark:border-amber-500/25",
  hard: "bg-rose-50/60 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/20 dark:border-rose-500/25",
};

const dotColors = {
  easy: "bg-emerald-500 dark:bg-emerald-400",
  medium: "bg-amber-500 dark:bg-amber-400",
  hard: "bg-rose-500 dark:bg-rose-400",
};

const labels = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

export function DifficultyBadge({
  difficulty,
  showDot = true,
  className = "",
}) {
  const variant = badgeVariants[difficulty] ?? badgeVariants.easy;
  const dot = dotColors[difficulty] ?? dotColors.easy;
  const label = labels[difficulty] ?? difficulty;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${variant} ${className}`}
    >
      {showDot && (
        <span className={`w-1.5 h-1.5 rounded-full ${dot} animate-pulse`} />
      )}
      {label}
    </span>
  );
}
