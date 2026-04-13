import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="px-5 sm:px-16 pb-16">
      <div className="max-w-xl mx-auto">
        <section className="mt-10 sm:mt-14">
          <p className="text-[10px] tracking-[0.35em] text-[#c9a96e] font-semibold uppercase">
            Who I am
          </p>
          <h1 className="title-serif mt-3 text-4xl sm:text-5xl font-bold text-white tracking-tight">
            About
          </h1>
          <p className="mt-6 text-sm text-slate-400 leading-relaxed">
            {/* Add your bio here */}
          </p>
        </section>
      </div>
    </main>
  );
}
