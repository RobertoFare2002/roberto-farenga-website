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

  // Check session on mount
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

      if (res.status === 401) {
        setError("Invalid access code.");
        return;
      }
      if (!res.ok) {
        setError("Server error.");
        return;
      }

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

      if (res.status === 401) {
        // Session expired — re-lock
        setSession("locked");
        return;
      }
      if (!res.ok) {
        return;
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank", "noopener,noreferrer");
      setTimeout(() => URL.revokeObjectURL(url), 60_000);
    } catch {
      // silent — user will retry
    } finally {
      setDownloadingFile(null);
    }
  }

  return (
    <section className="mt-12 max-w-3xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="title-serif text-lg font-semibold tracking-tight text-slate-900">
            Projects
          </h1>
          <p className="mt-4 text-sm text-slate-700">
            Selected projects and academic work. Files are available upon request.
          </p>
        </div>

        {session === "unlocked" && (
          <button
            type="button"
            onClick={handleLock}
            className="shrink-0 mt-1 text-[11px] text-slate-400 hover:text-slate-700 transition-colors underline"
          >
            Lock
          </button>
        )}
      </div>

      {/* Unlock form */}
      {session === "locked" && (
        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-medium text-slate-700 mb-3">
            Enter access code to view files
          </p>
          <form onSubmit={handleUnlock} className="flex gap-2">
            <input
              ref={inputRef}
              type="password"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Access code"
              className="flex-1 rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400 transition-colors bg-white"
            />
            <button
              type="submit"
              disabled={unlocking || !code}
              className="rounded-xl border border-slate-900 bg-slate-900 px-4 py-2 text-xs text-white hover:bg-slate-800 disabled:opacity-50 transition-colors"
            >
              {unlocking ? "…" : "Unlock"}
            </button>
          </form>
          {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
        </div>
      )}

      {session === "loading" && (
        <div className="mt-6 h-10 rounded-2xl bg-slate-100 animate-pulse w-64" />
      )}

      {/* Project list */}
      <section className="mt-10 space-y-10">
        {PROJECTS.map((p) => (
          <div key={p.title} className="border-b pb-8">
            <h2 className="text-sm font-medium text-slate-900">{p.title}</h2>

            <p className="mt-3 text-sm text-slate-700 leading-relaxed">{p.desc}</p>

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
                {session === "unlocked" ? (
                  <button
                    type="button"
                    onClick={() => handleDownload(p.file!)}
                    disabled={downloadingFile === p.file}
                    className="text-xs underline text-slate-700 hover:text-slate-900 disabled:opacity-50 transition-colors"
                  >
                    {downloadingFile === p.file ? "Opening…" : "View / Download →"}
                  </button>
                ) : (
                  <span className="text-xs text-slate-400">
                    🔒 Unlock to access
                  </span>
                )}
              </div>
            )}
          </div>
        ))}
      </section>
    </section>
  );
}
