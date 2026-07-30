import { useState } from "react";

export default function TemplateProject() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="flex items-center justify-center py-12 px-4">
      <h1>Counter App</h1>
      <h4>Counter: {counter}</h4>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCounter((prev) => 0)}>Reset</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>Decerment</button>
    </div>
  );
}
