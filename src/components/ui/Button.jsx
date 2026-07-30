import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-violet-600 hover:bg-violet-500 text-white border-transparent shadow-lg shadow-violet-500/20",
  danger:
    "bg-rose-600/10 hover:bg-rose-600/20 text-rose-500 border-rose-600/25 hover:border-rose-500/40",
};

const sizes = {
  sm: "px-3 py-1.5 text-xs gap-1.5",
  md: "px-4 py-2 text-sm gap-2",
  lg: "px-6 py-2.5 text-base gap-2.5",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  loading = false,
  icon,
  iconRight,
  onClick,
  type = "button",
  href,
  target,
  rel,
}) {
  // Secondary and ghost use CSS vars for theming
  const getInlineStyle = () => {
    if (variant === "secondary")
      return {
        backgroundColor: "var(--bg-input)",
        color: "var(--text-1)",
        borderColor: "var(--border)",
      };
    if (variant === "ghost")
      return {
        backgroundColor: "transparent",
        color: "var(--text-2)",
        borderColor: "transparent",
      };
    return {};
  };

  const baseClass = `
    inline-flex items-center justify-center font-medium rounded-xl border
    transition-all duration-200 ease-out cursor-pointer select-none
    disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
    focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2
    ${variants[variant] ?? ""}
    ${sizes[size]}
    ${className}
  `;

  const content = (
    <>
      {loading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        icon && <span className="shrink-0">{icon}</span>
      )}
      {children}
      {iconRight && !loading && <span className="shrink-0">{iconRight}</span>}
    </>
  );

  const style = getInlineStyle();

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={baseClass}
        style={style}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={baseClass}
      style={style}
      whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.97 } : {}}
    >
      {content}
    </motion.button>
  );
}
