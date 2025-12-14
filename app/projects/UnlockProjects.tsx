"use client";

import { useState } from "react";

const PROJECTS = [
  {
    title: "DCF Valuation – Datalogic S.p.A.",
    desc: "Full DCF with WACC, scenarios and sensitivity tables.",
    tags: ["Valuation", "DCF", "Excel"],
    file: "/DCF_Datalogic.pdf",
    fileLabel: "View / Download",
  },
  {
    title: "Thesis - L’Evoluzione del Funding Bancario in Italia",
    desc: "Bachelor thesis analysing the evolution of bank funding structures in Italy, with focus on wholesale funding, deposits, regulatory changes and post-crisis dynamics.",
    tags: ["Banking", "Funding", "Regulation"],
    file: "/TesiFunding.pdf",
    fileLabel: "View / Download",
  },
  {
    title: "Econometric Analisys - Leverage Effect on ISP",
     desc: "Empirical analysis of the leverage effect in equity markets, investigating the relationship between stock returns and volatility through econometric models, with application to Intesa Sanpaolo shares.",
  tags: ["Financial Econometrics", "Volatility", "Asset Pricing"],
    file: "/LeverageEffectISP.pdf",
    fileLabel: "View / Download",
  },
  {
  title: "Econometric Analisys - Automobile Pricing Model",
  desc: "Econometric analysis of automobile prices using multivariate regression models to estimate the impact of technical characteristics, brand effects and market variables on pricing.",
  tags: ["Econometrics", "Regression", "Pricing"],
  file: "/RegressionePrAuto.pdf",
  fileLabel: "View / Download",
},

];


export default function UnlockProjects() {
  const [code, setCode] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const res = await fetch("/api/projects/unlock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });

    setLoading(false);

    if (!res.ok) {
      setError("Invalid access code.");
      return;
    }

    setUnlocked(true);
  }

  if (unlocked) {
  return (
    <section className="mt-12 max-w-3xl">
      <h1 className="title-serif text-lg font-semibold tracking-tight text-slate-900">
        Projects
      </h1>

      <p className="mt-4 text-sm text-slate-700">
        Selected projects (restricted access).
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

            {/* ✅ Link sotto al progetto */}
            {p.file && (
              <div className="mt-5">
                <a
                  href={p.file}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs underline text-slate-700 hover:text-slate-900"
                >
                  {p.fileLabel ?? "View / Download"} →
                </a>
              </div>
            )}
          </div>
        ))}
      </section>
    </section>
  );
}



  return (
    <section className="mt-20 max-w-xl">
      <h1 className="title-serif text-lg font-semibold tracking-tight text-slate-900">
        Projects
      </h1>

      <p className="mt-6 text-sm text-slate-700 leading-relaxed">
        Access to selected projects is restricted. Please enter the access code.
      </p>

      <form onSubmit={onSubmit} className="mt-6 flex gap-3">
        <input
          type="password"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Access code"
          className="w-full rounded-2xl border border-slate-200 px-4 py-2 text-sm outline-none focus:border-slate-400"
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-2xl border border-slate-900 bg-slate-900 px-4 py-2 text-xs text-white hover:bg-slate-800 disabled:opacity-60"
        >
          {loading ? "..." : "Unlock"}
        </button>
      </form>

      {error && <p className="mt-3 text-xs text-red-600">{error}</p>}
    </section>
  );
}
