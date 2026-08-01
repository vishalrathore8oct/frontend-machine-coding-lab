import { useState } from "react";

export default function TemplateProject() {
  const [maxLength, setMaxLength] = useState(50);
  const [currentLength, setCurrentLength] = useState(0);
  return (
    <div className="flex items-center justify-center py-12 px-4">
      <div>
        <h1>Character Count</h1>
        <p>Track your input length with live character warnings.</p>
        <div>
          <span>Max length:</span>
          <input
            type="number"
            min={0}
            className="w-full bg-slate-950 text-slate-100 "
            onChange={(e) => setMaxLength(e.target.value)}
          />
        </div>
        <textarea
          className="w-full bg-slate-950 text-slate-100 "
          onChange={(e) => setCurrentLength(e.target.value.length)}
          placeholder="Start Typing"
        ></textarea>
        <p>
          {currentLength}/{maxLength}
        </p>
        <p>
          {currentLength > maxLength
            ? `Limit exceeded by ${currentLength - maxLength} characters`
            : currentLength >= (maxLength * 90) / 100
              ? "You are close to the limit!"
              : ""}
        </p>
      </div>
    </div>
  );
}
