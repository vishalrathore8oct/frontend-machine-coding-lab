import "@styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRouter } from "./routes/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
);
