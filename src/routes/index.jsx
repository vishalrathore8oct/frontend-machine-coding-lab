import { Layout } from "@components/layout/Layout";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ── Pages (eager loaded — they're tiny shells) ───────────────────────────────
import About from "@pages/About";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import Projects from "@pages/Projects";

// ── ProjectDetail is lazy because it lazy-loads each project internally ───────
const ProjectDetail = lazy(() => import("@pages/ProjectDetail"));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-6 h-6 rounded-full border-2 border-violet-500 border-t-transparent animate-spin" />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/:slug",
        element: (
          <Suspense fallback={<PageLoader />}>
            <ProjectDetail />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "404",
        element: <NotFound />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
