import { motion } from "framer-motion";

/**
 * Card — General purpose surface container
 */
export function Card({
  children,
  className = "",
  onClick,
  hover = true,
  padding = true,
}) {
  const base = `
    bg-zinc-900/60 border border-zinc-800/60 backdrop-blur-sm rounded-2xl
    ${padding ? "p-5" : ""}
    ${hover ? "transition-all duration-300 hover:border-zinc-700/80 hover:shadow-xl hover:shadow-zinc-950/50" : ""}
    ${onClick ? "cursor-pointer" : ""}
    ${className}
  `;

  if (onClick) {
    return (
      <motion.div
        className={base}
        onClick={onClick}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={base}>{children}</div>;
}

/**
 * CardHeader — Card title + action slot
 */
export function CardHeader({ children, className = "" }) {
  return (
    <div className={`flex items-start justify-between gap-3 mb-4 ${className}`}>
      {children}
    </div>
  );
}

/**
 * CardTitle — Card heading text
 */
export function CardTitle({ children, className = "" }) {
  return (
    <h3 className={`text-base font-semibold text-zinc-100 ${className}`}>
      {children}
    </h3>
  );
}

/**
 * CardBody — Card content area
 */
export function CardBody({ children, className = "" }) {
  return <div className={`${className}`}>{children}</div>;
}

/**
 * CardFooter — Card action row
 */
export function CardFooter({ children, className = "" }) {
  return (
    <div
      className={`mt-4 pt-4 border-t border-zinc-800/50 flex items-center gap-2 ${className}`}
    >
      {children}
    </div>
  );
}
