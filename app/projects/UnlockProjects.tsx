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
      .then((data) => setSession(data.unlocked ? "unlocked" : "locked"))
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
    } catch {
      setError("Network error.");
    } finally {
      setUnlocking(false);
    }
  }

  async function handleLock() {
    await fetch("/api/projects/lock", { method: "POST" });
    setSession("locked");
    setCode("");
    setError(null);
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
    } catch {
      // silent
    } finally {
      setDownloadingFile(null);
    }
  }

  return (
    <section className="mt-6 sm:mt-12 w-full max-w-2xl mx-auto px-2 sm:px-0">

      {/* Page header */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-[10px] tracking-[0.3em] font-semibold text-slate-400 uppercase">
            Portfolio
          </p>
          <h1 className="title-serif mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Projects
          </h1>
        </div>
        <span className="text-xs text-slate-400 mb-1">{PROJECTS.length} works</span>
      </div>

      <p className="mt-4 text-sm text-slate-600 leading-relaxed">
        Selected academic and professional work. Files are protected — request access below.
      </p>

      {/* Unlock / lock bar */}
      <div className="mt-6">
        {session === "loading" && (
          <div className="h-10 rounded-xl bg-slate-100 animate-pulse w-48" />
        )}

        {session === "locked" && (
          <form onSubmit={handleUnlock} className="flex items-center gap-2">
            <input
              ref={inputRef}
              type="password"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Access code"
              className="rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400 transition-colors w-40 sm:w-52"
            />
            <button
              type="submit"
              disabled={unlocking || !code}
              className="rounded-xl border border-slate-900 bg-slate-900 px-4 py-2 text-xs font-medium text-white hover:bg-slate-700 disabled:opacity-40 transition-colors"
            >
              {unlocking ? "…" : "Unlock files"}
            </button>
            {error && <p className="text-xs text-red-500">{error}</p>}
          </form>
        )}

        {session === "unlocked" && (
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs text-emerald-700 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
              Files unlocked
            </span>
            <button
              type="button"
              onClick={handleLock}
              className="text-xs text-slate-400 hover:text-slate-600 transition-colors underline underline-offset-2"
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
            className="rounded-2xl border border-slate-200 p-5 sm:p-6 hover:border-slate-300 hover:shadow-sm transition-all"
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-sm font-semibold text-slate-900 leading-snug">
                {p.title}
              </h2>
              <span className="shrink-0 text-[11px] text-slate-400 font-medium mt-0.5">
                {p.year}
              </span>
            </div>

            <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
              {p.desc}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] text-slate-600 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {p.file && (
              <div className="mt-4 pt-4 border-t border-slate-100">
                {session === "unlocked" ? (
                  <button
                    type="button"
                    onClick={() => handleDownload(p.file!)}
                    disabled={downloadingFile === p.file}
                    className="text-xs font-medium text-slate-700 hover:text-slate-900 disabled:opacity-50 transition-colors flex items-center gap-1"
                  >
                    {downloadingFile === p.file
                      ? "Opening…"
                      : "↓ View / Download PDF"}
                  </button>
                ) : (
                  <span className="text-xs text-slate-400">
                    — enter code above to access
                  </span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
