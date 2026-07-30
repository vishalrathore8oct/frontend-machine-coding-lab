import { Button } from "@components/ui/Button";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center">
        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <span className="text-[8rem] sm:text-[10rem] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-zinc-600 to-zinc-900 select-none">
              404
            </span>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 p-3 rounded-2xl bg-violet-500/15 border border-violet-500/25"
            >
              <span className="text-2xl">🔍</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-3">
            Page not found
          </h1>
          <p className="text-zinc-500 mb-8 max-w-sm mx-auto text-sm leading-relaxed">
            This page doesn't exist — or the project you're looking for hasn't
            been built yet. Check back tomorrow! 🚀
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button href="/" variant="primary" icon={<Home size={15} />}>
              Go Home
            </Button>
            <Button
              href="/projects"
              variant="secondary"
              icon={<ArrowLeft size={15} />}
            >
              Browse Projects
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
