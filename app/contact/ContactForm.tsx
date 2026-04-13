"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const inputCls =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none focus:border-[#c9a96e]/50 transition-colors placeholder:text-slate-600";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }
      setStatus("sent");
      setName(""); setEmail(""); setMessage("");
    } catch {
      setErrorMsg("Network error. Try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-6 py-10 text-center">
        <p className="text-sm font-semibold text-emerald-400">Message sent.</p>
        <p className="mt-1.5 text-xs text-emerald-600">I&apos;ll get back to you soon.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-xs text-emerald-500 hover:text-emerald-300 underline underline-offset-2 transition-colors"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-medium text-slate-500 mb-2">Name</label>
          <input
            type="text" required value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={inputCls}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-500 mb-2">Email</label>
          <input
            type="email" required value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className={inputCls}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-500 mb-2">Message</label>
        <textarea
          required value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message…"
          rows={5}
          className={`${inputCls} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-xs text-red-400">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-[#c9a96e] px-7 py-3 text-xs font-semibold text-[#0a0f1c] hover:bg-[#d4b47e] disabled:opacity-50 active:scale-95 transition-all"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
