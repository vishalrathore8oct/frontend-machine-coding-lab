import { useState } from "react";

export default function TemplateProject() {
  const [progress, setProgress] = useState(0);

  const getProgressColor = (val) => {
    if (val <= 40) return "bg-red-600";
    if (val < 80) return "bg-orange-600";
    return "bg-green-600";
  };

  return (
    <div className="flex items-center justify-center py-12 px-4">
      <h1>Progress Bar</h1>
      <div className="w-full bg-gray-200 rounded-full relative">
        <div
          className={`${getProgressColor(progress)} h-4 rounded-full transition-all duration-300`}
          style={{ width: `${progress}%` }}
        ></div>
        <p className="text-center absolute inset-0">{progress}%</p>
      </div>

      <button onClick={() => setProgress((prev) => Math.max(prev - 10, 0))}>
        -10%
      </button>
      <button onClick={() => setProgress((prev) => Math.min(prev + 10, 100))}>
        +10%
      </button>
    </div>
  );
}
