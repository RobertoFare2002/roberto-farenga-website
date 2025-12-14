"use client";

import { useState } from "react";

export default function UnlockProjects() {
  const [code, setCode] = useState("");
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

    window.location.reload();
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
