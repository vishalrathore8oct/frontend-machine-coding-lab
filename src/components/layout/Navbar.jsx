import { useDarkMode } from "@hooks/useDarkMode";
import { AnimatePresence, motion } from "framer-motion";
import { Code2, Home, Layers, Menu, Moon, Sun, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home", icon: Home, exact: true },
  { to: "/projects", label: "Implementations", icon: Layers },
  { to: "/about", label: "About", icon: User },
];

export function Navbar() {
  const { isDark, toggle } = useDarkMode();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md border-b shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
      style={
        scrolled
          ? {
              backgroundColor: "var(--bg-surface)",
              borderBottomColor: "var(--border)",
            }
          : {}
      }
    >
      <div className="section-container">
        <nav
          className="flex items-center justify-between h-16"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus-ring rounded-lg px-1"
          >
            <div
              className="p-1.5 rounded-lg bg-violet-600/20 border border-violet-500/25
                            group-hover:bg-violet-600/30 transition-colors duration-200"
            >
              <Code2 size={16} className="text-violet-400" />
            </div>
            <span className="font-bold text-sm tracking-tight leading-none t-text-1">
              MC<span className="text-violet-400">Lab</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label, exact }) => (
              <NavLink
                key={to}
                to={to}
                end={exact}
                className={({ isActive }) => `
                  px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-150
                  focus-ring
                  ${
                    isActive
                      ? "text-violet-500 dark:text-violet-400 bg-violet-500/10"
                      : "t-text-2 hover:t-text-1 hover:bg-black/5 dark:hover:bg-white/5"
                  }
                `}
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Dark mode toggle */}
            <motion.button
              onClick={toggle}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
              className="p-2 rounded-xl transition-all duration-150 focus-ring"
              style={{
                color: "var(--text-2)",
                border: "1px solid var(--border)",
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                  <motion.span
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={16} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={16} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile hamburger */}
            <motion.button
              onClick={() => setMobileOpen((p) => !p)}
              whileTap={{ scale: 0.95 }}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="md:hidden p-2 rounded-xl transition-all duration-150 focus-ring"
              style={{
                color: "var(--text-2)",
                border: "1px solid var(--border)",
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={18} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={18} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden backdrop-blur-md"
            style={{
              borderTop: "1px solid var(--border)",
              backgroundColor: "var(--bg-surface)",
            }}
          >
            <div className="section-container py-3 flex flex-col gap-1">
              {navLinks.map(({ to, label, icon: Icon, exact }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={exact}
                  className={({ isActive }) => `
                    flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium
                    transition-all duration-150
                    ${
                      isActive
                        ? "text-violet-500 dark:text-violet-400 bg-violet-500/10"
                        : "t-text-2 hover:bg-black/5 dark:hover:bg-white/5"
                    }
                  `}
                >
                  <Icon size={16} />
                  {label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
