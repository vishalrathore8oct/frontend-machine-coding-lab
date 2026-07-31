import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function TemplateProject() {
  const [password, setPassword] = useState("");
  const [visibility, setVisibility] = useState(false);

  return (
    <div className="flex min-h-[400px] w-full items-center justify-center p-6 bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-sm flex flex-col items-center bg-slate-900/60 backdrop-blur-md border border-slate-800/80 p-8 rounded-2xl shadow-xl text-center">
        <h1 className="text-sm font-semibold tracking-wider uppercase text-indigo-400 mb-6">
          Toggle Password
        </h1>

        <div className="relative w-full mb-6">
          <input
            type={visibility ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-slate-950 text-slate-100 placeholder-slate-500 border border-slate-800 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
          />
          <button
            type="button"
            onClick={() => setVisibility((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition-colors focus:outline-none"
          >
            {visibility ? (
              <Eye className="w-5 h-5" />
            ) : (
              <EyeOff className="w-5 h-5" />
            )}
          </button>
        </div>

        <div className="w-full py-2.5 px-4 rounded-xl font-medium text-slate-400 bg-slate-950/40 border border-slate-800">
          Password: {visibility ? "Visible" : "Hidden"}
        </div>
      </div>
    </div>
  );
}
