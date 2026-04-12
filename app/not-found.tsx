import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <div className="w-full max-w-6xl mx-auto px-6">
        <section className="mt-20 text-center">
          <p className="text-[11px] tracking-widest text-slate-400 font-semibold">404</p>
          <h1 className="title-serif mt-3 text-xl font-semibold tracking-tight text-slate-900">
            Page not found
          </h1>
          <p className="mt-4 text-sm text-slate-600">
            This page does not exist or has been moved.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block rounded-2xl border border-slate-200 px-4 py-2 text-xs text-slate-900 hover:border-slate-300 hover:bg-slate-50 transition-colors"
          >
            ← Back to home
          </Link>
        </section>
      </div>
    </main>
  );
}
