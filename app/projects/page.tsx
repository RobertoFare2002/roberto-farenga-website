import Link from "next/link";

type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

const PROJECTS: Project[] = [
  {
    title: "DCF Valuation – Datalogic",
    description:
      "Full discounted cash flow valuation with scenario analysis, WACC estimation and sensitivity tables.",
    tags: ["Valuation", "DCF", "Excel"],
    link: "/DCF_Datalogic.pdf",
  },
  {
    title: "Leverage Effect nel Mercato Azionario - Il caso ISP",
    description:
      "Quantitative analysis using financial datasets, regression models and interpretation of results.",
    tags: ["Research", "Econometrics", "Python"],
    link: "/LeverageEffectISP.pdf",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <div className="w-full max-w-6xl mx-auto px-6">
        {/* Header */}
        <section className="mt-12 max-w-2xl">
          <h1 className="text-lg font-medium tracking-tight">Projects</h1>
          <p className="mt-4 text-sm text-neutral-700">
            A selection of academic and practical projects focused on finance,
            valuation and data-driven analysis.
          </p>
        </section>

        {/* Project list */}
        <section className="mt-14 space-y-10">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="border-b pb-8"
            >
              <h2 className="text-sm font-medium">
                {project.title}
              </h2>

              <p className="mt-3 max-w-3xl text-sm text-neutral-700 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-3 py-1 text-[11px] text-neutral-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.link && (
                <Link
                  href={project.link}
                  className="mt-4 inline-block text-xs underline text-neutral-700"
                >
                  View details →
                </Link>
              )}
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="mt-20 border-t pt-6 text-[11px] text-neutral-500">
          © {new Date().getFullYear()} Roberto Farenga
        </footer>
      </div>
    </main>
  );
}
