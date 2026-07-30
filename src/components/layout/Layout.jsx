import { Outlet, ScrollRestoration } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function Layout() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <Navbar />

      <main className="flex-1 pt-16">
        <Outlet />
      </main>

      <Footer />
      <ScrollRestoration />
    </div>
  );
}
