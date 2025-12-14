"use client";

export default function LockButton() {
  return (
    <button
      onClick={async () => {
        await fetch("/api/projects/lock", { method: "POST" });
        window.location.reload();
      }}
      className="mt-6 text-xs underline text-slate-600 hover:text-slate-900"
    >
      Lock page
    </button>
  );
}
