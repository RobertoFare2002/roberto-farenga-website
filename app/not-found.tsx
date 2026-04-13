import Link from "next/link";

export default function NotFound() {
  return (
    <main className="px-5 sm:px-16 pb-16">
      <div className="max-w-lg mx-auto">
        <section className="mt-20 sm:mt-32 text-center">
          <p className="text-[10px] tracking-[0.4em] text-[#c9a96e] font-semibold uppercase">
            404
          </p>
          <h1 className="title-serif mt-4 text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Page not found
          </h1>
          <p className="mt-5 text-sm text-slate-500">
            This page does not exist or has been moved.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block rounded-full border border-white/15 px-6 py-3 text-xs font-medium text-slate-300 hover:border-[#c9a96e]/40 hover:text-[#c9a96e] transition-all"
          >
            ← Back to home
          </Link>
        </section>
      </div>
    </main>
  );
}
