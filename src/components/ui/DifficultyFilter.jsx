import { motion } from "framer-motion";

const options = [
  { value: "all", label: "All" },
  {
    value: "easy",
    label: "Easy",
    activeStyle: {
      background: "rgba(16,185,129,0.10)",
      color: "#10b981",
      borderColor: "rgba(16,185,129,0.30)",
    },
  },
  {
    value: "medium",
    label: "Medium",
    activeStyle: {
      background: "rgba(245,158,11,0.10)",
      color: "#f59e0b",
      borderColor: "rgba(245,158,11,0.30)",
    },
  },
  {
    value: "hard",
    label: "Hard",
    activeStyle: {
      background: "rgba(239,68,68,0.10)",
      color: "#ef4444",
      borderColor: "rgba(239,68,68,0.30)",
    },
  },
];

function FilterChip({ label, active, onClick, activeStyle }) {
  const baseStyle = {
    color: "var(--text-3)",
    border: "1px solid var(--border)",
    background: "transparent",
  };
  const activeDefaultStyle = {
    background: "rgba(139,92,246,0.10)",
    color: "#8b5cf6",
    borderColor: "rgba(139,92,246,0.30)",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 cursor-pointer"
      style={active ? (activeStyle ?? activeDefaultStyle) : baseStyle}
    >
      {label}
    </motion.button>
  );
}

export function DifficultyFilter({
  difficulty,
  onDifficultyChange,
  className = "",
}) {
  return (
    <div className={`flex items-center gap-2 flex-wrap ${className}`}>
      <span
        className="text-xs font-medium uppercase tracking-wider mr-1"
        style={{ color: "var(--text-3)" }}
      >
        Difficulty
      </span>
      {options.map((opt) => (
        <FilterChip
          key={opt.value}
          label={opt.label}
          active={difficulty === opt.value}
          onClick={() => onDifficultyChange(opt.value)}
          activeStyle={opt.activeStyle}
        />
      ))}
    </div>
  );
}
