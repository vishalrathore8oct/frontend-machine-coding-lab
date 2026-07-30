import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useRef } from "react";

export function SearchBar({
  value,
  onChange,
  placeholder = "Search…",
  className = "",
}) {
  const inputRef = useRef(null);

  const handleClear = () => {
    onChange("");
    inputRef.current?.focus();
  };

  return (
    <div className={`relative flex items-center group ${className}`}>
      <Search
        size={16}
        className="absolute left-3.5 pointer-events-none transition-colors duration-200
                   group-focus-within:text-indigo-600 dark:group-focus-within:text-violet-400"
        style={{ color: "var(--text-3)" }}
      />

      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-10 py-3 rounded-2xl text-sm
                   focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:focus:ring-violet-500/30
                   focus:border-indigo-500 dark:focus:border-violet-500
                   transition-all duration-200 shadow-sm"
        style={{
          backgroundColor: "var(--bg-input)",
          border: "1px solid var(--border)",
          color: "var(--text-1)",
        }}
      />

      <AnimatePresence>
        {value && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            onClick={handleClear}
            type="button"
            className="absolute right-3 transition-colors"
            style={{ color: "var(--text-3)" }}
          >
            <X size={14} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
