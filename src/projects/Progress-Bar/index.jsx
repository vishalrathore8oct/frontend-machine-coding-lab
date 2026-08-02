import { useState } from "react";

export default function TemplateProject() {
  const [progress, setProgress] = useState(0);

  const getProgressColor = (val) => {
    if (val <= 40) return "from-rose-500 to-red-600 shadow-red-500/25";
    if (val < 80) return "from-amber-500 to-orange-600 shadow-orange-500/25";
    return "from-emerald-500 to-green-600 shadow-emerald-500/25";
  };

  return (
    <div className="flex min-h-[400px] w-full items-center justify-center p-6 bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-md flex flex-col items-center bg-slate-900/60 backdrop-blur-md border border-slate-800/80 p-8 rounded-2xl shadow-xl">
        <h1 className="text-sm font-semibold tracking-wider uppercase text-indigo-400 mb-6">
          Progress Bar
        </h1>

        {/* Numeric Display */}
        <div className="text-5xl font-extrabold tracking-tight text-slate-100 mb-6 font-mono">
          {progress}%
        </div>

        {/* Progress Bar Container */}
        <div className="w-full bg-slate-950 rounded-full h-6 p-1 border border-slate-800/60 shadow-inner mb-8 relative overflow-hidden">
          <div
            className={`bg-gradient-to-r ${getProgressColor(progress)} h-full rounded-full transition-all duration-300 shadow-lg`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-2 gap-3 w-full mb-3">
          <button
            onClick={() => setProgress((prev) => Math.max(prev - 10, 0))}
            className="flex items-center justify-center gap-1 py-3 px-4 rounded-xl font-semibold text-white bg-slate-800 hover:bg-slate-700 active:bg-slate-850 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-slate-700/50 shadow-md"
          >
            -10%
          </button>

          <button
            onClick={() => setProgress((prev) => Math.min(prev + 10, 100))}
            className="flex items-center justify-center gap-1 py-3 px-4 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 active:from-indigo-700 active:to-violet-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-indigo-500/20"
          >
            +10%
          </button>
        </div>

        <button
          onClick={() => setProgress(0)}
          className="w-full py-2.5 px-4 rounded-xl font-medium text-slate-400 hover:text-slate-200 bg-slate-950/40 hover:bg-slate-950/80 active:bg-slate-950 transition-all duration-200 border border-slate-850"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
