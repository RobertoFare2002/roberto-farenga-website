export default function CvPage() {
  return (
    <main>
      <div className="w-full max-w-6xl mx-auto px-6">
        {/* Header */}
        <section className="mt-12 max-w-2xl">
          <h1 className="title-serif text-lg font-semibold tracking-tight text-slate-900">
Curriculum Vitae</h1>
          <p className="mt-4 text-sm text-neutral-700">
            A concise overview of education, experience and skills.
          </p>

          <div className="mt-6">
            <a
              href="/cv.pdf"
              className="text-xs underline text-neutral-700"
            >
              Download PDF version →
            </a>
          </div>
        </section>

        {/* Education */}
        <section className="mt-14">
          <h2 className="text-sm font-medium">Education</h2>

          <div className="mt-6 border-b pb-6">
            <p className="text-sm font-medium">
              MSc Banking & Finance
            </p>
            <p className="mt-1 text-sm text-neutral-700">
              Università Cattolica del Sacro Cuore, Milan
            </p>
            <p className="mt-1 text-[11px] text-neutral-500">
              2024 – Present
            </p>
          </div>

          <div className="mt-6 border-b pb-6">
            <p className="text-sm font-medium">
              BSc Economics & Management
            </p>
            <p className="mt-1 text-sm text-neutral-700">
              Università degli Studi di Milano
            </p>
            <p className="mt-1 text-[11px] text-neutral-500">
              2021 – 2024
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="mt-14">
          <h2 className="text-sm font-medium">Experience</h2>

          <div className="mt-6 border-b pb-6">
            <p className="text-sm font-medium">
              Intesa Sanpaolo — Treasury / Asset Liability Management
            </p>
            <p className="mt-1 text-[11px] text-neutral-500">
              Internship • Milan
            </p>

            <ul className="mt-3 space-y-2 text-sm text-neutral-700 list-disc pl-4">
              <li>
                Support to treasury and ALM activities within a banking environment.
              </li>
              <li>
                Analysis of balance sheet structure, funding and liquidity metrics.
              </li>
              <li>
                Exposure to large-scale financing transactions and internal reporting.
              </li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section className="mt-14">
          <h2 className="text-sm font-medium">Skills</h2>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <p className="text-[11px] text-neutral-500 tracking-wide">
                FINANCE
              </p>
              <ul className="mt-3 space-y-1 text-sm text-neutral-700">
                <li>DCF Valuation</li>
                <li>Multiples</li>
                <li>Corporate Finance</li>
                <li>Banking & ALM</li>
              </ul>
            </div>

            <div>
              <p className="text-[11px] text-neutral-500 tracking-wide">
                TOOLS
              </p>
              <ul className="mt-3 space-y-1 text-sm text-neutral-700">
                <li>Excel</li>
                <li>PowerPoint</li>
                <li>Bloomberg Terminal</li>
                <li>Python, R</li>
              </ul>
            </div>

            <div>
              <p className="text-[11px] text-neutral-500 tracking-wide">
                LANGUAGES
              </p>
              <ul className="mt-3 space-y-1 text-sm text-neutral-700">
                <li>Italian — Native</li>
                <li>English — Fluent</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 border-t pt-6 text-[11px] text-neutral-500">
          © {new Date().getFullYear()} Roberto Farenga
        </footer>
      </div>
    </main>
  );
}
