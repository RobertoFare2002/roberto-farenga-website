"use client";

import { useState } from "react";

type Project = {
  title: string;
  desc: string;
  tags: string[];
  file?: string; // nome file (es: "DCF_Datalogic.pdf")
  fileLabel?: string;
};

const PROJECTS: Project[] = [
  {
    title: "DCF Valuation – Datalogic S.p.A.",
    desc: "Full DCF with WACC, scenarios and sensitivity tables.",
    tags: ["Valuation", "DCF", "Excel"],
    file: "DCF_Datalogic.pdf",
    fileLabel: "View / Download",
  },
  {
    title: "Thesis – L’Evoluzione del Funding Bancario in Italia",
    desc: "Bachelor thesis analysing the evolution of bank funding structures in Italy, with focus on wholesale funding, deposits, regulatory changes and post-crisis dynamics.",
    tags: ["Banking", "Funding", "Regulation"],
    file: "TesiFunding.pdf",
    fileLabel: "View / Download",
  },
  {
    title: "Econometric Analysis – Leverage Effect on ISP",
    desc: "Empirical analysis of the leverage effect in equity markets, investigating the relationship between stock returns and volatility through econometric models, with application to Intesa Sanpaolo shares.",
    tags: ["Financial Econometrics", "Volatility", "Asset Pricing"],
    file: "LeverageEffectISP.pdf",
    fileLabel: "View / Download",
  },
  {
    title: "Econometric Analysis – Automobile Pricing Model",
    desc: "Econometric analysis of automobile prices using multivariate regression models to estimate the impact of technical characteristics, brand effects and market variables on pricing.",
    tags: ["Econometrics", "Regression", "Pricing"],
    file: "RegressionePrAuto.pdf",
    fileLabel: "View / Download",
  },
];

export default function UnlockProjects() {
  const [promptCode, setPromptCode] = useState("");
  const [isPromptOpen, setIsPromptOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function openPrompt(file: string) {
    setSelectedFile(file);
    setPromptCode("");
    setError(null);
    setIsPromptOpen(true);
  }

  function closePrompt() {
    setIsPromptOpen(false);
    setSelectedFile(null);
    setPromptCode("");
    setError(null);
    setLoading(false);
  }

  async function handleDownload(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedFile) return;

    setLoading(true);
    setError(null);

    const res = await fetch("/api/files", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ file: selectedFile, code: promptCode }),
    });

    setLoading(false);

    if (!res.ok) {
  let msg = "Request failed.";
  try {
    const data = await res.json();
    msg = data?.error || data?.message || msg;
  } catch {
    // ignore
  }

  if (res.status === 401) msg = "Invalid access code.";
  if (res.status === 404) msg = "File not found (check filename in private_files).";
  if (res.status === 500) msg = "Server error: missing env var or server misconfig.";

  setError(msg);
  return;
}


    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank", "noopener,noreferrer");
    setTimeout(() => URL.revokeObjectURL(url), 60_000);

    closePrompt();
  }

  return (
    <>
      <section className="mt-12 max-w-3xl">
        <h1 className="title-serif text-lg font-semibold tracking-tight text-slate-900">
          Projects
        </h1>

        <p className="mt-4 text-sm text-slate-700">
          Selected projects and academic work. Files are available upon request.
        </p>

        <section className="mt-10 space-y-10">
          {PROJECTS.map((p) => (
            <div key={p.title} className="border-b pb-8">
              <h2 className="text-sm font-medium text-slate-900">{p.title}</h2>

              <p className="mt-3 text-sm text-slate-700 leading-relaxed">
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

              {p.file && (
                <div className="mt-5">
                  <button
                    type="button"
                    onClick={() => openPrompt(p.file!)}
                    className="text-xs underline text-slate-700 hover:text-slate-900"
                  >
                    {p.fileLabel ?? "View / Download"} →
                  </button>
                </div>
              )}
            </div>
          ))}
        </section>
      </section>

      {/* Password prompt (modal leggero) */}
      {isPromptOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4">
          <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5 shadow-lg">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Access code required
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Enter the code to view/download this file.
                </p>
              </div>

              <button
                type="button"
                onClick={closePrompt}
                className="text-xs text-slate-600 hover:text-slate-900"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleDownload} className="mt-4">
              <input
                type="password"
                value={promptCode}
                onChange={(e) => setPromptCode(e.target.value)}
                placeholder="Access code"
                className="w-full rounded-2xl border border-slate-200 px-4 py-2 text-sm outline-none focus:border-slate-400"
                autoFocus
              />

              {error && <p className="mt-3 text-xs text-red-600">{error}</p>}

              <div className="mt-4 flex gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 rounded-2xl border border-slate-900 bg-slate-900 px-4 py-2 text-xs text-white hover:bg-slate-800 disabled:opacity-60"
                >
                  {loading ? "..." : "Unlock & Open"}
                </button>

                <button
                  type="button"
                  onClick={closePrompt}
                  className="rounded-2xl border border-slate-200 px-4 py-2 text-xs text-slate-700 hover:bg-slate-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
