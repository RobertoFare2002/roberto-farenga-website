import { cookies } from "next/headers";
import UnlockProjects from "./UnlockProjects";
import LockButton from "./LockButton";

export default async function ProjectsPage() {
  const cookieStore = await cookies();
  const access = cookieStore.get("projects_access")?.value === "1";

  if (!access) {
    return (
      <main>
        <div className="w-full max-w-6xl mx-auto px-6">
          <UnlockProjects />
        </div>
      </main>
    );
  }

  const PROJECTS = [
    {
      title: "DCF Valuation – Industrial Company",
      desc: "Full DCF with WACC, scenarios and sensitivity tables.",
      tags: ["Valuation", "DCF", "Excel"],
    },
    {
      title: "ALM & Treasury Analysis – Banking",
      desc: "Balance sheet structure, liquidity and funding analysis.",
      tags: ["ALM", "Banking", "Treasury"],
    },
  ];

  return (
    <main>
      <div className="w-full max-w-6xl mx-auto px-6">
        <section className="mt-12 max-w-2xl">
          <h1 className="title-serif text-lg font-semibold tracking-tight text-slate-900">
            Projects
          </h1>
          <p className="mt-4 text-sm text-slate-700">
            Selected projects (restricted access).
          </p>

          <LockButton />
        </section>

        <section className="mt-14 space-y-10">
          {PROJECTS.map((p) => (
            <div key={p.title} className="border-b pb-8">
              <h2 className="text-sm font-medium">{p.title}</h2>
              <p className="mt-3 max-w-3xl text-sm text-slate-700 leading-relaxed">
                {p.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 px-3 py-1 text-[11px] text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
