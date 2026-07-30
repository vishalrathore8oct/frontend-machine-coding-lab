import { motion } from "framer-motion";
import { SearchX } from "lucide-react";

export function EmptyState({
  title = "No results found",
  description,
  action,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-20 px-6 text-center"
    >
      <div
        className="p-4 rounded-2xl mb-4"
        style={{
          backgroundColor: "var(--bg-input)",
          border: "1px solid var(--border)",
        }}
      >
        <SearchX size={28} style={{ color: "var(--text-3)" }} />
      </div>
      <h3
        className="text-lg font-semibold mb-1"
        style={{ color: "var(--text-1)" }}
      >
        {title}
      </h3>
      {description && (
        <p className="text-sm max-w-sm mb-4" style={{ color: "var(--text-3)" }}>
          {description}
        </p>
      )}
      {action && <div className="mt-2">{action}</div>}
    </motion.div>
  );
}
