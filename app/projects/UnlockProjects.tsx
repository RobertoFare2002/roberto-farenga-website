"use client";

import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "@/app/lib/projects-data";

type SessionState = "loading" | "locked" | "unlocked";

export default function UnlockProjects() {
  const [session, setSession] = useState<SessionState>("loading");
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [unlocking, setUnlocking] = useState(false);
  const [downloadingFile, setDownloadingFile] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch("/api/projects/unlock")
      .then((r) => r.json())
      .then((d) => setSession(d.unlocked ? "unlocked" : "locked"))
      .catch(() => setSession("locked"));
  }, []);

  async function handleUnlock(e: React.FormEvent) {
    e.preventDefault();
    setUnlocking(true);
    setError(null);
    try {
      const res = await fetch("/api/projects/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      if (res.status === 401) { setError("Invalid access code."); return; }
      if (!res.ok) { setError("Server error."); return; }
      setSession("unlocked");
      setCode("");
    } catch { setError("Network error."); }
    finally { setUnlocking(false); }
  }

  async function handleLock() {
    await fetch("/api/projects/lock", { method: "POST" });
    setSession("locked"); setCode(""); setError(null);
  }

  async function handleDownload(file: string) {
    setDownloadingFile(file);
    try {
      const res = await fetch("/api/files", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ file }),
      });
      if (res.status === 401) { setSession("locked"); return; }
      if (!res.ok) return;
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank", "noopener,noreferrer");
      setTimeout(() => URL.revokeObjectURL(url), 60_000);
    } catch { /* silent */ }
    finally { setDownloadingFile(null); }
  }

  return (
    <main className="px-5 sm:px-16 pb-16">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <section className="mt-10 sm:mt-14">
          <p className="text-[10px] tracking-[0.35em] text-[#c9a96e] font-semibold uppercase">
            Portfolio
          </p>
          <div className="flex items-end justify-between gap-4 mt-3">
            <h1 className="title-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Projects
            </h1>
            <span className="text-xs text-slate-600 mb-2">{PROJECTS.length} works</span>
          </div>
          <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-lg">
            Selected academic and professional work. Access the files below.
          </p>
        </section>

        {/* Access bar */}
        <div className="mt-8">
          {session === "loading" && (
            <div className="h-10 rounded-xl bg-white/[0.05] animate-pulse w-52" />
          )}
          {session === "locked" && (
            <form onSubmit={handleUnlock} className="flex items-center gap-2 flex-wrap">
              <input
                ref={inputRef}
                type="password"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Access code"
                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white outline-none focus:border-[#c9a96e]/50 transition-colors w-44 placeholder:text-slate-600"
              />
              <button
                type="submit"
                disabled={unlocking || !code}
                className="rounded-xl bg-[#c9a96e] px-5 py-2.5 text-xs font-semibold text-[#0a0f1c] hover:bg-[#d4b47e] disabled:opacity-40 transition-colors"
              >
                {unlocking ? "…" : "Unlock files"}
              </button>
              {error && <p className="text-xs text-red-400">{error}</p>}
            </form>
          )}
          {session === "unlocked" && (
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                Files unlocked
              </span>
              <button
                type="button"
                onClick={handleLock}
                className="text-xs text-slate-600 hover:text-slate-300 transition-colors underline underline-offset-2"
              >
                Lock
              </button>
            </div>
          )}
        </div>

        {/* Project cards */}
        <div className="mt-10 space-y-4">
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all hover:border-[#c9a96e]/20 hover:bg-white/[0.05]"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-sm font-semibold text-white leading-snug">{p.title}</h2>
                <span className="shrink-0 text-[11px] text-slate-600 font-medium mt-0.5">{p.year}</span>
              </div>

              <p className="mt-3 text-sm text-slate-400 leading-relaxed">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/[0.06] border border-white/[0.08] px-2.5 py-0.5 text-[11px] text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {p.file && (
                <div className="mt-5 pt-4 border-t border-white/[0.06]">
                  {session === "unlocked" ? (
                    <button
                      type="button"
                      onClick={() => handleDownload(p.file!)}
                      disabled={downloadingFile === p.file}
                      className="text-xs font-medium text-[#c9a96e] hover:text-[#d4b47e] disabled:opacity-40 transition-colors"
                    >
                      {downloadingFile === p.file ? "Opening…" : "↓ View / Download PDF"}
                    </button>
                  ) : (
                    <span className="text-xs text-slate-600">— enter code above to access</span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
