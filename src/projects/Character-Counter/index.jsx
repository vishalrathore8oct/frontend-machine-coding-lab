import { useState } from "react";

export default function TemplateProject() {
  const [maxLength, setMaxLength] = useState(50);
  const [currentLength, setCurrentLength] = useState(0);

  const isExceeded = currentLength > maxLength;
  const isClose =
    currentLength >= (maxLength * 90) / 100 && currentLength <= maxLength;

  return (
    <div className="flex min-h-[450px] w-full items-center justify-center p-6 bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-md flex flex-col bg-slate-900/60 backdrop-blur-md border border-slate-800/80 p-8 rounded-2xl shadow-xl">
        <h1 className="text-sm font-semibold tracking-wider uppercase text-indigo-400 mb-1">
          Character Counter
        </h1>
        <p className="text-xs text-slate-400 mb-6">
          Track your input length with live character warnings.
        </p>

        {/* Max Length Input */}
        <div className="flex flex-col gap-1.5 mb-5">
          <label className="text-xs font-medium text-slate-300">
            Max Length Limit
          </label>
          <input
            type="number"
            min={0}
            value={maxLength}
            onChange={(e) => setMaxLength(Number(e.target.value))}
            className="w-full bg-slate-950 text-slate-100 placeholder-slate-500 border border-slate-800 rounded-xl px-4 py-2.5 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
          />
        </div>

        {/* Text Area */}
        <div className="flex flex-col gap-1.5 mb-4">
          <label className="text-xs font-medium text-slate-300">
            Your Message
          </label>
          <textarea
            onChange={(e) => setCurrentLength(e.target.value.length)}
            placeholder="Start typing..."
            className="w-full bg-slate-950 text-slate-100 placeholder-slate-500 border border-slate-800 rounded-xl px-4 py-3 min-h-[120px] focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200 resize-none"
          ></textarea>
        </div>

        {/* Counter Display and Warnings */}
        <div className="flex items-center justify-center mb-4">
          <span
            className={`text-xs font-semibold ${isExceeded ? "text-red-400" : "text-slate-300"}`}
          >
            {currentLength} / {maxLength}
          </span>
        </div>

        {/* Warning Messages */}
        {(isExceeded || isClose) && (
          <div
            className={`p-3 rounded-xl border text-xs font-medium text-center animate-slide-up ${
              isExceeded
                ? "bg-red-500/10 border-red-500/30 text-red-400"
                : "bg-amber-500/10 border-amber-500/30 text-amber-400"
            }`}
          >
            {isExceeded
              ? `Limit exceeded by ${currentLength - maxLength} characters`
              : "You are close to the limit!"}
          </div>
        )}
      </div>
    </div>
  );
}
