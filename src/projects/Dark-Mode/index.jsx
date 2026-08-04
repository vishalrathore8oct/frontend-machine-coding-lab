import { useState } from "react";

export default function TemplateProject() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      className={`min-h-[400px] flex flex-col items-center justify-center font-sans transition-colors duration-500 ease-in-out ${
        isDarkMode ? "bg-slate-900 text-slate-50" : "bg-slate-50 text-slate-900"
      }`}
    >
      <h1
        className={`text-4xl md:text-5xl font-bold mb-12 drop-shadow-sm transition-colors duration-300 ${isDarkMode ? "text-slate-50" : "text-slate-900"}`}
      >
        Dark Mode Toggle
      </h1>

      <div
        className={`flex items-center gap-6 p-6 px-10 rounded-full backdrop-blur-md shadow-xl border transition-all duration-300 ${
          isDarkMode
            ? "bg-black/30 border-white/10 shadow-black/50"
            : "bg-white/30 border-white/40 shadow-slate-200/50"
        }`}
      >
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isDarkMode}
            onChange={() => setIsDarkMode((prev) => !prev)}
          />
          <div className="w-20 h-11 bg-slate-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer peer-checked:after:translate-x-[36px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-9 after:w-9 after:transition-all after:duration-500 peer-checked:bg-indigo-500 shadow-inner"></div>
        </label>

        <span className="text-xl font-semibold min-w-[120px] transition-colors duration-300">
          {isDarkMode ? "Dark" : "Light"} Mode
        </span>
      </div>
    </div>
  );
}
