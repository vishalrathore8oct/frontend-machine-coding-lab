import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function TemplateProject() {
  const [password, setPassword] = useState("");
  const [visibility, setVisibility] = useState(false);
  return (
    <div className="flex items-center justify-center py-12 px-4">
      <h1>Toggle Password</h1>
      <input
        type={visibility ? "text" : "password"}
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="bg-zinc-800 text-white"
      />
      <span onClick={() => setVisibility((prev) => !prev)}>
        {visibility ? <Eye /> : <EyeOff />}
      </span>
      <p>Password {visibility ? "Visible" : "Hidden"} </p>
    </div>
  );
}
