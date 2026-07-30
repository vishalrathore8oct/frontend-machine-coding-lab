import { useState } from "react";

export default function TemplateProject() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex min-h-[400px] w-full items-center justify-center p-6 bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-sm flex flex-col items-center bg-slate-900/60 backdrop-blur-md border border-slate-800/80 p-8 rounded-2xl shadow-xl text-center">
        <h1 className="text-sm font-semibold tracking-wider uppercase text-indigo-400 mb-6">
          Counter App
        </h1>

        {/* Count display with animated counter container */}
        <div className="w-48 h-48 flex items-center justify-center rounded-full bg-slate-950 border-4 border-slate-800/60 shadow-inner mb-8 transition-transform duration-300 hover:scale-105">
          <span
            className={`text-6xl font-extrabold tracking-tight transition-colors duration-300 ${
              counter > 0
                ? "text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-teal-500"
                : counter < 0
                  ? "text-transparent bg-clip-text bg-gradient-to-br from-rose-400 to-pink-500"
                  : "text-slate-100"
            }`}
          >
            {counter}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 w-full mb-3">
          <button
            onClick={() => setCounter((prev) => prev - 1)}
            className="flex items-center justify-center gap-1 py-3 px-4 rounded-xl font-semibold text-white bg-slate-800 hover:bg-slate-700 active:bg-slate-850 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-slate-700/50 shadow-md"
          >
            Decrement
          </button>

          <button
            onClick={() => setCounter((prev) => prev + 1)}
            className="flex items-center justify-center gap-1 py-3 px-4 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 active:from-indigo-700 active:to-violet-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-indigo-500/20"
          >
            Increment
          </button>
        </div>

        <button
          onClick={() => setCounter(0)}
          className="w-full py-2.5 px-4 rounded-xl font-medium text-slate-400 hover:text-slate-200 bg-slate-950/40 hover:bg-slate-950/80 active:bg-slate-950 transition-all duration-200 border border-slate-850"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
