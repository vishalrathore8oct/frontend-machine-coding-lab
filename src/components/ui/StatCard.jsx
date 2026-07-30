import { motion } from "framer-motion";

/**
 * StatCard — Metric display card. Uses CSS variables for theming.
 */
export function StatCard({
  label,
  value,
  icon,
  accent = false,
  className = "",
}) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className={`relative overflow-hidden rounded-2xl p-4 ${className}`}
      style={{
        backgroundColor: accent ? "rgba(139,92,246,0.08)" : "var(--bg-card)",
        border: accent
          ? "1px solid rgba(139,92,246,0.25)"
          : "1px solid var(--border)",
        boxShadow: accent ? "0 4px 20px rgba(139,92,246,0.08)" : "none",
      }}
    >
      {accent && (
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent pointer-events-none" />
      )}

      <div className="relative flex items-start justify-between gap-2">
        <div>
          <p
            className="text-xs font-medium uppercase tracking-wider mb-1"
            style={{ color: "var(--text-3)" }}
          >
            {label}
          </p>
          <p
            className="text-3xl font-bold tracking-tight"
            style={{ color: accent ? "#a78bfa" : "var(--text-1)" }}
          >
            {value}
          </p>
        </div>
        {icon && (
          <div
            className="p-2 rounded-xl"
            style={{
              backgroundColor: accent
                ? "rgba(139,92,246,0.15)"
                : "var(--bg-input)",
              color: accent ? "#a78bfa" : "var(--text-3)",
            }}
          >
            {icon}
          </div>
        )}
      </div>
    </motion.div>
  );
}
