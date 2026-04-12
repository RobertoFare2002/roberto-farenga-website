import type { Metadata } from "next";
import UnlockProjects from "./UnlockProjects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects and academic work by Roberto Farenga.",
};

export default function ProjectsPage() {
  return (
    <main>
      <div className="w-full max-w-6xl mx-auto px-6">
        <UnlockProjects />
      </div>
    </main>
  );
}
